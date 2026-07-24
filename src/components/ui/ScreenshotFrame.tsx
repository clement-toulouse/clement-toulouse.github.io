/** Capture d'écran réelle du produit, encadrée en mockup navigateur ou téléphone. */
export default function ScreenshotFrame({
  src,
  alt,
  frame,
  url,
  className = '',
}: {
  src: string
  alt: string
  frame: 'browser' | 'phone'
  url?: string
  className?: string
}) {
  if (frame === 'phone') {
    return (
      <div
        className={`overflow-hidden rounded-[1.75rem] border-[3px] border-ink/80 bg-ink shadow-[0_16px_40px_-16px_rgba(0,0,0,0.4)] ${className}`}
      >
        <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
      </div>
    )
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-canvas shadow-[0_16px_40px_-16px_rgba(0,0,0,0.3)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#e8927c]" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-[#e8cf7c]" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-[#8fbf9f]" aria-hidden="true" />
        {url && <span className="ml-1.5 truncate text-[10px] text-ink-mute">{url}</span>}
      </div>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
    </div>
  )
}
