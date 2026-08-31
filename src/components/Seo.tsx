import { useEffect } from 'react'

export function Seo({
  title,
  description,
}: {
  title: string
  description: string
  path?: string
}) {
  useEffect(() => {
    document.title = title

    let m = document.querySelector('meta[name="description"]')

    if (!m) {
      m = document.createElement('meta')
      m.setAttribute('name', 'description')
      document.head.appendChild(m)
    }

    m.setAttribute('content', description)

    const og = document.querySelector('meta[property="og:title"]')

    if (og) {
      og.setAttribute('content', title)
    }
  }, [title, description])

  return null
}
