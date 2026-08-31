export const site = {
  name: 'CH Gas Works',
  shortName: 'CH Gas Works',
  industry: 'Gas installation, repairs, maintenance and compressed gas systems',
  locale: 'en-ZA',
  phoneDisplay: '082 474 3960',
  phoneHref: 'tel:+27824743960',
  email: 'chgas@live.co.za',
  emailHref: 'mailto:chgas@live.co.za',
  whatsappDisplay: '082 474 3960',
  whatsappHref: 'https://wa.me/27824743960?text=Hi%20CH%20Gas%20Works%2C%20I%20would%20like%20to%20enquire%20about%20your%20gas%20services.',
  serviceArea: 'South Africa',
  hours: 'Monday – Friday, 08:00 – 17:00',
  founded: '2012',
  gasExperience: 'Since 1999',
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
] as const
