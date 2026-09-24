document.addEventListener("DOMContentLoaded", () => {
    // Init Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Skill Filter Logic
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

    // Active Navigation Highlight on Scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

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
            if (href === `#${currentSection}`) {
                link.classList.add("text-white");
            } else {
                link.classList.remove("text-white");
            }
        });
    };

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();

    // Footer Dynamic Year
    const footerYear = document.querySelector("footer p");
    if (footerYear) {
        footerYear.textContent = `© ${new Date().getFullYear()} Ahmad Khoirudin`;
    }

    // Open external links in new tab
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });
});
