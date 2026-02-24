/**
 * Cart Management System (India Version - INR)
 */

// Format currency as INR
function formatINR(amount) {
    return '₹' + amount.toLocaleString('en-IN', {
        maximumFractionDigits: 0
    });
}

// Initialize Cart Array
let cart = JSON.parse(localStorage.getItem('grance_cart')) || [];

/**
 * Save cart to local storage and update UI
 */
function saveCart() {
    localStorage.setItem('grance_cart', JSON.stringify(cart));
    updateCartCount();
}

/**
 * Update the badge counter on the navbar cart icon
 */
function updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    countElements.forEach(el => {
        el.textContent = totalItems;
        // Optional scaling animation when item added
        el.style.transform = 'scale(1.2)';
        setTimeout(() => {
            el.style.transform = 'scale(1)';
        }, 200);
    });
}

/**
 * Add a product to the cart
 * @param {Object} product - {id, name, price, image}
 * @param {number} quantity 
 */
function addToCart(product, quantity = 1) {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart();

    // Try to use showToast from script.js, fallback to alert
    if (typeof showToast === 'function') {
        showToast(`${product.name} added to cart!`);
    } else {
        alert(`${product.name} added to cart!`);
    }
}

/**
 * Remove item completely from cart
 * @param {string|number} id 
 */
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
}

/**
 * Update item quantity
 * @param {string|number} id 
 * @param {number} newQuantity 
 */
function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(id);
        return;
    }

    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = Number(newQuantity);
        saveCart();
    }
}

/**
 * Clear full cart
 */
function clearCart() {
    cart = [];
    saveCart();
}

/**
 * Get total amount in cart
 * @returns {number}
 */
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Initialize count on DOM load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
