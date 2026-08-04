import SplitHeading from './SplitHeading'

/**
 * En-tête de section. Pas d'eyebrow au-dessus du titre : le titre porte son
 * propre poids, et le label répétait ce qu'il disait déjà. `meta` existe pour
 * l'information réelle (une date, un statut) et se pose SOUS le titre.
 */
export default function SectionHeader({
  title,
  lead,
  meta,
  align = 'left',
}: {
  title: string
  lead?: string
  meta?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <SplitHeading
        onScroll
        text={title}
        className="display text-[clamp(2.1rem,5.2vw,3.6rem)] leading-[1.04] tracking-[-0.04em]"
      />
      {meta && (
        <p className="mt-3.5 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
          {meta}
        </p>
      )}
      {lead && (
        <p className="mt-6 max-w-[62ch] text-[1.06rem] leading-[1.62] text-ink-soft">{lead}</p>
      )}
    </div>
  )
}
