export type Locale = 'fr' | 'en'

export type Accent = 'iris' | 'mint' | 'ember'

export interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
  detail: string
  accent?: Accent
}

export interface Experience {
  company: string
  /** Slug du logo dans /public/logos/<logo>.png (repli sur le nom si absent). */
  logo?: string
  context?: string
  period: string
  roles: { title: string; duration?: string; summary: string }[]
  responsibilities?: string[]
  wins: { headline: string; metrics: string[] }[]
  tags: string[]
  /** Capture d'écran réelle du produit, encadrée en mockup navigateur ou téléphone. */
  screenshot?: {
    src: string
    alt: string
    frame: 'browser' | 'phone'
    /** Barre d'url affichée pour le cadre navigateur. */
    url?: string
  }
}

export interface AiCard {
  title: string
  kicker: string
  body: string
  points: string[]
  /** Encart de preuve mis en avant sous les points. */
  proof?: string
  /** Slug du logo dans /public/logos/<logo>.png — remplace l'icône générique quand présent. */
  logo?: string
  accent: Accent
  span: string
}

export interface SkillGroup {
  /** Clé stable pour le choix d'icône — le libellé `group`, lui, se traduit. */
  key: 'product' | 'leadership' | 'ai'
  group: string
  items: string[]
}

export interface EducationItem {
  title: string
  detail: string
  period: string
}

export interface LanguageItem {
  name: string
  level: string
  pct: number
}

/** Noms d'entreprises : proper nouns, identiques dans les deux langues. */
export interface Company {
  name: string
  slug: string
}

export interface NavItem {
  id: string
  label: string
}

export interface SavorFeature {
  /** Clé stable pour le choix d'icône — le libellé `title`, lui, se traduit. */
  key: 'extract' | 'library' | 'cook' | 'plan'
  title: string
  desc: string
}

/**
 * Forme complète du contenu du site, une instance par langue. Toutes les
 * chaînes visibles à l'écran vivent ici — aucun texte en dur dans les
 * composants, qui lisent `useLanguage().t` au lieu d'importer des données.
 */
export interface SiteContent {
  meta: {
    /** <title> du document, pour la mise à jour cliente au changement de langue. */
    title: string
    skipToContent: string
    /** Préfixe de l'alt du portrait : "Portrait de" / "Portrait of". */
    portraitAlt: string
  }
  profile: {
    firstName: string
    lastName: string
    role: string
    company: string
    location: string
    email: string
    linkedin: string
    photo: string
    photoWebp: string
    siteUrl: string
    tagline: [string, string]
    intro: string
  }
  hero: {
    proofs: { value: string; label: string }[]
    ctaImpact: string
    ctaLinkedin: string
    locationCard: { title: string; subtitle: string }
    badge: { value: string; label: string }
  }
  nav: {
    ariaMain: string
    ariaMobile: string
    contact: string
    themeToggle: string
    openMenu: string
    closeMenu: string
    langToggleTo: string
    items: NavItem[]
  }
  marquee: string[]
  companyMarquee: { srLabel: string }
  sections: {
    impact: { eyebrow: string; title: string; lead: string }
    ia: { eyebrow: string; title: string; lead: string }
    parcours: { eyebrow: string; title: string; lead: string }
    savor: { eyebrow: string; lead: string }
    profil: { eyebrow: string; title: string; lead: string }
  }
  impactQuote: string
  stats: Stat[]
  aiCards: AiCard[]
  experience: {
    responsibilitiesLabel: string
    items: Experience[]
  }
  savor: {
    url: string
    pitch: string
    body: string
    features: SavorFeature[]
    stack: string[]
    ctaLabel: string
    /** Recette factice affichée dans le mockup produit — illustration, pas une vraie capture. */
    mockup: { title: string; desc: string; time: string; difficulty: string }
  }
  skills: SkillGroup[]
  educationLabel: string
  education: EducationItem[]
  languagesLabel: string
  languages: LanguageItem[]
  companies: Company[]
  contact: {
    eyebrow: string
    title: string
    lead: string
    emailLabel: string
    linkedinLabel: string
    locationLabel: string
  }
}
