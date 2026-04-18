// src/data/projectsData.js
export const projectsData = [
  {
    id: 1,
    title: 'MoiHub Platform',
    client: 'Independent Platform',
    slug: 'moihub-platform',
    icon: '🏗️',

    problem: 'Students struggled to find housing, food, and services across fragmented platforms like WhatsApp and social media, with no centralized solution.',

    solution: 'Built a full campus super-app combining rentals, marketplace, food delivery, and real-time messaging into one scalable platform.',

    results: [
      { metric: 'Multi-service', label: 'Platform' },
      { metric: 'Real-time', label: 'Messaging' },
      { metric: 'Full Stack', label: 'System' }
    ],

    features: [
      'User authentication & profiles',
      'Real-time messaging',
      'Marketplace & rentals',
      'Food ordering system',
      'Admin dashboard'
    ],

    tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    tags: ['Full Stack', 'Mobile App', 'Platform'],
    color: '#ff5c1a',
    image: '/images/moihub.jpg',
    liveUrl: 'https://moihub.com'
  },

  {
    id: 2,
    title: 'Business Website',
    client: 'Client Project',
    slug: 'business-website',
    icon: '🌐',

    problem: 'The business lacked an online presence and struggled to attract and convert customers digitally.',

    solution: 'Designed and developed a modern, responsive website focused on performance, clarity, and user experience.',

    results: [
      { metric: 'Responsive', label: 'Design' },
      { metric: 'Optimized', label: 'Performance' },
      { metric: 'Modern', label: 'UI/UX' }
    ],

    features: [
      'Responsive design',
      'SEO-ready structure',
      'Fast loading performance',
      'Clean UI/UX'
    ],

    tech: ['React', 'CSS', 'Node.js'],
    tags: ['Website', 'Frontend'],
    color: '#ff784a',
    image: '/images/project1.jpg',
    liveUrl: '#'
  },

  {
    id: 3,
    title: 'Custom Admin System',
    client: 'Internal / Demo',
    slug: 'admin-system',
    icon: '⚙️',

    problem: 'Managing data and operations manually leads to inefficiencies and lack of visibility.',

    solution: 'Built a custom dashboard system for managing users, data, and operations in one centralized interface.',

    results: [
      { metric: 'Centralized', label: 'Control' },
      { metric: 'Efficient', label: 'Workflow' },
      { metric: 'Scalable', label: 'Architecture' }
    ],

    features: [
      'User management',
      'Dashboard analytics',
      'Role-based access',
      'API integration'
    ],

    tech: ['React', 'Node.js', 'MongoDB'],
    tags: ['Dashboard', 'Backend'],
    color: '#ff9468',
    image: '/images/project2.jpg',
    liveUrl: '#'
  }
];

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};