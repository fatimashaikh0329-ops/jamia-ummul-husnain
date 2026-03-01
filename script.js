// script.js

// Function to create the WhatsApp floating button
function createWhatsAppButton() {
    var button = document.createElement('a');
    button.href = 'https://wa.me/1234567890'; // Replace with your WhatsApp number
    button.target = '_blank';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.backgroundColor = '#25D366';
    button.style.color = 'white';
    button.style.borderRadius = '50%';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.textAlign = 'center';
    button.style.lineHeight = '60px';
    button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    button.innerHTML = '<i class="fab fa-whatsapp"></i>'; // Font Awesome icon
    document.body.appendChild(button);
}

// Function for "Call Now" functionality
function createCallNowButton() {
    var button = document.createElement('a');
    button.href = 'tel:+1234567890'; // Replace with your contact number
    button.target = '_self';
    button.innerText = 'Call Now';
    button.style.position = 'fixed';
    button.style.bottom = '100px';
    button.style.right = '20px';
    button.style.backgroundColor = '#FF5733';
    button.style.color = 'white';
    button.style.padding = '10px';
    button.style.borderRadius = '5px';
    button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    document.body.appendChild(button);
}

// Smooth scrolling functionality
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Mobile menu toggle functionality
function toggleMobileMenu() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('show');
}

// Initialize interactive features
function init() {
    createWhatsAppButton();
    createCallNowButton();
    // Add event listeners for smooth scrolling and mobile menu toggle
}

// Execute on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);
