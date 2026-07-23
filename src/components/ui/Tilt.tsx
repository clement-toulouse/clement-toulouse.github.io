import { useRef, type ReactNode } from 'react'
import { canHover, prefersReducedMotion } from '../../hooks/useMotion'

/**
 * Inclinaison 3D au survol : la carte pivote vers le curseur. La transition
 * CSS lisse les écarts entre deux événements pointer, pas besoin de rAF.
 * Aucun état React : premier rendu identique côté serveur et client.
 */
export default function Tilt({
  children,
  max = 7,
  className = '',
}: {
  children: ReactNode
  /** Inclinaison maximale, en degrés. */
  max?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const move = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !canHover()) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}
