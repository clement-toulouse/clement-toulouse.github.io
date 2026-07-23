/** Icônes SVG (traits Lucide, 24×24, stroke 1.75) — jamais d'emoji comme icône. */

const paths: Record<string, string> = {
  arrowUpRight: 'M7 17 17 7M7 7h10v10',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  mail: 'M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3.5 7.5 12 13l8.5-5.5',
  linkedin: 'M7 10v7M7 6.5v.01M12 17v-4a2.5 2.5 0 0 1 5 0v4M3.5 3.5h17v17h-17z',
  mapPin: 'M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11ZM12 10.5v.01',
  sparkles: 'M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z',
  terminal: 'M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 9l3 3-3 3M13 15h4',
  layers: 'M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 17.5l9 5 9-5',
  workflow: 'M4 4h6v6H4zM14 14h6v6h-6zM10 7h4a3 3 0 0 1 3 3v4',
  trending: 'M3 17 9.5 10.5l4 4L21 7M15 7h6v6',
  users: 'M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 20v-2a4 4 0 0 0-3-3.9M16 2.1a4 4 0 0 1 0 7.8',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  moon: 'M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z',
  chef: 'M7 21h10M6.5 17h11l.6-6.2a4.2 4.2 0 1 0-4.4-6.1 4.2 4.2 0 0 0-7.4 2.7 4.2 4.2 0 0 0-.4 3.4Z',
  graduation: 'M12 3 2 8l10 5 10-5-10-5ZM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5',
  quote: 'M9 7c-2.5 1-4 3.2-4 6v4h5v-5H7c0-1.8.8-3.2 2.4-4Zm10 0c-2.5 1-4 3.2-4 6v4h5v-5h-3c0-1.8.8-3.2 2.4-4Z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
}

export type IconName = keyof typeof paths

export default function Icon({
  name,
  size = 20,
  className = '',
  strokeWidth = 1.75,
}: {
  name: IconName
  size?: number
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  )
}
