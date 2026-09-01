import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { Button } from './Button'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className="site-header">
      <div className="top-strip"><div className="container top-strip__inner"><span>Professional gas solutions across South Africa</span><a href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp {site.whatsappDisplay}</a></div></div>
      <div className="site-header__inner container">
        <Logo variant="light" />
        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'}>{link.label}</NavLink>)}
        </nav>
        <div className="site-header__actions">
          <a className="header-phone" href={site.phoneHref}>{site.phoneDisplay}</a>
          <Button to="/contact" className="site-header__cta">Request a Quote</Button>
          <button type="button" className="nav-toggle" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen(v => !v)}>
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span><span className="nav-toggle__bars"><span /><span /><span /></span>
          </button>
        </div>
      </div>
      <div className={`nav-drawer ${open ? 'is-open' : ''}`} id={menuId}>
        <nav className="nav-drawer__nav" aria-label="Mobile">
          {navLinks.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>{link.label}</NavLink>)}
          <Button to="/contact" onClick={() => setOpen(false)}>Request a Quote</Button>
        </nav>
      </div>
    </header>
  )
}
