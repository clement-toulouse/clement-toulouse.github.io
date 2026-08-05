import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useMotion'
import SectionHeader from './ui/SectionHeader'
import Spotlight from './ui/Spotlight'
import Icon, { type IconName } from './ui/Icon'

const skillIcon: Record<'product' | 'leadership' | 'ai', IconName> = {
  product: 'target',
  leadership: 'users',
  ai: 'sparkles',
}

export default function Profil() {
  const { t } = useLanguage()
  const grid = useReveal<HTMLDListElement>()

  return (
    <section
      id="profil"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeader
        title={t.sections.profil.title}
        lead={t.sections.profil.lead}
      />

      {/* Liste de définition, pas des cartes : le gabarit icône + titre + texte
          servait déjà de structure ailleurs sur la page. Ici le libellé tient
          la colonne de gauche et les compétences se lisent en continu. */}
      <dl ref={grid} className="mt-14 divide-y divide-line border-y border-line">
        {t.skills.map((s) => (
          <div key={s.key} className="grid gap-x-8 gap-y-3 py-7 sm:grid-cols-[minmax(9rem,1fr)_3fr]">
            <dt className="flex items-center gap-2.5 text-[15px] font-semibold">
              <Icon name={skillIcon[s.key]} size={16} className="shrink-0 text-iris-soft" />
              {s.group}
            </dt>
            <dd className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-ink-soft">
              {s.items.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Formation */}
        <Spotlight className="p-7 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface-2 text-mint">
              <Icon name="graduation" size={17} />
            </span>
            <h3 className="text-[15px] font-semibold">{t.educationLabel}</h3>
          </div>
          <div className="mt-6 space-y-5">
            {t.education.map((e) => (
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
            <h3 className="text-[15px] font-semibold">{t.languagesLabel}</h3>
          </div>
          <div className="mt-6 space-y-6">
            {t.languages.map((l) => (
              <div key={l.name}>
                <p className="flex items-baseline justify-between gap-3">
                  <span className="text-[15px] font-semibold">{l.name}</span>
                  <span className="text-[12.5px] text-ink-mute">{l.level}</span>
                </p>
                {/* Pas de jauge : le niveau est déjà écrit, et une barre
                    inventerait une précision que « Langue maternelle » ou
                    « Scolaire · A2 » n'ont jamais eue. */}
              </div>
            ))}
          </div>
        </Spotlight>
      </div>
    </section>
  )
}
