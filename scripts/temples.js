

// temples.js
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        hamburger.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
    });

    // Update copyright year
    const currentYearSpan = document.getElementById('currentYear');
    currentYearSpan.textContent = new Date().getFullYear();

    // Update last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = document.lastModified;

    // Navigation menu functionality
    const navLinks = document.querySelectorAll('#nav-menu a');
    const currentSection = document.getElementById('current-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentSection.textContent = this.textContent;
            navMenu.classList.remove('show');
            hamburger.textContent = '☰';
        });
    });
});