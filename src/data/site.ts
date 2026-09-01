export const site = {
  name: 'CH Gas Works',
  shortName: 'CH Gas Works',
  industry: 'Gas installation, repairs, maintenance and related gas services',
  locale: 'en-ZA',
  url: '',
  phoneDisplay: '+27 82 474 3960',
  email: '',
  whatsappDisplay: '+27 82 474 3960',
  address: 'Contact us on WhatsApp for service availability and location details.',
  serviceArea: 'Residential, commercial and industrial clients',
  hours: 'Contact us for availability',
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
] as const

export function isPlaceholder(value: string) {
  return value.includes('[') && value.includes(']')
}

export function telHref(phone: string) {
  if (!phone || isPlaceholder(phone)) return undefined
  return `tel:${phone.replace(/\s+/g, '')}`
}

export function mailtoHref(email: string) {
  if (!email || isPlaceholder(email)) return undefined
  return `mailto:${email}`
}

export function whatsappHref(number: string, message?: string) {
  if (!number || isPlaceholder(number)) return undefined
  const digits = number.replace(/\D/g, '')
  const suffix = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${digits}${suffix}`
}

export function resolvedSiteUrl(path = '') {
  if (!site.url) return undefined
  return `${site.url.replace(/\/$/, '')}${path}`
}
