# Technical Documentation
## 1. Project Overview
This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript.

It includes an About Me section, Projects, Skills, and a Contact form. Assignment 2 adds project filtering, saved theme preferences, form validation, user feedback, and CSS transitions.
The website does not use a backend or database.

## 2. Project Files
### `index.html`
Contains the main structure and content of the website, including:

- Navigation
- Home section
- About Me
- Project filter buttons and project cards
- Skills
- Contact form and validation message areas
- Footer

### `css/styles.css`
Contains the styling of the website.
It uses:

- CSS variables for colors
- Flexbox for navigation and alignment
- CSS Grid for projects and skills
- Media queries for responsive design
- Dark and light theme styles
- Form validation styles
- Hover effects and CSS transitions

### `js/script.js`
Contains the interactive features of the website:

- Greeting based on the current time
- Project filtering by category
- Dark/light theme toggle
- Theme preference saved using `localStorage`
- Contact form validation and user feedback
- Automatic current year in the footer

### `assets/images/`
Contains the images used for the project cards.

## 3. Responsive Design
The website adjusts depending on the screen size.

- Desktop uses multi-column layouts.
- Tablet changes some sections to one column.
- Mobile uses a simpler layout and smaller spacing.

The responsive design is created using CSS Grid, Flexbox, and media queries.

## 4. JavaScript Features

### Greeting
The greeting changes depending on the current time using:

`new Date().getHours()`

### Project Filtering
The project filter buttons use `data-filter` values to show or hide projects based on their category.

### Theme Toggle
The theme button adds or removes the `dark-theme` class from the page.

The selected theme is saved using `localStorage`, so the user's theme preference remains after refreshing the page.

### Contact Form Validation
JavaScript checks the Name, Email, and Message fields before showing a success message.

If a field is empty or the email format is invalid, an error message is displayed and the field is highlighted.

The form only resets when all fields are valid.

## 5. Animations and Transitions
CSS transitions are used to make interactions smoother.

Project cards, filter buttons, and other buttons move slightly when the user hovers over them.

## 6. Accessibility
The website includes:

- Semantic HTML
- Labels for form inputs
- Required form fields
- Image alt text
- `aria-label` for the theme button
- `aria-describedby` for form validation messages
- `aria-live` for contact form feedback
- Responsive design

## 7. Known Limitation
The contact form does not send messages to a server because no backend is required for this assignment.