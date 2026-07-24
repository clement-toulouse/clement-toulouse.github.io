/** Petit drapeau rond FR/EN pour le sélecteur de langue — SVG, jamais d'emoji. */
export default function Flag({ locale, size = 20 }: { locale: 'fr' | 'en'; size?: number }) {
  return (
    <span
      className="grid shrink-0 overflow-hidden rounded-full"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {locale === 'fr' ? (
        <svg viewBox="0 0 3 2" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <rect width="1" height="2" fill="#0055A4" />
          <rect width="1" height="2" x="1" fill="#F5F5F0" />
          <rect width="1" height="2" x="2" fill="#EF4135" />
        </svg>
      ) : (
        <svg viewBox="0 0 60 36" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <rect width="60" height="36" fill="#00247d" />
          <path d="M0,0 L60,36 M60,0 L0,36" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,36 M60,0 L0,36" stroke="#cf142b" strokeWidth="2.4" />
          <path d="M30,0 V36 M0,18 H60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 V36 M0,18 H60" stroke="#cf142b" strokeWidth="6" />
        </svg>
      )}
    </span>
  )
}
