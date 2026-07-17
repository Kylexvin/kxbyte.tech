// src/data/projectsData.js
import moihub from '../assets/images/moihub.jpeg';
import foodapp from '../assets/images/foodapp.jpeg';
import tujiinue from '../assets/images/tujiinue.jpeg';
import sagrema from '../assets/images/sagrema.jpeg';
import mtz from '../assets/images/mtz.jpeg';
import kxtill from '../assets/images/kxtill.jpeg';
import taskflow from '../assets/images/taskflow.jpeg';
import coastal from '../assets/images/hotel.jpg';

export const projectsData = [
{
  id: 1,
  title: 'MoiHub Platform',
  category: 'web',
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
  title: 'Tujiinue CBO Website',
  category: 'web',
  client: 'Tujiinue Community Based Organization',
  icon: '🌍',
  image: tujiinue,
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  problem: 'The organization lacked a modern online presence to showcase its community programs, impact, and attract partners, donors, and volunteers.',
  solution: 'Designed and developed a responsive website that highlights the organization\'s mission, projects, success stories, and provides an easy way for visitors to get involved.',
  features: [
    'Responsive website design',
    'Projects and programs showcase',
    'News and blog section',
    'Contact and volunteer forms',
    'Donation information',
    'Content management dashboard'
  ],
  results: [
    { type: 'website', value: 'Modern', label: 'Online Presence' },
    { type: 'responsive', value: '100%', label: 'Mobile Responsive' }
    
  ],
  liveUrl: 'https://tujiinue-cbo.org/'
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
  title: 'KXTill POS Mobile',
  category: 'mobile',
  client: 'KXBYTE',
  icon: '📲',
  image: kxtill,
  tech: ['React Native', 'Node.js', 'Express.js', 'SQLite'],
  problem: 'Many small business owners need a portable point-of-sale solution that works reliably even without an internet connection while keeping inventory and sales organized.',
  solution: 'Built KXTill POS Mobile, an offline-first point-of-sale application that enables businesses to manage sales, inventory, customers, and transactions directly from their smartphones, with data synchronized when connectivity is available.',
  features: [
    'Offline-first sales processing',
    'Product and inventory management',
    'Customer management',
    'Sales history and reports',
    'Receipt generation',
    'Local SQLite data storage',
    'Cloud synchronization'
  ],
  results: [
    { type: 'offline', value: '100%', label: 'Offline Operation' },
    { type: 'sync', value: 'Automatic', label: 'Data Synchronization' },
    { type: 'platform', value: 'Mobile', label: 'Business Management' }
  ],
  liveUrl: null
},
{
  id: 5,
  title: 'MTZ - Milk Token Exchange',
  category: 'mobile',
  client: 'MTZ',
  icon: '🥛',
  image: mtz,
  tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Blockchain'],
  problem: 'Dairy farmers often experience delayed payments, limited financial transparency, and inefficient value exchange throughout the milk supply chain.',
  solution: 'Designed and developed MTZ, a blockchain-backed platform that digitizes milk value into transferable tokens, enabling transparent settlements between farmers, collection centers, processors, and buyers.',
  features: [
    'Digital milk token wallet',
    'Milk delivery recording',
    'Peer-to-peer token transfers',
    'Cash withdrawal and redemption',
    'Transaction history',
    'Blockchain-backed audit trail'
  ],
  results: [
    { type: 'payments', value: 'Digital', label: 'Milk Value Exchange' },
    { type: 'ledger', value: 'Transparent', label: 'Transaction Records' },
    { type: 'ecosystem', value: 'End-to-End', label: 'Dairy Supply Chain' }
  ],
  liveUrl: null
},
{
  id: 6,
  title: 'TaskFlow - Project Management API',
  category: 'backend',
  client: 'TaskFlow',
  icon: '📋',
  image: taskflow, // Your diagram/image
  tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Sequelize'],
  problem: 'Development teams needed a robust, secure, and scalable backend system to manage projects, tasks, and team collaboration with proper access control.',
  solution: 'Built TaskFlow, a RESTful API with JWT authentication and role-based access control (RBAC). Features project and task management, team collaboration, comments, and real-time dashboard statistics.',
  features: [
    'JWT authentication with refresh tokens',
    'Role-based access control (Admin, Manager, Member)',
    'Project CRUD operations',
    'Task management with status tracking',
    'Task assignments and comments',
    'Dashboard statistics and reporting',
    'User management and team organization',
    'RESTful API with Swagger documentation'
  ],
  results: [
    { type: 'auth', value: 'JWT', label: 'Secure Authentication' },
    { type: 'roles', value: '3+', label: 'Access Levels' },
    { type: 'api', value: 'RESTful', label: 'Scalable API' }
  ],
  testimonial: {
    quote: 'TaskFlow provides a solid foundation for any team looking to manage projects efficiently with proper security and role management.',
    author: 'Backend Team',
    role: 'TaskFlow'
  },
  liveUrl: null
},

{
  id: 7,
  title: 'Sagrema Foundation Website',
  category: 'web',
  client: 'Sagrema Foundation',
  icon: '🤝',
  image: sagrema,
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  problem: 'The foundation needed a professional platform to communicate its mission, showcase initiatives, and engage donors, beneficiaries, and community partners.',
  solution: 'Built a modern, accessible website that presents the foundation\'s work, impact, events, and provides streamlined communication with supporters.',
  features: [
    'Programs and initiatives pages',
    'Events and announcements',
    'Photo gallery',
    'Contact and partnership forms',
    'Donation information',
    'Admin content management'
  ],
  results: [
    { type: 'impact', value: 'Professional', label: 'Digital Presence' },
    { type: 'access', value: '24/7', label: 'Information Access' },
    { type: 'responsive', value: '100%', label: 'Cross-Device Support' }
  ],
  liveUrl: "https://sagremafoundation.org/"
},
{
  id: 8,
  title: 'Coastal Hotel website',
  category: 'web',
  client: 'Coastal Hotel',
  icon: '🤝',
  image: coastal,
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  problem: 'The hotel needed a professional platform to communicate its services, showcase amenities, and engage potential guests.',
  solution: 'Built a modern, accessible website that presents the hotel\'s offerings, guest reviews, and provides streamlined booking functionality.',
  features: [
    'Room listings and availability',
    'Booking system',
    'Photo gallery',
   
  ],
  results: [
    { type: 'impact', value: 'Professional', label: 'Digital Presence' },
    { type: 'access', value: '24/7', label: 'Information Access' },
    { type: 'responsive', value: '100%', label: 'Cross-Device Support' }
  ],
  liveUrl: "https://luxuryhotel-demo.vercel.app/"
},




];

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};