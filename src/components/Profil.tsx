import { education, languages, skills } from '../data/profile'
import { useReveal } from '../hooks/useMotion'
import SectionHeader from './ui/SectionHeader'
import Spotlight from './ui/Spotlight'
import Icon from './ui/Icon'

export default function Profil() {
  const grid = useReveal<HTMLDivElement>()

  return (
    <section
      id="profil"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeader
        eyebrow="Profil"
        title="Ce que j'apporte"
        lead="Un ingénieur qui a basculé côté produit, et qui a gardé le goût du concret : des systèmes qui tiennent, des équipes qui décident vite, des chiffres qui bougent."
      />

      <div ref={grid} className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {skills.map((s) => (
          <Spotlight key={s.group} className="p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface-2 text-iris-soft">
                <Icon
                  name={s.group === 'Produit' ? 'target' : s.group === 'Leadership' ? 'users' : 'sparkles'}
                  size={17}
                />
              </span>
              <h3 className="text-[15px] font-semibold">{s.group}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <li key={i} className="chip">
                  {i}
                </li>
              ))}
            </ul>
          </Spotlight>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Formation */}
        <Spotlight className="p-7 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface-2 text-mint">
              <Icon name="graduation" size={17} />
            </span>
            <h3 className="text-[15px] font-semibold">Formation & certifications</h3>
          </div>
          <div className="mt-6 space-y-5">
            {education.map((e) => (
              <div key={e.title} className="border-l border-line pl-5">
                <p className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-[15px] font-semibold">{e.title}</span>
                  <span className="text-[12.5px] text-ink-mute">{e.period}</span>
                </p>
                <p className="mt-1 text-[13.5px] text-ink-soft">{e.detail}</p>
              </div>
            ))}
          </div>
        </Spotlight>

        {/* Langues */}
        <Spotlight className="p-7 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface-2 text-ember">
              <Icon name="layers" size={17} />
            </span>
            <h3 className="text-[15px] font-semibold">Langues</h3>
          </div>
          <div className="mt-6 space-y-6">
            {languages.map((l) => (
              <div key={l.name}>
                <p className="flex items-baseline justify-between gap-3">
                  <span className="text-[15px] font-semibold">{l.name}</span>
                  <span className="text-[12.5px] text-ink-mute">{l.level}</span>
                </p>
                {/* La valeur est aussi donnée en texte : la barre n'est pas le seul porteur d'info */}
                <div
                  className="mt-2.5 h-1 overflow-hidden rounded-full bg-surface-2"
                  role="presentation"
                >
                  <div
                    className="h-full rounded-full bg-linear-to-r from-iris to-mint transition-[width] duration-1000"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Spotlight>
      </div>
    </section>
  )
}
