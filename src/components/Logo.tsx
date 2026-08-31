import { Link } from 'react-router-dom'

type LogoProps = { variant?: 'dark' | 'light'; compact?: boolean }

export function Logo({ variant = 'dark', compact = false }: LogoProps) {
  return (
    <Link to="/" className={`brand brand--${variant} ${compact ? 'brand--compact' : ''}`} aria-label="CH Gas Works home">
      <svg className="brand__mark" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="13" strokeDasharray="100 18 100 18" transform="rotate(-45 50 50)" />
        <path className="brand__flame" d="M50 77c-13-6-18-17-13-28 3-7 9-12 13-20 7 8 13 17 11 27 4-3 6-7 7-11 6 12 4 25-3 31-4 4-9 5-15 1Zm0-7c7 1 11-5 10-11-3 3-6 4-9 2 1-6-1-10-5-15-1 7-5 11-5 16 0 4 3 7 9 8Z" fill="currentColor" />
      </svg>
      <span className="brand__copy">
        <span className="brand__name"><b>CH</b> GAS WORKS</span>
        {!compact && <span className="brand__tagline">INSTALL • REPAIR • MAINTAIN</span>}
      </span>
    </Link>
  )
}
