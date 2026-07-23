import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/profile'
import { useActiveSection, useScrollProgress } from '../hooks/useMotion'
import Icon from './ui/Icon'
import Magnetic from './ui/Magnetic'

const ids = navItems.map((n) => n.id)

export default function Nav({ onToggleTheme }: { onToggleTheme: () => void }) {
  const progress = useScrollProgress()
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Échap ferme le menu plein écran.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <>
      {/* Barre de progression de lecture */}
      <div
        className="fixed inset-x-0 top-0 z-60 h-[2px] origin-left bg-linear-to-r from-iris via-iris-soft to-mint"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ${
          scrolled ? 'py-2.5' : 'py-5'
        }`}
      >
        {/*
          Fond du header. Sans lui, le contenu de la page défile visiblement
          derrière le logo et les boutons, qui n'ont pas de fond propre. Il
          n'apparaît qu'une fois la page défilée, pour laisser le hero
          respirer en haut.
        */}
        <div
          className={`absolute inset-0 -z-10 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
            scrolled
              ? 'border-line bg-canvas/80 backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
          aria-hidden="true"
        />

        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#accueil"
            onClick={(e) => go(e, 'accueil')}
            className="group -mx-1 flex min-h-11 cursor-pointer items-center gap-2.5 px-1 text-left"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface-2 text-[13px] font-bold tracking-tight transition-colors duration-300 group-hover:border-iris">
              CT
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-mint shadow-[0_0_10px] shadow-mint" />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              {profile.firstName} {profile.lastName}
            </span>
          </a>

          {/*
            En haut de page : pilule flottante posée sur le hero.
            Une fois défilé : la barre porte déjà le fond, la pilule s'efface
            pour ne pas empiler deux couches de verre dépoli.
          */}
          <nav
            className={`hidden items-center gap-1 rounded-full border px-1.5 py-1.5 transition-colors duration-500 md:flex ${
              scrolled
                ? 'border-transparent bg-transparent'
                : 'border-line bg-surface/30 backdrop-blur-xl'
            }`}
            aria-label="Navigation principale"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                aria-current={active === item.id ? 'true' : undefined}
                className={`relative cursor-pointer rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                  active === item.id ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {active === item.id && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-line-strong bg-surface-2" />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.25}>
              <button
                onClick={onToggleTheme}
                aria-label="Changer de thème"
                className={`grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line text-ink-soft transition-all duration-300 hover:border-line-strong hover:text-ink ${
                  scrolled ? 'bg-transparent' : 'bg-surface/60 backdrop-blur-xl'
                }`}
              >
                {/* Les deux icônes sont rendues, le CSS montre celle du thème
                    courant : pas d'écart entre le HTML prérendu et le client. */}
                <Icon name="sun" size={17} className="only-dark" />
                <Icon name="moon" size={17} className="only-light" />
              </button>
            </Magnetic>

            <a
              href={`mailto:${profile.email}`}
              className="hidden cursor-pointer items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-canvas transition-transform duration-300 hover:scale-[1.03] sm:flex"
            >
              Me contacter
              <Icon name="arrowUpRight" size={15} />
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className={`grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line transition-colors duration-300 md:hidden ${
                scrolled ? 'bg-transparent' : 'bg-surface/60 backdrop-blur-xl'
              }`}
            >
              <Icon name="menu" size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu plein écran mobile */}
      <div
        className={`fixed inset-0 z-70 bg-canvas/95 backdrop-blur-2xl transition-all duration-400 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        inert={!open}
      >
        <div className="flex items-center justify-end px-5 py-5">
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line"
          >
            <Icon name="close" size={18} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 pt-6" aria-label="Navigation mobile">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => go(e, item.id)}
              className="flex cursor-pointer items-baseline gap-4 border-b border-line py-5 text-left transition-transform duration-300 active:scale-[0.98]"
            >
              <span className="font-mono text-xs text-ink-mute">0{i + 1}</span>
              <span className="display text-3xl">{item.label}</span>
            </a>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 flex items-center justify-center gap-2 rounded-full border border-line px-5 py-4 font-semibold"
          >
            <Icon name="linkedin" size={16} />
            Voir mon LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 font-semibold text-canvas"
          >
            {profile.email}
            <Icon name="arrowUpRight" size={16} />
          </a>
        </nav>
      </div>
    </>
  )
}
