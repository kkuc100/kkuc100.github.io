import { useEffect } from 'react'

const SITE_NAME = 'Kevin Kuc · Senior Applied Scientist'
const descriptionTag = document.querySelector('meta[name="description"]')
const DEFAULT_DESCRIPTION = descriptionTag?.getAttribute('content') ?? ''

// Sets a per-route document title and meta description.
export const usePageMeta = (title: string | null, description?: string) => {
  useEffect(() => {
    document.title = title ? `${title} · Kevin Kuc` : SITE_NAME
    descriptionTag?.setAttribute('content', description ?? DEFAULT_DESCRIPTION)
  }, [title, description])
}
