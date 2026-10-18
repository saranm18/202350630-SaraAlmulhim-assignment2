# Technical Documentation
## 1. Project Overview
This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript.
It includes an About Me section, Projects, Skills, and a Contact form. The website does not use a backend or database.

## 2. Project Files
### `index.html`
Contains the main structure and content of the website, including:

- Navigation
- Home section
- About Me
- Projects
- Skills
- Contact form
- Footer
### `css/styles.css`
Contains the styling of the website.
It uses:

- CSS variables for colors
- Flexbox for navigation and alignment
- CSS Grid for projects and skills
- Media queries for responsive design
- Dark and light theme styles
### `js/script.js`
Contains the interactive features of the website:

- Greeting based on the current time
- Dark/light theme toggle
- Contact form feedback
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
### Theme Toggle
The theme button adds or removes the `dark-theme` class from the page.This allows the CSS colors to change between light and dark mode.
### Contact Form
The contact form uses JavaScript to prevent the page from refreshing and displays a confirmation message after submission.

## 5. Accessibility
The website includes:

- Semantic HTML
- Labels for form inputs
- Required form fields
- Image alt text
- `aria-label` for the theme button
- Responsive design

## 6. Known Limitation
The contact form does not send messages to a server because no backend is required for this assignment.