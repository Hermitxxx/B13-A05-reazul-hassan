# 🐛 GitHub Issues Tracker

A clean, responsive web application that allows users to authenticate and manage GitHub issues through a streamlined interface.

🔗 **Live Demo:** [https://hermitxxx.github.io/B13-A05-reazul-hassan/](https://hermitxxx.github.io/B13-A05-reazul-hassan/)
📦 **Repository:** [https://github.com/Hermitxxx/B13-A05-reazul-hassan](https://github.com/Hermitxxx/B13-A05-reazul-hassan)

---

## 📸 Preview

> A minimal and intuitive issue tracking interface built on top of the GitHub ecosystem.

---

## ✨ Features

- 🔐 **User Authentication** — Secure login system with credential validation
- 📋 **Issue Management** — View, track, and manage GitHub issues in one place
- 🎨 **Clean UI** — Minimal and professional interface with GitHub branding
- 📱 **Responsive Design** — Works seamlessly on desktop and mobile devices
- ⚡ **Fast & Lightweight** — No heavy frameworks, optimized for performance

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- A modern web browser (Chrome, Firefox, Edge, Safari)
- [Git](https://git-scm.com/) *(for cloning the repository)*

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Hermitxxx/B13-A05-reazul-hassan.git
```

2. **Navigate to the project directory:**

```bash
cd B13-A05-reazul-hassan
```

3. **Open in your browser:**

```bash
# Simply open index.html in your browser
open index.html
# or double-click the file in your file explorer
```

---

## 🔑 Demo Credentials

To explore the app without setting up an account, use the following test credentials:

| Field    | Value      |
|----------|------------|
| Username | `admin`    |
| Password | `admin123` |

---

## 🛠️ Tech Stack

| Technology   | Purpose                        |
|--------------|--------------------------------|
| HTML5        | Markup & page structure        |
| CSS3         | Styling & responsive layout    |
| JavaScript   | Application logic & interactivity |
| GitHub API   | Issue data fetching            |

---

## 📁 Project Structure

```
B13-A05-reazul-hassan/
├── index.html          # Main entry point / Login page
├── assets/
│   └── github-logo.png # GitHub branding assets
├── css/
│   └── style.css       # Application styles
├── js/
│   └── main.js         # Core JavaScript logic
└── README.md           # Project documentation
```

---

## 📖 How to Use

1. Open the application in your browser.
2. Enter your credentials on the login page *(use demo credentials above)*.
3. Click **Sign In** to access the issue dashboard.
4. Browse, filter, and manage your GitHub issues from the dashboard.

---

## 📚 JavaScript Concepts Used

This project is built with vanilla JavaScript. Below are key JS concepts applied throughout the codebase.

---

### 1️⃣ `var` vs `let` vs `const`

| Keyword | Scope | Re-declare | Re-assign | Hoisting Behaviour |
|---------|-------|------------|-----------|-------------------|
| `var` | Function | ✅ Yes | ✅ Yes | Hoisted, initialized as `undefined` |
| `let` | Block | ❌ No | ✅ Yes | Hoisted, but in **TDZ** (Temporal Dead Zone) |
| `const` | Block | ❌ No | ❌ No | Hoisted, but in **TDZ** (Temporal Dead Zone) |

```js
var name = "Alice";
var name = "Bob";    // ✅ Re-declaration allowed

let age = 25;
age = 26;            // ✅ Re-assignment allowed
// let age = 27;     // ❌ Re-declaration NOT allowed

const PI = 3.14;
// PI = 3.15;        // ❌ Neither re-declaration nor re-assignment allowed
```

> 💡 **Best Practice:** Prefer `const` by default, use `let` when you need to reassign, and avoid `var` in modern JavaScript.

---

### 2️⃣ Spread Operator (`...`)

The spread operator expands elements of an array or object. It's ideal for creating **shallow copies** without mutating the original.

```js
// Copying an array
const original = [1, 2, 3];
const copy = [...original];        // ✅ New array, original untouched

// Merging objects
const user = { name: "Reazul" };
const details = { age: 22, role: "dev" };
const merged = { ...user, ...details };
// { name: "Reazul", age: 22, role: "dev" }

// Spreading into function arguments
const nums = [10, 20, 30];
console.log(Math.max(...nums));    // 30
```

> 💡 Spread creates a **shallow copy** — nested objects still share the same reference.

---

### 3️⃣ `map()` vs `filter()` vs `forEach()`

All three are array methods that iterate over elements, but serve different purposes:

| Method | Returns | Mutates Original? | Use Case |
|--------|---------|-------------------|----------|
| `forEach()` | `undefined` | ❌ No | Side effects (logging, DOM updates) |
| `map()` | New array (transformed) | ❌ No | Transform every element |
| `filter()` | New array (filtered) | ❌ No | Select elements matching a condition |

```js
const numbers = [1, 2, 3, 4, 5];

// forEach — runs a function on each element, returns nothing
numbers.forEach(n => console.log(n * 2));   // logs 2,4,6,8,10

// map — transforms and returns a new array
const squared = numbers.map(n => n ** 2);   // [1, 4, 9, 16, 25]

// filter — returns elements passing the condition
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
```

> 💡 Chain them together for powerful data pipelines: `array.filter(...).map(...)`

---

### 4️⃣ Arrow Functions

Arrow functions are a concise ES6 syntax for writing functions. They are best suited for short, one-time-use operations.

```js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function equivalent
const add = (a, b) => a + b;

// Single parameter — parentheses optional
const double = n => n * 2;

// No parameters
const greet = () => "Hello, World!";

// Multi-line with curly braces
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

> ⚠️ Arrow functions do **not** have their own `this` — they inherit it from the surrounding scope. Avoid using them as object methods or constructors.

---

### 5️⃣ Template Literals

Template literals offer a more flexible and readable way to work with strings. They support embedded expressions, multiline strings, and dynamic content.

```js
const name = "Reazul";
const role = "Developer";

// Old way (string concatenation)
const msg1 = "Hello, " + name + "! You are a " + role + ".";

// Template literal (backticks)
const msg2 = `Hello, ${name}! You are a ${role}.`;

// Multi-line string
const html = `
  <div>
    <h1>${name}</h1>
    <p>Role: ${role}</p>
  </div>
`;

// Expression inside template literal
const a = 5, b = 10;
console.log(`Sum of ${a} and ${b} is ${a + b}`); // Sum of 5 and 10 is 15
```

> 💡 Template literals support any valid JavaScript **expression** inside `${}`, including function calls, ternary operators, and arithmetic.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Reazul Hassan**

- GitHub: [@Hermitxxx](https://github.com/Hermitxxx)
- Project: [B13-A05-reazul-hassan](https://github.com/Hermitxxx/B13-A05-reazul-hassan)

---

## 🙏 Acknowledgements

- [GitHub](https://github.com) for the GitHub Issues API
- [Programming Hero](https://github.com/ProgrammingHero1) for the course assignment structure

---

> ⭐ If you found this project helpful, please consider giving it a star on GitHub!
