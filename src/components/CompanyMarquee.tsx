import { useLanguage } from '../i18n/LanguageContext'
import CompanyLogo from './ui/CompanyLogo'

/**
 * Second bandeau défilant : les entreprises et grands comptes du parcours.
 * Même mécanique que Marquee (deux copies + translation CSS), mais sens de
 * défilement inversé pour se distinguer du premier.
 */
export default function CompanyMarquee() {
  const { t } = useLanguage()

  return (
    <div className="marquee relative overflow-hidden border-b border-line py-8">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-canvas to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-canvas to-transparent"
        aria-hidden="true"
      />

      {/* Intitulé lu par les lecteurs d'écran, la piste elle-même est décorative. */}
      <h2 className="sr-only">{t.companyMarquee.srLabel}</h2>

      <div className="marquee-track marquee-track--reverse" aria-hidden="true">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {t.companies.map((c) => (
              <span key={c.slug} className="px-4">
                <CompanyLogo name={c.name} slug={c.slug} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
