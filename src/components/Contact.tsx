import { useLanguage } from '../i18n/LanguageContext'
import SplitHeading from './ui/SplitHeading'
import Magnetic from './ui/Magnetic'
import Icon, { type IconName } from './ui/Icon'

export default function Contact() {
  const { t } = useLanguage()

  const links: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] =
    [
      { icon: 'mail', label: t.contact.emailLabel, value: t.profile.email, href: `mailto:${t.profile.email}` },
      {
        icon: 'linkedin',
        label: t.contact.linkedinLabel,
        value: '/in/clement-toulouse',
        href: t.profile.linkedin,
        external: true,
      },
      { icon: 'mapPin', label: t.contact.locationLabel, value: t.profile.location, href: '' },
    ]

  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-line pt-24 sm:pt-32"
    >

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <SplitHeading
            onScroll
            text={t.contact.title}
            className="display text-[clamp(2.6rem,8vw,5.6rem)] leading-[1.02] tracking-[-0.045em]"
          />
          <p className="mx-auto mt-6 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">
            {t.contact.lead}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 print:hidden">
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${t.profile.email}`}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-ink px-8 py-4.5 text-[15px] font-semibold text-canvas transition-shadow duration-300 hover:shadow-[0_16px_34px_-14px] hover:shadow-iris"
              >
                {t.profile.email}
                <Icon
                  name="arrowUpRight"
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href={t.profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-line bg-surface/50 px-7 py-4.5 text-[15px] font-semibold text-ink-soft backdrop-blur-xl transition-colors duration-300 hover:border-line-strong hover:text-ink"
              >
                <Icon name="linkedin" size={17} />
                {t.hero.ctaLinkedin}
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
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

        <div className="mt-14 border-t border-line py-8">
          <p className="text-[13px] text-ink-mute">
            © {new Date().getFullYear()} {t.profile.firstName} {t.profile.lastName} · {t.profile.role}
          </p>
        </div>
      </div>
    </footer>
  )
}
