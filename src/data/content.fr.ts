import type { SiteContent } from './content.types.ts'

/** Contenu français — langue par défaut du site, celle du prérendu. */
export const contentFr: SiteContent = {
  meta: {
    title: 'Clément Toulouse · Head of Product',
    skipToContent: 'Aller au contenu',
    portraitAlt: 'Portrait de',
  },

  profile: {
    firstName: 'Clément',
    lastName: 'Toulouse',
    role: 'Head of Product',
    company: 'Groupe Barrière',
    location: 'Paris',
    email: 'ctoulous@gmail.com',
    linkedin: 'https://www.linkedin.com/in/clement-toulouse/',
    photo: '/clement.jpg',
    photoWebp: '/clement.webp',
    siteUrl: 'https://clement-toulouse.github.io',
    tagline: [
      "9 ans à construire des produits B2B et B2C qui font leurs preuves en production.",
      "Je transforme une vision en delivery, et le delivery en chiffres.",
    ],
    intro:
      "Passionné par l'IA pour rendre les équipes plus efficaces, clarifier les décisions produit et gagner en qualité. Aujourd'hui je dirige le produit des jeux d'argent en ligne du Groupe Barrière, avec 4 Product Managers, 2 testeurs qualité, et une conviction : un bon produit se mesure.",
  },

  hero: {
    proofs: [
      { value: '60 k', label: 'utilisateurs actifs' },
      { value: '8 M€', label: 'de CA mensuel' },
      { value: '95 %', label: 'réponses IA justes' },
      { value: '6', label: 'personnes managées' },
    ],
    ctaImpact: 'Voir mon impact',
    ctaLinkedin: 'Voir mon LinkedIn',
    locationCard: { title: 'Paris', subtitle: 'Ouvert aux échanges' },
    badge: { value: '9+', label: 'ans de produit' },
  },

  nav: {
    ariaMain: 'Navigation principale',
    ariaMobile: 'Navigation mobile',
    contact: 'Me contacter',
    themeToggle: 'Changer de thème',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    langToggleTo: 'Switch to English',
    items: [
      { id: 'impact', label: 'Impact' },
      { id: 'ia', label: 'IA' },
      { id: 'parcours', label: 'Parcours' },
      { id: 'savor', label: 'Projet perso' },
      { id: 'profil', label: 'Profil' },
      { id: 'contact', label: 'Contact' },
    ],
  },

  marquee: [
    'Vision produit',
    'Discovery',
    'OKR',
    'Claude Code',
    'Barrière Play',
    'Agents IA',
    'Dust',
    'Management',
    'Delivery',
    'IA Ops',
    'B2C mobile',
    'SaaS B2B',
    'Impact mesuré',
  ],

  companyMarquee: { srLabel: 'Entreprises et clients de mon parcours' },

  sections: {
    impact: {
      eyebrow: 'Ce que ça a produit',
      title: "L'impact avant le discours",
      lead: "Une roadmap qui ne se mesure pas n'est qu'une liste d'envies. Voici ce que mes équipes et moi avons livré ces trois dernières années, en chiffres.",
    },
    ia: {
      eyebrow: 'Appétence IA',
      title: "L'IA dans le process, pas à côté",
      lead: "Je ne fais pas de l'IA une couche marketing posée sur un produit. Je l'utilise pour raccourcir la boucle entre une intuition et une décision, pour moi comme pour mes équipes.",
    },
    parcours: {
      eyebrow: 'Parcours',
      title: 'Neuf ans, trois maisons',
      lead: "Du conseil à la start-up en forte croissance, puis à un grand groupe : à chaque étape, plus de périmètre et plus de responsabilité sur les résultats.",
    },
    savor: {
      eyebrow: 'Projet perso · 2026',
      lead: "Un Head of Product qui n'a jamais rien mené seul de bout en bout finit par oublier ce que coûte vraiment une décision. Savor est mon terrain d'entraînement : de l'idée à la mise en ligne, sans équipe pour rattraper mes choix.",
    },
    profil: {
      eyebrow: 'Profil',
      title: "Ce que j'apporte",
      lead: "Un ingénieur qui a basculé côté produit, et qui a gardé le goût du concret : des systèmes qui tiennent, des équipes qui décident vite, des chiffres qui bougent.",
    },
  },

  impactQuote:
    "« Un bon produit, c'est une décision qu'on peut défendre avec un chiffre, et une équipe qui comprend pourquoi on l'a prise. »",

  stats: [
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
      detail: "Misé par les joueurs via l'app · +10 % par mois",
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
  ],

  aiCards: [
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
      logo: 'claude',
      accent: 'iris',
      span: 'lg:col-span-3 lg:row-span-2',
    },
    {
      kicker: 'Assistants & process produit',
      title: 'IA Ops chez Barrière',
      body: "Je déploie des assistants IA (via la plateforme Dust) connectés à la documentation et aux outils de l'entreprise, et je mets l'IA au cœur du travail produit : j'automatise ce qui est répétitif dans la spécification et la documentation, pour que les Product Managers gardent leur énergie pour les décisions.",
      points: [
        'Assistants métier Dust branchés sur la documentation produit',
        'Création et relecture de la spécification fonctionnelle automatisées',
        'Agent de rédaction de User Stories, spécialisé par produit',
        'Release notes générées automatiquement',
      ],
      logo: 'dust',
      accent: 'ember',
      span: 'lg:col-span-3 lg:row-span-2',
    },
  ],

  experience: {
    responsibilitiesLabel: 'Responsabilités clés',
    items: [
      {
        company: 'Groupe Barrière',
        logo: 'barriere',
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
              "8 M€ misés chaque mois par les joueurs via l'app (+10 %/mois)",
            ],
          },
          {
            headline: "Déploiement en production d'un assistant IA interne pour les équipes",
            metrics: [
              '95 % de réponses justes',
              "30 collaborateurs l'utilisent chaque jour",
              "Accès à l'information et productivité nettement améliorés",
            ],
          },
        ],
        tags: ['Vision produit', 'OKR', 'Management', 'Mobile B2C', 'Agents IA', 'QA'],
      },
      {
        company: 'Partoo',
        logo: 'partoo',
        context:
          'Logiciel qui aide les enseignes à réseaux à soigner leur présence en ligne (Google, Maps, avis clients)',
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
              "+40 % d'informations magasins correctement publiées en ligne",
            ],
          },
          {
            headline: 'Réponses types aux avis clients',
            metrics: ['+30 % de taux de réponse aux avis', "70 % des clients ont adopté l'outil"],
          },
          {
            headline: 'Refonte de la publication des infos magasins + intégration Apple Plans & Waze',
            metrics: [
              "+60 % d'informations publiées avec succès sur les plateformes",
              '95 % de réussite sur les nouveaux canaux (Apple Plans, Waze)',
            ],
          },
        ],
        tags: ['SaaS B2B', 'Lead PM', 'Product Discovery', 'Expérience client', 'Intégrations', 'Data'],
      },
      {
        company: 'IpsoSenso',
        logo: 'ipsosenso',
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
            metrics: ['Cadrage, priorisation et suivi du développement de fonctionnalités web et mobile'],
          },
        ],
        tags: ['Grands comptes', 'Cadrage', 'Priorisation', 'Web & Mobile'],
      },
    ],
  },

  savor: {
    url: 'https://savor-nine.vercel.app/',
    pitch: 'Toutes tes recettes, enfin au même endroit.',
    body: "Savor extrait automatiquement ingrédients et étapes depuis Instagram, TikTok, un blog ou une photo de carnet. Conçu, designé et développé de bout en bout, de l'idée au déploiement.",
    features: [
      {
        key: 'extract',
        title: 'Extraction automatique',
        desc: "Un lien ou une photo, et l'IA structure ingrédients, étapes, temps et difficulté en quelques secondes.",
      },
      {
        key: 'library',
        title: 'Bibliothèque personnelle',
        desc: 'Collections, filtres par difficulté ou tag, suivi des recettes testées et notées.',
      },
      {
        key: 'cook',
        title: 'Mode cuisine guidé',
        desc: 'Étape par étape sur grand écran, minuteur intégré, plus besoin de scroller les mains pleines de farine.',
      },
      {
        key: 'plan',
        title: 'Planning & liste de courses',
        desc: 'Glisse tes recettes dans le calendrier, la liste de courses se génère, cumulée et rangée par rayon.',
      },
    ],
    stack: ['Next.js', "IA d'extraction", 'Supabase', 'Vercel'],
    ctaLabel: 'Tester Savor en ligne',
    mockup: {
      title: 'Bowl méditerranéen',
      desc: 'Pois chiches, feta, tomates confites, citron',
      time: '20 min',
      difficulty: 'Facile',
    },
  },

  skills: [
    {
      key: 'product',
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
      key: 'leadership',
      group: 'Leadership',
      items: [
        'Management de PM',
        "Structuration d'équipe",
        'Coaching & mentorat',
        'Rituels agiles',
        'Alignement des parties prenantes',
      ],
    },
    {
      key: 'ai',
      group: 'IA & Tech',
      items: [
        'Claude Code',
        'Dust',
        'Agents IA en production',
        'IA Ops & process',
        'Prototypage',
        'Data & analytics',
      ],
    },
  ],

  educationLabel: 'Formation & certifications',
  education: [
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
  ],

  languagesLabel: 'Langues',
  languages: [
    { name: 'Français', level: 'Langue maternelle', pct: 100 },
    { name: 'Anglais', level: 'Courant · C2 · IELTS 7 / TOEIC 895', pct: 90 },
    { name: 'Allemand', level: 'Scolaire · A2', pct: 30 },
  ],

  companies: [
    { name: 'Groupe Barrière', slug: 'barriere' },
    { name: 'Partoo', slug: 'partoo' },
    { name: 'IpsoSenso', slug: 'ipsosenso' },
    { name: 'Veolia', slug: 'veolia' },
    { name: 'GRDF', slug: 'grdf' },
    { name: 'Gerep', slug: 'gerep' },
  ],

  contact: {
    eyebrow: 'Et maintenant ?',
    title: 'Parlons produit.',
    lead: "Une opportunité, une question sur l'IA appliquée aux process, ou juste l'envie d'échanger sur un produit : la porte est ouverte.",
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    locationLabel: 'Localisation',
  },
}
