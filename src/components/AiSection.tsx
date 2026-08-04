import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useMotion'
import Spotlight from './ui/Spotlight'
import SectionHeader from './ui/SectionHeader'
import Icon, { type IconName } from './ui/Icon'
import CompanyLogo from './ui/CompanyLogo'

const accent = {
  iris: { text: 'text-iris-soft', glow: 'var(--c-iris)', icon: 'terminal' as IconName },
  mint: { text: 'text-mint', glow: 'var(--c-mint)', icon: 'layers' as IconName },
  ember: { text: 'text-ember', glow: 'var(--c-ember)', icon: 'workflow' as IconName },
}

/** Nom lisible par logo, pour un alt distinct de celui du voisin dans la même carte. */
const logoName: Record<string, string> = {
  claude: 'Claude Code',
  aistudio: 'Google AI Studio',
  dust: 'Dust',
  gemini: 'Gemini',
}

export default function AiSection() {
  const { t } = useLanguage()
  const grid = useReveal<HTMLDivElement>()

  return (
    <section
      id="ia"
      className="relative scroll-mt-24 overflow-hidden border-y border-line py-24 sm:py-32"
    >
      <div
        className="aurora left-1/2 top-1/4 h-[30rem] w-[30rem] -translate-x-1/2 opacity-25"
        style={{ background: 'radial-gradient(circle, var(--c-iris), transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          title={t.sections.ia.title}
          lead={t.sections.ia.lead}
        />

        <div ref={grid} className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {t.aiCards.map((card) => {
            const a = accent[card.accent]
            return (
              <Spotlight key={card.title} className={`flex flex-col p-7 sm:p-8 ${card.span}`}>
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl"
                  style={{ background: a.glow }}
                  aria-hidden="true"
                />

                <div className="relative flex items-center gap-3">
                  {card.logos && card.logos.length > 0 ? (
                    <div className="flex -space-x-2.5">
                      {card.logos.map((logo) => (
                        <CompanyLogo
                          key={logo}
                          name={logoName[logo] ?? card.title}
                          slug={logo}
                          chipClass="h-10 w-10 shrink-0 rounded-xl p-1.5 ring-2 ring-canvas"
                          imgClass="max-h-full max-w-full"
                          labelClass="text-[9px] text-center leading-tight"
                        />
                      ))}
                    </div>
                  ) : (
                    <span className={`grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 ${a.text}`}>
                      <Icon name={a.icon} size={19} />
                    </span>
                  )}
                </div>

                <h3 className={`relative mt-5 display text-[clamp(1.6rem,3vw,2.2rem)] ${a.text}`}>
                  {card.title}
                </h3>

                <p className="relative mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {card.body}
                </p>

                <ul className="relative mt-6 space-y-2.5 border-t border-line pt-5">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[14px] leading-snug text-ink-soft">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: a.glow }}
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                {card.proof && (
                  <div
                    className="relative mt-6 flex items-start gap-3 rounded-2xl border p-4"
                    style={{
                      borderColor: `color-mix(in oklab, ${a.glow} 35%, transparent)`,
                      background: `color-mix(in oklab, ${a.glow} 8%, transparent)`,
                    }}
                  >
                    <Icon name="sparkles" size={18} className={`mt-0.5 shrink-0 ${a.text}`} />
                    <p className="serif-accent text-[15.5px] leading-snug text-ink">
                      {card.proof}
                    </p>
                  </div>
                )}
              </Spotlight>
            )
          })}
        </div>
      </div>
    </section>
  )
}
