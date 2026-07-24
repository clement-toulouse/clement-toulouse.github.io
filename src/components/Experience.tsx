import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useMotion'
import SectionHeader from './ui/SectionHeader'
import Spotlight from './ui/Spotlight'
import Icon from './ui/Icon'
import CompanyLogo from './ui/CompanyLogo'
import ScreenshotFrame from './ui/ScreenshotFrame'
import Tilt from './ui/Tilt'
import type { Experience as ExperienceItem, SiteContent } from '../data/content.types'

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

function ExperienceCard({ xp, t }: { xp: ExperienceItem; t: SiteContent }) {
  const [open, setOpen] = useState(false)

  return (
    <div data-xp className="relative md:pl-12">
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
              {xp.context && <p className="mt-1.5 text-[13.5px] text-ink-mute">{xp.context}</p>}
            </div>
          </div>
          <p className="chip !border-line-strong">{xp.period}</p>
        </header>

        <div className="mt-7 lg:flex lg:items-start lg:gap-8">
          <div className="min-w-0 flex-1">
            <div className="space-y-5">
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
                    <li key={r} className="flex gap-3 text-[14px] leading-snug text-ink-soft">
                      <Icon name="target" size={15} className="mt-0.5 shrink-0 text-ink-mute" />
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
                <div key={win.headline} className="rounded-2xl border border-line bg-canvas/40 p-5">
                  <div className="flex items-start gap-2.5">
                    <Icon name="trending" size={16} className="mt-1 shrink-0 text-mint" />
                    <p className="text-[14.5px] font-semibold leading-snug">{win.headline}</p>
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
                  {win.screenshot && (
                    <img
                      src={win.screenshot.src}
                      alt={win.screenshot.alt}
                      loading="lazy"
                      decoding="async"
                      className="mt-4 w-full rounded-xl border border-line"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-line pt-6">
              {xp.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}

              {xp.caseStudy && (
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  className="ml-auto flex cursor-pointer items-center gap-1.5 text-[13px] font-semibold text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  {open ? t.experience.lessLabel : t.experience.moreLabel}
                  <Icon
                    name="chevronDown"
                    size={15}
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                  />
                </button>
              )}
            </div>

            {xp.caseStudy && (
              <div
                className={`case-study grid transition-[grid-template-rows] duration-500 ease-out ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden" aria-hidden={!open}>
                  <div className="mt-6 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-start">
                    <div className="min-w-0 flex-1 space-y-4">
                      <div>
                        <p className="eyebrow !text-[0.66rem]">{t.experience.contextLabel}</p>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                          {xp.caseStudy.context}
                        </p>
                      </div>
                      <div>
                        <p className="eyebrow !text-[0.66rem]">{t.experience.approachLabel}</p>
                        <ul className="mt-2 space-y-2">
                          {xp.caseStudy.approach.map((a) => (
                            <li
                              key={a}
                              className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink-soft"
                            >
                              <Icon
                                name="arrowRight"
                                size={14}
                                className="mt-1 shrink-0 text-ink-mute"
                              />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="eyebrow !text-[0.66rem]">{t.experience.impactLabel}</p>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                          {xp.caseStudy.impact}
                        </p>
                      </div>
                    </div>

                    {xp.caseStudy.image && (
                      <ScreenshotFrame
                        src={xp.caseStudy.image.src}
                        alt={xp.caseStudy.image.alt}
                        frame={xp.caseStudy.image.frame}
                        url={xp.caseStudy.image.url}
                        className="mx-auto w-[160px] shrink-0 sm:mx-0"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {xp.screenshot && (
            <Tilt max={5} className="hidden shrink-0 lg:block lg:w-[200px]">
              <ScreenshotFrame
                src={xp.screenshot.src}
                alt={xp.screenshot.alt}
                frame={xp.screenshot.frame}
                url={xp.screenshot.url}
              />
            </Tilt>
          )}
        </div>
      </Spotlight>
    </div>
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
            <ExperienceCard key={xp.company} xp={xp} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
