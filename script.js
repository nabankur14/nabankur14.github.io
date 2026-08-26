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

    // Badge Details Modal Logic (Oracle)
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

    // Badge Details Modal Logic (Google AI Essentials)
    const openGoogleBadgeBtn = document.getElementById('open-google-badge-modal');
    const googleBadgeModalBackdrop = document.getElementById('google-badge-modal-backdrop');
    const closeGoogleBadgeBtn = document.getElementById('close-google-badge-modal');

    function openGoogleBadgeModal() {
        if (googleBadgeModalBackdrop) {
            googleBadgeModalBackdrop.classList.add('active');
            googleBadgeModalBackdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeGoogleBadgeModal() {
        if (googleBadgeModalBackdrop) {
            googleBadgeModalBackdrop.classList.remove('active');
            googleBadgeModalBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (openGoogleBadgeBtn) {
        openGoogleBadgeBtn.addEventListener('click', openGoogleBadgeModal);
        openGoogleBadgeBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openGoogleBadgeModal();
            }
        });
    }

    if (closeGoogleBadgeBtn) {
        closeGoogleBadgeBtn.addEventListener('click', closeGoogleBadgeModal);
    }

    if (googleBadgeModalBackdrop) {
        googleBadgeModalBackdrop.addEventListener('click', (e) => {
            if (e.target === googleBadgeModalBackdrop) {
                closeGoogleBadgeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && googleBadgeModalBackdrop && googleBadgeModalBackdrop.classList.contains('active')) {
            closeGoogleBadgeModal();
        }
    });

    // Badge Details Modal Logic (Google Prompting Essentials)
    const openGooglePromptingBadgeBtn = document.getElementById('open-google-prompting-badge-modal');
    const googlePromptingBadgeModalBackdrop = document.getElementById('google-prompting-badge-modal-backdrop');
    const closeGooglePromptingBadgeBtn = document.getElementById('close-google-prompting-badge-modal');

    function openGooglePromptingBadgeModal() {
        if (googlePromptingBadgeModalBackdrop) {
            googlePromptingBadgeModalBackdrop.classList.add('active');
            googlePromptingBadgeModalBackdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeGooglePromptingBadgeModal() {
        if (googlePromptingBadgeModalBackdrop) {
            googlePromptingBadgeModalBackdrop.classList.remove('active');
            googlePromptingBadgeModalBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (openGooglePromptingBadgeBtn) {
        openGooglePromptingBadgeBtn.addEventListener('click', openGooglePromptingBadgeModal);
        openGooglePromptingBadgeBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openGooglePromptingBadgeModal();
            }
        });
    }

    if (closeGooglePromptingBadgeBtn) {
        closeGooglePromptingBadgeBtn.addEventListener('click', closeGooglePromptingBadgeModal);
    }

    if (googlePromptingBadgeModalBackdrop) {
        googlePromptingBadgeModalBackdrop.addEventListener('click', (e) => {
            if (e.target === googlePromptingBadgeModalBackdrop) {
                closeGooglePromptingBadgeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && googlePromptingBadgeModalBackdrop && googlePromptingBadgeModalBackdrop.classList.contains('active')) {
            closeGooglePromptingBadgeModal();
        }
    });

    // Badge Details Modal Logic (Prompt Design in Vertex AI)
    const openVertexBadgeBtn = document.getElementById('open-vertex-badge-modal');
    const vertexBadgeModalBackdrop = document.getElementById('vertex-badge-modal-backdrop');
    const closeVertexBadgeBtn = document.getElementById('close-vertex-badge-modal');

    function openVertexBadgeModal() {
        if (vertexBadgeModalBackdrop) {
            vertexBadgeModalBackdrop.classList.add('active');
            vertexBadgeModalBackdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeVertexBadgeModal() {
        if (vertexBadgeModalBackdrop) {
            vertexBadgeModalBackdrop.classList.remove('active');
            vertexBadgeModalBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (openVertexBadgeBtn) {
        openVertexBadgeBtn.addEventListener('click', openVertexBadgeModal);
        openVertexBadgeBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openVertexBadgeModal();
            }
        });
    }

    if (closeVertexBadgeBtn) {
        closeVertexBadgeBtn.addEventListener('click', closeVertexBadgeModal);
    }

    if (vertexBadgeModalBackdrop) {
        vertexBadgeModalBackdrop.addEventListener('click', (e) => {
            if (e.target === vertexBadgeModalBackdrop) {
                closeVertexBadgeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && vertexBadgeModalBackdrop && vertexBadgeModalBackdrop.classList.contains('active')) {
            closeVertexBadgeModal();
        }
    });

    console.log("Portfolio loaded successfully! 🚀");
});
