// Runs after `vite build`. GitHub Pages has no SPA fallback: a request for
// /projects would get public/404.html with an HTTP 404 status, so search
// engines would treat the page as missing. This script writes dist/projects.html,
// dist/contact.html, etc. (GitHub Pages serves /projects from projects.html with
// a 200), each with its own title, description, canonical URL, and social tags.
// It also writes dist/about.html, which redirects the old About URL to /#about.
import { readFile, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const seo = JSON.parse(await readFile(new URL('../src/seo/pages.json', import.meta.url), 'utf8'))
const template = await readFile(new URL('index.html', dist), 'utf8')

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Replace the value of one attribute on the single tag that matches `tagPattern`.
const setTag = (html, tagPattern, attr, value) => {
  const re = new RegExp(`(<${tagPattern}[^>]*?\\s${attr}=")[^"]*(")`)
  if (!re.test(html)) throw new Error(`prerender: tag not found: ${tagPattern}`)
  return html.replace(re, `$1${escape(value)}$2`)
}

const render = (path, { title, description }) => {
  const url = seo.siteUrl + path
  let html = template
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
  html = setTag(html, 'meta name="description"', 'content', description)
  html = setTag(html, 'link rel="canonical"', 'href', url)
  html = setTag(html, 'meta property="og:url"', 'content', url)
  html = setTag(html, 'meta property="og:title"', 'content', title)
  html = setTag(html, 'meta property="og:description"', 'content', description)
  html = setTag(html, 'meta name="twitter:title"', 'content', title)
  html = setTag(html, 'meta name="twitter:description"', 'content', description)
  if (path !== '/') {
    html = html.replace(/\s*<!--[^>]*Home hero image[^>]*-->\s*<link[^>]*data-home-only[^>]*>/, '')
  }
  return html
}

const written = []
for (const [path, meta] of Object.entries(seo.pages)) {
  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
  await writeFile(new URL(file, dist), render(path, meta))
  written.push(file)
}

await writeFile(
  new URL('about.html', dist),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>About · Kevin Kuc</title>
    <link rel="canonical" href="${seo.siteUrl}/" />
    <meta name="robots" content="noindex, follow" />
    <meta http-equiv="refresh" content="0; url=/#about" />
  </head>
  <body style="margin:0;background:#121410">
    <a href="/#about" style="color:#f6f1e8">About Kevin Kuc</a>
  </body>
</html>
`,
)
written.push('about.html (redirect)')

console.log(`prerender: wrote ${written.join(', ')}`)
