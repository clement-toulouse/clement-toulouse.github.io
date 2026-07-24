import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

/**
 * Portrait avec repli automatique : si l'image est absente de /public,
 * on affiche un monogramme dégradé plutôt qu'une image cassée.
 * WebP servi en priorité, JPEG en repli pour les navigateurs anciens.
 */
export default function Portrait({ className = '' }: { className?: string }) {
  const { t } = useLanguage()
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`grid h-full w-full place-items-center bg-linear-135 from-iris via-iris-soft to-mint ${className}`}
        role="img"
        aria-label={`${t.meta.portraitAlt} ${t.profile.firstName} ${t.profile.lastName}`}
      >
        <span className="display text-6xl text-white/90">
          {t.profile.firstName[0]}
          {t.profile.lastName[0]}
        </span>
      </div>
    )
  }

  return (
    <picture>
      <source srcSet={t.profile.photoWebp} type="image/webp" />
      <img
        src={t.profile.photo}
        alt={`${t.meta.portraitAlt} ${t.profile.firstName} ${t.profile.lastName}, ${t.profile.role}`}
        width={880}
        height={1100}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    </picture>
  )
}
