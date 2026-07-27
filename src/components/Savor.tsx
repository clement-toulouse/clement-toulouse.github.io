import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useMotion'
import SectionHeader from './ui/SectionHeader'
import Spotlight from './ui/Spotlight'
import Magnetic from './ui/Magnetic'
import Tilt from './ui/Tilt'
import Icon, { type IconName } from './ui/Icon'
import RecipeArt from './ui/RecipeArt'
import type { SavorFeature } from '../data/content.types'

const featureIcon: Record<SavorFeature['key'], IconName> = {
  extract: 'sparkles',
  library: 'layers',
  cook: 'cutlery',
  plan: 'workflow',
}

export default function Savor() {
  const { t } = useLanguage()
  const grid = useReveal<HTMLDivElement>()

  return (
    <section
      id="projet-perso"
      className="relative scroll-mt-24 overflow-hidden border-y border-line py-24 sm:py-32"
    >
      <div
        className="aurora -right-20 top-10 h-[30rem] w-[30rem] opacity-30"
        style={{ background: 'radial-gradient(circle, var(--c-ember), transparent 68%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow={t.sections.savor.eyebrow}
          title="Savor"
          lead={t.sections.savor.lead}
        />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-5">
          {/* Carte principale */}
          <Spotlight className="flex flex-col gap-8 p-8 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col justify-between gap-8">
              <div>
                {/* Marque Savor : carré vert + couverts, reprise du logo du projet. */}
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#184d34] text-white shadow-[0_2px_8px_-2px_rgba(24,77,52,0.5)]">
                  <Icon name="cutlery" size={22} />
                </span>
                <h3 className="display mt-6 text-[clamp(1.8rem,4vw,2.8rem)]">{t.savor.pitch}</h3>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
                  {t.savor.body}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {t.savor.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>

                <Magnetic strength={0.3}>
                  <a
                    href={t.savor.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group mt-7 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-canvas transition-shadow duration-300 hover:shadow-[0_0_40px_-8px] hover:shadow-ember"
                  >
                    {t.savor.ctaLabel}
                    <Icon
                      name="arrowUpRight"
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Mockup illustratif : aperçu stylisé du produit, pas une capture réelle. */}
            <Tilt max={6} className="hidden shrink-0 lg:block">
              <div className="relative w-[230px]">
                <div
                  className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-line bg-surface-2/70"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-2xl border border-line bg-canvas shadow-[0_16px_40px_-16px_rgba(24,77,52,0.4)]">
                  <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3.5 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#e8927c]" aria-hidden="true" />
                    <span className="h-2 w-2 rounded-full bg-[#e8cf7c]" aria-hidden="true" />
                    <span className="h-2 w-2 rounded-full bg-[#8fbf9f]" aria-hidden="true" />
                    <span className="ml-1.5 truncate text-[10px] text-ink-mute">savor-nine.vercel.app</span>
                  </div>
                  <div className="p-4">
                    <RecipeArt className="h-24 w-full overflow-hidden rounded-xl" />
                    {/* Fausse recette illustrative : un <p> plutôt qu'un titre,
                        pour ne pas casser la hiérarchie des headings de la page. */}
                    <p className="mt-4 text-[13.5px] font-semibold leading-snug">
                      {t.savor.mockup.title}
                    </p>
                    <p className="mt-1 text-[11.5px] leading-snug text-ink-mute">
                      {t.savor.mockup.desc}
                    </p>
                    <div className="mt-3 flex gap-1.5">
                      <span className="chip !px-2.5 !py-1 !text-[10px]">{t.savor.mockup.time}</span>
                      <span className="chip !px-2.5 !py-1 !text-[10px]">{t.savor.mockup.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </Spotlight>

          {/* Features */}
          <div ref={grid} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {t.savor.features.map((f) => (
              <Spotlight key={f.title} className="p-6">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface-2 text-mint">
                  <Icon name={featureIcon[f.key]} size={17} />
                </span>
                <h4 className="mt-4 text-[15px] font-semibold leading-snug">{f.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-mute">{f.desc}</p>
              </Spotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
