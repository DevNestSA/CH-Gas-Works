import { Link } from 'react-router-dom'

type LogoProps = { variant?: 'dark' | 'light'; compact?: boolean }

export function Logo({ variant = 'dark', compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={`brand brand--${variant} ${compact ? 'brand--compact' : ''}`}
      aria-label="CH Gas Works home"
    >
      <img
        className="brand__logo-image"
        src="/branding/ch-gas-works-logo.png"
        alt="CH Gas Works — Install, Repair, Maintain"
      />
    </Link>
  )
}
