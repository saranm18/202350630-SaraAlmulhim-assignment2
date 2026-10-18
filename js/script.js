// Show a greeting depending on the current time
const greeting = document.getElementById("greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
    greeting.textContent = "Good morning!";
} else if (currentHour < 18) {
    greeting.textContent = "Good afternoon!";
} else {
    greeting.textContent = "Good evening!";
}
// filter projects based on the selected category
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        // Update the active filter button
        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        // Show only projects that match the selected category
        projectCards.forEach((project) => {
            const projectCategory = project.dataset.category;

            if (selectedFilter === "all" || projectCategory === selectedFilter) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});
// switch between dark and light mode
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
    );
});

// Contact form interaction: prevent page reload and show user feedback.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formStatus.textContent =
        `Thanks${name ? `, ${name}` : ""}! Your message has been received.`;

    contactForm.reset();
});

// Keep the footer year current automatically 
document.getElementById("year").textContent = new Date().getFullYear();
