import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/** `useLayoutEffect` côté client, `useEffect` au prérendu (pas de DOM en Node). */
export const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const canHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

/**
 * Reveal au scroll. On se contente d'ajouter la classe `is-in` quand l'élément
 * entre dans le viewport : toute l'animation est en CSS, rien n'est animé en JS.
 * Les enfants directs sont décalés via `--i` (voir `.reveal` dans index.css).
 */
export function useReveal<T extends HTMLElement>(options?: {
  selector?: string
  /** Marge basse du déclenchement, en % de la hauteur du viewport. */
  offset?: number
}) {
  const ref = useRef<T>(null)
  const { selector, offset = 12 } = options ?? {}

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = Array.from(
      selector ? el.querySelectorAll<HTMLElement>(selector) : el.children,
    ) as HTMLElement[]
    if (targets.length === 0) return

    if (prefersReducedMotion()) {
      targets.forEach((t) => t.classList.add('is-in'))
      return
    }

    targets.forEach((t, i) => {
      t.classList.add('reveal')
      t.style.setProperty('--i', String(Math.min(i, 8)))
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: `0px 0px -${offset}% 0px` },
    )

    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [selector, offset])

  return ref
}

/** Ajoute `is-in` à un élément unique quand il entre dans le viewport. */
export function useInView<T extends HTMLElement>(offset = 12) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setInView(true)
      return
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: `0px 0px -${offset}% 0px` },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [offset])

  return [ref, inView] as const
}

/**
 * Compteur animé.
 *
 * Le DOM contient déjà la vraie valeur : c'est ce que lisent les crawlers, les
 * lecteurs d'écran et les visiteurs sans JS. On ne la remet à zéro qu'au moment
 * de lancer l'animation, dans un layout effect pour éviter tout scintillement.
 */
export function useCountUp(target: number, locale = 'fr', duration = 1600) {
  const ref = useRef<HTMLSpanElement>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    let raf = 0
    // Préserve les décimales de la cible (ex. 4.2) : `Math.round` seul les
    // aurait effacées à la fin de l'animation. Le séparateur suit la langue
    // (virgule en français), sans séparateur de milliers pour ne pas modifier
    // l'écriture des autres chiffres.
    const decimals = (String(target).split('.')[1] ?? '').length
    const fmt = (n: number) =>
      n.toFixed(decimals).replace('.', locale === 'fr' ? ',' : '.')

    el.textContent = fmt(0)

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          // easeOutExpo
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
          el.textContent = fmt(target * eased)
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      el.textContent = fmt(target)
    }
  }, [target, locale, duration])

  return ref
}

/** Progression de lecture 0→1, lue sur la frame d'animation. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}

/** Section actuellement visible, pour l'état actif de la nav. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join(',')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    key.split(',').forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [key])

  return active
}

/**
 * Boucle d'animation partagée, alimentée par la position de scroll et du
 * curseur. Un seul rAF pour toute la page plutôt qu'un par effet.
 */
export function useParallax(
  apply: (state: { scrollY: number; mouseX: number; mouseY: number }) => void,
) {
  // La callback est lue via une ref : la boucle n'est jamais recréée.
  const cb = useRef(apply)
  cb.current = apply

  useEffect(() => {
    if (prefersReducedMotion()) return

    let raf = 0
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    const hover = canHover()

    const loop = () => {
      // Lissage exponentiel : la souris "tire" les halos sans à-coups.
      mouseX += (targetX - mouseX) * 0.06
      mouseY += (targetY - mouseY) * 0.06
      cb.current({ scrollY: window.scrollY, mouseX, mouseY })
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth - 0.5
      targetY = e.clientY / window.innerHeight - 0.5
    }

    if (hover) window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      if (hover) window.removeEventListener('mousemove', onMove)
    }
  }, [])
}
