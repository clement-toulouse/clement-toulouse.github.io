import { useState } from 'react'
import { profile } from '../../data/profile'

/**
 * Portrait avec repli automatique : si l'image est absente de /public,
 * on affiche un monogramme dégradé plutôt qu'une image cassée.
 * WebP servi en priorité, JPEG en repli pour les navigateurs anciens.
 */
export default function Portrait({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`grid h-full w-full place-items-center bg-linear-135 from-iris via-iris-soft to-mint ${className}`}
        role="img"
        aria-label={`${profile.firstName} ${profile.lastName}`}
      >
        <span className="display text-6xl text-white/90">
          {profile.firstName[0]}
          {profile.lastName[0]}
        </span>
      </div>
    )
  }

  return (
    <picture>
      <source srcSet={profile.photoWebp} type="image/webp" />
      <img
        src={profile.photo}
        alt={`Portrait de ${profile.firstName} ${profile.lastName}, ${profile.role}`}
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
