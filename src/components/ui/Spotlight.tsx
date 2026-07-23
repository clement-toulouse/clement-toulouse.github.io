import type { HTMLAttributes, ReactNode } from 'react'

/**
 * Carte bento dont la bordure s'illumine à l'endroit du curseur.
 * On écrit --mx/--my en style inline : pas de state React, pas de re-render.
 */
export default function Spotlight({
  children,
  className = '',
  ...rest
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bento ${className}`}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
