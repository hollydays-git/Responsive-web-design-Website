# Daniil Istomin — Personal Portfolio

A responsive, single-page portfolio presenting my coding projects, education and personal interests. Built as part of the Lime Light internship by customizing a Start Bootstrap-based website template.

The design combines dark photographic backgrounds, gold accents and light project cards. The introduction leads into five main sections: Skills, Projects, Education, Interests and Contact.

## Sections

| Section | Content |
| --- | --- |
| Introduction | My name, a short introduction and a link to my projects. |
| Skills | Web development, game development and Python / AI, followed by a technology stack. |
| Projects | CSS 3D Flip Cards, Marine Life, Snake Game, an RL project and a team chatbot project. |
| Education | A timeline covering school, Media Design at Metropolitan and Computer Science at the University of Debrecen. |
| Interests | Favourite food, outdoor activities, reading, sketching and computer-related interests. |
| Contact | Email and GitHub links, plus a form that prepares an email draft. |

## Features

- Responsive Bootstrap grid and collapsible navigation for smaller screens.
- Smooth navigation between sections.
- Project cards with links to published work and modal windows for additional details.
- An alternating education timeline.
- Parallax backgrounds in the introduction, Education and Contact sections.
- Background movement disabled below 768 px and when the system requests reduced motion.
- Keyboard-accessible controls, labelled form fields and a skip-to-content link.

## Technologies

- **HTML5** — page structure and content.
- **CSS3** — custom layout details, backgrounds, typography and responsive adjustments.
- **Bootstrap 4.5.3** — grid, navigation, buttons, forms and modals.
- **JavaScript** — parallax movement and email draft preparation.
- **jQuery 3.5.1** and **jQuery Easing 1.4.1** — dependencies used by the original theme for scrolling and navigation.
- **Google Fonts** — Montserrat, Roboto Slab and Space Grotesk for the name heading.

This is a static website. No package installation or build step is required.

## Running the website

Download or clone the repository and open `index.html` in a modern browser. For a local development preview, open the project folder in Visual Studio Code and use Live Server.

An internet connection is required to load Google Fonts and the JavaScript libraries served through CDNs. Images and both theme stylesheets are stored locally in the project.

## Contact form

The contact form validates the required fields and creates a `mailto:` link containing the visitor's name, email address and message. This opens a draft in the visitor's configured email application; the visitor sends the email from there.

The website does not send messages automatically or store submissions. A working email application or mail handler is needed. The PHP mail files inherited from the template are not connected to the current form.

## Credits

- Base assignment: [Lime-Light-TechLead / Responsive-web-design-Website](https://github.com/Lime-Light-TechLead/Responsive-web-design-Website).
- Original theme: [Start Bootstrap Agency](https://github.com/StartBootstrap/startbootstrap-agency).
- Mountain photograph: [Mahdi Bafande / Pexels](https://www.pexels.com/photo/landscape-of-dark-mountains-under-a-cloudy-sky-14865973/).
- Library photograph: [Kyle Miller / Pexels](https://www.pexels.com/photo/books-on-library-shelves-at-night-18335787/).
- Project previews and technology icons were brought over from the portfolio's Figma design. Third-party images and logos retain their respective rights.

## License

The repository includes the [MIT License](LICENSE). Third-party photographs, illustrations, fonts and logos remain subject to their own licenses and ownership.
