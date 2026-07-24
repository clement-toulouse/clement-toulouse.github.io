/** Vignette de recette en vue du dessus, illustration vectorielle (pas une photo) pour le mockup Savor. */
export default function RecipeArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#e9e2d3" />
      <circle cx="50" cy="50" r="41" fill="#5f8f56" />
      <ellipse cx="38" cy="40" rx="9" ry="6.5" fill="#c9453a" transform="rotate(-12 38 40)" />
      <ellipse cx="63" cy="35" rx="7" ry="5" fill="#f4ead9" transform="rotate(18 63 35)" />
      <ellipse cx="68" cy="58" rx="8" ry="6" fill="#c9453a" transform="rotate(30 68 58)" />
      <ellipse cx="34" cy="63" rx="6.5" ry="5" fill="#f4ead9" transform="rotate(-20 34 63)" />
      <circle cx="52" cy="50" r="4.5" fill="#e3b24a" />
      <circle cx="44" cy="55" r="3.5" fill="#e3b24a" />
      <circle cx="58" cy="46" r="3.5" fill="#e3b24a" />
      <path d="M46 30q3-4 7 0" stroke="#3f6b3a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M60 66q3-4 7 0" stroke="#3f6b3a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}
