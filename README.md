# Arkadia Labs Website

Corporate website for Arkadia Labs GmbH - a cloud consulting and DevOps company based in Switzerland.

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS 4 with CSS-based configuration
- **Components:** shadcn/ui (Button, Card)
- **Icons:** Lucide React
- **Theme:** Custom Swiss-precision design with electric blue/purple accents (dark/light mode)
- **Typography:** Syne (display) + Outfit (body) + JetBrains Mono (code)

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

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── button.jsx     # shadcn Button component
│   │   └── card.jsx       # shadcn Card component
│   ├── Header.jsx         # Glass navigation with theme toggle
│   ├── Footer.jsx         # Contact info and address
│   ├── Hero.jsx           # Animated hero with geometric elements
│   └── ServiceCard.jsx    # Service card with icons and features
├── context/
│   └── ThemeContext.jsx   # Dark/light theme state (localStorage)
├── lib/
│   └── utils.js           # Tailwind merge utility (cn function)
├── pages/
│   ├── Home.jsx           # Homepage with hero, services, CTA
│   ├── ServicesPage.jsx   # Full services listing with process section
│   ├── ImpressumPage.jsx  # Legal notice (Swiss UCA compliant)
│   └── PrivacyPage.jsx    # Privacy policy (Swiss FADP compliant)
├── App.jsx                # Main app with routing
└── index.css              # Tailwind config and custom utilities
```

## Features

- Responsive design (mobile-first)
- Dark/light theme toggle (persisted to localStorage)
- Glass morphism navigation header
- Animated gradient text and geometric backgrounds
- Card hover effects with gradient borders
- Custom animations (fade-up, float, shimmer)
- shadcn/ui component primitives
- Swiss legal compliance (Impressum, Privacy Policy)

## Deployment

The site automatically deploys to AWS S3 + CloudFront on push to `main`.

### Required GitHub Secrets

| Secret                       | Description                       |
| ---------------------------- | --------------------------------- |
| `AWS_ACCESS_KEY_ID`          | AWS IAM access key                |
| `AWS_SECRET_ACCESS_KEY`      | AWS IAM secret key                |
| `AWS_REGION`                 | AWS region (e.g., `eu-central-1`) |
| `S3_BUCKET`                  | S3 bucket name                    |
| `CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID        |

### Manual Deployment

```bash
npm run build
aws s3 sync dist/ s3://arkadia-labs-io --delete
aws cloudfront create-invalidation --distribution-id E2XF4834XDGVMV --paths "/*"
```

## Contact

- **Email:** halderm@arkadia-labs.io
- **Phone:** +41 41 768 11 61
- **Address:** Blegistrasse 11B, 6341 Baar, Switzerland
