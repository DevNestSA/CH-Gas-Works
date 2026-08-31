import { Outlet, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { CtaBanner } from './CtaBanner'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { pathname } = useLocation()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description:
      'Professional gas installation, repair and maintenance solutions for residential, commercial and industrial clients.',
    telephone: site.phoneDisplay,
    email: site.email,
    areaServed: site.serviceArea,
    url: undefined,
  }

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
