# Kevin Kuc - Senior Applied Scientist Portfolio

[![Deploy to GitHub Pages](https://github.com/kkuc100/kkuc100.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/kkuc100/kkuc100.github.io/actions/workflows/deploy.yml)

Professional portfolio website for Kevin Kuc, Senior Applied Scientist specializing in LLMs, RAG systems, and geospatial computer vision.

**Live Site:** [kevinkuc.com](https://kevinkuc.com) | [kkuc100.github.io](https://kkuc100.github.io)

## About

I'm a Senior Applied Scientist at a stealth NYC startup, working on drone imagery segmentation with SAM 3, GraphRAG systems, and MCP tools. Former US Marine Corps Intelligence Officer with active TS/SCI clearance. UC Berkeley MIDS graduate.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **UI Library:** Material-UI (MUI) v5
- **Styling:** Emotion (CSS-in-JS)
- **Routing:** React Router v6
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

```
├── public/              # Static assets (images, favicon, manifest)
├── src/
│   ├── components/      # Reusable components (Header, Footer)
│   ├── pages/          # Page components (Home, About, Projects, Contact)
│   ├── theme/          # MUI theme configuration
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component with routing
│   └── main.tsx        # Application entry point
├── index.html          # HTML template with SEO meta tags
└── vite.config.ts      # Vite configuration
```

## Features

- 🎨 Modern, responsive design optimized for all devices
- 🌙 Custom dark theme with MUI
- 🚀 Fast performance with Vite and code splitting
- 📱 Mobile-first responsive layout
- 🔍 SEO optimized with meta tags and structured data
- ♿ Accessible components following WCAG guidelines
- 📊 Project showcase with links to GitHub repositories

## Local Development

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kkuc100/kkuc100.github.io.git
cd kkuc100.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (default Vite port).

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle to `dist/`
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Runs on push to `main`
2. Installs dependencies with `npm ci`
3. Builds the production bundle with `npm run build`
4. Deploys the `dist/` folder to the `gh-pages` branch

The site is accessible at both [kevinkuc.com](https://kevinkuc.com) (custom domain) and [kkuc100.github.io](https://kkuc100.github.io).

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Then push the dist/ folder to gh-pages branch
```

## Custom Domain Configuration

The custom domain `kevinkuc.com` is configured via:
- DNS A records pointing to GitHub Pages IPs
- CNAME file in `public/` directory
- GitHub repository settings for custom domain

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2026 Kevin Kuc

## Connect

- **Portfolio:** [kevinkuc.com](https://kevinkuc.com)
- **GitHub:** [@kkuc100](https://github.com/kkuc100)
- **LinkedIn:** [linkedin.com/in/kevinkuc](https://linkedin.com/in/kevinkuc)
- **Email:** kkuc234@gmail.com
- **Location:** New York, NY

---

Built with ⚡ by Kevin Kuc
