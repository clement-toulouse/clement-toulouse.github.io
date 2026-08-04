import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../../hooks/useMotion'

type Props = {
  text: string
  className?: string
  /** Délai avant le déclenchement, en secondes (variante au chargement). */
  delay?: number
  /** Anime à l'entrée dans le viewport plutôt qu'au chargement. */
  onScroll?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'p'
}

/**
 * Reveal caractère par caractère, en CSS pur : chaque caractère porte son
 * index dans `--c` et l'animation calcule son propre délai. Le texte complet
 * reste exposé aux lecteurs d'écran via `aria-label`.
 *
 * Réservé aux titres courts : un élément DOM par caractère.
 */
export default function SplitHeading({
  text,
  className = '',
  delay = 0,
  onScroll = false,
  as: Tag = 'h2',
}: Props) {
  const ref = useRef<HTMLElement>(null)
  // Toujours `false` au premier rendu, pour que le prérendu et l'hydratation
  // produisent exactement le même HTML.
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      setPlay(true)
      return
    }

    if (!onScroll) {
      const t = setTimeout(() => setPlay(true), delay * 1000)
      return () => clearTimeout(t)
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPlay(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [onScroll, delay])


  const words = text.split(' ')
  let index = 0

  return (
    <Tag
      ref={ref as never}
      className={`split ${play ? 'is-in' : ''} ${className}`}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {[...word].map((c, ci) => (
            <span key={ci} className="char" style={{ '--c': index++ } as React.CSSProperties}>
              {c}
            </span>
          ))}
          {wi < words.length - 1 && (
            <span className="char" style={{ '--c': index++ } as React.CSSProperties}>
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </Tag>
  )
}
