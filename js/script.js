document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Dark Mode Toggle Logic
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateIcon(currentTheme);
    } else {
        // Fallback to minimal light mode as default for this profile
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateIcon('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateIcon('dark');
        }
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('ri-moon-line');
            themeIcon.classList.add('ri-sun-line');
        } else {
            themeIcon.classList.remove('ri-sun-line');
            themeIcon.classList.add('ri-moon-line');
        }
    }

    /* ==========================================================================
       Navbar Scroll Effect
       ========================================================================== */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
    /* ==========================================================================
       Mobile Menu Toggle
       ========================================================================== */
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if(mobileMenuToggle && navLinks) {
        const menuIcon = mobileMenuToggle.querySelector('i');

        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.remove('ri-menu-line');
                menuIcon.classList.add('ri-close-line');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                menuIcon.classList.remove('ri-close-line');
                menuIcon.classList.add('ri-menu-line');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        const mobileLinks = navLinks.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('ri-close-line');
                menuIcon.classList.add('ri-menu-line');
                document.body.style.overflow = '';
            });
        });
    }
});
