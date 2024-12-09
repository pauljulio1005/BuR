let cart = [];

// Add to Cart Function
function addToCart(productId, title, price) {
  const numericPrice = parseFloat(price);

  if (isNaN(numericPrice)) {
    console.error(`Invalid price for product ID ${productId}: ${price}`);
    return;
  }

  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: productId,
      title: title,
      price: numericPrice,
      quantity: 1,
    });
  }

  updateCartCount();
  updateCartDisplay();
}

// Remove from Cart Function
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  updateCartDisplay();
}

// Update Cart Count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length || 0;
  }
}

// Update Cart Display
function updateCartDisplay() {
  const cartItemsList = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("cart-total");

  if (cartItemsList && totalPriceElement) {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        ${item.title} - ₱${item.price.toFixed(2)} x ${item.quantity}
        <button class="remove-item" data-id="${item.id}">Remove</button>
      `;
      cartItemsList.appendChild(listItem);

      total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: ₱${total.toFixed(2)}`;

    // Add event listeners to "Remove" buttons
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", function () {
        const productId = this.getAttribute("data-id");
        removeFromCart(productId);
      });
    });
  }
}

// Event Listener for Add to Cart Buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function (event) {
    const productId = this.getAttribute("data-id");
    const title = this.getAttribute("data-title");
    const price = this.getAttribute("data-price");

    addToCart(productId, title, price);
    event.stopPropagation();
  });
});

// Checkout Functionality
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Save the cart to localStorage before navigating to the checkout page
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "/Checkout/checkout.html";
}

document.getElementById("checkout-button").addEventListener("click", checkout);
