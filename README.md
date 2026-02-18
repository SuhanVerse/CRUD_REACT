# 🛒 Grocery Bud - React CRUD Application

A modern, feature-rich grocery list manager built with React and Vite. Manage your shopping list with ease using this elegant, responsive web application with persistent localStorage.

## 🌐 Live Demo

**[Visit Live Site](https://react.suhankhadka.com.np)**

---

## ✨ Features

- ✅ **Full CRUD Operations** - Create, Read, Update, Delete grocery items
- 💾 **Persistent Storage** - Data saved to localStorage, survives page refreshes
- ✏️ **Inline Editing** - Click edit to modify items seamlessly
- ☑️ **Completion Tracking** - Mark items as completed with custom checkboxes
- 🎨 **Modern UI/UX** - Clean, minimal design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🔔 **Toast Notifications** - Real-time feedback for all actions
- 🎯 **Form Validation** - Prevents empty entries
- ⚡ **Fast Performance** - Built with Vite for lightning-fast HMR

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 7
- **Styling:** CSS3 with CSS Custom Properties (CSS Variables)
- **Icons:** React Icons (Feather Icons)
- **Notifications:** React Toastify
- **ID Generation:** nanoid
- **Fonts:** Google Fonts (Playfair Display, DM Sans)
- **Deployment:** GitHub Pages

---

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/SuhanVerse/CRUD_REACT.git
cd CRUD_REACT
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see the app in action.

---

## 🚀 Deployment to GitHub Pages

### 1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Configure Vite

Create/update `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/", // Use '/' for custom domain, '/REPO_NAME/' for GitHub subdomain
});
```

### 3. Add Deploy Scripts

Update `package.json`:

```json
{
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
    }
}
```

### 4. Set Up Custom Domain (Optional)

Create `public/CNAME` file:

```
react.suhankhadka.com.np
```

### 5. Configure GitHub Authentication

Generate a Personal Access Token (classic):

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Generate new token with `repo` scope
3. Copy the token

Set up Git credentials:

```bash
# Configure Git to use the token
git config --global credential.helper store

# First push will ask for credentials - use:
# Username: YourGitHubUsername
# Password: <paste your token>
```

### 6. Deploy

```bash
npm run deploy
```

### 7. Configure GitHub Pages

1. Go to your repository on GitHub
2. **Settings → Pages**
3. Set source: **Deploy from a branch**
4. Branch: **gh-pages** / **(root)**
5. Save

Your site will be live in 1-2 minutes! 🎉

---

## 📁 Project Structure

```
CRUD_REACT/
├── public/
│   └── CNAME                    # Custom domain configuration
├── src/
│   ├── components/
│   │   ├── Form.jsx             # Add/Edit form component
│   │   ├── Form.css
│   │   ├── Items.jsx            # List container component
│   │   ├── Items.css
│   │   ├── SingleItem.jsx       # Individual item component
│   │   └── SingleItem.css
│   ├── data/
│   │   └── groceryItems.js      # Initial data (optional)
│   ├── App.jsx                  # Main application logic
│   ├── App.css
│   ├── global.css               # Global styles & CSS variables
│   ├── index.css                # CSS reset
│   └── main.jsx                 # React entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Key Features Explained

### LocalStorage Integration

All grocery items are automatically saved to browser localStorage:

```javascript
// Save to localStorage
const setLocalStorage = (items) => {
    localStorage.setItem("grocery-list", JSON.stringify(items));
};

// Load from localStorage on mount
const getLocalStorage = () => {
    const list = localStorage.getItem("grocery-list");
    return list ? JSON.parse(list) : [];
};
```

### Form Component with Edit Mode

The form intelligently switches between "Add" and "Update" modes using React's `key` prop for clean state management:

```jsx
<Form key={editId} {...props} />
```

When `editId` changes, React remounts the entire component, resetting form state naturally without cascading renders.

### Custom Checkbox Styling

CSS-only custom checkbox with smooth animations:

```css
input[type="checkbox"]:checked::after {
    content: "";
    border: solid white;
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg);
}
```

---

## 🎨 Styling Highlights

- **CSS Custom Properties** for consistent theming
- **Gradient backgrounds** for visual depth
- **Smooth animations** using CSS keyframes
- **Responsive design** with CSS Grid & Flexbox
- **Google Fonts** (Playfair Display for headers, DM Sans for body)

---

## 🐛 Troubleshooting

### Blank Page After Deployment

**Cause:** Incorrect `base` path in `vite.config.js`

**Solution:**

- For custom domain: `base: '/'`
- For GitHub subdomain: `base: '/REPO_NAME/'`

```bash
# Clean rebuild
rm -rf dist
npm run build
npm run deploy
```

### Authentication Failed During Deploy

**Cause:** GitHub password authentication is deprecated

**Solution:** Use Personal Access Token instead of password

### Changes Not Appearing After Deploy

**Cause:** GitHub Pages cache

**Solution:**

1. Hard refresh: `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)
2. Wait 2-3 minutes for GitHub Pages rebuild
3. Check if `gh-pages` branch was updated on GitHub

### LocalStorage Not Working

**Cause:** Private/Incognito browsing mode

**Solution:** Use normal browsing mode or check browser settings

---

## 📝 Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build locally  |
| `npm run deploy`  | Build and deploy to GitHub Pages  |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Suhan Khadka**

- GitHub: [@SuhanVerse](https://github.com/SuhanVerse)
- Website: [react.suhankhadka.com.np](https://react.suhankhadka.com.np)

---

## 🙏 Acknowledgments

- React Icons for beautiful icon sets
- React Toastify for elegant notifications
- Vite team for the amazing build tool
- Google Fonts for typography

---

## 📸 Screenshots

### Desktop View

![Desktop View](screenshots/desktop.png)

### Mobile View

![Mobile View](screenshots/mobile.png)

### Edit Mode

![Edit Mode](screenshots/edit.png)

---

## 🔮 Future Enhancements

- [ ] Dark mode toggle
- [ ] Categories/tags for items
- [ ] Drag-and-drop reordering
- [ ] Export/import list as JSON/CSV
- [ ] Shopping list sharing via URL
- [ ] Backend integration with Firebase/MongoDB
- [ ] User authentication
- [ ] Multi-language support

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/SuhanVerse/CRUD_REACT/issues) page
2. Create a new issue with detailed description
3. Contact via GitHub

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [SuhanVerse](https://github.com/SuhanVerse)

</div>
