export const profile = {
  firstName: 'Clément',
  lastName: 'Toulouse',
  role: 'Head of Product',
  company: 'Groupe Barrière',
  location: 'Rosny-sous-Bois (93) · Paris',
  email: 'ctoulous@gmail.com',
  linkedin: 'https://www.linkedin.com/in/clement-toulouse/',
  photo: '/clement.jpg',
  photoWebp: '/clement.webp',
  /**
   * Source unique de vérité pour les URL absolues du site (canonical, og:image,
   * JSON-LD). Injectée dans index.html au build par le plugin `site-url` de
   * vite.config.ts. Une seule ligne à changer en cas de nouveau domaine.
   */
  siteUrl: 'https://clement-toulouse.github.io',
  tagline: [
    "9 ans à construire des produits B2B et B2C qui font leurs preuves en production.",
    "Je transforme une vision en delivery, et le delivery en chiffres.",
  ],
  intro:
    "Passionné par les usages de l'IA pour améliorer l'efficacité des processus, structurer la réflexion produit et gagner en qualité. Aujourd'hui je pilote le produit digital Casino & Jeux en ligne du Groupe Barrière, avec 4 Product Managers, 2 QA, et une conviction : un bon produit se mesure.",
} as const

/**
 * Preuves affichées dès le hero : un recruteur accorde quelques secondes à la
 * première vue, elles doivent porter des chiffres, pas des mots-clés.
 */
export const heroProofs = [
  { value: '60 k', label: 'utilisateurs actifs' },
  { value: '8 M€', label: 'de CA mensuel' },
  { value: '95 %', label: 'qualité agent IA' },
  { value: '6', label: 'personnes managées' },
] as const

export type Stat = {
  value: number
  suffix: string
  prefix?: string
  label: string
  detail: string
  accent?: 'iris' | 'mint' | 'ember'
}

export const stats: Stat[] = [
  {
    value: 60,
    suffix: 'k',
    label: 'utilisateurs actifs mensuels',
    detail: "Barrière Play · 40 % de la base clients, +2 % chaque mois",
    accent: 'iris',
  },
  {
    value: 8,
    suffix: 'M€',
    label: 'de CA mensuel généré',
    detail: 'Sur les wallets clients, +10 % chaque mois',
    accent: 'mint',
  },
  {
    value: 95,
    suffix: '%',
    label: 'de qualité de réponse',
    detail: "Agent chatbot IA interne, en production",
    accent: 'ember',
  },
  {
    value: 9,
    suffix: ' ans',
    prefix: '+',
    label: "d'expérience produit",
    detail: 'B2B & B2C, du cadrage à la mise en production',
    accent: 'iris',
  },
]

export type Experience = {
  company: string
  context?: string
  period: string
  roles: { title: string; duration?: string; summary: string }[]
  responsibilities?: string[]
  wins: { headline: string; metrics: string[] }[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Groupe Barrière',
    context: 'Casino & Jeux en ligne · B2C',
    period: 'Depuis 2024',
    roles: [
      {
        title: 'Head of Product Casino',
        summary:
          "Pilotage et développement des produits digitaux de l'activité Casino & Jeux en ligne. Je supervise une équipe de 4 Product Managers et 2 QA, en garantissant la cohérence, la performance et l'excellence de l'expérience utilisateur sur l'ensemble des plateformes.",
      },
    ],
    responsibilities: [
      "Définir la vision produit et la stratégie digitale de l'activité, avec un pilotage par OKR",
      'Challenger et accompagner les Product Managers pour maximiser la qualité et la valeur de leurs produits',
      "Structurer et harmoniser les processus inter-équipes en combinant déploiement d'agents IA et animation des méthodologies produit",
    ],
    wins: [
      {
        headline: "Lancement de l'application mobile B2C Barrière Play",
        metrics: [
          '60 000 utilisateurs actifs mensuels (40 % de la base clients, +2 %/mois)',
          '8 M€ de CA mensuel généré sur les wallets clients (+10 %/mois)',
        ],
      },
      {
        headline: "Déploiement d'un agent chatbot IA interne en production",
        metrics: [
          '95 % de taux de qualité des réponses',
          '30 utilisateurs actifs quotidiens',
          "Productivité interne et accès à l'information nettement améliorés",
        ],
      },
    ],
    tags: ['Vision produit', 'OKR', 'Management', 'Mobile B2C', 'Agents IA', 'QA'],
  },
  {
    company: 'Partoo',
    context: 'Scale-up SaaS B2B · référencement en ligne des points de vente',
    period: '2019 · 2023',
    roles: [
      {
        title: 'Lead Product Manager',
        duration: '2 ans',
        summary:
          "Direction de la Tribe Empowering : 2 impact teams, 13 collaborateurs aux expertises variées (PM, Design, QA, Data, Engineering).",
      },
      {
        title: 'Product Manager',
        duration: '3 ans',
        summary:
          "Pilotage de fonctionnalités à forte valeur, de la discovery à la mise en production, avec une approche centrée utilisateur.",
      },
    ],
    responsibilities: [
      "Porter la vision produit et stratégique de la Tribe, alignée sur la stratégie globale de Partoo",
      'Établir, suivre et garantir l\'atteinte des objectifs (OKR et KPI)',
      'Challenger et accompagner les impact teams pour maximiser la valeur délivrée',
    ],
    wins: [
      {
        headline: "Interface admin & refonte de l'onboarding client",
        metrics: [
          "−60 % de temps d'onboarding des clients",
          '+40 % de succès de diffusion multi-plateformes',
        ],
      },
      {
        headline: 'Templates de réponses aux avis',
        metrics: ['+30 % de taux de réponse aux avis', "70 % de taux d'adoption client"],
      },
      {
        headline: 'Refonte du système de diffusion + intégration Apple Plans & Waze',
        metrics: ['+60 % de succès de diffusion', '95 % de succès sur les nouveaux canaux'],
      },
    ],
    tags: ['SaaS B2B', 'Lead PM', 'Discovery', 'Onboarding', 'Intégrations', 'Data'],
  },
  {
    company: 'IpsoSenso',
    context: 'ESN · agence & régie',
    period: '2017 · 2018',
    roles: [
      {
        title: 'Product Owner',
        summary:
          "Premiers pas côté produit, entre agence et régie, sur des projets web et mobiles grands comptes.",
      },
    ],
    wins: [
      {
        headline: 'En agence (1 an)',
        metrics: ['Conception et pilotage de 3 projets web pour Veolia, Gerep et Scor'],
      },
      {
        headline: 'En régie chez GRDF (1 an)',
        metrics: [
          'Cadrage, priorisation et suivi du développement de fonctionnalités web et mobile',
        ],
      },
    ],
    tags: ['Grands comptes', 'Cadrage', 'Priorisation', 'Web & Mobile'],
  },
]

export type AiCard = {
  title: string
  kicker: string
  body: string
  points: string[]
  /** Encart de preuve mis en avant sous les points. */
  proof?: string
  accent: 'iris' | 'mint' | 'ember'
  span: string
}

export const aiCards: AiCard[] = [
  {
    kicker: 'Agents & build',
    title: 'Claude Code',
    body: "Je code, prototype et outille avec Claude Code au quotidien. Passer d'une intuition produit à un prototype cliquable en une session change la nature des arbitrages : on décide sur du réel, pas sur du slide.",
    points: [
      'Prototypage rapide pour trancher une hypothèse de discovery',
      'Automatisation de tâches produit répétitives (specs, analyses, scripts)',
      "Formation et diffusion de la pratique auprès de l'équipe",
    ],
    proof:
      "La démonstration est sous vos yeux : ce site a été entièrement conçu et développé avec Claude Code, du design system au prérendu.",
    accent: 'iris',
    span: 'lg:col-span-3 lg:row-span-2',
  },
  {
    kicker: 'Plateforme IA interne',
    title: 'Dust',
    body: "Déploiement d'assistants Dust connectés aux sources de vérité de l'entreprise, pour que la bonne information arrive avant la question.",
    points: [
      'Assistants métier connectés à la documentation produit',
      "Réduction du temps d'accès à l'information",
    ],
    accent: 'mint',
    span: 'lg:col-span-3',
  },
  {
    kicker: 'Process',
    title: 'IA Ops chez Barrière',
    body: "Structurer et harmoniser les processus inter-équipes en combinant agents IA et méthodologies produit : l'IA n'est pas un gadget posé à côté du process, elle est dans le process.",
    points: [
      'Agent chatbot interne en production : 95 % de qualité de réponse',
      'Harmonisation des rituels et livrables entre équipes',
      'Gains de productivité mesurés, pas déclarés',
    ],
    accent: 'ember',
    span: 'lg:col-span-3',
  },
]

export const savor = {
  name: 'Savor',
  url: 'https://savor-nine.vercel.app/',
  kicker: 'Projet perso · 2026',
  pitch: 'Toutes tes recettes, enfin au même endroit.',
  body: "Savor extrait automatiquement ingrédients et étapes depuis Instagram, TikTok, un blog ou une photo de carnet. Conçu, designé et développé de bout en bout, de l'idée au déploiement.",
  features: [
    {
      title: 'Extraction automatique',
      desc: "Un lien ou une photo, et l'IA structure ingrédients, étapes, temps et difficulté en quelques secondes.",
    },
    {
      title: 'Bibliothèque personnelle',
      desc: 'Collections, filtres par difficulté ou tag, suivi des recettes testées et notées.',
    },
    {
      title: 'Mode cuisine guidé',
      desc: 'Étape par étape sur grand écran, minuteur intégré, plus besoin de scroller les mains pleines de farine.',
    },
    {
      title: 'Planning & liste de courses',
      desc: 'Glisse tes recettes dans le calendrier, la liste de courses se génère, cumulée et rangée par rayon.',
    },
  ],
  stack: ['Next.js', 'IA d\'extraction', 'Supabase', 'Vercel'],
}

export const skills = [
  {
    group: 'Produit',
    items: [
      'Vision & stratégie produit',
      'Discovery',
      'OKR & KPI',
      'Roadmapping',
      'Product Discovery continue',
      'User research',
    ],
  },
  {
    group: 'Leadership',
    items: [
      'Management de PM',
      'Structuration d\'équipe',
      'Coaching & mentorat',
      'Rituels agiles',
      'Alignement stakeholders',
    ],
  },
  {
    group: 'IA & Tech',
    items: ['Claude Code', 'Dust', 'Agents IA en production', 'IA Ops & process', 'Prototypage', 'Data & analytics'],
  },
]

export const education = [
  {
    title: "ECE Paris · École d'ingénieur",
    detail: 'Master 2 · Spécialité objets connectés, réseaux et services',
    period: '2012 · 2017',
  },
  {
    title: 'GenAI for Product Team',
    detail: 'AI Discipline · certification',
    period: 'Sept. 2025',
  },
]

export const languages = [
  { name: 'Français', level: 'Langue maternelle', pct: 100 },
  { name: 'Anglais', level: 'Courant · C2 · IELTS 7 / TOEIC 895', pct: 90 },
  { name: 'Allemand', level: 'Scolaire · A2', pct: 30 },
]

export const navItems = [
  { id: 'impact', label: 'Impact' },
  { id: 'ia', label: 'IA' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'savor', label: 'Savor' },
  { id: 'profil', label: 'Profil' },
  { id: 'contact', label: 'Contact' },
]
