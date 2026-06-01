// src/data/projectsData.js - No emojis, using string icons or null
export const projectsData = [
  {
    id: 1,
    title: 'MoiHub',
    client: 'Independent Platform',
    slug: 'moihub-platform',
    icon: null,
    category: 'Campus Super App',
    timeline: '6+ months',
    platform: ['Android', 'Web'],
    mockupStyle: 'phone',

    intro: {
      headline: 'Building a digital ecosystem for university students',
      summary: 'MoiHub was created to solve fragmented student services — combining rentals, marketplace, food delivery, real-time messaging, and social discovery into one scalable platform.'
    },

    context: 'Students at Moi University relied heavily on WhatsApp groups and scattered social media posts to find housing, roommates, food, and second-hand items. There was no trusted, centralized space built for campus life.',

    challenge: [
      { title: 'Fragmented Discovery', desc: 'No single place to find student housing, services, or goods near campus.' },
      { title: 'Trust Gap', desc: 'WhatsApp listings lacked verification, leading to scams and unreliable transactions.' },
      { title: 'Real-time at Scale', desc: 'Messaging needed to work seamlessly across weak campus networks.' },
      { title: 'Multi-service Complexity', desc: 'Building 7+ distinct modules inside one cohesive app without bloat.' }
    ],

    approach: 'Designed a mobile-first architecture from the ground up — modular services, scalable APIs, and a strong emphasis on real-time communication and offline resilience.',

    architecture: {
      frontend: ['React Native', 'Expo'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      realtime: ['Socket.io'],
      storage: ['Cloudinary'],
      auth: ['JWT', 'Google OAuth']
    },

    features: [
      { title: 'Real-time Messaging', description: 'Chat with typing indicators, online presence detection, and read receipts — built on Socket.io.' },
      { title: 'Service Discovery', description: 'AI-powered fuzzy search with Swahili support and offline SQLite caching for slow networks.' },
      { title: 'Marketplace & Rentals', description: 'Location-aware listings for student housing and second-hand goods.' },
      { title: 'Food Ordering', description: 'End-to-end ordering flow with provider dashboards and order tracking.' },
      { title: 'Admin & Provider Tools', description: 'Role-based dashboards for service providers to manage listings, products, and orders.' },
      { title: 'Google OAuth', description: 'Seamless sign-in with campus email accounts for verified user identity.' }
    ],

    technicalHighlights: [
      'Offline SQLite caching with Levenshtein distance search',
      'Scalable Socket.io architecture for real-time messaging',
      'Role-based access control across providers and admins',
      'FCM push notifications for order and message updates',
      'Modular backend with clean service separation'
    ],

    impact: [
      { value: '7+', label: 'Integrated Services' },
      { value: 'Real-time', label: 'Messaging System' },
      { value: 'Offline', label: 'Search Support' },
      { value: 'Full Stack', label: 'Architecture' }
    ],

    lessons: 'Building interconnected services inside one platform required extremely careful state management, modular backend design, and constant testing on real campus network conditions.',

    future: 'Planned expansions include AI-powered recommendations, M-Pesa payments, campus ID verification, and a social swipe-feed for student discovery.',

    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    tags: ['Full Stack', 'Mobile App', 'Platform'],
    color: '#ff5c1a',
    image: '/images/moihub.jpg',
    liveUrl: null,
    playStoreUrl: null,
    repoUrl: null
  },

  {
    id: 2,
    title: 'Tujiinue CBO',
    client: 'Client Project',
    slug: 'tujiinue-cbo',
    icon: null,
    category: 'NGO Website',
    timeline: '3 weeks',
    platform: ['Web'],
    mockupStyle: 'screen',

    intro: {
      headline: 'A digital home for a community-driven organization',
      summary: 'Tujiinue CBO needed a professional online presence to communicate their mission, attract donors, and establish credibility. Built a full multi-page site from scratch and deployed under their own domain.'
    },

    context: 'Tujiinue operated without any web presence, relying on word-of-mouth and physical outreach. Potential donors and partners had no way to learn about the organization or verify its legitimacy online.',

    challenge: [
      { title: 'No Online Presence', desc: 'Organization was invisible to anyone searching for them digitally.' },
      { title: 'Trust & Credibility', desc: 'Without a proper site, attracting donor funding was significantly harder.' },
      { title: 'Brand Identity', desc: 'Needed a visual identity that felt warm, trustworthy, and community-focused.' },
      { title: 'Fast Turnaround', desc: 'Client needed a fully deployed site with a custom domain quickly.' }
    ],

    approach: 'Built with React and Framer Motion for smooth animations, a warm light theme matching the brand colors, and a clear content hierarchy across all inner pages.',

    architecture: {
      frontend: ['React', 'Framer Motion', 'React Router DOM'],
      deployment: ['Vercel'],
      domain: ['Client-purchased custom domain']
    },

    features: [
      { title: 'Multi-page Structure', description: 'Home, About, Programs, and Contact pages with smooth routing.' },
      { title: 'Animated UI', description: 'Framer Motion transitions for a polished, professional feel.' },
      { title: 'Brand-matched Design', description: 'Deep indigo, warm orange, and pink palette reflecting the CBO identity.' },
      { title: 'Custom Domain Deploy', description: 'Deployed on Vercel with client-purchased domain, fully live.' },
      { title: 'Mobile Responsive', description: 'Fully responsive across all screen sizes.' }
    ],

    technicalHighlights: [
      'Framer Motion page transitions and scroll animations',
      'React Router DOM for clean multi-page navigation',
      'Component-scoped CSS for maintainability',
      'Vercel deployment pipeline with custom domain setup'
    ],

    impact: [
      { value: '5+', label: 'Pages Built' },
      { value: 'Live', label: 'Custom Domain' },
      { value: 'Paid', label: 'Client Project' },
      { value: 'React', label: 'Frontend' }
    ],

    lessons: 'Client work requires balancing design preferences with technical best practices. Clear communication and fast iteration mattered more than perfect code on the first pass.',

    future: 'Potential expansion to include a donations flow, event listings, and a volunteer sign-up system.',

    tech: ['React', 'Framer Motion', 'React Router DOM', 'Vercel'],
    tags: ['Website', 'Client Work', 'Frontend'],
    color: '#29079E',
    image: '/images/tujiinue.jpg',
    liveUrl: null,
    playStoreUrl: null,
    repoUrl: null
  },

  {
    id: 3,
    title: 'Sagrema',
    client: 'Client Project',
    slug: 'sagrema-org',
    icon: null,
    category: 'Organization Website',
    timeline: '2-3 weeks',
    platform: ['Web'],
    mockupStyle: 'screen',

    intro: {
      headline: 'Clean digital presence for a growing organization',
      summary: 'Sagrema needed a professional website to represent their work online — built with a focus on clarity, responsiveness, and a strong first impression.'
    },

    context: 'Like many growing organizations in Kenya, Sagrema had no centralized web presence. Stakeholders and partners had nowhere to reference their work or mission.',

    challenge: [
      { title: 'No Web Presence', desc: 'Organization had no digital touchpoint for stakeholders or partners.' },
      { title: 'Content Structure', desc: 'Needed clear information architecture to communicate the org mission effectively.' },
      { title: 'Professional Feel', desc: 'Design had to convey trust and legitimacy without feeling corporate.' }
    ],

    approach: 'Focused on clean layout, strong typography, and a content-first design that puts the organization mission front and center.',

    architecture: {
      frontend: ['React', 'CSS'],
      deployment: ['Vercel']
    },

    features: [
      { title: 'Responsive Design', description: 'Fully functional across mobile, tablet, and desktop.' },
      { title: 'Clean Information Architecture', description: 'Content organized for clarity and easy navigation.' },
      { title: 'Performance Optimized', description: 'Fast load times with minimal dependencies.' },
      { title: 'Professional UI', description: 'Design that reflects organizational credibility.' }
    ],

    technicalHighlights: [
      'React with component-scoped CSS',
      'Optimized asset loading for fast performance',
      'Vercel deployment with CI/CD on push'
    ],

    impact: [
      { value: 'Live', label: 'Deployed Site' },
      { value: 'Paid', label: 'Client Project' },
      { value: 'Fast', label: 'Load Performance' },
      { value: 'React', label: 'Frontend' }
    ],

    lessons: 'Keeping scope tight and delivering a clean, fast site on time is more valuable to a client than over-engineering features they never asked for.',

    future: 'Potential additions include a news/updates section, project gallery, and contact form with email integration.',

    tech: ['React', 'CSS', 'Vercel'],
    tags: ['Website', 'Client Work', 'Frontend'],
    color: '#2d8a4e',
    image: '/images/sagrema.jpg',
    liveUrl: null,
    playStoreUrl: null,
    repoUrl: null
  },

  {
    id: 4,
    title: 'Rada Ke',
    client: 'Independent Platform',
    slug: 'rada-ke',
    icon: null,
    category: 'Location-based Marketplace',
    timeline: 'In Progress',
    platform: ['Android', 'iOS'],
    mockupStyle: 'phone',

    intro: {
      headline: 'Discover services and shops around you — built for Nairobi',
      summary: 'Rada Ke is a location-aware service discovery and marketplace app built specifically for the Nairobi market, connecting users with nearby shops, service providers, and vendors in real time.'
    },

    context: 'Finding reliable local services in Nairobi is fragmented — spread across WhatsApp, Instagram, and word-of-mouth. There is no trusted, location-aware platform built for the Kenyan urban market.',

    challenge: [
      { title: 'Location Accuracy', desc: 'Surfacing relevant results based on proximity in a dense urban environment.' },
      { title: 'Marketplace + Discovery', desc: 'Combining a browsable shop directory with cart and checkout in one flow.' },
      { title: 'M-Pesa Integration', desc: 'Building a seamless STK push checkout flow native to the Kenyan market.' },
      { title: 'Provider Onboarding', desc: 'Making it easy for local vendors to list and manage their shops.' }
    ],

    approach: 'Built mobile-first with React Native and Expo, using map-based discovery as the core interaction model. Marketplace and checkout layered on top of the discovery layer.',

    architecture: {
      frontend: ['React Native', 'Expo'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      maps: ['React Native Maps'],
      payments: ['M-Pesa STK Push'],
      storage: ['Cloudinary']
    },

    features: [
      { title: 'Sonar / Map Discovery', description: 'Location-aware map view showing nearby shops and service pins in real time.' },
      { title: 'Marketplace Tab', description: 'Browse shops by category with filters, product listings, and shop profiles.' },
      { title: 'Cart & Checkout', description: 'Global CartContext with M-Pesa STK push for seamless mobile payments.' },
      { title: 'Provider Detail Screen', description: 'Rich shop profiles replacing legacy scan results — products, info, contact.' },
      { title: 'Category Filters', description: 'Filter shops and services by category across the map and marketplace views.' }
    ],

    technicalHighlights: [
      'Location-aware sonar component with stale closure fix',
      'Global CartContext shared across Marketplace and checkout flows',
      'M-Pesa STK push integration for Kenyan mobile payments',
      'React Native Maps with dynamic shop pins',
      'Modular screen architecture — ShopScreen, CartScreen, ProviderDetailScreen'
    ],

    impact: [
      { value: 'Live', label: 'In Development' },
      { value: 'M-Pesa', label: 'Payments' },
      { value: 'Nairobi', label: 'Target Market' },
      { value: 'Full Stack', label: 'Architecture' }
    ],

    lessons: 'Location-based UX requires constant real-device testing — emulators do not replicate real GPS behavior or network conditions in dense urban areas.',

    future: 'Planned features include vendor verification, delivery tracking, ratings and reviews, and expansion beyond Nairobi to other Kenyan cities.',

    tech: ['React Native', 'Node.js', 'MongoDB', 'M-Pesa'],
    tags: ['Mobile App', 'Marketplace', 'Full Stack'],
    color: '#0066ff',
    image: '/images/rada-ke.jpg',
    liveUrl: null,
    playStoreUrl: null,
    repoUrl: null
  }
];

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};