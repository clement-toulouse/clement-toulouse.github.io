import { profile } from '../data/profile'
import SplitHeading from './ui/SplitHeading'
import Magnetic from './ui/Magnetic'
import Icon, { type IconName } from './ui/Icon'

const links: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] =
  [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: 'phone',
      label: 'Téléphone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: '/in/clement-toulouse',
      href: profile.linkedin,
      external: true,
    },
    { icon: 'mapPin', label: 'Localisation', value: profile.location, href: '' },
  ]

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-line pt-24 sm:pt-32"
    >
      <div
        className="aurora left-1/2 -bottom-40 h-[34rem] w-[34rem] -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, var(--c-iris), transparent 68%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow">Et maintenant ?</p>
          <SplitHeading
            onScroll
            gradient
            text="Parlons produit."
            className="display mt-5 text-[clamp(2.6rem,9vw,6rem)] text-gradient"
          />
          <p className="mx-auto mt-6 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">
            Une opportunité, une question sur l'IA appliquée aux process, ou juste l'envie
            d'échanger sur un produit : la porte est ouverte.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 print:hidden">
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-ink px-8 py-4.5 text-[15px] font-semibold text-canvas transition-shadow duration-300 hover:shadow-[0_0_60px_-10px] hover:shadow-iris"
              >
                {profile.email}
                <Icon
                  name="arrowUpRight"
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href={profile.cv}
                download
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-line bg-surface/50 px-7 py-4.5 text-[15px] font-semibold text-ink-soft backdrop-blur-xl transition-colors duration-300 hover:border-line-strong hover:text-ink"
              >
                <Icon name="download" size={17} />
                Télécharger le CV
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => {
            const Inner = (
              <>
                <Icon name={l.icon} size={18} className="text-ink-mute" />
                <p className="mt-4 text-[11.5px] uppercase tracking-widest text-ink-mute">
                  {l.label}
                </p>
                <p className="mt-1.5 text-[14.5px] font-medium break-words">{l.value}</p>
              </>
            )
            return l.href ? (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="group cursor-pointer bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
              >
                {Inner}
              </a>
            ) : (
              <div key={l.label} className="bg-surface p-6">
                {Inner}
              </div>
            )
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line py-8 sm:flex-row">
          <p className="text-[13px] text-ink-mute">
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName} · {profile.role}
          </p>
          <p className="text-[13px] text-ink-mute">
            Développé en local avec Claude Code · React, Tailwind, CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
