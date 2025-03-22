document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".sliderWrapper");
    const menuItems = document.querySelectorAll(".menuitem");

    const currentProductImg = document.querySelector(".productImg");
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductColors = document.querySelectorAll(".color");
    const currentProductSizes = document.querySelectorAll(".size");
    const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    const products = [
        {
            id: 1,
            title: "Air Force",
            price: 3000,
            colors: [
                { code: "black", img: "./images/air(1).png" },
                { code: "darkblue", img: "./images/air2(1).png" },
            ],
        },
        {
            id: 2,
            title: " Jordan",
            price: 3500,
            colors: [
                { code: "lightgray", img: "./images/jordan(1).png" },
                { code: "green", img: "./images/jordan2(1).png" },
            ],
        },
        {
            id: 3,
            title: "Blazer",
            price: 6000,
            colors: [
                { code: "lightgray", img: "./images/blazer(1).png" },
                { code: "green", img: "./images/blazer2(1).png" },
            ],
        },
        {
            id: 4,
            title: "Crater",
            price: 4500,
            colors: [
                { code: "black", img: "./images/crater(1).png" },
                { code: "lightgray", img: "./images/crater2(1).png" },
            ],
        },
        {
            id: 5,
            title: "Hippie",
            price: 8000,
            colors: [
                { code: "gray", img: "./images/hippie(1).png" },
                { code: "black", img: "./images/hippie2(1).png" },
            ],
        },
    ];

    let chosenProduct = products[0]; // Default product

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            wrapper.style.transform = `translateX(${-100 * index}vw)`;
            wrapper.style.transition = "transform 0.5s ease-in-out";

            chosenProduct = products[index];

            currentProductTitle.textContent = chosenProduct.title;
            currentProductPrice.textContent = "Rs" + chosenProduct.price;
            currentProductImg.src = chosenProduct.colors[0].img;

            currentProductColors.forEach((color, colorIndex) => {
                if (chosenProduct.colors[colorIndex]) {
                    color.style.backgroundColor = chosenProduct.colors[colorIndex].code;
                    
                color.addEventListener("click", () => {
                    currentProductImg.src = chosenProduct.colors[colorIndex].img;
                });
            } else {
                color.style.backgroundColor = "transparent"; 
            }
            });
    
        });
    });

    // Size selection logic
    currentProductSizes.forEach((size) => {
        size.addEventListener("click", () => {
            // Reset all sizes
            currentProductSizes.forEach((s) => {
                s.style.backgroundColor = "white";
                s.style.color = "black";
                s.style.border = "1px solid black";
            });

            // Highlight the selected size
            size.style.backgroundColor = "white";
            size.style.color = "black";
            size.style.border = "2px solid black";
        });
    });

    // Show payment popup on button click
    productButton.addEventListener("click", () => {
        payment.style.display = "flex";
    });

    // Hide payment popup on close button click
    close.addEventListener("click", () => {
        payment.style.display = "none";
    });
});
