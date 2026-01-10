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
aws s3 sync dist/ s3://your-bucket --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Contact

- **Email:** halderm@arkadia-labs.io
- **Phone:** +41 41 768 11 61
- **Address:** Blegistrasse 11B, 6341 Baar, Switzerland
