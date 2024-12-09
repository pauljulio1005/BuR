document.addEventListener("DOMContentLoaded", function () {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsContainer = document.getElementById("checkout-items-container");
    const totalContainer = document.getElementById("checkout-total");
  
    let totalAmount = 0;
  
    if (cartData.length === 0) {
        itemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartData.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.textContent = `${item.title} - ₱${item.price.toFixed(2)} x ${item.quantity} = ₱${(item.price * item.quantity).toFixed(2)}`;
            itemsContainer.appendChild(itemElement);
            totalAmount += item.price * item.quantity;
        });
        totalContainer.textContent = `Total: ₱${totalAmount.toFixed(2)}`;
    }
});

