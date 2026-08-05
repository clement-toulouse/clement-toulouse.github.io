import { useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useParallax } from '../hooks/useMotion'
import SplitHeading from './ui/SplitHeading'
import Magnetic from './ui/Magnetic'
import Portrait from './ui/Portrait'
import Icon from './ui/Icon'

/** Rend une phrase en colorant en accent iris les mots listés (couleur du site). */
function highlight(text: string, words: string[]) {
  if (words.length === 0) return text
  const pattern = new RegExp(`\\b(${words.join('|')})\\b`, 'g')
  return text.split(pattern).map((part, i) =>
    words.includes(part) ? (
      <span key={i} className="text-iris">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const root = useRef<HTMLElement>(null)
  const portrait = useRef<HTMLDivElement>(null)
  const follow = useRef<HTMLDivElement>(null)

  // Le portrait dérive au scroll et s'oriente vers la souris. Une seule boucle
  // rAF, uniquement des transforms et des variables CSS (jamais de layout).
  useParallax(({ scrollY, mouseX, mouseY }) => {
    const el = root.current
    if (!el) return

    const h = el.offsetHeight || 1
    const p = Math.min(scrollY / h, 1)
    if (p >= 1) return // hero sorti du viewport : on arrête d'écrire

    if (portrait.current) {
      portrait.current.style.transform = `translate3d(0, ${p * 70}px, 0)`
    }

    // Le portrait s'oriente vers le curseur. On n'écrit que des variables CSS :
    // la feuille de style compose l'inclinaison avec la respiration, sans que
    // les deux se disputent la propriété `transform`.
    if (follow.current) {
      const s = follow.current.style
      s.setProperty('--tilt-y', String(mouseX * 17))
      s.setProperty('--tilt-x', String(mouseY * -11))
      s.setProperty('--shift-x', String(mouseX * 16))
      s.setProperty('--shift-y', String(mouseY * 10))
    }
  })

  return (
    <section
      ref={root}
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        {/* Colonne texte */}
        <div className="intro">
          <SplitHeading
            as="h1"
            text={`${t.profile.firstName} ${t.profile.lastName}`}
            delay={0.25}
            className="display text-[clamp(2.4rem,8.4vw,5.6rem)] leading-[0.98] tracking-[-0.04em]"
          />

          {/* Le rôle se pose SOUS le nom : au-dessus, il redevenait l'eyebrow
              que ce site refuse — et une pastille bordée à effet de verre
              par-dessus. Même traitement `meta` que les en-têtes de section. */}
          <p
            style={{ '--d': 1 } as React.CSSProperties}
            className="intro-item mt-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink-mute"
          >
            {t.profile.role} · {t.profile.company}
          </p>

          <p
            style={{ '--d': 2 } as React.CSSProperties}
            className="intro-item mt-6 max-w-xl text-[clamp(1.05rem,2.2vw,1.35rem)] leading-[1.55] text-ink-soft"
          >
            {t.profile.tagline[0]}
            <br />
            <span className="serif-accent text-ink">
              {highlight(t.profile.tagline[1], t.profile.taglineHighlight)}
            </span>
          </p>

          <div
            style={{ '--d': 3 } as React.CSSProperties}
            className="intro-item mt-10 flex flex-wrap items-center gap-3 print:hidden"
          >
            <Magnetic strength={0.3}>
              <a
                href="#impact"
                className="group flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-shadow duration-300 hover:shadow-[0_14px_30px_-12px] hover:shadow-iris"
              >
                {t.hero.ctaImpact}
                <Icon
                  name="arrowRight"
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href={t.profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex cursor-pointer items-center gap-2.5 rounded-full border border-line bg-surface/50 px-6 py-3.5 text-sm font-semibold text-ink-soft backdrop-blur-xl transition-colors duration-300 hover:border-line-strong hover:text-ink"
              >
                <Icon name="linkedin" size={17} />
                {t.hero.ctaLinkedin}
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Portrait */}
        <div
          ref={portrait}
          className="relative mx-auto w-full max-w-sm lg:max-w-none print:mx-0 print:max-w-[190px]"
        >
          <div
            style={{ '--d': 3 } as React.CSSProperties}
            className="intro intro-item relative aspect-4/5"
          >

            {/* `portrait-follow` reçoit l'inclinaison depuis la souris (JS),
                `portrait-alive` porte la respiration (CSS) : deux éléments
                distincts, sinon les deux transforms s'écraseraient. */}
            <div ref={follow} className="portrait-follow h-full w-full">
              <div className="portrait-alive h-full w-full">
                <Portrait cutout className="portrait-graded" />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-6 left-0 flex items-center gap-6 rounded-2xl border border-line bg-canvas/70 px-4 py-3 backdrop-blur-xl print:hidden">
            <div>
              <p className="text-[13px] font-semibold leading-tight">
                {t.hero.locationCard.title}
              </p>
              <p className="text-[11.5px] text-ink-mute">{t.hero.locationCard.subtitle}</p>
            </div>
            <Icon name="mapPin" size={17} className="text-mint" />
          </div>

          {/* Badge flottant */}
          <div className="absolute -left-4 top-8 hidden rounded-2xl border border-line bg-surface/80 px-4 py-3 backdrop-blur-xl lg:block">
            <p className="display text-2xl text-mint">{t.hero.badge.value}</p>
            <p className="text-[11px] leading-tight text-ink-mute">{t.hero.badge.label}</p>
          </div>
        </div>
      </div>

      {/* Indice de scroll. Masqué sur mobile : le hero y dépasse la hauteur de
          l'écran, l'indice tombe sous la ligne de flottaison et ne serait vu
          qu'après avoir scrollé — exactement ce qu'il est censé déclencher. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-7 hidden justify-center sm:flex print:hidden"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line-strong p-1.5">
          <span className="scroll-dot h-2 w-1 rounded-full bg-ink-soft" />
        </div>
      </div>
    </section>
  )
}
