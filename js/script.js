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
// Filter projects based on the selected category
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
// Switch between dark and light mode
const themeToggle = document.getElementById("themeToggle");
// Load the saved theme when the page opens
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Switch to light theme");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
    );
    // Save the selected theme
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Contact form validation and feedback
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formStatus.textContent = "";

    nameInput.classList.remove("input-invalid");
    emailInput.classList.remove("input-invalid");
    messageInput.classList.remove("input-invalid");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Check the name
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        nameInput.classList.add("input-invalid");
        isValid = false;
    }

    // Check the email
    if (email === "") {
        emailError.textContent = "Please enter your email.";
        emailInput.classList.add("input-invalid");
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email.";
        emailInput.classList.add("input-invalid");
        isValid = false;
    }

    // Check the message
    if (message === "") {
        messageError.textContent = "Please enter a message.";
        messageInput.classList.add("input-invalid");
        isValid = false;
    }

    // Show success feedback only if every field is valid
    if (isValid) {
        formStatus.textContent =
            `Thanks, ${name}! Your message has been received.`;

        contactForm.reset();
    }
});

// Keep the footer year current automatically 
document.getElementById("year").textContent = new Date().getFullYear();
