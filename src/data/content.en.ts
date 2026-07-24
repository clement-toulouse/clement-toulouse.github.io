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
    tagline: [
      '9 years building B2B and B2C products that prove themselves in production.',
      'I turn vision into delivery, and delivery into numbers.',
    ],
    intro:
      "Passionate about using AI to make teams more effective, sharpen product decisions, and raise the bar on quality. Today I run the online gambling product at Groupe Barrière, with 4 Product Managers, 2 QA testers, and one conviction: a good product can be measured.",
  },

  hero: {
    proofs: [
      { value: '60K', label: 'active users' },
      { value: '€8M', label: 'in monthly revenue' },
      { value: '95%', label: 'accurate AI answers' },
      { value: '6', label: 'people managed' },
    ],
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
      { id: 'savor', label: 'Personal project' },
      { id: 'profil', label: 'Profile' },
      { id: 'contact', label: 'Contact' },
    ],
  },

  marquee: [
    'Product vision',
    'Discovery',
    'OKR',
    'Claude Code',
    'Barrière Play',
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
      lead: "A roadmap you can't measure is just a wish list. Here's what my teams and I have shipped over the last three years, in numbers.",
    },
    ia: {
      eyebrow: 'AI, hands-on',
      title: 'AI in the process, not bolted on',
      lead: "I don't treat AI as a marketing layer on top of a product. I use it to shorten the loop between a hunch and a decision, for myself and for my teams.",
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
      lead: 'An engineer who moved into product and kept a taste for the concrete: systems that hold up, teams that decide fast, numbers that move.',
    },
  },

  impactQuote:
    '"A good product is a decision you can defend with a number, backed by a team that understands why it was made."',

  stats: [
    {
      value: 60,
      suffix: 'k',
      label: 'monthly active users',
      detail: "On Barrière Play, the group's online gambling app · +2% every month",
      accent: 'iris',
    },
    {
      value: 8,
      suffix: 'M€',
      label: 'in monthly revenue generated',
      detail: 'Wagered by players through the app · +10% every month',
      accent: 'mint',
    },
    {
      value: 95,
      suffix: '%',
      label: 'accurate answers',
      detail: 'Internal AI chatbot I deployed to production',
      accent: 'ember',
    },
    {
      value: 9,
      suffix: ' years',
      prefix: '+',
      label: 'in product',
      detail: 'B2B & B2C, from scoping to production launch',
      accent: 'iris',
    },
  ],

  aiCards: [
    {
      kicker: 'AI-assisted development',
      title: 'Claude Code',
      body: "I code, prototype, and automate my own work with Claude Code every day. Turning a product idea into a clickable mockup in a single session changes how decisions get made: you decide on something real, not a slide.",
      points: [
        'Rapid prototyping to settle a discovery hypothesis',
        'Automating repetitive product tasks (specs, analyses, scripts)',
        'Training the team and spreading the practice',
      ],
      proof:
        'The proof is right in front of you: this site was entirely designed and built with Claude Code, from the design system to the prerendering.',
      logo: 'claude',
      accent: 'iris',
      span: 'lg:col-span-3 lg:row-span-2',
    },
    {
      kicker: 'Assistants & product process',
      title: 'AI Ops at Barrière',
      body: "I deploy AI assistants (via the Dust platform) connected to the company's documentation and tools, and I put AI at the heart of product work: I automate what's repetitive in specification and documentation, so Product Managers can save their energy for decisions.",
      points: [
        "Dust business assistants wired into product documentation",
        'Automated drafting and review of functional specifications',
        'User story writing agent, specialized per product',
        'Automatically generated release notes',
      ],
      logo: 'dust',
      accent: 'ember',
      span: 'lg:col-span-3 lg:row-span-2',
    },
  ],

  experience: {
    responsibilitiesLabel: 'Key responsibilities',
    items: [
      {
        company: 'Groupe Barrière',
        logo: 'barriere',
        context: 'Casinos, hotels & online gambling · consumer product',
        period: 'Since 2024',
        roles: [
          {
            title: 'Head of Product Casino',
            summary:
              "I run the group's online gambling product (casino, slots, sports betting). I lead a team of 4 Product Managers and 2 QA testers, responsible for consistency and experience across all our applications.",
          },
        ],
        responsibilities: [
          'Define the product vision and digital strategy for the business, tracked through OKRs',
          'Challenge and coach the Product Managers to maximize the quality and value of their products',
          'Structure and align cross-team processes by combining AI agent deployment with product methodology',
        ],
        wins: [
          {
            headline: "Launch of Barrière Play, the group's mobile online gambling app",
            metrics: [
              "60,000 active players per month, 40% of the group's customer base (+2%/month)",
              '€8M wagered every month by players through the app (+10%/month)',
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
      },
      {
        company: 'IpsoSenso',
        logo: 'ipsosenso',
        context: 'IT consulting firm · projects for large enterprises',
        period: '2017 · 2018',
        roles: [
          {
            title: 'Product Owner',
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
    body: 'Savor automatically extracts ingredients and steps from Instagram, TikTok, a blog, or a photo of a handwritten notebook. Designed and built end to end, from idea to deployment.',
    features: [
      {
        title: 'Automatic extraction',
        desc: 'A link or a photo, and the AI structures ingredients, steps, time, and difficulty in seconds.',
      },
      {
        title: 'Personal library',
        desc: 'Collections, filters by difficulty or tag, tracking of recipes tried and rated.',
      },
      {
        title: 'Guided cooking mode',
        desc: 'Step by step on a big screen, with a built-in timer — no more scrolling with flour-covered hands.',
      },
      {
        title: 'Meal planning & shopping list',
        desc: 'Drag your recipes into the calendar and the shopping list builds itself, combined and sorted by aisle.',
      },
    ],
    stack: ['Next.js', 'AI extraction', 'Supabase', 'Vercel'],
    ctaLabel: 'Try Savor online',
  },

  skills: [
    {
      key: 'product',
      group: 'Product',
      items: [
        'Product vision & strategy',
        'Discovery',
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
