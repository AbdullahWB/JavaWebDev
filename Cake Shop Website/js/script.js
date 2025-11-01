// Sweet Delights Bakery - JavaScript Functionality

// Product Data
const products = [
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    price: 42.99,
    category: "birthday",
    rating: 4.5,
    image: "images/cake1.jpg",
    description: "Rich chocolate cake with fudge frosting",
    featured: true,
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    price: 38.99,
    category: "wedding",
    rating: 4.8,
    image: "images/cake2.jpg",
    description: "Classic red velvet with cream cheese frosting",
    featured: true,
  },
  {
    id: 3,
    name: "Strawberry Shortcake",
    price: 35.99,
    category: "seasonal",
    rating: 4.3,
    image: "images/cake3.jpg",
    description: "Light sponge cake with fresh strawberries",
    featured: true,
  },
  {
    id: 4,
    name: "Carrot Cake",
    price: 36.99,
    category: "custom",
    rating: 4.6,
    image: "images/cake4.jpg",
    description: "Moist carrot cake with cream cheese frosting",
    featured: false,
  },
  {
    id: 5,
    name: "Lemon Drizzle Cake",
    price: 32.99,
    category: "birthday",
    rating: 4.4,
    image: "images/cake5.jpg",
    description: "Zesty lemon cake with lemon glaze",
    featured: false,
  },
  {
    id: 6,
    name: "Black Forest Cake",
    price: 45.99,
    category: "wedding",
    rating: 4.7,
    image: "images/cake6.jpg",
    description: "Chocolate cake with cherries and cream",
    featured: false,
  },
  {
    id: 7,
    name: "Vanilla Bean Cake",
    price: 34.99,
    category: "custom",
    rating: 4.2,
    image: "images/cake7.jpg",
    description: "Classic vanilla cake with buttercream",
    featured: false,
  },
  {
    id: 8,
    name: "Tiramisu Cake",
    price: 39.99,
    category: "seasonal",
    rating: 4.9,
    image: "images/cake8.jpg",
    description: "Coffee-flavored Italian dessert cake",
    featured: false,
  },
];

// Cart Management
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Initialize the website
document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();

  // Load featured products on homepage
  if (document.getElementById("featured-products")) {
    loadFeaturedProducts();
  }

  // Load all products on shop page
  if (document.getElementById("product-grid")) {
    loadProducts();
    setupFilters();
  }

  // Setup product detail page
  if (document.getElementById("product-title")) {
    setupProductDetail();
  }

  // Setup cart page
  if (document.getElementById("cart-items")) {
    loadCart();
    setupCartInteractions();
  }

  // Setup contact form
  if (document.getElementById("contact-form")) {
    setupContactForm();
  }

  // Setup newsletter form
  if (document.getElementById("newsletter-form")) {
    setupNewsletterForm();
  }

  // Set minimum delivery date to tomorrow
  const deliveryDate = document.getElementById("delivery-date");
  if (deliveryDate) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    deliveryDate.min = tomorrow.toISOString().split("T")[0];
  }
});

// Update cart count in navigation
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

// Load featured products on homepage
function loadFeaturedProducts() {
  const featuredContainer = document.getElementById("featured-products");
  const featuredProducts = products.filter((product) => product.featured);

  featuredProducts.forEach((product) => {
    const productHTML = `
            <div class="col-md-6 col-lg-3">
                <div class="card product-card shadow-sm h-100">
                    <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${
                          product.description
                        }</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 text-primary mb-0">$${product.price.toFixed(
                              2
                            )}</span>
                            <button class="btn btn-primary btn-sm add-to-cart" data-id="${
                              product.id
                            }">
                                <i class="fas fa-shopping-cart me-1"></i>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    featuredContainer.innerHTML += productHTML;
  });

  // Add event listeners to add-to-cart buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      addToCart(productId);
    });
  });
}

// Load all products on shop page
function loadProducts(filteredProducts = products) {
  const productGrid = document.getElementById("product-grid");
  const productCount = document.getElementById("product-count");

  productGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    productGrid.innerHTML =
      '<div class="col-12 text-center py-5"><h4>No products match your filters</h4><p>Try adjusting your filters to see more results.</p></div>';
    productCount.textContent = "Showing 0 products";
    return;
  }

  productCount.textContent = `Showing ${filteredProducts.length} products`;

  filteredProducts.forEach((product) => {
    const productHTML = `
            <div class="col-md-6 col-lg-4">
                <div class="card product-card shadow-sm h-100">
                    <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${
                          product.description
                        }</p>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <div class="text-warning">
                                ${generateStarRating(product.rating)}
                            </div>
                            <span class="badge bg-primary">${
                              product.category
                            }</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 text-primary mb-0">$${product.price.toFixed(
                              2
                            )}</span>
                            <a href="product-detail.html?id=${
                              product.id
                            }" class="btn btn-primary btn-sm">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    productGrid.innerHTML += productHTML;
  });
}

// Generate star rating HTML
function generateStarRating(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }

  return stars;
}

// Setup filters on shop page
function setupFilters() {
  const categoryFilters = document.querySelectorAll(".filter-category");
  const priceFilters = document.querySelectorAll(".filter-price");
  const ratingFilters = document.querySelectorAll(".filter-rating");
  const sortSelect = document.getElementById("sort-select");

  // Apply filters when any filter changes
  const applyFilters = () => {
    const selectedCategories = Array.from(categoryFilters)
      .filter((filter) => filter.checked)
      .map((filter) => filter.value);

    const selectedPrices = Array.from(priceFilters)
      .filter((filter) => filter.checked)
      .map((filter) => filter.value);

    const selectedRatings = Array.from(ratingFilters)
      .filter((filter) => filter.checked)
      .map((filter) => parseInt(filter.value));

    let filteredProducts = products;

    // Apply category filters
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Apply price filters
    if (selectedPrices.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return selectedPrices.some((priceRange) => {
          if (priceRange === "0-25") return product.price < 25;
          if (priceRange === "25-50")
            return product.price >= 25 && product.price < 50;
          if (priceRange === "50-100")
            return product.price >= 50 && product.price < 100;
          if (priceRange === "100+") return product.price >= 100;
          return false;
        });
      });
    }

    // Apply rating filters
    if (selectedRatings.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedRatings.some((rating) => product.rating >= rating)
      );
    }

    // Apply sorting
    const sortValue = sortSelect.value;
    filteredProducts = sortProducts(filteredProducts, sortValue);

    loadProducts(filteredProducts);
  };

  // Add event listeners to filters
  categoryFilters.forEach((filter) => {
    filter.addEventListener("change", applyFilters);
  });

  priceFilters.forEach((filter) => {
    filter.addEventListener("change", applyFilters);
  });

  ratingFilters.forEach((filter) => {
    filter.addEventListener("change", applyFilters);
  });

  sortSelect.addEventListener("change", applyFilters);
}

// Sort products based on selected option
function sortProducts(products, sortBy) {
  switch (sortBy) {
    case "price-low":
      return [...products].sort((a, b) => a.price - b.price);
    case "price-high":
      return [...products].sort((a, b) => b.price - a.price);
    case "name":
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    case "rating":
      return [...products].sort((a, b) => b.rating - a.rating);
    default:
      return products;
  }
}

// Setup product detail page
function setupProductDetail() {
  // Get product ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id")) || 1;

  // Find product by ID
  const product = products.find((p) => p.id === productId);

  if (product) {
    // Update page content with product details
    document.getElementById("product-title").textContent = product.name;
    document.getElementById(
      "product-price"
    ).textContent = `$${product.price.toFixed(2)}`;
    document.getElementById("product-description").textContent =
      product.description;
    document.getElementById("product-category").textContent =
      product.category.charAt(0).toUpperCase() +
      product.category.slice(1) +
      " Cakes";
    document.getElementById("product-sku").textContent = `CAKE-${product.id
      .toString()
      .padStart(3, "0")}`;
    document.getElementById("product-breadcrumb").textContent = product.name;
    document.getElementById("main-image").src = product.image;
    document.getElementById("main-image").alt = product.name;

    // Update thumbnail images
    document
      .querySelectorAll(".product-image-thumbnails img")
      .forEach((img, index) => {
        if (index === 0) {
          img.src = product.image;
          img.alt = product.name;
        }
      });

    // Setup quantity controls
    const quantityInput = document.getElementById("quantity");
    const decreaseBtn = document.getElementById("decrease-qty");
    const increaseBtn = document.getElementById("increase-qty");

    decreaseBtn.addEventListener("click", () => {
      if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
      }
    });

    increaseBtn.addEventListener("click", () => {
      if (quantityInput.value < 10) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
      }
    });

    // Setup add to cart button
    document.getElementById("add-to-cart").addEventListener("click", () => {
      const quantity = parseInt(quantityInput.value);
      const size = document.querySelector('input[name="size"]:checked').value;
      const customMessage = document.getElementById("custom-message").value;

      addToCart(product.id, quantity, size, customMessage);

      // Show success message
      showAlert("Product added to cart!", "success");
    });

    // Load related products
    loadRelatedProducts(product.id);
  }

  // Setup thumbnail click events
  document.querySelectorAll(".product-image-thumbnails img").forEach((img) => {
    img.addEventListener("click", function () {
      document
        .querySelectorAll(".product-image-thumbnails img")
        .forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
      document.getElementById("main-image").src =
        this.getAttribute("data-image");
    });
  });
}

// Load related products on product detail page
function loadRelatedProducts(currentProductId) {
  const relatedContainer = document.getElementById("related-products");
  const currentProduct = products.find((p) => p.id === currentProductId);
  const relatedProducts = products
    .filter(
      (p) => p.id !== currentProductId && p.category === currentProduct.category
    )
    .slice(0, 4);

  relatedProducts.forEach((product) => {
    const productHTML = `
            <div class="col-md-6 col-lg-3">
                <div class="card product-card shadow-sm h-100">
                    <img src="${product.image}" class="card-img-top" alt="${
      product.name
    }">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text flex-grow-1">${
                          product.description
                        }</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 text-primary mb-0">$${product.price.toFixed(
                              2
                            )}</span>
                            <a href="product-detail.html?id=${
                              product.id
                            }" class="btn btn-primary btn-sm">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    relatedContainer.innerHTML += productHTML;
  });
}

// Add product to cart
function addToCart(
  productId,
  quantity = 1,
  size = "small",
  customMessage = ""
) {
  const product = products.find((p) => p.id === productId);

  if (product) {
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.id === productId &&
        item.size === size &&
        item.customMessage === customMessage
    );

    if (existingItemIndex > -1) {
      // Update quantity if product already in cart
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        size: size,
        customMessage: customMessage,
      });
    }

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    return true;
  }

  return false;
}

// Load cart items on cart page
function loadCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart-message");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (cart.length === 0) {
    emptyCartMessage.style.display = "block";
    checkoutBtn.disabled = true;
    return;
  }

  emptyCartMessage.style.display = "none";
  checkoutBtn.disabled = false;

  cartItemsContainer.innerHTML = "";
  document.getElementById("cart-item-count").textContent = cart.length;

  cart.forEach((item, index) => {
    const itemHTML = `
            <div class="cart-item d-flex align-items-center p-3">
                <div class="flex-shrink-0">
                    <img src="${item.image}" alt="${
      item.name
    }" class="cart-item-image">
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5 class="mb-1">${item.name}</h5>
                    <p class="mb-1 text-muted">Size: ${item.size}</p>
                    ${
                      item.customMessage
                        ? `<p class="mb-1 text-muted">Message: "${item.customMessage}"</p>`
                        : ""
                    }
                    <div class="d-flex align-items-center">
                        <div class="input-group me-3" style="width: 120px;">
                            <button class="btn btn-outline-secondary decrease-qty" type="button" data-index="${index}">-</button>
                            <input type="number" class="form-control text-center" value="${
                              item.quantity
                            }" min="1" max="10" readonly>
                            <button class="btn btn-outline-secondary increase-qty" type="button" data-index="${index}">+</button>
                        </div>
                        <span class="h5 text-primary mb-0 me-3">$${(
                          item.price * item.quantity
                        ).toFixed(2)}</span>
                        <button class="btn btn-outline-danger btn-sm remove-item" data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    cartItemsContainer.innerHTML += itemHTML;
  });

  updateCartSummary();
}

// Update cart summary (subtotal, total, etc.)
function updateCartSummary() {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 10 : 0; // $10 delivery fee
  const giftFee = document.getElementById("gift-wrapping").checked ? 5 : 0;
  const total = subtotal + deliveryFee + giftFee;

  document.getElementById("cart-subtotal").textContent = `$${subtotal.toFixed(
    2
  )}`;
  document.getElementById("delivery-fee").textContent = `$${deliveryFee.toFixed(
    2
  )}`;
  document.getElementById("gift-fee").textContent = `$${giftFee.toFixed(2)}`;
  document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
}

// Setup cart interactions (quantity changes, remove items)
function setupCartInteractions() {
  // Gift wrapping checkbox
  document
    .getElementById("gift-wrapping")
    .addEventListener("change", updateCartSummary);

  // Quantity buttons
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("decrease-qty")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
        updateCartCount();
      }
    }

    if (e.target.classList.contains("increase-qty")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      if (cart[index].quantity < 10) {
        cart[index].quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
        updateCartCount();
      }
    }

    if (e.target.classList.contains("remove-item")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
      updateCartCount();
    }
  });

  // Checkout button
  document
    .getElementById("checkout-btn")
    .addEventListener("click", function () {
      const checkoutModal = new bootstrap.Modal(
        document.getElementById("checkoutModal")
      );
      checkoutModal.show();
    });

  // Place order button
  document.getElementById("place-order").addEventListener("click", function () {
    const form = document.getElementById("checkout-form");
    if (form.checkValidity()) {
      // In a real application, you would process the order here
      alert("Order placed successfully! Thank you for your purchase.");

      // Clear cart
      cart = [];
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
      updateCartCount();

      // Close modal
      const checkoutModal = bootstrap.Modal.getInstance(
        document.getElementById("checkoutModal")
      );
      checkoutModal.hide();
    } else {
      form.reportValidity();
    }
  });

  // Promo code
  document.getElementById("apply-promo").addEventListener("click", function () {
    const promoCode = document.getElementById("promo-code").value;
    const promoMessage = document.getElementById("promo-message");

    if (promoCode.toUpperCase() === "SWEET10") {
      promoMessage.textContent =
        "Promo code applied! 10% discount on your order.";
      promoMessage.className = "text-success";

      // Apply discount (in a real app, you would calculate this properly)
      const currentTotal = parseFloat(
        document.getElementById("cart-total").textContent.replace("$", "")
      );
      const discountedTotal = currentTotal * 0.9;
      document.getElementById(
        "cart-total"
      ).textContent = `$${discountedTotal.toFixed(2)}`;
    } else {
      promoMessage.textContent = "Invalid promo code. Please try again.";
      promoMessage.className = "text-danger";
    }
  });
}

// Setup contact form
function setupContactForm() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // In a real application, you would send the form data to a server
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    });
}

// Setup newsletter form
function setupNewsletterForm() {
  document
    .getElementById("newsletter-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]').value;

      // In a real application, you would send the email to a newsletter service
      alert(`Thank you for subscribing with ${email}!`);
      this.reset();
    });
}

// Utility function to show alerts
function showAlert(message, type = "info") {
  // Create alert element
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

  // Add to page
  document.body.insertBefore(alertDiv, document.body.firstChild);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (alertDiv.parentNode) {
      alertDiv.parentNode.removeChild(alertDiv);
    }
  }, 5000);
}
