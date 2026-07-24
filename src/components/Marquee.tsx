import { useLanguage } from '../i18n/LanguageContext'

/** Bande défilante — respiration entre le hero et le contenu dense. */
export default function Marquee() {
  const { t } = useLanguage()

  return (
    <div className="marquee relative overflow-hidden border-y border-line py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-canvas to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-canvas to-transparent"
        aria-hidden="true"
      />
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {t.marquee.map((w) => (
              <span key={w} className="flex items-center">
                <span className="px-6 text-[clamp(1rem,2vw,1.5rem)] font-medium tracking-tight text-ink-soft">
                  {w}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-iris/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
