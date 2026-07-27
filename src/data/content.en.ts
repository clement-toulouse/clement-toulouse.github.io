import type { SiteContent } from './content.types.ts'

/** English content — opt-in via the language selector, French stays the default. */
export const contentEn: SiteContent = {
  meta: {
    title: 'Clément Toulouse · Head of Product',
    skipToContent: 'Skip to content',
    portraitAlt: 'Portrait of',
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
    // Donnée de config (non traduite) : elle n'est lue qu'en français au build.
    goatCounterCode: '',
    tagline: [
      '9 years building B2B and B2C products that prove themselves in production.',
      'I turn vision into delivery, and delivery into numbers.',
    ],
    taglineHighlight: ['vision', 'delivery', 'numbers'],
  },

  hero: {
    ctaImpact: 'See my impact',
    ctaLinkedin: 'View my LinkedIn',
    locationCard: { title: 'Paris', subtitle: 'Open to a conversation' },
    badge: { value: '9+', label: 'years in product' },
  },

  nav: {
    ariaMain: 'Main navigation',
    ariaMobile: 'Mobile navigation',
    contact: 'Contact me',
    themeToggle: 'Toggle theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langToggleTo: 'Passer en français',
    items: [
      { id: 'impact', label: 'Impact' },
      { id: 'ia', label: 'AI' },
      { id: 'parcours', label: 'Experience' },
      { id: 'projet-perso', label: 'Personal project' },
      { id: 'profil', label: 'Profile' },
      { id: 'contact', label: 'Contact' },
    ],
  },

  marquee: [
    'Product vision',
    'Discovery',
    'OKR',
    'Claude Code',
    'AI agents',
    'Dust',
    'Management',
    'Delivery',
    'AI Ops',
    'Mobile B2C',
    'B2B SaaS',
    'Measured impact',
  ],

  companyMarquee: { srLabel: 'Companies and clients from my career' },

  sections: {
    impact: {
      eyebrow: 'What it delivered',
      title: 'Impact before talk',
      lead: "A roadmap you can't measure is just a wish list. Here's what my teams and I have shipped at Barrière over the last three years, in numbers.",
    },
    ia: {
      eyebrow: 'AI, hands-on',
      title: 'AI in the process and the delivery, not bolted on',
      lead: 'Two concrete uses, not a marketing layer on top of a product: I code and prototype with AI to decide on something real, and I automate the repetitive parts of product work to give my teams back time for decisions.',
    },
    parcours: {
      eyebrow: 'Experience',
      title: 'Nine years, three companies',
      lead: 'From consulting to a fast-growing start-up, then to a large group: at each step, more scope and more accountability for the results.',
    },
    savor: {
      eyebrow: 'Personal project · 2026',
      lead: "A Head of Product who never carries anything through alone eventually forgets what a decision really costs. Savor is my training ground: from idea to launch, with no team to catch my mistakes.",
    },
    profil: {
      eyebrow: 'Profile',
      title: 'What I bring',
      lead: "9 years scoping, prioritizing, and shipping, with the same standard every time: a clear vision, a team that knows why it's moving, and a result you can measure.",
    },
  },

  impactQuote:
    '"Building a new feature or product is a decision you can defend with a number, backed by a team that understands why it was made."',

  stats: [
    {
      value: 60,
      suffix: 'k',
      label: 'monthly active users',
      detail: "On Barrière Play, the group's new mobile app for casino customers that I launched",
      note: '+2% every month',
      accent: 'iris',
    },
    {
      value: 8,
      suffix: 'M€',
      label: 'loaded onto digital wallets',
      detail: 'Topped up by customers through Barrière Play',
      note: '+10% every month',
      accent: 'mint',
    },
    {
      value: 30,
      suffix: '',
      label: 'daily users',
      detail: 'AI chatbot on internal digital tools, used by casino staff',
      note: '95% accurate answers',
      accent: 'ember',
    },
    {
      value: 33,
      suffix: '',
      label: 'casinos running the staff app',
      detail: 'Redesigned the tool to help monitor on-site casino activity',
      note: '300+ users',
      accent: 'iris',
    },
  ],

  aiCards: [
    {
      kicker: 'Development & prototyping',
      title: 'Coding and prototyping with AI',
      body: "I use Claude Code to build and Google AI Studio to mock up. In a single session, a product idea becomes a clickable prototype: you decide on something real, not a slide.",
      points: [
        'Clickable prototypes to settle a discovery hypothesis',
        'Visual mockups with Google AI Studio when look and feel come first',
        'Building sites and tools, from design to deployment',
      ],
      proof:
        'The proof is right in front of you: this site was entirely designed and built with Claude Code, from the design system to the prerendering.',
      logos: ['claude', 'aistudio'],
      accent: 'iris',
      span: 'lg:col-span-3 lg:row-span-2',
    },
    {
      kicker: 'Product team processes',
      title: 'Automating product work',
      body: 'I build and deploy AI assistants (on Dust, Gemini) so Product Managers can save their energy for decisions. I make sure these agents are adopted, used, and deliver real value.',
      points: [
        'Automated functional specifications',
        'Automatically generated release notes',
        'User story writing agent, specialized per product',
      ],
      logos: ['dust', 'gemini'],
      accent: 'ember',
      span: 'lg:col-span-3 lg:row-span-2',
    },
  ],

  experience: {
    responsibilitiesLabel: 'Key responsibilities',
    moreLabel: 'Use Case',
    lessLabel: 'Close',
    contextLabel: 'Context',
    approachLabel: 'Approach',
    impactLabel: 'Impact',
    items: [
      {
        company: 'Groupe Barrière',
        logo: 'barriere',
        context: 'Casinos & hotels · consumer product',
        period: 'Since 2024',
        roles: [
          {
            title: 'Head of Product Casino',
            summary:
              "I own every digital product of the group's casino division: Barrière Play (the customer mobile app to manage their loyalty and their in-venue digital wallet), CZAM (the single in-venue staff tool for managing entries and running floor operations), the development of the group's online gambling business, still in build and confidential, and the strategy for a shared sign-up journey and customer account across our different platforms. I lead a team of 4 Product Managers and 2 QA testers, responsible for consistency and experience across all our applications.",
          },
        ],
        responsibilities: [
          'Define the product vision and digital strategy for the business, tracked through OKRs',
          "Build each product's metric tree (North Star Metric, OKRs and objectives), aligned with the group's various departments and stakeholders",
          'Challenge and coach the Product Managers to maximize the quality and value of their products',
          "Own the pole's product portfolio: CZAM, the staff tool for managing casino entries, and an online gambling product still under wraps and in development",
          'Structure cross-team processes (AI agent deployment, product methodology) and lead the strategic thinking on a shared customer account and sign-up flow across our platforms',
        ],
        wins: [
          {
            headline: "Launch of Barrière Play, the group's mobile app for casino customers",
            metrics: [
              "60,000 active players per month, 40% of the group's customer base (+2%/month)",
              '€8M loaded every month by players onto their digital wallet (+10%/month)',
            ],
          },
          {
            headline: 'Production rollout of an internal AI assistant for the teams',
            metrics: [
              '95% accurate answers',
              '30 employees use it every day',
              'Noticeably improved access to information and productivity',
            ],
          },
        ],
        tags: ['Product vision', 'OKR', 'Management', 'Mobile B2C', 'AI agents', 'QA'],
        screenshot: {
          src: '/experience/barriere-play.webp',
          alt: 'Screenshot of the Barrière Play app, Carré VIP loyalty card',
          frame: 'phone',
        },
        caseStudy: {
          context:
            "The digital experience for the group's casino customers ran on siloed teams and product processes that varied from one brand to the next: each casino managed its own backlog, with no shared prioritization or methodology. My mission: unify the product vision and industrialize the pace of feature releases on Barrière Play, the group's mobile app (loyalty, digital wallet connected to the slot machines).",
          approach: [
            'Shared OKR-based steering across the 4 Product Managers, aligning priorities without breaking their autonomy on their own scope',
            'Deployed AI agents into the product process: drafting and reviewing specs, per-product user stories, release notes',
            'Structured a shared product methodology (rituals, templates, a "definition of done") adopted by every team',
          ],
          impact:
            "The app became the group's reference digital entry point for players: 60,000 monthly active users, growing steadily at +2%/month, with €8M loaded onto digital wallets through the app every month. The internal AI assistant now handles most day-to-day product questions, freeing up Product Managers' time for higher-value decisions.",
          image: {
            src: '/experience/barriere-account.webp',
            alt: 'Screenshot of the Barrière Play app, My Account screen',
            frame: 'phone',
          },
        },
      },
      {
        company: 'Partoo',
        logo: 'partoo',
        context:
          "Software that helps multi-location brands manage their online presence (Google, Maps, customer reviews)",
        period: '2019 · 2023',
        roles: [
          {
            title: 'Lead Product Manager',
            duration: '2 years',
            summary:
              'Led a 13-person product organization split into 2 cross-functional teams (Product, Design, QA, Data, Engineering).',
          },
          {
            title: 'Product Manager',
            duration: '3 years',
            summary:
              'Built high-impact features end to end, from idea to launch, always starting from real user needs.',
          },
        ],
        responsibilities: [
          "Define the product vision for my scope, aligned with Partoo's overall strategy",
          "Set objectives, track them, and ensure they're met (OKRs and KPIs)",
          'Challenge and support the teams to maximize the value delivered to customers',
        ],
        wins: [
          {
            headline: 'New back office and revamped new-customer onboarding',
            metrics: [
              '−60% time to get a new customer up and running',
              '+40% of store information correctly published online',
            ],
          },
          {
            headline: 'Template replies to customer reviews',
            metrics: ['+30% review response rate', '70% of customers adopted the tool'],
            screenshot: {
              src: '/experience/partoo-avis.webp',
              alt: 'Screenshot of a reply to a Google review from the Partoo tool',
            },
          },
          {
            headline: 'Revamped store-info publishing + Apple Maps & Waze integration',
            metrics: [
              '+60% of information successfully published across platforms',
              '95% success rate on the new channels (Apple Maps, Waze)',
            ],
          },
        ],
        tags: ['B2B SaaS', 'Lead PM', 'Product Discovery', 'Customer Experience', 'Integrations', 'Data'],
        screenshot: {
          src: '/experience/partoo-diffusion.webp',
          alt: 'Screenshot of the Partoo distribution dashboard, publication rate by platform',
          frame: 'browser',
          url: 'app.partoo.co',
        },
        caseStudy: {
          context:
            'The Review Management product handled customer reviews for hundreds of brands across Google, Facebook and TripAdvisor APIs that were incompatible with one another: different data formats, quotas and update delays on every platform. Onboarding a new client took several days, most of it manual.',
          approach: [
            'Audited onboarding friction points with the support teams, to prioritize the revamp on what actually blocked clients',
            'Designed a new back office unifying store configuration, independent of the distribution platform',
            'Launched template review replies, co-written with the Care team to stay on-brand for each client',
            'Integrated new distribution channels (Apple Maps, Waze) building on the already-unified architecture',
          ],
          impact:
            'The back-office and new-client onboarding revamp cut ramp-up time by 60%, while template review replies pushed the response rate up by 30%, with 70% of clients adopting the tool within the first few months. The new channels reached a 95% publication success rate from launch.',
        },
      },
      {
        company: 'IpsoSenso',
        logo: 'ipsosenso',
        context: 'IT consulting firm · projects for large enterprises',
        period: '2017 · 2018',
        roles: [
          {
            title: 'Product Owner',
            duration: '2 years',
            summary:
              "First steps on the product side, on web and mobile projects for large accounts, first at the agency then embedded directly with the client's teams.",
          },
        ],
        wins: [
          {
            headline: 'At the agency (1 year)',
            metrics: ['Designed and managed web projects for Veolia and Gerep'],
          },
          {
            headline: "Embedded with GRDF's teams (1 year)",
            metrics: ['Scoping, prioritization, and delivery tracking for web and mobile features'],
          },
        ],
        tags: ['Large accounts', 'Scoping', 'Prioritization', 'Web & Mobile'],
      },
    ],
  },

  savor: {
    url: 'https://savor-nine.vercel.app/',
    pitch: 'All your recipes, finally in one place.',
    body: 'Savor automatically extracts ingredients and steps from Instagram, TikTok, a blog, or a photo of a handwritten notebook. A progressive web app (PWA), designed and built end to end, from idea to deployment.',
    features: [
      {
        key: 'extract',
        title: 'Automatic extraction',
        desc: 'A link or a photo, and the AI structures ingredients, steps, time, and difficulty in seconds.',
      },
      {
        key: 'library',
        title: 'Personal library',
        desc: 'Collections, filters by difficulty or tag, tracking of recipes tried and rated.',
      },
      {
        key: 'cook',
        title: 'Guided cooking mode',
        desc: 'Step by step on a big screen, with a built-in timer, no more scrolling with flour-covered hands.',
      },
      {
        key: 'plan',
        title: 'Meal planning & shopping list',
        desc: 'Drag your recipes into the calendar and the shopping list builds itself, combined and sorted by aisle.',
      },
    ],
    stack: ['PWA', 'Next.js', 'AI extraction', 'Supabase', 'Vercel'],
    ctaLabel: 'Try Savor online',
    mockup: {
      title: 'Mediterranean bowl',
      desc: 'Chickpeas, feta, sun-dried tomatoes, lemon',
      time: '20 min',
      difficulty: 'Easy',
    },
  },

  skills: [
    {
      key: 'product',
      group: 'Product',
      items: [
        'Product vision & strategy',
        'Discovery',
        'Metric tree & North Star Metric',
        'OKR & KPI',
        'Roadmapping',
        'Continuous Product Discovery',
        'User research',
      ],
    },
    {
      key: 'leadership',
      group: 'Leadership',
      items: [
        'Managing PMs',
        'Team structuring',
        'Coaching & mentoring',
        'Agile rituals',
        'Stakeholder alignment',
      ],
    },
    {
      key: 'ai',
      group: 'AI & Tech',
      items: [
        'Claude Code',
        'Dust',
        'AI agents in production',
        'AI Ops & process',
        'Prototyping',
        'Data & analytics',
      ],
    },
  ],

  educationLabel: 'Education & certifications',
  education: [
    {
      title: 'ECE Paris · Engineering school',
      detail: "Master's degree · Connected objects, networks & services",
      period: '2012 · 2017',
    },
    {
      title: 'GenAI for Product Team',
      detail: 'AI Discipline · certification',
      period: 'Sep. 2025',
    },
    {
      title: 'Claude Code for Product Managers',
      detail: 'AI Discipline · certification',
      period: 'Jul. 2026',
    },
  ],

  languagesLabel: 'Languages',
  languages: [
    { name: 'French', level: 'Native language', pct: 100 },
    { name: 'English', level: 'Fluent · C2 · IELTS 7 / TOEIC 895', pct: 90 },
    { name: 'German', level: 'School level · A2', pct: 30 },
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
    eyebrow: "What's next?",
    title: "Let's talk product.",
    lead: 'An opportunity, a question about applying AI to process, or just the urge to talk shop: the door is open.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    locationLabel: 'Location',
  },
}
