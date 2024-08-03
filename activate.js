// activate.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content');
    const pageHeader = document.querySelector('.page-header');

    // Toggle navigation for mobile
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('open'); // Toggle open class for menu toggle
    });

    // Set active class based on current URL
    const setActiveLink = () => {
        const currentLocation = window.location.hash || '#explore';
        navLinks.forEach(link => {
            const contentId = link.getAttribute('href');
            if (contentId === currentLocation) {
                link.classList.add('active');
                document.querySelector(contentId).style.display = 'block';
                pageHeader.textContent = link.textContent; // Update page header text
            } else {
                link.classList.remove('active');
                document.querySelector(contentId).style.display = 'none';
            }
        });
    };

    // Set active link on page load
    setActiveLink();

    // Update active link on click
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            window.location.hash = this.getAttribute('href');
            setActiveLink();
        });
    });
});
