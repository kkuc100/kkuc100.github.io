import { useEffect } from 'react'

const SITE_NAME = 'Kevin Kuc · Senior Data Scientist'

// Sets a per-route document title and meta description.
export const usePageMeta = (title: string | null, description?: string) => {
  useEffect(() => {
    document.title = title ? `${title} · Kevin Kuc` : SITE_NAME
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }
  }, [title, description])
}
