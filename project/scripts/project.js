// Initialize Lucide icons
lucide.createIcons();
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    } else {
        console.warn('Menu icon or nav links not found.');
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
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
    var reveals = document.querySelectorAll('.project-card');

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


// JavaScript Function to Filter Projects by Category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block'; // Show matching category
        } else {
            project.style.display = 'none'; // Hide non-matching category
        }
    });
}



const projects = [
    {
        projectName: "Carport",
        description: "Aba, Nigeria",
        imageUrl: "images/carpot1.jpeg",
        category: "Carports"
    },
    {
        projectName: "Carport",
        description: "Aba, Nigeria",
        imageUrl: "images/carpot1.jpeg",
        category: "Carports"
    },
    {
        projectName: "Carport",
        description: "Aba, Nigeria",
        imageUrl: "images/carpot2.jpg",
        category: "Carports"
    },
    {
        projectName: "Painting",
        description: "Aba, Nigeria",
        imageUrl: "images/paint3.jpg",
        category: "Painting"
    },
    {
        projectName: "Painting",
        description: "Aba, Nigeria",
        imageUrl: "images/paint2.jpg",
        category: "Painting"
    },
    {
        projectName: "Painting",
        description: "House Painting",
        imageUrl: "images/paint1.jpg",
        category: "Painting"
    },
    {
        projectName: "Office Partitioning",
        description: "Customized office spaces with flexible partitioning solutions.",
        imageUrl: "images/officepartition1.jpeg",
        category: "Office Partitioning"
    },
    {
        projectName: "Office Partitioning",
        description: "Customized office spaces with flexible partitioning solutions.",
        imageUrl: "images/officepartition2.jpeg",
        category: "Office Partitioning"
    },
    {
        projectName: "Office Partitioning",
        description: "Customized office spaces with flexible partitioning solutions.",
        imageUrl: "images/officepartition3.jpeg",
        category: "Office Partitioning"
    },
    {
        projectName: "Carpentry",
        description: "Elegant interior design and custom carpentry projects tailored to your space.",
        imageUrl: "images/shelves1.jpg",
        category: "interior"
    },
    {
        projectName: "Carpentry",
        description: "Elegant interior design and custom carpentry projects tailored to your space.",
        imageUrl: "images/shelves2.jpg",
        category: "interior"
    },
    {
        projectName: " Carpentry",
        description: "Elegant interior design and custom carpentry projects tailored to your space.",
        imageUrl: "images/shelves3.jpg",
        category: "interior"
    },
    {
        projectName: "Shower Cubicles",
        description: "Transform your bathroom with stylish shower cubicles.",
        imageUrl: "images/cubicle5.jpeg",
        category: "Shower Cubicles"
    },
    {
        projectName: "Shower Cubicles",
        description: "Transform your bathroom with stylish shower cubicles.",
        imageUrl: "images/cubicle2.jpeg",
        category: "Shower Cubicles"
    },
    {
        projectName: "Shower Cubicles",
        description: "Transform your bathroom with stylish shower cubicles.",
        imageUrl: "images/cubicle3.jpeg",
        category: "Shower Cubicles"
    },
    {
        projectName: "Interior Design",
        description: "Transform your entrance  with modern interior design.",
        imageUrl: "images/door5.jpeg",
        category: "Doors"
    },
    {
        projectName: "Interior Design",
        description: "Transform your entrance with modern interior design.",
        imageUrl: "images/door4.jpeg",
        category: "Doors"
    },
    {
        projectName: "Interior Design",
        description: "Transform your entrance  with modern interior design.",
        imageUrl: "images/door6.jpeg",
        category: "Doors"
    },
    {
        projectName: "Shopfitting",
        description: "Tailored shopfitting projects designed to meet business needs and branding.",
        imageUrl: "images/shopfitting1.jpg",
        category: "Shopfitting"
    },
    {
        projectName: "Shopfitting",
        description: "Tailored shopfitting projects designed to meet business needs and branding.",
        imageUrl: "images/shopfitting2.jpg",
        category: "Shopfitting"
    },
    {
        projectName: "Shopfitting",
        description: "Tailored shopfitting projects designed to meet business needs and branding.",
        imageUrl: "images/shopfitting3.jpg",
        category: "Shopfitting"
    },
    {
        projectName: "Tiling",
        description: "Tailored tiles business needs and branding.",
        imageUrl: "images/tile1.jpg",
        category: "Floors"
    },
    {
        projectName: "Tiling",
        description: "Tailored shopfitting projects designed to meet business needs and branding.",
        imageUrl: "images/tile2.jpg",
        category: "Floors"
    },
    {
        projectName: "Tiling",
        description: "Tailored shopfitting projects designed to meet business needs and branding.",
        imageUrl: "images/tile1.jpg",
        category: "Floors"
    },
    {
        projectName: "Aluminum Frames",
        description: "Aluminum Frames and glass designed to meet business needs and branding.",
        imageUrl: "images/window1.jpg",
        category: "Windows"
    },
    {
        projectName: "Aluminum Frames",
        description: "Aluminum Frames and glass designed to meet business needs and branding.",
        imageUrl: "images/window2.jpg",
        category: "Windows"
    },
    {
        projectName: "Aluminum Frames",
        description: "Aluminum Frames and glass designed to meet business needs and branding.",
        imageUrl: "images/window3.jpg",
        category: "Windows"
    }
];

function displayProjects(projectArray) {
    const container = document.getElementById("project-container");
    container.innerHTML = ''; 
    projectArray.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card", "project-card img";
        card.setAttribute("data-category", project.category); // Set the category
        card.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.projectName}" loading="lazy">
            <h2>${project.projectName}</h2>
            <p>Details: ${project.description}</p>
            
        `;
        container.appendChild(card);
    });
}

// Display all projects by default
displayProjects(projects);
