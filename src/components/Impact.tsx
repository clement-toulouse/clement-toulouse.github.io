import { useLanguage } from '../i18n/LanguageContext'
import type { Stat } from '../data/content'
import { useCountUp, useReveal } from '../hooks/useMotion'
import Spotlight from './ui/Spotlight'
import SectionHeader from './ui/SectionHeader'
import Icon from './ui/Icon'

const accentClass = {
  iris: 'text-iris-soft',
  mint: 'text-mint',
  ember: 'text-ember',
} as const

function StatCard({ stat }: { stat: Stat }) {
  // La vraie valeur est écrite dans le DOM : c'est elle que lisent les
  // crawlers, les lecteurs d'écran et les visiteurs sans JS. Le compteur ne
  // repart de zéro que si l'animation peut effectivement se jouer.
  const ref = useCountUp(stat.value)
  const accent = accentClass[stat.accent ?? 'iris']

  return (
    // Pas de `justify-between` : le bloc de texte suit directement le chiffre,
    // qui a la même hauteur partout — les libellés s'alignent d'une carte à
    // l'autre, quelle que soit la longueur du détail.
    <Spotlight className="flex flex-col p-6 sm:p-7">
      <p className="display text-[clamp(2.4rem,6vw,3.6rem)] tabular-nums">
        <span className={accent}>{stat.prefix}</span>
        <span ref={ref} className={accent}>
          {stat.value}
        </span>
        <span className={accent}>{stat.suffix}</span>
      </p>
      <div className="mt-4">
        <p className="text-[15px] font-semibold leading-snug">{stat.label}</p>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-mute">{stat.detail}</p>
        {stat.note && (
          <p className="mt-1.5 text-[13.5px] italic leading-relaxed text-ink-mute">{stat.note}</p>
        )}
      </div>
    </Spotlight>
  )
}

export default function Impact() {
  const { t } = useLanguage()
  const grid = useReveal<HTMLDivElement>()

  return (
    <section
      id="impact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeader
        eyebrow={t.sections.impact.eyebrow}
        title={t.sections.impact.title}
        lead={t.sections.impact.lead}
      />

      <div ref={grid} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.stats.map((s) => (
          <StatCard key={s.label} stat={s} />
        ))}
      </div>

      {/* Bloc manifeste */}
      <Spotlight className="mt-4 grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12">
        <div className="flex items-start">
          <Icon name="quote" size={40} className="text-iris/60" />
        </div>
        <div>
          <p className="serif-accent text-[clamp(1.35rem,3vw,2rem)] leading-[1.35] text-ink">
            {t.impactQuote}
          </p>
        </div>
      </Spotlight>
    </section>
  )
}
