export type Locale = 'fr' | 'en'

export type Accent = 'iris' | 'mint' | 'ember'

export interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
  detail: string
  /** KPI secondaire ou progression, sur sa propre ligne en italique. */
  note?: string
  accent?: Accent
}

export interface Experience {
  company: string
  /** Slug du logo dans /public/logos/<logo>.png (repli sur le nom si absent). */
  logo?: string
  context?: string
  period: string
  roles: {
    title: string
    duration?: string
    summary: string
    /** Puces optionnelles sous le résumé, ex. le périmètre produit détaillé. */
    summaryPoints?: string[]
  }[]
  responsibilities?: string[]
  wins: {
    headline: string
    metrics: string[]
    /** Capture d'écran illustrant cette réalisation précise, affichée dans la carte. */
    screenshot?: { src: string; alt: string }
  }[]
  /** Capture d'écran réelle du produit, encadrée en mockup navigateur ou téléphone. */
  screenshot?: {
    src: string
    alt: string
    frame: 'browser' | 'phone'
    /** Barre d'url affichée pour le cadre navigateur. */
    url?: string
  }
  /** Mini case-study dépliable ("En savoir plus") : contexte, approche, impact, image optionnelle. */
  caseStudy?: {
    context: string
    approach: string[]
    impact: string
    image?: {
      src: string
      alt: string
      frame: 'browser' | 'phone'
      url?: string
    }
  }
}

export interface AiCard {
  title: string
  kicker: string
  body: string
  points: string[]
  /** Encart de preuve mis en avant sous les points. */
  proof?: string
  /** Slugs des logos dans /public/logos/<logo>.png — remplacent l'icône générique quand présents. */
  logos?: string[]
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
    /**
     * Code GoatCounter (analytics sans cookie, sans consentement requis).
     * Vide = désactivé : aucun script tiers n'est chargé. Pour activer, créer un
     * compte gratuit sur goatcounter.com et renseigner le code choisi
     * (ex. 'clement-toulouse' pour clement-toulouse.goatcounter.com).
     * Substitué dans index.html au build via le plugin `analytics` de vite.config.
     */
    goatCounterCode: string
    tagline: [string, string]
    /** Mots de `tagline[1]` mis en avant dans l'accent iris (couleur du site). */
    taglineHighlight: string[]
  }
  hero: {
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
    moreLabel: string
    lessLabel: string
    contextLabel: string
    approachLabel: string
    impactLabel: string
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
