<<<<<<< HEAD
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


document.getElementById("currentyear").textContent = new Date().getFullYear();
// Dynamically set the date when the document was last modified
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;

const hero = document.querySelector('.hero');
const images = [
    'url(images/carpot6.jpg)', 
    'url(images/carpot2.jpg)', 
    'url(images/carpot3.jpg)',
    'url(images/cubicle1.jpeg)', 
    'url(images/cubicle2.jpeg)', 
    'url(images/cubicle3.jpeg)',
    'url(images/tent1.jpg)', 
    'url(images/tent2.jpg)', 
    'url(images/tent3.jpg)',
];
let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    hero.style.backgroundImage = images[currentIndex]; // Change background
}

setInterval(changeBackground, 3500); // Change background every 5 seconds
=======
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


document.getElementById("currentyear").textContent = new Date().getFullYear();
// Dynamically set the date when the document was last modified
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;

const hero = document.querySelector('.hero');
const images = [
    'url(images/carpot6.jpg)', 
    'url(images/carpot2.jpg)', 
    'url(images/carpot3.jpg)',
    'url(images/cubicle1.jpeg)', 
    'url(images/cubicle2.jpeg)', 
    'url(images/cubicle3.jpeg)',
    'url(images/tent1.jpg)', 
    'url(images/tent2.jpg)', 
    'url(images/tent3.jpg)',
];
let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    hero.style.backgroundImage = images[currentIndex]; // Change background
}

setInterval(changeBackground, 3500); // Change background every 5 seconds
>>>>>>> 32e23e92b040b9557ebbc38b6f0540cbc7c47ed0
