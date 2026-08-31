import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'on-dark'

type Common = {
  children: ReactNode
  className?: string
  variant?: Variant
}

type ButtonAsButton = Common & {
  to?: never
  href?: never
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsLink = Common & {
  to: string
  href?: never
  onClick?: () => void
}

type ButtonAsAnchor = Common & {
  href: string
  to?: never
  target?: string
  rel?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const { children, className = '', variant = 'primary' } = props
  const classes = `btn btn--${variant} ${className}`.trim()

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes} target={props.target} rel={props.rel}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
