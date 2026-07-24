import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { contents, type Locale, type SiteContent } from '../data/content'

type LanguageValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: SiteContent
}

const LanguageContext = createContext<LanguageValue | null>(null)

/**
 * Fournit la langue courante et le contenu qui va avec.
 *
 * Le français est la langue par défaut et celle du prérendu : premier rendu
 * serveur et client identiques (contrat d'hydratation). La préférence
 * éventuellement enregistrée n'est appliquée qu'après le montage — même
 * schéma que le thème dans App.tsx — donc un visiteur revenant en anglais
 * voit un bref instant de français avant la bascule. C'est le compromis
 * accepté pour un site sans routage par locale : il n'y a pas de version
 * anglaise prérendue à servir directement.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'en' || saved === 'fr') setLocaleState(saved)
    } catch {
      // Stockage indisponible (navigation privée) : on reste en français.
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const t = contents[locale]
    document.documentElement.lang = locale
    document.title = t.meta.title
    try {
      localStorage.setItem('lang', locale)
    } catch {
      // Idem : la préférence reste valable pour la session en cours.
    }
  }, [locale, mounted])

  const value: LanguageValue = {
    locale,
    setLocale: setLocaleState,
    t: contents[locale],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage doit être utilisé sous LanguageProvider')
  return ctx
}
