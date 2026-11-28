import { useEffect } from 'react'
import seo from '../seo/pages.json'

export type PagePath = keyof typeof seo.pages

const setAttr = (selector: string, attr: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

const setRobots = (content: string) => {
  let tag = document.head.querySelector('meta[name="robots"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'robots')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

// Keeps <title>, description, canonical, and social tags in sync with the
// current route. Pass null for the not-found page, which is marked noindex.
// scripts/prerender-routes.mjs writes the same data into each page's static
// HTML at build time, so crawlers that skip JavaScript see it too.
export const usePageMeta = (path: PagePath | null) => {
  useEffect(() => {
    if (path === null) {
      document.title = seo.notFound.title
      setRobots('noindex')
      return () => setRobots('index, follow')
    }

    const { title, description } = seo.pages[path]
    const url = seo.siteUrl + path

    document.title = title
    setAttr('meta[name="description"]', 'content', description)
    setAttr('link[rel="canonical"]', 'href', url)
    setAttr('meta[property="og:url"]', 'content', url)
    setAttr('meta[property="og:title"]', 'content', title)
    setAttr('meta[property="og:description"]', 'content', description)
    setAttr('meta[name="twitter:title"]', 'content', title)
    setAttr('meta[name="twitter:description"]', 'content', description)
    return undefined
  }, [path])
}
