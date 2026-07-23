import { useEffect, useRef, type ReactNode } from 'react'
import { canHover, prefersReducedMotion } from '../../hooks/useMotion'

/**
 * Effet magnétique : l'élément suit légèrement le curseur, avec un retour
 * élastique au départ. Désactivé au pointeur grossier et en reduced-motion.
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className = '',
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !canHover()) return

    let raf = 0
    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let active = false

    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`

      if (!active && Math.abs(tx - x) < 0.1 && Math.abs(ty - y) < 0.1) {
        el.style.transform = ''
        raf = 0
        return
      }
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (!raf) raf = requestAnimationFrame(loop)
    }

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      tx = (e.clientX - (r.left + r.width / 2)) * strength
      ty = (e.clientY - (r.top + r.height / 2)) * strength
      active = true
      start()
    }
    const leave = () => {
      tx = 0
      ty = 0
      active = false
      start()
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [strength])

  return (
    <span ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  )
}
