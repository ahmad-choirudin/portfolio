document.addEventListener("DOMContentLoaded", () => {
    // Init Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // =========================
    // Mobile menu toggle
    // =========================
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIconOpen = document.getElementById("menu-icon-open");
    const menuIconClose = document.getElementById("menu-icon-close");
    const mobileNavLinks = document.querySelectorAll(".nav-link-mobile");

    const closeMobileMenu = () => {
        mobileMenu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    const openMobileMenu = () => {
        mobileMenu.classList.remove("hidden");
        menuIconOpen.classList.add("hidden");
        menuIconClose.classList.remove("hidden");
        menuToggle.setAttribute("aria-expanded", "true");
    };

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            const isOpen = !mobileMenu.classList.contains("hidden");
            isOpen ? closeMobileMenu() : openMobileMenu();
        });

        // Close menu after clicking a link
        mobileNavLinks.forEach((link) => {
            link.addEventListener("click", closeMobileMenu);
        });

        // Close menu on resize back to desktop width
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                closeMobileMenu();
            }
        });
    }

    // =========================
    // Skill filter logic
    // =========================
    const filterButtons = document.querySelectorAll(".filter-btn");
    const skillCards = document.querySelectorAll(".skill-card");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            skillCards.forEach((card) => {
                const category = card.dataset.category;
                if (filter === "all" || category === filter) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    // =========================
    // Active navigation highlight on scroll
    // =========================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileLinksById = document.querySelectorAll(".nav-link-mobile");

    let ticking = false;

    const updateActiveNav = () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.toggle("text-white", href === `#${currentSection}`);
        });

        mobileLinksById.forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.toggle("active", href === `#${currentSection}`);
        });

        ticking = false;
    };

    // Throttle scroll handling with requestAnimationFrame so layout
    // reads (offsetTop / offsetHeight) don't run on every scroll event
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateActiveNav);
            ticking = true;
        }
    });

    updateActiveNav();

    // =========================
    // Footer dynamic year
    // =========================
    const footerYear = document.getElementById("footer-year");
    if (footerYear) {
        footerYear.textContent = `© ${new Date().getFullYear()} Ahmad Choirudin`;
    }

    // =========================
    // Open external links in new tab
    // =========================
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });
});