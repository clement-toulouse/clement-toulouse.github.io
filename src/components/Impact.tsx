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

/**
 * Une statistique. `lead` donne au chiffre de tête une échelle et une
 * composition différentes : quatre cartes jumelles feraient de la grille la
 * structure de la page, et rien ne dirait plus lequel de ces chiffres compte.
 */
function StatCard({ stat, locale, lead = false }: { stat: Stat; locale: string; lead?: boolean }) {
  // La vraie valeur est écrite dans le DOM : c'est elle que lisent les
  // crawlers, les lecteurs d'écran et les visiteurs sans JS. Le compteur ne
  // repart de zéro que si l'animation peut effectivement se jouer.
  const ref = useCountUp(stat.value, locale)
  const accent = accentClass[stat.accent ?? 'iris']
  // Écrit aussi la valeur au bon format dès le rendu : le prérendu et le mode
  // « animations réduites » ne passent jamais par le compteur.
  const value = locale === 'fr' ? String(stat.value).replace('.', ',') : String(stat.value)

  const number = (
    <p
      className={`display tabular-nums ${
        lead ? 'text-[clamp(4rem,11vw,7.5rem)]' : 'text-[clamp(2.4rem,6vw,3.4rem)]'
      }`}
    >
      <span className={accent}>{stat.prefix}</span>
      <span ref={ref} className={accent}>
        {value}
      </span>
      <span className={accent}>{stat.suffix}</span>
    </p>
  )

  const text = (
    <div className={lead ? 'max-w-sm' : 'mt-4'}>
      <p className={`font-semibold leading-snug ${lead ? 'text-[19px]' : 'text-[15px]'} ${accent}`}>
        {stat.label}
      </p>
      <p
        className={`mt-2 leading-relaxed text-ink-mute ${lead ? 'text-[14.5px]' : 'text-[13.5px]'}`}
      >
        {stat.detail}
      </p>
      {stat.note && (
        <p
          className={`mt-1.5 italic leading-relaxed text-ink-mute ${
            lead ? 'text-[14.5px]' : 'text-[13.5px]'
          }`}
        >
          {stat.note}
        </p>
      )}
    </div>
  )

  if (lead) {
    return (
      <Spotlight className="flex flex-col justify-between gap-6 p-7 sm:p-9 lg:col-span-3 lg:flex-row lg:items-end">
        {number}
        {text}
      </Spotlight>
    )
  }

  // Pas de `justify-between` : le bloc de texte suit directement le chiffre,
  // qui a la même hauteur partout — les libellés s'alignent d'une carte à
  // l'autre, quelle que soit la longueur du détail.
  return (
    <Spotlight className="flex flex-col p-6 sm:p-7">
      {number}
      {text}
    </Spotlight>
  )
}

export default function Impact() {
  const { t, locale } = useLanguage()
  const grid = useReveal<HTMLDivElement>()

  return (
    <section
      id="impact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeader
        title={t.sections.impact.title}
        lead={t.sections.impact.lead}
      />

      {/* Le premier chiffre porte la section : il occupe toute la largeur et
          une échelle à part, les trois autres le soutiennent en dessous. */}
      <div ref={grid} className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.stats.map((s, i) => (
          <StatCard key={s.label} stat={s} locale={locale} lead={i === 0} />
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
