// Dynamically set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
// Dynamically set the date when the document was last modified
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
// Product Array
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Initialize Lucide icons
    lucide.createIcons();
});


// Scroll reveal animation
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    var reveals = document.querySelectorAll('.service-card, .project-card');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Call the function on load
revealOnScroll();



const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate the Product Name select field
const productSelect = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // Set value to the product id
    option.textContent = product.name; // Display the product name
    productSelect.appendChild(option);
});
