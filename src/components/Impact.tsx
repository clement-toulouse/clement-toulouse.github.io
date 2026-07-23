import { profile, stats, type Stat } from '../data/profile'
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
    <Spotlight className="flex flex-col justify-between p-6 sm:p-7">
      <p className="display text-[clamp(2.4rem,6vw,3.6rem)] tabular-nums">
        {stat.prefix}
        <span ref={ref} className={accent}>
          {stat.value}
        </span>
        <span className={accent}>{stat.suffix}</span>
      </p>
      <div className="mt-4">
        <p className="text-[15px] font-semibold leading-snug">{stat.label}</p>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-mute">{stat.detail}</p>
      </div>
    </Spotlight>
  )
}

export default function Impact() {
  const grid = useReveal<HTMLDivElement>()

  return (
    <section
      id="impact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeader
        eyebrow="Ce que ça a produit"
        title="L'impact avant le discours"
        lead="Une roadmap qui ne se mesure pas n'est qu'une liste d'envies. Voici ce que mes équipes et moi avons livré ces trois dernières années, en chiffres."
      />

      <div ref={grid} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
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
            « Un bon produit, c'est une décision qu'on peut défendre avec un chiffre, et une
            équipe qui comprend pourquoi on l'a prise. »
          </p>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            {profile.intro}
          </p>
        </div>
      </Spotlight>
    </section>
  )
}
