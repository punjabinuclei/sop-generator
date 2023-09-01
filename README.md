# Customizable Statement of Purpose Generator

## This form is designed to generate a customized Statement of Purpose for you. After completing this questionnaire and submitting it, you will receive an email with your personalized Statement of Purpose. You can then tailor and adjust it according to your preferences.

## Tech Stack Used:

* Frontend: The project's frontend is built using React, a popular JavaScript library for building user interfaces. It uses Next.js, a React framework, to handle server-side rendering and routing. The UI is styled using Tailwind CSS, a utility-first CSS framework, which provides responsive and clean designs out of the box.

* Backend: For the backend API, you are using Node.js, a runtime environment for executing JavaScript code on the server-side. I have also implemented serverless functions using Next.js API Routes to handle form submissions. These serverless functions are used for processing form data and sending emails.

* Email Sending: To send emails, I have integrated Nodemailer, a popular Node.js library for sending emails, and set it up to work with your Gmail account.

## Design Practices:

* Component-Based UI: The frontend is structured using a component-based architecture, which promotes code reusability and maintainability. Each form field is encapsulated in a separate FormComponent, making it easy to manage.

* Responsive Design: The use of Tailwind CSS ensures that the UI is responsive, adapting well to various screen sizes and devices.

* State Management: I am also managing form data and user interactions using React state. The useState hook is used to keep track of form inputs and handle changes.

* Error Handling: I have implemented error handling for API requests and form submissions, logging errors to the console for debugging.
