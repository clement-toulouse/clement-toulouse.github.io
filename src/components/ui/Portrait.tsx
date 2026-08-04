import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

/**
 * Portrait avec repli automatique : si l'image est absente de /public,
 * on affiche un monogramme dégradé plutôt qu'une image cassée.
 * WebP servi en priorité, JPEG en repli pour les navigateurs anciens.
 */
export default function Portrait({
  className = '',
  /** Version détourée (fond transparent), pour un portrait qui flotte sur la page. */
  cutout = false,
}: {
  className?: string
  cutout?: boolean
}) {
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

  const alt = `${t.meta.portraitAlt} ${t.profile.firstName} ${t.profile.lastName}, ${t.profile.role}`

  // Le détourage n'existe qu'en WebP (l'alpha exclut le JPEG) : on le sert
  // directement, avec le même repli monogramme si le fichier manque.
  if (cutout) {
    return (
      <img
        src={t.profile.photoCutout}
        alt={alt}
        width={900}
        height={1438}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onError={() => setFailed(true)}
        className={`h-full w-full object-contain ${className}`}
      />
    )
  }

  return (
    <picture>
      <source srcSet={t.profile.photoWebp} type="image/webp" />
      <img
        src={t.profile.photo}
        alt={alt}
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
