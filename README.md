# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Folder Structure used :

my-react-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── static/
│       ├── images/
│       └── fonts/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   └── ...
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── ...
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── constants.js
│   │   └── ...
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   ├── ThemeContext.js
│   │   └── ...
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── tests/
│   ├── components/
│   │   ├── Header.test.js
│   │   ├── Footer.test.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.test.js
│   │   ├── About.test.js
│   │   └── ...
│   └── services/
│       ├── api.test.js
│       ├── auth.test.js
│       └── ...
├── .gitignore
├── package.json
├── package-lock.json
└── README.md