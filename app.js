// =========================
// LUCIDE ICONS
// =========================

document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});


// =========================
// SKILL FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");

const skillCards = document.querySelectorAll(".skill-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active state
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });


        // Add active state
        button.classList.add("active");


        // Get selected filter
        const filter = button.dataset.filter;


        // Filter cards
        skillCards.forEach((card) => {

            const category = card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


// =========================
// NAVIGATION ACTIVE STATE
// =========================

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-link");


const updateActiveNav = () => {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        const href =
            link.getAttribute("href");


        if (
            href === `#${currentSection}`
        ) {

            link.classList.add("text-white");

        } else {

            link.classList.remove("text-white");

        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();


// =========================
// CURRENT YEAR
// =========================

const currentYear =
    new Date().getFullYear();


const footerYear =
    document.querySelector("footer p");


if (footerYear) {

    footerYear.textContent =
        `© ${currentYear} Ahmad Choirudin`;

}


// =========================
// EXTERNAL LINKS
// =========================

const externalLinks =
    document.querySelectorAll(
        'a[href^="http"]'
    );


externalLinks.forEach((link) => {

    link.setAttribute(
        "target",
        "_blank"
    );


    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );

});
