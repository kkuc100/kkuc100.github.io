# Kevin Kuc · Senior Applied Scientist Portfolio

[![Deploy to GitHub Pages](https://github.com/kkuc100/kkuc100.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/kkuc100/kkuc100.github.io/actions/workflows/deploy.yml)

Source for [kevinkuc.com](https://kevinkuc.com) (also served at [kkuc100.github.io](https://kkuc100.github.io)), Kevin Kuc's portfolio site.

Built with React 18, TypeScript, Vite, Material UI, and React Router. Hosted on GitHub Pages.

## Development

Requires Node 20+.

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run lint
npm run build     # type-checks, builds to dist/, then writes per-page HTML
npm run preview   # serves the built dist/ locally
```

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages. Other branches (such as `dev`) are not deployed.

### Custom domain

`kevinkuc.com` is set up through DNS A records pointing at GitHub Pages, the `public/CNAME` file, and the custom domain setting in the repository's Pages settings. Canonical URLs, the sitemap, and structured data all use `https://kevinkuc.com` (from `siteUrl` in `src/seo/pages.json` and the tags in `index.html`).

## Project layout

```
index.html              Page shell, SEO meta tags, JSON-LD structured data
public/                 Copied as-is into the build
  404.html              GitHub Pages SPA fallback (see below)
  CNAME                 Custom domain (kevinkuc.com)
  img/                  Images and app icons
  manifest.json, robots.txt, sitemap.xml
src/
  main.tsx              Entry: router + MUI theme
  App.tsx               Routes (Projects, Contact, and the 404 page load on demand)
  seo/pages.json        Title and description for each page
  theme/theme.ts        Colors, typography, component overrides
  components/           Header, Footer, PageHeader, AboutSection (shown on Home)
  pages/                Home, Projects, Contact, NotFound
  utils/usePageMeta.ts  Updates title, description, canonical, and social tags on navigation
scripts/
  prerender-routes.mjs  Post-build: writes projects.html, contact.html, about.html
  make-icons.py         Regenerates favicon and app icons from the theme colors
```

## Routing and SEO on GitHub Pages

GitHub Pages has no fallback for single-page apps. Without help, a visit to `/projects` would get `404.html` with an HTTP 404 status, and search engines would treat the page as missing.

- `scripts/prerender-routes.mjs` runs after the Vite build and writes `projects.html` and `contact.html`. GitHub Pages serves `/projects` from `projects.html` with a 200 status. Each file has its own title, description, canonical URL, and social tags from `src/seo/pages.json`.
- `about.html` redirects the old `/about` URL to the About section on the home page (`/#about`).
- Any other path hits `public/404.html`, which redirects to `/?/path`. A script in `index.html` restores the path, and the app shows its Not Found page (marked `noindex`).

## Common edits

- **Projects:** edit the `projects` array in `src/pages/Projects.tsx`. Featured cards on the home page are in `src/pages/Home.tsx`; the About section is `src/components/AboutSection.tsx`.
- **New page:** add a component in `src/pages/` that calls `usePageMeta('/path')`, an entry in `src/seo/pages.json`, a `<Route>` in `src/App.tsx`, links in `Header.tsx` and `Footer.tsx`, and a URL in `public/sitemap.xml`.
- **Colors:** edit the constants at the top of `src/theme/theme.ts`, then run `python3 scripts/make-icons.py` (needs Pillow) so the favicon and app icons match. Also update `theme-color` in `index.html`, the colors in `public/manifest.json` and `public/404.html`, and the body colors in `src/index.css`.
- **Images:** put files in `public/img/` and reference them as `/img/name.jpg`. Everything in `public/` ships with the site, so delete images you stop using.

## License

MIT. See [LICENSE](LICENSE).
