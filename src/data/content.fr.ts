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
    photoCutout: '/clement-cutout.webp',
    siteUrl: 'https://clement-toulouse.github.io',
    // Vide = analytics désactivé. Voir goatCounterCode dans content.types.ts.
    goatCounterCode: '',
    tagline: [
      "9 ans à construire des produits B2B et B2C qui font leurs preuves en production.",
      "Je transforme une vision en delivery, et le delivery en chiffres.",
    ],
    taglineHighlight: ['vision', 'delivery', 'chiffres'],
  },

  hero: {
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
      { id: 'projet-perso', label: 'Projet perso' },
      { id: 'profil', label: 'Profil' },
      { id: 'contact', label: 'Contact' },
    ],
  },

  marquee: [
    'Vision produit',
    'Discovery',
    'OKR',
    'Claude Code',
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
      lead: "Une roadmap qui ne se mesure pas n'est qu'une liste d'envies. Voici ce que mes équipes et moi avons livré chez Barrière ces trois dernières années, en chiffres.",
    },
    ia: {
      eyebrow: 'Appétence IA',
      title: "L'IA dans le process et le delivery, pas à côté",
      lead: "Deux usages concrets, pas une couche marketing posée sur un produit : je code et prototype avec l'IA pour trancher sur du réel, et j'automatise le travail répétitif des équipes produit pour leur rendre du temps de décision.",
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
      lead: "9 ans à cadrer, prioriser et livrer, avec toujours la même exigence : une vision claire, une équipe qui sait pourquoi elle avance, et un résultat qui se mesure.",
    },
  },

  impactQuote:
    "« Le développement d'une nouvelle fonctionnalité ou produit, c'est une décision qu'on peut défendre avec un chiffre, et une équipe qui comprend pourquoi on l'a prise. »",

  stats: [
    {
      value: 60,
      suffix: 'k',
      label: 'utilisateurs actifs mensuels',
      detail: "Sur Barrière Play, la nouvelle application mobile des clients de casino du groupe que j'ai lancée",
      note: 'Soit 40 % des clients du groupe, +2 % par mois',
      accent: 'iris',
    },
    {
      value: 8,
      suffix: 'M€',
      label: 'chargés par mois sur les wallets digitaux',
      detail: 'Rechargés par les clients via Barrière Play',
      note: '+10 % par mois',
      accent: 'mint',
    },
    {
      value: 30,
      prefix: '-',
      suffix: '%',
      label: 'de demandes au support',
      detail: "Grâce au chatbot IA interne, qui répond aux questions de connaissance des collaborateurs sur les outils digitaux casino",
      note: '95 % de réponses justes, 30 utilisateurs quotidiens',
      accent: 'ember',
    },
    {
      value: 4.2,
      suffix: '/5',
      label: 'de satisfaction des collaborateurs',
      detail: "Sur l'outil collaborateur casino CZAM, complètement refondu",
      note: '27 casinos équipés, 300+ utilisateurs',
      accent: 'iris',
    },
  ],

  aiCards: [
    {
      kicker: 'Développement & prototypage',
      title: 'Coder et prototyper avec l\'IA',
      body: "J'utilise Claude Code pour développer et Google AI Studio pour maquetter. En une seule session, une idée produit devient un prototype cliquable : on décide sur du concret, pas sur un slide.",
      points: [
        'Prototypes cliquables pour trancher une hypothèse de discovery',
        'Maquettes visuelles avec Google AI Studio quand le rendu prime',
        "Développement de sites et d'outils, du design au déploiement",
      ],
      proof:
        'La démonstration est sous vos yeux : ce site a été entièrement conçu et développé avec Claude Code.',
      logos: ['claude', 'aistudio'],
      accent: 'iris',
      span: 'lg:col-span-3 lg:row-span-2',
    },
    {
      kicker: 'Process des équipes produit',
      title: 'Automatiser le travail produit',
      body: "Je crée et déploie des agents IA (sur Dust, Gemini) pour que les Product Managers gardent leur énergie pour les décisions. Je m'assure de leur bonne adoption, valeur ajoutée et usage.",
      points: [
        "Assistant Discovery : benchmark et synthèse d'interviews utilisateurs",
        'Spécification fonctionnelle automatisée',
        'Release notes générées automatiquement',
        'Agent de rédaction de User Stories, spécialisé par produit',
      ],
      logos: ['dust', 'gemini'],
      accent: 'ember',
      span: 'lg:col-span-3 lg:row-span-2',
    },
  ],

  experience: {
    responsibilitiesLabel: 'Responsabilités clés',
    moreLabel: 'Use Case',
    lessLabel: 'Fermer',
    contextLabel: 'Contexte',
    approachLabel: 'Approche',
    impactLabel: 'Impact',
    items: [
      {
        company: 'Groupe Barrière',
        logo: 'barriere',
        context: 'Casinos & hôtels · produit grand public',
        period: 'Depuis 2024',
        roles: [
          {
            title: 'Head of Product Casino',
            summary:
              "Je pilote l'ensemble des produits digitaux du pôle Casino du groupe en encadrant une équipe de 4 Product Managers et 2 testeurs qualité (QA), garante de la cohérence et de l'expérience sur toutes nos applications.",
            summaryPoints: [
              "Barrière Play (l'application mobile client pour gérer leur fidélité et utiliser un wallet digital en casino)",
              "CZAM (l'outil collaborateur unique en casino pour la gestion des entrées et le pilotage opérationnel de la salle)",
              'Parcours d\'inscription et du compte client commun entre nos différentes plateformes',
              "Développement de l'activité de jeu en ligne du groupe encore en construction et confidentiel",
            ],
          },
        ],
        responsibilities: [
          "Définir la vision produit et la stratégie digitale de l'activité Casino du groupe, avec un pilotage par OKR",
          "Valider le Metric Tree de chaque produit (North Star Metric, OKR et objectifs), aligné avec les différentes directions et parties prenantes du groupe",
          'Challenger et accompagner les Product Managers pour maximiser la qualité et la valeur de leurs produits',
          "Structurer les processus inter-équipes (déploiement d'agents IA, méthodologies produit)",
        ],
        wins: [
          {
            headline: "Lancement de Barrière Play, l'application mobile des clients de casino du groupe",
            metrics: [
              '60 000 joueurs actifs par mois, soit 40 % des clients du groupe (+2 %/mois)',
              "8 M€ chargés chaque mois par les joueurs sur leur wallet digital (+10 %/mois)",
            ],
          },
          {
            headline: "Déploiement en production d'un chatbot IA interne pour les collaborateurs opérationnels Casino",
            metrics: [
              '95 % de réponses justes',
              '30 collaborateurs quotidiens',
              '-30 % de demandes au support',
              "Accès à l'information et productivité nettement améliorés",
            ],
          },
          {
            headline:
              'Lancement de CZAM V2, bascule du client lourd historique du groupe vers une web app',
            metrics: [
              '4,2/5 de satisfaction collaborateur',
              'Adoption par les 27 casinos français du groupe, soit +300 utilisateurs',
              'Meilleur suivi et accompagnement des joueurs dans le cadre du jeu responsable',
              "Pilotage des performances de la salle en temps réel, avec un outil d'aide à l'optimisation",
            ],
          },
          {
            headline: "Développement et mise en production d'une stratégie de parcours d'inscription et compte client commun à tous nos outils",
            metrics: [
              "Jusqu'alors développé individuellement sur chaque produit",
              'Réduit les efforts de maintenance',
              'Élimine les écarts fonctionnels entre les outils',
            ],
          },
        ],
        screenshot: {
          src: '/experience/barriere-play.webp',
          alt: "Capture d'écran de l'application Barrière Play, carte de fidélité Carré VIP",
          frame: 'phone',
        },
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
            summaryPoints: [
              "Périmètre : l'onboarding des clients et les outils collaborateurs",
              "Objectifs : réduire le temps d'onboarding, et le temps de traitement des demandes et des tâches des équipes Customer Care",
            ],
          },
          {
            title: 'Product Manager',
            duration: '3 ans',
            summary:
              "Développement de fonctionnalités à fort impact, de l'idée à la mise en ligne, en partant toujours des besoins réels des utilisateurs.",
            summaryPoints: [
              "Périmètre : le produit phare de Partoo, la multi-diffusion des informations des établissements sur les différents annuaires",
              'Objectif : augmenter le score de visibilité en ligne des établissements',
            ],
          },
        ],
        responsibilities: [
          "Définir la vision produit de mon périmètre, alignée sur la stratégie globale de Partoo",
          'Fixer les objectifs, les suivre et garantir leur atteinte (OKR et KPI)',
          'Challenger et accompagner les équipes pour maximiser la valeur livrée aux clients',
        ],
        wins: [
          {
            headline: "Nouveau back-office collaborateur et refonte de l'arrivée des nouveaux clients",
            metrics: [
              "−60 % de temps pour mettre un nouveau client en route",
              "+40 % d'informations établissements correctement publiées en ligne",
            ],
          },
          {
            headline: 'Template de réponse aux avis clients',
            metrics: [
              '+30 % de taux de réponse aux avis',
              "70 % d'adoption clients 3 mois après le lancement",
            ],
            screenshot: {
              src: '/experience/partoo-avis.webp',
              alt: "Capture d'écran d'une réponse à un avis Google depuis l'outil Partoo",
            },
          },
          {
            headline: "Refonte de la diffusion des informations des établissements + intégration Apple Plans & Waze",
            metrics: [
              "+60 % d'informations publiées avec succès sur les plateformes",
              '95 % de réussite sur les nouveaux canaux (Apple Plans, Waze)',
            ],
          },
        ],
        screenshot: {
          src: '/experience/partoo-diffusion.webp',
          alt: "Capture d'écran du tableau de diffusion Partoo, taux de publication par plateforme",
          frame: 'browser',
          url: 'app.partoo.co',
        },
      },
      {
        company: 'IpsoSenso',
        logo: 'ipsosenso',
        context: 'Société de conseil en informatique · projets pour de grandes entreprises',
        period: '2017 · 2018',
        roles: [
          {
            title: 'Product Owner',
            duration: '2 ans',
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
      },
    ],
  },

  savor: {
    url: 'https://savor-nine.vercel.app/',
    pitch: 'Toutes tes recettes, enfin au même endroit.',
    body: "Savor extrait automatiquement ingrédients et étapes depuis Instagram, TikTok, un blog ou une photo de carnet. Progressive web app (PWA) conçue, designée et développée de bout en bout, de l'idée au déploiement.",
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
    stack: ['PWA', 'Next.js', "IA d'extraction", 'Supabase', 'Vercel'],
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
        'User research',
      ],
    },
    {
      key: 'leadership',
      group: 'Leadership',
      items: [
        'Management',
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
    {
      title: 'Claude Code pour les Product Managers',
      detail: 'AI Discipline · certification',
      period: 'Juil. 2026',
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
    lead: "Une opportunité, une question sur l'IA appliquée aux process produit, ou juste l'envie d'échanger sur le produit : la porte est ouverte.",
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    locationLabel: 'Localisation',
  },
}
