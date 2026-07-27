import SplitHeading from './SplitHeading'

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow: string
  title: string
  lead?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-linear-to-r from-iris to-transparent" />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <SplitHeading
        onScroll
        gradient
        text={title}
        className="display mt-4 text-[clamp(2rem,5vw,3.4rem)] text-gradient text-gradient-title"
      />
      {lead && <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">{lead}</p>}
    </div>
  )
}
