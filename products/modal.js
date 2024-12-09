
const products = [
    {
        id: 1,
        title: "ASUS GT 1030",
        image: "products/gt1030.png",
        description: "Upgrade your PC with the reliable ASUS GT 1030, designed for smooth HD gaming and efficient multitasking. Ideal for budget-conscious gamers and multimedia enthusiasts!",
        specs: [
            "Graphics Engine: NVIDIA GeForce GT 1030",
            "Video Memory: 2GB GDDR5",
            "Base Clock: 1227 MHz (Boost Clock: 1468 MHz)",
            "Memory Interface: 64-bit",
            "Ports: HDMI 2.0, DVI-D",
            "Cooling: Silent fanless design",
            "Power Consumption: Low power, no additional PCIe power required",
            "Form Factor: Compact design, suitable for small builds"
        ],
        price: "₱3,000"
    },
    {
        id: 2,
        title: "Razer Orochi V2",
        image: "/products/products/OIP (1).jpg",
        description: "Level up your gaming and productivity with the Razer Orochi V2, a lightweight and portable wireless mouse designed for gamers and professionals on the go.",
        specs: [
            "Wireless: Yes",
            "Battery Life: Long lasting",
            "Sensor: High precision",
            "Latency: Ultra-low"
        ],
        price: "₱2,500"
    },
    {
        id: 3,
        title: "Rakk Dasig Wireless",
        image: "/products/products/R.jpg",
        description: "The Rakk Dasig Wireless Gaming Mouse is designed to give gamers the ultimate combination of performance, comfort, and flexibility. Built for precision and speed, this mouse is packed with high-end features to enhance your gaming experience, while its wireless functionality offers freedom from cords without compromising on performance.",
        specs: [
            "Wireless: Yes",
            "Sensor: Optical",
            "Buttons: 6 programmable buttons",
            "Battery: Long battery life"
        ],
        price: "₱1,000"
    },
    {
        id: 4,
        title: "Red Dragon Zeus 2",
        image: "/products/products/OIP.jpg",
        description: "The Red Dragon Zeus 2 is a high-performance, wired gaming mouse engineered for gamers who demand precision, speed, and customization. With its ultra-responsive optical sensor, customizable RGB lighting, and ergonomic design, the Zeus 2 is built for comfort during those long gaming sessions, giving you an edge over your competition.",
        specs: [
            "Wired: Yes",
            "RGB Lighting: Yes",
            "Sensor: Optical",
            "Buttons: 8 programmable buttons"
        ],
        price: "₱2,500"
    },
    {
        id: 5,
        title: "Gamaxx Ag300",
        image: "/products/products/02.jpg",
        description: "The GAMAXX AG300 is a powerful and efficient CPU air cooler designed for both casual and high-performance PC builds. With its superior cooling capacity and sleek design, it ensures your processor remains cool under intense workloads or gaming marathons. Ideal for gamers, content creators, and PC enthusiasts, the GAMAXX AG300 delivers a perfect balance of performance and reliability.",
        specs: [
            "Cooling Type: Air",
            "Compatibility: Supports most Intel and AMD processors",
            "Fan Speed: Adjustable fan speed",
            "Noise Level: Low"
        ],
        price: "₱800"
    },
    {
        id: 6,
        title: "Honor Pad X8 Pro 3",
        image: "/products/products/honor-pad-x8-pro-3.jpg",
        description: "The Honor Pad X8 Pro 3 delivers a seamless balance of performance, portability, and affordability. Whether you’re watching movies, gaming, or working on the go, this tablet is the perfect companion for your digital lifestyle.",
        specs: [
            "Display: 11.5 Inch OLED display",
            "Processor: Mediatek Helio G99 (Octacore, up to 2.2 Ghz)",
            "Camera: 8MP with Autofocus rear camera, 5MP front camera",
            "Battery: 7,250mAh, 22.5W Fast Charging"
        ],
        price: "₱12,500"
    },
    {
        id: 7,
        title: "iPhone SE (3rd Gen)",
        image: "/products/products/Iphone.jpg",
        description: "The iPhone SE (3rd Gen) is a powerful compact smartphone that combines the classic iPhone design with the latest Apple technology. Designed for users who value efficiency, portability, and performance, it offers incredible speed, advanced camera capabilities, and exceptional durability, all at a more affordable price point.",
        specs: [
            "Display: Retina HD Display (4.7 inches)",
            "Processor: Apple A15 Bionic (6-core CPU)",
            "Camera: 12MP Rear, 7MP Front",
            "Battery: 2,018mAh, 22.5W Fast Charging"
        ],
        price: "₱15,000"
    },
    {
        id: 8,
        title: "Magegee TS91 2",
        image: "/products/products/magegee.jpg",
        description: "The MageGee TS91 Mechanical Keyboard combines durability, tactile feedback, and customizable RGB lighting, making it an excellent choice for gamers and professionals. Its affordability ensures premium features are accessible without compromising on performance.",
        specs: [
            "Switch Type: Mechanical",
            "RGB Lighting: Yes",
            "Connectivity: Wired",
            "Key Rollover: N-Key Rollover"
        ],
        price: "₱2,000"
    },
    {
        id: 9,
        title: "Lexar Thor 8 GB",
        image: "/products/products/lexar-thor-8-gb.jpg",
        description: "The Lexar Thor 8GB DDR4 RAM is engineered for speed, reliability, and performance, making it the perfect choice for gamers, content creators, and professionals looking to optimize their systems.",
        specs: [
            "Capacity: 8 GB",
            "Type: DDR4",
            "Speed: 3200 MHz",
            "Form Factor: DIMM"
        ],
        price: "₱1,500"
    },
    {
        id: 10,
        title: "Apple AirPods (2nd Generation)",
        image: "/products/products/APPLE-AIRPODS-2ND-GEN-3.jpg",
        description: "Experience premium sound and unmatched convenience with the Apple AirPods (2nd Generation). Designed for the modern lifestyle, these earbuds combine advanced technology, superior audio quality, and effortless integration into the Apple ecosystem.",
        specs: [
            "Sound: High-Quality Audio",
            "Connectivity: H1 Chip for Faster Pairing",
            "Battery Life: 5 hours listening time",
            "Device Switching: Automatic"
        ],
        price: "₱2,500"
    }
];
function openModal(productId) {
    const modal = document.getElementById('productModal');
    const product = products.find(p => p.id === productId);

    if (!product) {
        console.error(`Product with ID ${productId} not found.`);
        return;
    }

    // Set modal content
    document.getElementById('modal-title').innerText = product.title;
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-description').innerText = product.description;

    // Populate specs
    const specsList = document.getElementById('modal-specs');
    specsList.innerHTML = ''; 
    product.specs.forEach(spec => {
        const li = document.createElement('li');
        li.innerText = spec;
        specsList.appendChild(li);
    });

    // Show the modal
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}





