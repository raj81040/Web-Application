let cart = [];
let totalPrice = 0;

function updateCart() {
  const cartPanel = document.getElementById("cartPanel");
  cartPanel.innerHTML = "<h3>Your Cart</h3>";

  if (cart.length === 0) {
    cartPanel.innerHTML += "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      cartPanel.innerHTML += `
        <div class="cart-item">
          <h4>${item.name}</h4>
          <p>${item.price}</p>
          <button class="remove-from-cart" data-index="${index}">Remove</button>
        </div>
      `;
    });
  }

  cartPanel.innerHTML += `<h4>Total Price: $${totalPrice.toFixed(2)}</h4>`;

  const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
  removeFromCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      const item = cart[index];
      cart.splice(index, 1);
      totalPrice -= parseFloat(item.price.slice(1));
      updateCart();
    });
  });
}

document.getElementById("clothButton").addEventListener("click", function () {
  const middlePanel = document.getElementById("middlePanel");

  middlePanel.innerHTML = "<h2>Choose Your Product</h2>";

  const clothItems = [
    {
      name: "Cotton Shirt",
      price: "$20",
      description: "A comfortable cotton shirt perfect for daily wear.",
      image: "cotton_shirt.jpg",
    },
    {
      name: "Denim Jeans",
      price: "$30",
      description: "Stylish denim jeans for a casual look.",
      image: "cloth2.jpg",
    },
    {
      name: "Wool Sweater",
      price: "$40",
      description: "Warm wool sweater to keep you cozy in the winter.",
      image: "cloth3.jpg",
    },
  ];

  clothItems.forEach((item) => {
    const itemBox = document.createElement("div");
    itemBox.classList.add("cloth-item");

    itemBox.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="details">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">${item.price}</p>
          <button class="add-btn">Add</button>
      </div>
    `;

    middlePanel.appendChild(itemBox);

    const addButton = itemBox.querySelector(".add-btn");
    addButton.addEventListener("click", () => {
      cart.push(item);
      totalPrice += parseFloat(item.price.slice(1));
      updateCart();
    });
  });
});

document.getElementById("shoesButton").addEventListener("click", function () {
  const middlePanel = document.getElementById("middlePanel");

  middlePanel.innerHTML = "<h2>Choose Your Product</h2>";

  const shoesItems = [
    {
      name: "Running Shoes",
      price: "$50",
      description: "Perfect for running and outdoor activities.",
      image: "shoes1.jpg",
    },
    {
      name: "Leather Boots",
      price: "$80",
      description: "Stylish leather boots for formal wear.",
      image: "shoes2.jpg",
    },
    {
      name: "Sneakers",
      price: "$60",
      description: "Comfortable sneakers for everyday wear.",
      image: "shoes3.jpg",
    },
  ];

  shoesItems.forEach((item) => {
    const itemBox = document.createElement("div");
    itemBox.classList.add("cloth-item");

    itemBox.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="details">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">${item.price}</p>
          <button class="add-btn">Add</button>
      </div>
    `;

    middlePanel.appendChild(itemBox);

    const addButton = itemBox.querySelector(".add-btn");
    addButton.addEventListener("click", () => {
      cart.push(item);
      totalPrice += parseFloat(item.price.slice(1));
      updateCart();
    });
  });
});

document
  .getElementById("electronButton")
  .addEventListener("click", function () {
    const middlePanel = document.getElementById("middlePanel");

    middlePanel.innerHTML = "<h2>Choose Your Product</h2>";

    const electronicsItems = [
      {
        name: "Smartphone",
        price: "$300",
        description: "Latest smartphone with high-end features.",
        image: "electron1.jpg",
      },
      {
        name: "Laptop",
        price: "$800",
        description: "Powerful laptop for work and gaming.",
        image: "electron2.jpg",
      },
      {
        name: "Headphones",
        price: "$100",
        description: "Noise-cancelling headphones for immersive audio.",
        image: "electron3.jpg",
      },
    ];

    electronicsItems.forEach((item) => {
      const itemBox = document.createElement("div");
      itemBox.classList.add("cloth-item");

      itemBox.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="details">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">${item.price}</p>
          <button class="add-btn">Add</button>
      </div>
    `;

      middlePanel.appendChild(itemBox);

      const addButton = itemBox.querySelector(".add-btn");
      addButton.addEventListener("click", () => {
        cart.push(item);
        totalPrice += parseFloat(item.price.slice(1));
        updateCart();
      });
    });
  });

function adjustPageWidth() {
  const width = window.innerWidth;

  if (width >= 992 && width <= 1600) {
    document.body.style.transform = "scale(0.9)";
    document.body.style.transformOrigin = "top center";
  } else if (width >= 700 && width <= 767) {
    document.body.style.transform = "scale(0.8)";
    document.body.style.transformOrigin = "top center";
  } else if (width >= 600 && width <= 700) {
    document.body.style.transform = "scale(0.75)";
    document.body.style.transformOrigin = "top center";
  } else if (width <= 600) {
    document.body.style.transform = "scale(0.5)";
    document.body.style.transformOrigin = "top center";
  } else {
    document.body.style.transform = "scale(1)";
  }
}

window.addEventListener("resize", adjustPageWidth);

adjustPageWidth();
