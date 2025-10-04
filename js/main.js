document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset for fixed header
                const headerOffset = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Optional: Add 'active' class to current nav item
                document.querySelectorAll('.main-nav ul li a').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Intersection Observer for active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -80% 0px", // Adjust these values to fine-tune when a section becomes 'active'
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active from all
                navLinks.forEach(link => link.classList.remove('active'));

                // Add active to the corresponding nav link
                const targetId = `#${entry.target.id}`;
                const correspondingLink = document.querySelector(`.main-nav ul li a[href="${targetId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Add 'active' class to the first nav item initially (Home)
    const homeLink = document.querySelector('.main-nav ul li a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }

    // Optional: Menu category filter
