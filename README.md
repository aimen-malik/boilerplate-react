
---

## 🌐 `public/`
Static assets served directly by Vite.

- `robots.txt` – Search engine crawling rules  
- `vite.svg` – Default Vite asset  

---

## 📦 `src/api/`
Handles API communication logic.

- **axios.js** – Axios instance with base URL and interceptors  
- **endpoints.js** – Centralized API endpoint definitions  

---

## 🎨 `src/assets/`
Global styles and static assets.

### `assets/css/`
Modular **SCSS architecture**:

- **utils/** – Variables, mixins, helpers
- **themes/** – Theme definitions (light, dark, etc.)
- **layout/** – Layout-level styling
- **bootstrap/** – Bootstrap overrides
- **plugins/** – Third-party plugin styles
- **styles.scss** – Main SCSS entry file (compiled once)

### `assets/images/`
Images, icons, and SVG assets.

---

## 🧩 `src/components/`
Reusable UI components.

- **carousel/** – Gallery and slider components
- **common/** – Shared UI elements (buttons, inputs, etc.)
- **loading/** – Loader and spinner components
- **toast/** – Toast/notification components

---

## 🔢 `src/constant/`
Global constants and configuration values.

- `constant.js`

---

## 🪝 `src/hooks/`
Custom React hooks.

- `useAuth.js` – Authentication-related logic

---

## 🌍 `src/lang/`
Localization and multi-language support.

- **messages/** – Language message files
- **lang.js** – Language configuration

---

## 🧱 `src/layouts/`
Application layout components.

- `MainLayout.jsx` – Common layout wrapper (header, footer, outlet)

Used with React Router nested routes.

---

## 🧭 `src/routing/`
Centralized routing configuration.

- `default-routes.js` – Route definitions
- `helper.js` – Route helpers and guards

---

## 🗃️ `src/store/`
Redux Toolkit setup.

- **auth/authSlice.js** – Authentication state
- **store.js** – Redux store configuration

---

## 📄 `src/views/pages/`
Route-level page components.

- `Home.jsx` – Example page

---

## 🚀 Root Files

- **App.jsx** – Root component
- **App.css** – App-level styles
- **index.css** – Global styles & resets

---

## ✅ Key Features

- ⚡ Vite-powered fast development
- 🧠 Redux Toolkit state management
- 🧭 React Router v6+
- 🎨 SCSS modular styling
- 🌍 Multi-language ready
- 🧩 Scalable folder architecture

---

## 🛠 Getting Started

```bash
npm install
npm run dev
