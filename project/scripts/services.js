<<<<<<< HEAD
// Initialize Lucide icons
lucide.createIcons();
document.getElementById("currentyear").textContent = new Date().getFullYear();
// Dynamically set the date when the document was last modified
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
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
=======
// Initialize Lucide icons
lucide.createIcons();
document.getElementById("currentyear").textContent = new Date().getFullYear();
// Dynamically set the date when the document was last modified
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
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
>>>>>>> 32e23e92b040b9557ebbc38b6f0540cbc7c47ed0
