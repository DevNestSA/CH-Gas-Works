import { Link } from 'react-router-dom'

type LogoProps = { variant?: 'dark' | 'light' }

export function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <Link to="/" className={`brand brand--${variant}`} aria-label="CH Gas Works home">
      <span className="brand__mark" aria-hidden="true">
        <span className="brand__flame" />
        <span className="brand__initials">CH</span>
      </span>
      <span className="brand__copy">
        <span className="brand__name">CH Gas Works</span>
        <span className="brand__slot">Gas Installation &amp; Maintenance</span>
      </span>
    </Link>
  )
}
