# Arkadia Labs Website

Corporate website for Arkadia Labs GmbH - a cloud consulting and DevOps company based in Switzerland.

## Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router DOM
- **Styling:** CSS with CSS Variables
- **Theme:** Tokyo Night color scheme (dark/light mode)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation with logo and theme toggle
│   ├── Footer.jsx      # Contact info and address
│   ├── Hero.jsx        # Homepage hero section
│   └── ServiceCard.jsx # Reusable service card component
├── context/
│   └── ThemeContext.jsx # Dark/light theme state
├── pages/
│   ├── Home.jsx        # Homepage
│   └── ServicesPage.jsx # Services listing
├── App.jsx             # Main app with routing
└── App.css             # Global styles and CSS variables
```

## Features

- Responsive design
- Dark/light theme toggle (persisted to localStorage)
- Tokyo Night color scheme
- Custom cube logo

## Contact

- **Email:** halderm@arkadia-labs.io
- **Phone:** +41 41 768 11 61
- **Address:** Blegistrasse 11B, 6341 Baar, Switzerland
