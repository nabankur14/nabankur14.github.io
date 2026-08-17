/* 
 * Portfolio Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });
    }

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden, .hidden-up, .hidden-left, .hidden-right');
    hiddenElements.forEach((el) => observer.observe(el));

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navLinks.classList.remove('active');
        });
    });

    // Badge Details Modal Logic
    const openBadgeBtn = document.getElementById('open-badge-modal');
    const badgeModalBackdrop = document.getElementById('badge-modal-backdrop');
    const closeBadgeBtn = document.getElementById('close-badge-modal');

    function openBadgeModal() {
        if (badgeModalBackdrop) {
            badgeModalBackdrop.classList.add('active');
            badgeModalBackdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeBadgeModal() {
        if (badgeModalBackdrop) {
            badgeModalBackdrop.classList.remove('active');
            badgeModalBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (openBadgeBtn) {
        openBadgeBtn.addEventListener('click', openBadgeModal);
        openBadgeBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openBadgeModal();
            }
        });
    }

    if (closeBadgeBtn) {
        closeBadgeBtn.addEventListener('click', closeBadgeModal);
    }

    if (badgeModalBackdrop) {
        badgeModalBackdrop.addEventListener('click', (e) => {
            if (e.target === badgeModalBackdrop) {
                closeBadgeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && badgeModalBackdrop && badgeModalBackdrop.classList.contains('active')) {
            closeBadgeModal();
        }
    });

    console.log("Portfolio loaded successfully! 🚀");
});
