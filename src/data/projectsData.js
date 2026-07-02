// src/data/projectsData.js
import moihub from '../assets/images/moihub.jpeg';
import foodapp from '../assets/images/foodapp.jpeg';

export const projectsData = [
{
  id: 1,
  title: 'MoiHub',
  category: 'webapp',
  client: 'MoiHub',
  icon: '🎓',
  image: moihub,
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
  problem: 'Moi University students faced fragmented services such as finding accommodation, buying and selling second-hand items, ordering food, discovering roommates, and accessing campus businesses.',
  solution: 'Developed MoiHub, an all-in-one digital platform that centralizes essential student services into a single, user-friendly web application with real-time communication and secure transactions.',
  features: [
    'Student rentals and housing listings',
    'Roommate finder',
    'Marketplace for second-hand items',
    'E-Shop for campus businesses',
    'Food ordering and delivery',
    'Real-time messaging with read receipts',
    'Campus blog and announcements'
  ],
  results: [
    { type: 'feature', value: '7+', label: 'Integrated Services' },
    { type: 'realtime', value: '100%', label: 'Real-Time Messaging' }
  ],
  testimonial: {
    quote: 'MoiHub brings together everything a university student needs into one convenient platform, making campus life easier and more connected.',
    author: 'Kylex',
    role: 'Founder, MoiHub'
  },
  liveUrl: 'https://moihub-silk.vercel.app/'
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
  title: 'MoiHub Food Delivery',
  category: 'mobile',
  client: 'MoiHub',
  icon: '🍔',
  image: foodapp,
  tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
  problem: 'Students at Moi University had no centralized platform for discovering campus food vendors, placing orders, and communicating with vendors efficiently.',
  solution: 'Built an integrated food delivery module within MoiHub that allows students to browse menus, place orders, track order status, and communicate with vendors in real time.',
  features: [
    'Browse campus food vendors',
    'Real-time order status updates',
    'Vendor and customer messaging',
    'Order history',
    'Menu and pricing management',
    'Integrated with MoiHub accounts'
  ],
  results: [
    { type: 'vendors', value: 'Multi', label: 'Campus Vendors' },
    { type: 'orders', value: 'Real-Time', label: 'Order Tracking' }
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