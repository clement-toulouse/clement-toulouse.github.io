import { savor } from '../data/profile'
import { useReveal } from '../hooks/useMotion'
import SectionHeader from './ui/SectionHeader'
import Spotlight from './ui/Spotlight'
import Magnetic from './ui/Magnetic'
import Icon from './ui/Icon'

export default function Savor() {
  const grid = useReveal<HTMLDivElement>()

  return (
    <section
      id="savor"
      className="relative scroll-mt-24 overflow-hidden border-y border-line py-24 sm:py-32"
    >
      <div
        className="aurora -right-20 top-10 h-[30rem] w-[30rem] opacity-30"
        style={{ background: 'radial-gradient(circle, var(--c-ember), transparent 68%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow={savor.kicker}
          title="Savor"
          lead="Un Head of Product qui n'a jamais rien mené seul de bout en bout finit par oublier ce que coûte vraiment une décision. Savor est mon terrain d'entraînement : de l'idée à la mise en ligne, sans équipe pour rattraper mes choix."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-5">
          {/* Carte principale */}
          <Spotlight className="flex flex-col justify-between gap-8 p-8 sm:p-10 lg:col-span-3">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface-2 text-ember">
                <Icon name="chef" size={22} />
              </span>
              <h3 className="display mt-6 text-[clamp(1.8rem,4vw,2.8rem)]">{savor.pitch}</h3>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
                {savor.body}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                {savor.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>

              <Magnetic strength={0.3}>
                <a
                  href={savor.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-7 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-shadow duration-300 hover:shadow-[0_0_40px_-8px] hover:shadow-ember"
                >
                  Tester Savor en ligne
                  <Icon
                    name="arrowUpRight"
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Magnetic>
            </div>
          </Spotlight>

          {/* Features */}
          <div ref={grid} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {savor.features.map((f, i) => (
              <Spotlight key={f.title} className="p-6">
                <p className="font-mono text-[11px] text-ink-mute">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h4 className="mt-3 text-[15px] font-semibold leading-snug">{f.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-mute">{f.desc}</p>
              </Spotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
