document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content');
    const pageHeader = document.querySelector('.page-header');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('open'); 
    });

    const setActiveLink = () => {
        const currentLocation = window.location.hash || '#explore';
        navLinks.forEach(link => {
            const contentId = link.getAttribute('href');
            if (contentId === currentLocation) {
                link.classList.add('active');
                document.querySelector(contentId).style.display = 'block';
                pageHeader.textContent = link.textContent; 
            } else {
                link.classList.remove('active');
                document.querySelector(contentId).style.display = 'none';
            }
        });
    };

    setActiveLink();

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 
            window.location.hash = this.getAttribute('href');
            setActiveLink();
        });
    });
});
