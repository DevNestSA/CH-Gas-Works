type IconProps = {
  className?: string
}

const svg = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function IconInstall({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M4 20h16" />
      <path d="M7 20V9l5-4 5 4v11" />
      <path d="M10 20v-5h4v5" />
    </svg>
  )
}

export function IconRepair({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L4 17l3 3 5.1-5.1a4 4 0 0 0 5.6-5.6L16 11l-3-3 1.7-1.7z" />
    </svg>
  )
}

export function IconMaintain({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
    </svg>
  )
}

export function IconAppliance({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 7h8M8 11h5" />
      <circle cx="16" cy="16" r="1.2" />
    </svg>
  )
}

export function IconManifold({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M4 8h16M4 16h16" />
      <path d="M8 8v8M16 8v8" />
      <circle cx="8" cy="8" r="1.4" />
      <circle cx="16" cy="8" r="1.4" />
      <circle cx="8" cy="16" r="1.4" />
      <circle cx="16" cy="16" r="1.4" />
    </svg>
  )
}

export function IconCommercial({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 11h.01M15 11h.01M12 11h.01" />
    </svg>
  )
}

export function IconIndustrial({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V10h5l2 3h7v8" />
      <path d="M8 10V7h3v3" />
      <path d="M16 14v-3h3v3" />
    </svg>
  )
}

export function IconCoc({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M8 3h8l3 3v15H5V3h3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconFlame({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M12 3c1.5 3 2 4.5 2 6.5a4 4 0 0 1-8 0c0-1 .2-2 .8-3.2C8 8 8.5 9 10 9c0-3 1.2-5 2-6z" />
      <path d="M12 21a6 6 0 0 0 6-6c0-2.5-1.5-4.5-3-6 0 2-1 3.5-3 4.5-2-1-3-2.5-3-4.5-1.5 1.5-3 3.5-3 6a6 6 0 0 0 6 6z" />
    </svg>
  )
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M6.5 3h3L11 7l-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3A2 2 0 0 1 19 19 16 16 0 0 1 5 5a2 2 0 0 1 1.5-2z" />
    </svg>
  )
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  )
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...svg} className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  )
}

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12.04 3C7.07 3 3.05 6.95 3.05 11.85c0 1.96.57 3.8 1.56 5.35L3 21.05l4.01-1.54a9.1 9.1 0 0 0 5.03 1.49h.01c4.97 0 9-3.95 9-8.85S17.01 3 12.04 3zm5.25 12.62c-.22.62-1.28 1.14-1.78 1.2-.46.06-1.03.08-1.66-.1-.38-.12-.86-.28-1.48-.54-2.6-1.12-4.3-3.73-4.43-3.9-.13-.18-1.07-1.42-1.07-2.71 0-1.29.68-1.93.92-2.2.24-.26.52-.33.7-.33h.5c.16 0 .37-.06.58.44.22.52.75 1.82.82 1.95.07.13.11.28.02.45-.09.18-.13.28-.26.44-.13.15-.27.34-.39.46-.13.13-.26.26-.11.51.15.26.66 1.09 1.42 1.76 1 .88 1.82 1.16 2.1 1.29.28.13.44.11.6-.07.17-.18.7-.81.89-1.09.19-.28.37-.23.62-.13.26.09 1.63.77 1.91.91.28.13.46.2.53.32.07.13.07.73-.15 1.35z" />
    </svg>
  )
}

export const serviceIcons = {
  install: IconInstall,
  repair: IconRepair,
  maintain: IconMaintain,
  appliance: IconAppliance,
  manifold: IconManifold,
  commercial: IconCommercial,
  industrial: IconIndustrial,
  coc: IconCoc,
}
