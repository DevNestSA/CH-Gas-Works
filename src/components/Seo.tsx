import { useEffect } from 'react'
import { resolvedSiteUrl } from '../data/site'

type SeoProps = {
  title: string
  description: string
  path: string
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value))
}

export function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    const pageUrl = resolvedSiteUrl(path)
    if (pageUrl) {
      upsertMeta('meta[property="og:url"]', {
        property: 'og:url',
        content: pageUrl,
      })
    }
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    if (pageUrl) {
      canonical.href = pageUrl
    } else {
      canonical.remove()
    }
  }, [title, description, path])

  return null
}
