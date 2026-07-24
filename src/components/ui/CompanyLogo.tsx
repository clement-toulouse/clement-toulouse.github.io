import { useState } from 'react'

/**
 * Logo d'entreprise, posé dans une pastille blanche.
 *
 * Les logos fournis ont des fonds hétérogènes (blanc pour la plupart, sombre
 * pour IpsoSenso). La pastille blanche uniforme neutralise ces écarts et donne
 * un mur de logos homogène — y compris en thème sombre, où la pastille claire
 * met les marques en valeur. Couleurs de marque conservées.
 *
 * Repli si le fichier `/public/logos/<slug>.png` manque : le nom en toutes
 * lettres. Premier rendu identique serveur/client (le repli n'arrive qu'au
 * `onError`, jamais au prérendu).
 */
export default function CompanyLogo({
  name,
  slug,
  chipClass = 'h-16 min-w-[8rem] px-7',
  imgClass = 'h-8 max-w-[9rem]',
  labelClass = 'text-lg',
}: {
  name: string
  slug: string
  /** Dimensions de la pastille — surchargées pour la version compacte des cartes. */
  chipClass?: string
  imgClass?: string
  labelClass?: string
}) {
  const [failed, setFailed] = useState(false)

  return (
    <span
      className={`flex items-center justify-center rounded-2xl border border-line bg-white shadow-[0_1px_2px_rgba(35,30,22,0.04)] ${chipClass}`}
    >
      {failed ? (
        <span className={`font-semibold tracking-tight text-[#1d1b18] ${labelClass}`}>{name}</span>
      ) : (
        <img
          src={`/logos/${slug}.png`}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`w-auto object-contain ${imgClass}`}
        />
      )}
    </span>
  )
}
