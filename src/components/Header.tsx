import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/site'
import { Button } from './Button'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('nav-open')
    }
  }, [open])

  function close() {
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo variant="dark" />

        <nav className="nav-desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button to="/contact" className="site-header__cta">
            Request a Quote
          </Button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`nav-drawer ${open ? 'is-open' : ''}`}
        id={menuId}
        aria-hidden={!open}
      >
        <nav className="nav-drawer__nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={close}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/contact" onClick={close}>
            Request a Quote
          </Button>
        </nav>
      </div>
    </header>
  )
}
