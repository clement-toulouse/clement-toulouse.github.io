import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useMotion'
import SectionHeader from './ui/SectionHeader'
import Spotlight from './ui/Spotlight'
import Icon from './ui/Icon'
import CompanyLogo from './ui/CompanyLogo'

/* Capture le chiffre en tête de métrique : « −60 % », « 8 M€ », « 60 000 »… */
const METRIC_RE = /^([+\-−]?\d[\d\s .,]*(?:%|M€|€|k)?)/

/** Met le chiffre en avant : c'est lui qu'un lecteur en diagonale doit voir. */
function Metric({ text }: { text: string }) {
  const m = text.match(METRIC_RE)
  if (!m) return <>{text}</>
  return (
    <>
      <span className="font-semibold text-mint">{m[1].trimEnd()}</span>{' '}
      {text.slice(m[1].length).trimStart()}
    </>
  )
}

export default function Experience() {
  const { t } = useLanguage()
  const list = useReveal<HTMLDivElement>({ selector: '[data-xp]' })

  return (
    <section
      id="parcours"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeader
        eyebrow={t.sections.parcours.eyebrow}
        title={t.sections.parcours.title}
        lead={t.sections.parcours.lead}
      />

      <div ref={list} className="relative mt-16">
        {/* Ligne de temps */}
        <div
          className="timeline-draw absolute left-[7px] top-2 bottom-2 hidden w-px bg-linear-to-b from-iris via-line to-transparent md:block"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-5">
          {t.experience.items.map((xp) => (
            <div key={xp.company} data-xp className="relative md:pl-12">
              {/* Point sur la timeline */}
              <span
                className="absolute left-0 top-9 hidden h-4 w-4 items-center justify-center rounded-full border border-line-strong bg-canvas md:flex"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-iris-soft" />
              </span>

              <Spotlight className="p-7 sm:p-9">
                <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div className="flex items-center gap-4">
                    {xp.logo && (
                      <CompanyLogo
                        name={xp.company}
                        slug={xp.logo}
                        chipClass="h-14 w-14 shrink-0 rounded-xl p-2"
                        imgClass="max-h-full max-w-full"
                        labelClass="text-[11px] text-center leading-tight"
                      />
                    )}
                    <div>
                      <h3 className="display text-[clamp(1.5rem,3.5vw,2.1rem)]">{xp.company}</h3>
                      {xp.context && (
                        <p className="mt-1.5 text-[13.5px] text-ink-mute">{xp.context}</p>
                      )}
                    </div>
                  </div>
                  <p className="chip !border-line-strong">{xp.period}</p>
                </header>

                <div className="mt-7 space-y-5">
                  {xp.roles.map((role) => (
                    <div key={role.title}>
                      <p className="flex flex-wrap items-baseline gap-2.5">
                        <span className="text-[15.5px] font-semibold text-ink">{role.title}</span>
                        {role.duration && (
                          <span className="text-[12.5px] text-ink-mute">· {role.duration}</span>
                        )}
                      </p>
                      <p className="mt-2 max-w-3xl text-[14.5px] leading-relaxed text-ink-soft">
                        {role.summary}
                      </p>
                    </div>
                  ))}
                </div>

                {xp.responsibilities && (
                  <div className="mt-8 rounded-2xl border border-line bg-surface-2/50 p-5 sm:p-6">
                    <p className="eyebrow !text-[0.66rem]">{t.experience.responsibilitiesLabel}</p>
                    <ul className="mt-4 space-y-2.5">
                      {xp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex gap-3 text-[14px] leading-snug text-ink-soft"
                        >
                          <Icon
                            name="target"
                            size={15}
                            className="mt-0.5 shrink-0 text-ink-mute"
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Un nombre impair de réalisations laisserait la dernière
                    carte orpheline : elle occupe alors toute la largeur. */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2">
                  {xp.wins.map((win) => (
                    <div
                      key={win.headline}
                      className="rounded-2xl border border-line bg-canvas/40 p-5"
                    >
                      <div className="flex items-start gap-2.5">
                        <Icon name="trending" size={16} className="mt-1 shrink-0 text-mint" />
                        <p className="text-[14.5px] font-semibold leading-snug">
                          {win.headline}
                        </p>
                      </div>
                      <ul className="mt-3.5 space-y-2 pl-[26px]">
                        {win.metrics.map((m) => (
                          <li
                            key={m}
                            className="relative text-[13.5px] leading-snug text-ink-soft before:absolute before:-left-[14px] before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-mint/70"
                          >
                            <Metric text={m} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
                  {xp.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </Spotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
