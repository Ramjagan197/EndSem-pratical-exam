# Email & Password Signup Page

A responsive, client-side user registration form built with semantic HTML5, CSS3, and vanilla JavaScript. It includes real-time input validation, password visibility toggling, and clear error feedback.

## Features

- **Semantic HTML5 Form:** Accessible labels, proper input types (`email`, `password`), and native browser constraint attributes.
- **Client-Side Validation:**
  - Checks for valid email formatting.
  - Enforces password rules (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character).
  - Verifies that the **Password** and **Confirm Password** fields match before submission.
- **Interactive UX:**
  - Show/hide password toggle button.
  - Real-time inline error messages and visual field states.
  - Responsive layout that adapts to mobile and desktop screens.

## Project Structure

```text
signup-page/
├── index.html      # Markup for the signup form
├── style.css       # Layout, responsive design, and validation states
├── script.js       # Form validation, toggle logic, and submission handler
└── README.md       # Project documentation
```

## Getting Started

1. **Clone or download** the project files into a local directory:
   ```bash
   git clone https://github.com
   cd signup-page
   ```
2. **Open the page:**
   - Double-click `index.html` to open it directly in your browser, **or**
   - Serve it locally using an extension like VS Code Live Server or Python:
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000`.

## Usage & Customization

- **Password Rules:** Update the regex pattern in `script.js` if you want to adjust minimum length or character requirements.
- **Backend Integration:** Currently, form submission prevents default page reload (`event.preventDefault()`) and validates inputs on the client. To connect an API, replace the success handler in `script.js` with a `fetch()` POST request to your authentication endpoint:
  ```javascript
  fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
