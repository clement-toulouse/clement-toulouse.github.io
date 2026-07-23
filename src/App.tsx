import { useEffect, useState } from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Impact from './components/Impact'
import AiSection from './components/AiSection'
import Experience from './components/Experience'
import Savor from './components/Savor'
import Profil from './components/Profil'
import Contact from './components/Contact'

export type Theme = 'dark' | 'light'

export default function App() {
  // Le thème réel est déjà posé sur <html> par le script inline de index.html
  // (avant le premier paint). On part de 'light' pour que le prérendu et
  // l'hydratation produisent le même HTML, puis on se resynchronise.
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as Theme) ?? 'light')
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Navigation privée / stockage bloqué : le thème reste valable pour la session.
    }
  }, [theme, mounted])

  return (
    <>
      <a
        href="#impact"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-canvas"
      >
        Aller au contenu
      </a>

      <Nav onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />

      <main>
        <Hero />
        <Marquee />
        <Impact />
        <AiSection />
        <Experience />
        <Savor />
        <Profil />
      </main>

      <Contact />
    </>
  )
}
