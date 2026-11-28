# kkuc100.github.io

Source for [kkuc100.github.io](https://kkuc100.github.io), Kevin Kuc's portfolio site.

Built with React 18, TypeScript, Vite, Material UI, and React Router. Hosted on GitHub Pages.

## Development

Requires Node 20+.

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run lint
npm run build     # type-checks, then builds to dist/
npm run preview   # serves the built dist/ locally
```

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages. Other branches (such as `dev`) are not deployed.

## Project layout

```
index.html              Page shell, SEO meta tags, JSON-LD structured data
public/                 Copied as-is into the build
  404.html              GitHub Pages SPA fallback (see below)
  img/                  Images and app icons
  manifest.json, robots.txt, sitemap.xml
src/
  main.tsx              Entry: router + MUI theme
  App.tsx               Routes (About, Projects, Contact, and the 404 page load on demand)
  theme/theme.ts        Colors, typography, component overrides
  components/           Header, Footer, PageHeader
  pages/                Home, About, Projects, Contact, NotFound
  utils/usePageMeta.ts  Sets the per-page <title> and meta description
```

## Client-side routing on GitHub Pages

GitHub Pages has no fallback for single-page apps, so a direct visit to `/about` would 404. `public/404.html` catches that and redirects to `/?/about`. A small script in `index.html` then restores `/about` in the address bar before React Router starts. Unknown paths end up on the in-app Not Found page.

## Common edits

- **Projects:** edit the `projects` array in `src/pages/Projects.tsx`. Featured cards on the home page are in `src/pages/Home.tsx`.
- **New page:** add a component in `src/pages/`, a `<Route>` in `src/App.tsx`, a link in `Header.tsx` and `Footer.tsx`, and a URL in `public/sitemap.xml`.
- **Images:** put files in `public/img/` and reference them as `/img/name.jpg`. Everything in `public/` ships with the site, so delete images you stop using.
