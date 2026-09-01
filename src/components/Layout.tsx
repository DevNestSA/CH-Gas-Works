import { Outlet, useLocation } from 'react-router-dom'
import { isPlaceholder, site, resolvedSiteUrl } from '../data/site'
import { CtaBanner } from './CtaBanner'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { pathname } = useLocation()
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description:
      'Professional gas installation, repair and maintenance solutions for residential, commercial and industrial clients.',
  }

  if (!isPlaceholder(site.phoneDisplay)) jsonLd.telephone = site.phoneDisplay
  if (!isPlaceholder(site.email)) jsonLd.email = site.email
  if (!isPlaceholder(site.serviceArea)) jsonLd.areaServed = site.serviceArea
  if (!isPlaceholder(site.address)) {
    jsonLd.address = {
      '@type': 'PostalAddress',
      streetAddress: site.address,
    }
  }

  const siteUrl = resolvedSiteUrl()
  if (siteUrl) jsonLd.url = siteUrl

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Outlet />
      {pathname !== '/contact' ? <CtaBanner /> : null}
      <Footer />
    </>
  )
}
