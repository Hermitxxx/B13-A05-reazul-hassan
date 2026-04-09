<div align="center">

# 🐛 GitHub Issues Tracker

**A clean, lightweight web app to authenticate and manage GitHub issues — no frameworks, just the web platform.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-dc2626?style=for-the-badge)](https://hermitxxx.github.io/B13-A05-reazul-hassan/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-B13--A05--reazul--hassan-181717?style=for-the-badge&logo=github)](https://github.com/Hermitxxx/B13-A05-reazul-hassan)
[![Portfolio](https://img.shields.io/badge/🧑‍💻_Portfolio-thehermit.tech-dc2626?style=for-the-badge)](https://thehermit.tech)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-hermitdev-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hermitdev/)
[![HTML](https://img.shields.io/badge/HTML-100%25-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/Hermitxxx/B13-A05-reazul-hassan)

</div>

---

## 📖 Overview

**GitHub Issues Tracker** is a single-page web application that provides a streamlined interface for viewing and managing GitHub issues. Users authenticate through a login page, then access a clean dashboard powered by the **GitHub API**. The entire project is built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no bundlers — keeping it fast, portable, and easy to understand.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure & semantic markup |
| **CSS3** | Styling, layout & responsive design |
| **Vanilla JavaScript** | Application logic & DOM interaction |
| **GitHub REST API** | Fetching live issue data |
| **GitHub Pages** | Hosting & deployment |

---

## ✨ Features

- 🔐 **User Authentication** — Login page with credential validation before accessing the dashboard
- 📋 **Issue Dashboard** — View and track GitHub issues fetched live from the GitHub API
- 🎨 **Clean UI** — Minimal, professional interface with GitHub-inspired branding
- 📱 **Responsive Design** — Fully usable on both desktop and mobile devices
- ⚡ **Lightweight & Fast** — Zero heavy frameworks; optimized for performance

---

## 📦 Dependencies

This project has **no npm or third-party dependencies**. Everything runs natively in the browser.

| Resource | Type | Details |
|---|---|---|
| **GitHub REST API** | External API | Used to fetch issue data |
| *(none)* | npm/CDN library | No external libraries used |

> No `package.json`, no `node_modules`, no install step required.

---

## 🚀 Running Locally

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- [Git](https://git-scm.com/) *(for cloning)*

### Steps

**1. Clone the repository:**

```bash
git clone https://github.com/Hermitxxx/B13-A05-reazul-hassan.git
```

**2. Navigate into the project folder:**

```bash
cd B13-A05-reazul-hassan
```

**3. Open in your browser:**

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or simply **double-click** `index.html` in your file explorer.

> 💡 **Recommended:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for a better local development experience with auto-reload.

---

## 🔑 Demo Credentials

Use these test credentials to explore the app without any setup:

| Field | Value |
|---|---|
| Username | `admin` |
| Password | `admin123` |

---

## 📁 Project Structure

```
B13-A05-reazul-hassan/
├── index.html          # Entry point — Login page
├── assets/
│   └── github-logo.png # Branding assets
├── css/
│   └── style.css       # All application styles
├── js/
│   └── main.js         # Core JavaScript logic & API calls
└── README.md           # Project documentation
```

---

## 📖 How to Use

1. Open the app in your browser
2. Enter your credentials on the login page *(use demo credentials above)*
3. Click **Sign In** to access the issue dashboard
4. Browse and manage your GitHub issues from the dashboard

---

## 📚 JavaScript Concepts Applied

This project is built with vanilla JavaScript and demonstrates several core JS concepts in practice:

**`var` / `let` / `const`** — Proper scoping and variable declaration hygiene throughout the codebase.

**Spread Operator (`...`)** — Used for creating shallow copies of arrays/objects and merging data without mutation.

**`map()` / `filter()` / `forEach()`** — Array methods used to transform, filter, and render issue data from the API response.

**Arrow Functions** — Concise ES6 function syntax used for callbacks and event handlers.

**Template Literals** — Dynamic HTML generation using backtick strings and `${}` expressions for rendering issue cards.

---

## 🤝 Contributing

Contributions are welcome!

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Commit your changes
git commit -m "Add: your feature description"

# 4. Push and open a Pull Request
git push origin feature/your-feature-name
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🔗 Links

| | Link |
|---|---|
| 🌐 **Live Demo** | [hermitxxx.github.io/B13-A05-reazul-hassan](https://hermitxxx.github.io/B13-A05-reazul-hassan/) |
| 💻 **Repository** | [github.com/Hermitxxx/B13-A05-reazul-hassan](https://github.com/Hermitxxx/B13-A05-reazul-hassan) |
| 🧑‍💻 **Personal Website** | [thehermit.tech](https://thehermit.tech) |
| 🐙 **GitHub Profile** | [github.com/Hermitxxx](https://github.com/Hermitxxx) |
| 💼 **LinkedIn** | [linkedin.com/in/hermitdev](https://www.linkedin.com/in/hermitdev/) |

---

<div align="center">
  <sub>Built with 🔴 by <a href="https://thehermit.tech">Hermit</a> · 隠者開発者</sub>
</div>
