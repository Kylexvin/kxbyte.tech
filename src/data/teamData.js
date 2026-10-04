// src/data/teamData.js
import vinny from '../assets/team/vinny_.jpg';
import baza from '../assets/team/baz.jpeg';
import cecilia from '../assets/team/cecilia.jpeg';
import joseph from '../assets/team/sejjo.png';
import john from '../assets/team/maina.jpeg';

export const team = [
  {
    slug: 'cecilia-ndirangu',
    name: 'Cecilia Ndirangu',
    role: 'User Onboarding',
    tag: 'Onboarding • Support',
    image: cecilia.src,

    bio: 'Cecilia welcomes new users to KXBYTE products and makes sure they get running quickly. She handles the first conversations, walks people through setup, and stays close to the questions and friction that come up as businesses start using the software.',

    skills: [
      'User Onboarding',
      'Product Support',
      'User Communication',
      'Relationship Management',
    ],

    focus: [
      'User onboarding',
      'Product support',
      'First-use experience',
    ],

    email: 'cecilia@kxbyte.co.ke',
    location: 'Nairobi, Kenya',
    joined: null,

    socials: {
      linkedin: 'https://www.linkedin.com/in/cecilia-ndirangu-05523b2b0',
      github: null,
    },
  },
  {
    slug: 'kylex-vinny',
    name: 'Kylex Vinny',
    role: 'Founder & Lead Developer',
    tag: 'Product • Full-Stack',
    image: vinny.src,

    bio: 'Kylex is the founder and lead developer at KXBYTE. He builds the products the company runs on — KxTill, KXBYTE Suite, and everything in development. His focus is on shipping software that solves real problems for real businesses, and keeping it running once it ships.',

    skills: [
      'React',
      'React Native',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'TypeScript',
      'AWS',
      'Docker',
      'System Design',
    ],

    focus: [
      'Product engineering',
      'System architecture',
      'Backend and platform',
    ],

    email: 'kylex@kxbyte.co.ke',
    location: 'Nairobi, Kenya',
    joined: 'August 2025',

    socials: {
      linkedin: 'https://www.linkedin.com/in/vincent-kipchirchir-622890363',
      github: 'https://github.com/kylexvin',
    },
  },
  {
    slug: 'joseph-situma',
    name: 'Joseph Situma',
    role: 'Senior Full-Stack Developer',
    tag: 'Architecture • Cloud • Performance',
    image: joseph.src,

    bio: 'Joseph works on the engineering side of KXBYTE products — building and maintaining the systems behind them. He works across frontend, backend, and cloud infrastructure, with a focus on systems that hold up when they\'re actually being used.',

    skills: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Cloud Infrastructure',
      'System Architecture',
      'REST APIs',
    ],

    focus: [
      'Product infrastructure',
      'Cloud systems',
      'API design',
    ],

    email: null,
    location: 'Kenya',
    joined: null,

    socials: {
      linkedin: null,
      github: null,
    },
  },
  {
    slug: 'john-maina',
    name: 'John Maina',
    role: 'Full-Stack Developer',
    tag: 'Frontend • Backend • APIs',
    image: john.src,

    bio: 'John builds across the KXBYTE stack — frontend interfaces, backend services, and the APIs that connect them. His work sits wherever a product needs engineering, from user-facing screens to the systems behind them.',

    skills: [
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
    ],

    focus: [
      'Product engineering',
      'Frontend and backend',
      'API development',
    ],

    email: null,
    location: 'Kenya',
    joined: null,

    socials: {
      linkedin: null,
      github: null,
    },
  },
  {
    slug: 'bazarin-wanyoro',
    name: 'Bazarin Wanyoro',
    role: 'Marketing & Growth',
    tag: 'Marketing • Growth',
    image: baza.src,

    bio: 'Bazarin handles marketing and growth at KXBYTE — the work of getting our products in front of the businesses that need them. Campaigns, content, brand, and the day-to-day of building awareness around what we build.',

    skills: [
      'Digital Marketing',
      'Brand Strategy',
      'Content Marketing',
      'Market Research',
      'Social Media',
    ],

    focus: [
      'Growth and marketing',
      'Brand and content',
      'Market positioning',
    ],

    email: 'bazarin@kxbyte.co.ke',
    location: 'Kutus, Kirinyaga, Kenya',
    joined: null,

    socials: {
      linkedin: null,
      github: 'https://github.com/BazarinTech',
    },
  },
];