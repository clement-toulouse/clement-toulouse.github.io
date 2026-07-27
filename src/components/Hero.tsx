import { useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useParallax } from '../hooks/useMotion'
import SplitHeading from './ui/SplitHeading'
import Magnetic from './ui/Magnetic'
import Portrait from './ui/Portrait'
import Tilt from './ui/Tilt'
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
  const auroraA = useRef<HTMLDivElement>(null)
  const auroraB = useRef<HTMLDivElement>(null)
  const auroraC = useRef<HTMLDivElement>(null)
  const portrait = useRef<HTMLDivElement>(null)

  // Parallaxe : les halos dérivent au scroll et suivent doucement la souris.
  // Une seule boucle rAF, uniquement des transforms (jamais de layout).
  useParallax(({ scrollY, mouseX, mouseY }) => {
    const el = root.current
    if (!el) return

    const h = el.offsetHeight || 1
    const p = Math.min(scrollY / h, 1)
    if (p >= 1) return // hero sorti du viewport : on arrête d'écrire

    const set = (node: HTMLElement | null, drift: number, mx: number, my: number) => {
      if (!node) return
      node.style.transform = `translate3d(${mouseX * mx}px, ${p * drift + mouseY * my}px, 0)`
    }

    set(auroraA.current, 190, 70, 50)
    set(auroraB.current, -120, -50, -35)
    set(auroraC.current, 90, 30, 20)
    if (portrait.current) {
      portrait.current.style.transform = `translate3d(0, ${p * 70}px, 0)`
    }
  })

  return (
    <section
      ref={root}
      id="accueil"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Décor */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 grid-bg" />
        <div
          ref={auroraA}
          className="aurora -left-20 top-0 h-[38rem] w-[38rem]"
          style={{ background: 'radial-gradient(circle, var(--c-iris), transparent 65%)' }}
        />
        <div
          ref={auroraB}
          className="aurora right-0 top-40 h-[32rem] w-[32rem]"
          style={{ background: 'radial-gradient(circle, var(--c-mint), transparent 65%)' }}
        />
        <div
          ref={auroraC}
          className="aurora left-1/3 bottom-0 h-[26rem] w-[26rem] opacity-40"
          style={{ background: 'radial-gradient(circle, var(--c-ember), transparent 68%)' }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        {/* Colonne texte */}
        <div className="intro">
          <div
            style={{ '--d': 0 } as React.CSSProperties}
            className="intro-item mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/50 py-1.5 pl-2 pr-4 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <span className="text-[12.5px] font-medium text-ink-soft">
              {t.profile.role} · {t.profile.company}
            </span>
          </div>

          <SplitHeading
            as="h1"
            gradient
            text={`${t.profile.firstName} ${t.profile.lastName}`}
            delay={0.25}
            className="display text-[clamp(2.25rem,9vw,5.75rem)] text-gradient"
          />

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
                className="group flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-shadow duration-300 hover:shadow-[0_0_40px_-8px] hover:shadow-iris"
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
          <Tilt>
            <div
              style={{ '--d': 3 } as React.CSSProperties}
              className="intro intro-item relative aspect-4/5 overflow-hidden rounded-[26px] border border-line-strong"
            >
              <Portrait className="portrait-graded scale-105 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110" />
              {/* Fondu vers le fond, pour intégrer la photo à la page */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-canvas via-canvas/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-linear-135 from-iris/20 via-transparent to-mint/10" />

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-line bg-canvas/60 px-4 py-3 backdrop-blur-xl print:hidden">
                <div>
                  <p className="text-[13px] font-semibold leading-tight">
                    {t.hero.locationCard.title}
                  </p>
                  <p className="text-[11.5px] text-ink-mute">{t.hero.locationCard.subtitle}</p>
                </div>
                <Icon name="mapPin" size={17} className="text-mint" />
              </div>
            </div>
          </Tilt>

          {/* Badge flottant */}
          <div className="absolute -left-4 top-8 hidden rounded-2xl border border-line bg-surface/80 px-4 py-3 backdrop-blur-xl lg:block">
            <p className="display text-2xl text-mint">{t.hero.badge.value}</p>
            <p className="text-[11px] leading-tight text-ink-mute">{t.hero.badge.label}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
