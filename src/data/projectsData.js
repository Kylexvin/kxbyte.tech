// src/data/projectsData.js
export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'ecommerce',
    client: 'RetailCo',
    icon: '🛒',
    image: null,
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    problem: 'The client had an outdated e-commerce system with poor performance and conversion rates.',
    solution: 'We built a modern, headless e-commerce platform with real-time inventory and AI-powered recommendations.',
    features: ['Real-time inventory sync', 'AI product recommendations', 'One-click checkout', 'Analytics dashboard'],
    results: [
      { type: 'increase', value: '156%', label: 'Conversion Rate' },
      { type: 'users', value: '45K+', label: 'Monthly Users' },
      { type: 'time', value: '3.2x', label: 'Faster Load Time' }
    ],
    testimonial: {
      quote: 'This platform transformed our online business. Revenue doubled within 3 months.',
      author: 'Sarah Johnson',
      role: 'CEO, RetailCo'
    },
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'enterprise',
    client: 'MediCare Solutions',
    icon: '🏥',
    image: null,
    tech: ['React', 'Python', 'PostgreSQL', 'Docker'],
    problem: 'Managing patient data across multiple clinics was fragmented and inefficient.',
    solution: 'Created a unified healthcare management platform with secure data sharing and automated workflows.',
    features: ['Patient records management', 'Appointment scheduling', 'Billing integration', 'Secure messaging'],
    results: [
      { type: 'increase', value: '89%', label: 'Efficiency Gain' },
      { type: 'users', value: '2,000+', label: 'Healthcare Professionals' }
    ],
    testimonial: {
      quote: 'The system has revolutionized how we manage patient care across our network.',
      author: 'Dr. Michael Chen',
      role: 'Medical Director'
    },
    liveUrl: null
  },
  {
    id: 3,
    title: 'Food Delivery App',
    category: 'mobile',
    client: 'FoodDash',
    icon: '📱',
    image: null,
    tech: ['React Native', 'Firebase', 'Stripe', 'Mapbox'],
    problem: 'Food delivery market was saturated with poor user experience and unreliable tracking.',
    solution: 'Developed a sleek mobile app with real-time GPS tracking and smart route optimization.',
    features: ['Live order tracking', 'AI route optimization', 'In-app payments', 'Rating system'],
    results: [
      { type: 'increase', value: '234%', label: 'Order Growth' },
      { type: 'users', value: '100K+', label: 'App Downloads' }
    ],
    liveUrl: null
  },
  {
    id: 4,
    title: 'Portfolio Management Dashboard',
    category: 'web',
    client: 'InvestPro',
    icon: '📊',
    image: null,
    tech: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
    problem: 'Investment advisors lacked a comprehensive tool to track and analyze client portfolios.',
    solution: 'Built an interactive dashboard with real-time data visualization and risk analysis.',
    features: ['Real-time portfolio tracking', 'Risk assessment tools', 'Performance analytics', 'Client reporting'],
    results: [
      { type: 'increase', value: '67%', label: 'Client Retention' },
      { type: 'users', value: '500+', label: 'Advisors Using Platform' }
    ],
    liveUrl: 'https://example.com'
  },
  {
    id: 5,
    title: 'Smart Home IoT Platform',
    category: 'mobile',
    client: 'HomeTech',
    icon: '🏠',
    image: null,
    tech: ['React Native', 'Node.js', 'MQTT', 'MongoDB'],
    problem: 'Smart home devices operated in silos with no unified control system.',
    solution: 'Created a centralized IoT platform with voice control and automation capabilities.',
    features: ['Device automation', 'Voice control integration', 'Energy monitoring', 'Security alerts'],
    results: [
      { type: 'increase', value: '78%', label: 'User Satisfaction' },
      { type: 'users', value: '25K+', label: 'Active Users' }
    ],
    liveUrl: null
  },
  {
    id: 6,
    title: 'B2B SaaS CRM',
    category: 'enterprise',
    client: 'SalesHub',
    icon: '💼',
    image: null,
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    problem: 'Sales teams were using disjointed tools causing data silos and inefficiency.',
    solution: 'Developed an all-in-one CRM with pipeline management and AI-powered insights.',
    features: ['Lead management', 'Pipeline tracking', 'Email automation', 'Analytics dashboard'],
    results: [
      { type: 'increase', value: '92%', label: 'Sales Efficiency' },
      { type: 'users', value: '1,200+', label: 'Enterprise Users' }
    ],
    liveUrl: 'https://example.com'
  },
  {
    id: 7,
    title: 'Online Learning Platform',
    category: 'web',
    client: 'EduTech',
    icon: '🎓',
    image: null,
    tech: ['React', 'Python', 'PostgreSQL', 'WebRTC'],
    problem: 'Traditional education was inaccessible to many learners due to geographic and financial barriers.',
    solution: 'Built a comprehensive learning platform with live classes and interactive content.',
    features: ['Live video classes', 'Interactive quizzes', 'Progress tracking', 'Community forums'],
    results: [
      { type: 'users', value: '50K+', label: 'Students Enrolled' },
      { type: 'increase', value: '85%', label: 'Course Completion Rate' }
    ],
    testimonial: {
      quote: 'This platform has made quality education accessible to thousands of students worldwide.',
      author: 'Emma Rodriguez',
      role: 'Education Director'
    },
    liveUrl: null
  },
  {
    id: 8,
    title: 'Real Estate Marketplace',
    category: 'ecommerce',
    client: 'PropFinder',
    icon: '🏘️',
    image: null,
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Mapbox'],
    problem: 'Property search was inefficient with outdated listings and poor user experience.',
    solution: 'Created a modern marketplace with AI-powered property matching and virtual tours.',
    features: ['AI property matching', 'Virtual tours', 'Mortgage calculator', 'Agent messaging'],
    results: [
      { type: 'increase', value: '198%', label: 'Listing Views' },
      { type: 'users', value: '15K+', label: 'Active Buyers' }
    ],
    liveUrl: 'https://example.com'
  }
];

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};