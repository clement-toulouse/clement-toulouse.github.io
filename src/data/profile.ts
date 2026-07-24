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
    "Passionné par l'IA pour rendre les équipes plus efficaces, clarifier les décisions produit et gagner en qualité. Aujourd'hui je dirige le produit des jeux d'argent en ligne du Groupe Barrière, avec 4 Product Managers, 2 testeurs qualité, et une conviction : un bon produit se mesure.",
} as const

/**
 * Preuves affichées dès le hero : un recruteur accorde quelques secondes à la
 * première vue, elles doivent porter des chiffres, pas des mots-clés.
 */
export const heroProofs = [
  { value: '60 k', label: 'utilisateurs actifs' },
  { value: '8 M€', label: 'de CA mensuel' },
  { value: '95 %', label: 'réponses IA justes' },
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
    detail: "Sur Barrière Play, l'app mobile de jeux en ligne du groupe · +2 % par mois",
    accent: 'iris',
  },
  {
    value: 8,
    suffix: 'M€',
    label: 'de CA mensuel généré',
    detail: 'Misé par les joueurs via l\'app · +10 % par mois',
    accent: 'mint',
  },
  {
    value: 95,
    suffix: '%',
    label: 'de réponses justes',
    detail: "Chatbot IA interne que j'ai déployé en production",
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
    context: 'Casinos, hôtels & jeux en ligne · produit grand public',
    period: 'Depuis 2024',
    roles: [
      {
        title: 'Head of Product Casino',
        summary:
          "Je dirige le produit digital des jeux d'argent en ligne du groupe (casino, machines à sous, paris). J'encadre une équipe de 4 Product Managers et 2 testeurs qualité (QA), garante de la cohérence et de l'expérience sur toutes nos applications.",
      },
    ],
    responsibilities: [
      "Définir la vision produit et la stratégie digitale de l'activité, avec un pilotage par OKR",
      'Challenger et accompagner les Product Managers pour maximiser la qualité et la valeur de leurs produits',
      "Structurer et harmoniser les processus inter-équipes en combinant déploiement d'agents IA et animation des méthodologies produit",
    ],
    wins: [
      {
        headline: "Lancement de Barrière Play, l'app mobile de jeux d'argent en ligne du groupe",
        metrics: [
          '60 000 joueurs actifs par mois, soit 40 % des clients du groupe (+2 %/mois)',
          '8 M€ misés chaque mois par les joueurs via l\'app (+10 %/mois)',
        ],
      },
      {
        headline: "Déploiement en production d'un assistant IA interne pour les équipes",
        metrics: [
          '95 % de réponses justes',
          '30 collaborateurs l\'utilisent chaque jour',
          "Accès à l'information et productivité nettement améliorés",
        ],
      },
    ],
    tags: ['Vision produit', 'OKR', 'Management', 'Mobile B2C', 'Agents IA', 'QA'],
  },
  {
    company: 'Partoo',
    context: 'Logiciel qui aide les enseignes à réseaux à soigner leur présence en ligne (Google, Maps, avis clients)',
    period: '2019 · 2023',
    roles: [
      {
        title: 'Lead Product Manager',
        duration: '2 ans',
        summary:
          "À la tête d'une organisation produit de 13 personnes, réparties en 2 équipes pluridisciplinaires (Product, Design, QA, Data, Développement).",
      },
      {
        title: 'Product Manager',
        duration: '3 ans',
        summary:
          "Développement de fonctionnalités à fort impact, de l'idée à la mise en ligne, en partant toujours des besoins réels des utilisateurs.",
      },
    ],
    responsibilities: [
      "Définir la vision produit de mon périmètre, alignée sur la stratégie globale de Partoo",
      'Fixer les objectifs, les suivre et garantir leur atteinte (OKR et KPI)',
      'Challenger et accompagner les équipes pour maximiser la valeur livrée aux clients',
    ],
    wins: [
      {
        headline: "Nouveau back-office et refonte de l'arrivée des nouveaux clients",
        metrics: [
          "−60 % de temps pour mettre un nouveau client en route",
          '+40 % d\'informations magasins correctement publiées en ligne',
        ],
      },
      {
        headline: 'Réponses types aux avis clients',
        metrics: ['+30 % de taux de réponse aux avis', "70 % des clients ont adopté l'outil"],
      },
      {
        headline: 'Refonte de la publication des infos magasins + intégration Apple Plans & Waze',
        metrics: [
          '+60 % d\'informations publiées avec succès sur les plateformes',
          '95 % de réussite sur les nouveaux canaux (Apple Plans, Waze)',
        ],
      },
    ],
    tags: ['SaaS B2B', 'Lead PM', 'Product Discovery', 'Expérience client', 'Intégrations', 'Data'],
  },
  {
    company: 'IpsoSenso',
    context: 'Société de conseil en informatique · projets pour de grandes entreprises',
    period: '2017 · 2018',
    roles: [
      {
        title: 'Product Owner',
        summary:
          "Premiers pas côté produit sur des projets web et mobiles pour de grands comptes, d'abord en agence puis directement dans les équipes du client.",
      },
    ],
    wins: [
      {
        headline: 'En agence (1 an)',
        metrics: ['Conception et pilotage de projets web pour Veolia et Gerep'],
      },
      {
        headline: 'Intégré aux équipes de GRDF (1 an)',
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
    kicker: 'Développement assisté par IA',
    title: 'Claude Code',
    body: "Je code, prototype et automatise mon travail avec Claude Code au quotidien. Passer d'une idée produit à une maquette cliquable en une seule session change la façon de décider : on tranche sur du concret, pas sur un slide.",
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
    kicker: 'Assistants IA internes',
    title: 'Dust',
    body: "Je déploie des assistants IA (via la plateforme Dust) connectés à la documentation et aux outils de l'entreprise, pour que la bonne information arrive avant même qu'on la cherche.",
    points: [
      'Assistants métier branchés sur la documentation produit',
      "Moins de temps perdu à chercher l'information",
    ],
    accent: 'mint',
    span: 'lg:col-span-3',
  },
  {
    kicker: 'Process',
    title: 'IA Ops chez Barrière',
    body: "Je structure et harmonise les façons de travailler entre équipes en combinant assistants IA et méthodes produit : l'IA n'est pas un gadget posé à côté du travail, elle est dans le travail.",
    points: [
      'Chatbot interne en production : 95 % de réponses justes',
      'Mêmes rituels et mêmes livrables pour toutes les équipes',
      'Gains de productivité mesurés, pas seulement annoncés',
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
      'Alignement des parties prenantes',
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

/**
 * Entreprises et grands comptes croisés au fil du parcours, pour le bandeau
 * défilant. `slug` sert à charger un vrai logo depuis `/public/logos/<slug>.svg`
 * quand il existe ; sinon on affiche le nom en toutes lettres (voir CompanyLogo).
 */
export const companies = [
  { name: 'Groupe Barrière', slug: 'barriere' },
  { name: 'Partoo', slug: 'partoo' },
  { name: 'IpsoSenso', slug: 'ipsosenso' },
  { name: 'Veolia', slug: 'veolia' },
  { name: 'GRDF', slug: 'grdf' },
  { name: 'Gerep', slug: 'gerep' },
] as const

export const navItems = [
  { id: 'impact', label: 'Impact' },
  { id: 'ia', label: 'IA' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'savor', label: 'Savor' },
  { id: 'profil', label: 'Profil' },
  { id: 'contact', label: 'Contact' },
]
