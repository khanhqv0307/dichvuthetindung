# Copilot Instructions for Frontend (HTML, CSS, JavaScript)

## 🎯 Goal

Generate clean, modern, responsive, and production-ready frontend code using HTML, CSS, and vanilla JavaScript.

---

## 🧱 HTML Guidelines

- Use **semantic HTML5** elements:
  - header, nav, main, section, article, aside, footer

- Always ensure:
  - Proper indentation
  - Accessibility (aria-label, alt, label for inputs)

- Avoid unnecessary divs (no "div soup")
- Use meaningful class names (BEM or readable naming)
- Optimize for SEO basics (meta tags, title, description)

Example:

```html
<section class="service">
  <h2 class="service__title">Our Services</h2>
  <p class="service__desc">We provide high quality solutions.</p>
</section>
```

---

## 🎨 CSS Guidelines

- Prefer **modern CSS (Flexbox, Grid)** over floats
- Use **mobile-first responsive design**
- Avoid inline styles
- Use variables when possible:

```css
:root {
  --primary-color: #111;
  --accent-color: #ff4d4f;
}
```

- Keep styles modular and reusable
- Follow consistent naming (BEM preferred)

Example:

```css
.service {
  padding: 20px;
}

.service__title {
  font-size: 1.5rem;
}
```

---

## ⚡ JavaScript Guidelines

- Use **ES6+ syntax**
  - const/let (no var)
  - arrow functions
  - template literals

- Write clean, readable logic
- Avoid global variables
- Split logic into small reusable functions
- Handle errors gracefully

Example:

```js
const fetchData = async () => {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
    renderData(data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};
```

---

## 📱 Responsive Design

- Use breakpoints:
  - 768px (tablet)
  - 1024px (desktop)

- Ensure UI works on:
  - Mobile
  - Tablet
  - Desktop

---

## 🚀 Performance

- Minimize DOM manipulation
- Use lazy loading for images
- Avoid large libraries unless necessary
- Optimize images and assets

---

## 🧼 Code Quality

- Keep code DRY (Don’t Repeat Yourself)
- Use consistent formatting
- Add comments only when necessary
- Prefer clarity over cleverness

---

## 🎯 UI/UX Principles

- Clean and minimal design
- Clear visual hierarchy
- Consistent spacing (8px system)
- Good contrast and readability
- Smooth hover and transition effects

---

## 🔥 Preferred Stack

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript (no framework unless asked)

---

## ❌ Avoid

- jQuery (unless explicitly required)
- Inline CSS/JS
- Overcomplicated logic
- Unreadable class names
- Copy-paste patterns without structure

---

## 🧠 When Generating Code

Copilot should:

- Always generate **complete working code**
- Prefer **simple solutions first**
- Include **basic styling if UI is requested**
- Ensure **responsiveness by default**
- Follow best practices automatically

---

## 💡 Bonus

- Add subtle animations (hover, fade, transition)
- Use modern UI patterns (cards, grid layout)
- Keep design similar to modern websites (clean like Apple, Stripe)

---

## 📦 Output Expectation

Every generated code should:

- Run without errors
- Be clean and structured
- Be easy to maintain and extend
