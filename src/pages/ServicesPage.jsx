// src/pages/ServicesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Globe, Smartphone, Settings, Palette, ArrowRight, CheckCircle,
  Users,  
  Zap, Shield, Target,  Award,
   Database,  Server,
  Building2, GraduationCap, Heart, Stethoscope,
  ShoppingBag, Utensils,  Home, 
 ChevronDown, ChevronUp,
  Calendar, Clock as ClockIcon,
  Globe as GlobeIcon,
 MessageSquare, BarChart3, Cpu,
 Layers
} from 'lucide-react';
import '../styles/ServicesPage.css';

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kxbyte.com/services",
      "name": "Software Development Services | KXBYTE Kenya",
      "description": "Custom software development, website design, mobile app development, AI solutions, branding, and business automation services in Kenya.",
      "url": "https://kxbyte.com/services"
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Web Development" },
        { "@type": "ListItem", "position": 2, "name": "Mobile App Development" },
        { "@type": "ListItem", "position": 3, "name": "Custom Software Development" },
        { "@type": "ListItem", "position": 4, "name": "AI Solutions" },
        { "@type": "ListItem", "position": 5, "name": "Branding" },
        { "@type": "ListItem", "position": 6, "name": "SEO & Digital Growth" }
      ]
    }
  ]
};

// Service Categories - Expanded
const services = [
  {
    id: 'web-development',
    Icon: Globe,
    title: 'Website Design & Development',
    slug: 'web-development',
    desc: 'Professional, responsive websites built for speed, usability, and growth. We create custom websites, corporate sites, landing pages, and e-commerce platforms.',
    features: ['Custom Websites', 'Corporate Websites', 'Landing Pages', 'E-commerce', 'CMS Integration', 'Performance Optimization', 'SEO Optimized'],
    color: '#ff4500',
    bgGradient: 'linear-gradient(135deg, #fff5f0, #ffe8e0)',
    icon: '🌐'
  },
  {
    id: 'custom-software',
    Icon: Building2,
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    desc: 'Tailor-made business software including ERP systems, CRM, inventory management, POS systems, hospital management, school management, booking platforms, and marketplace systems.',
    features: ['ERP Systems', 'CRM Systems', 'Inventory Management', 'POS Systems', 'Hospital Management', 'School Management', 'Booking Platforms', 'Marketplace Systems'],
    color: '#10b981',
    bgGradient: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    icon: '💻'
  },
  {
    id: 'mobile-apps',
    Icon: Smartphone,
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    desc: 'Native and cross-platform Android and iOS applications designed for real-world users. We build offline-first apps with push notifications and seamless user experiences.',
    features: ['Android', 'iOS', 'React Native', 'Flutter', 'Offline-first Apps', 'Push Notifications', 'App Store Optimization'],
    color: '#4a6cf7',
    bgGradient: 'linear-gradient(135deg, #f0f4ff, #e0e8ff)',
    icon: '📱'
  },
  {
    id: 'ai-solutions',
    Icon: Cpu,
    title: 'AI Solutions & Automation',
    slug: 'ai-solutions',
    desc: 'Artificial intelligence integration for business automation, intelligent assistants, document processing, predictive analytics, recommendation systems, and LLM integration.',
    features: ['AI Chatbots', 'Business Automation', 'Document AI', 'Recommendation Systems', 'LLM Integration', 'Predictive Analytics'],
    color: '#8b5cf6',
    bgGradient: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
    icon: '🤖'
  },
  {
    id: 'branding',
    Icon: Palette,
    title: 'Branding & Graphic Design',
    slug: 'branding',
    desc: 'Comprehensive brand identity development including logos, visual identities, marketing materials, brand guidelines, social media design, and complete brand strategy.',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Marketing Materials', 'Social Media Design', 'Brand Strategy'],
    color: '#ec4899',
    bgGradient: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
    icon: '🎨'
  },
  {
    id: 'seo',
    Icon: BarChart3,
    title: 'SEO & Digital Growth',
    slug: 'seo',
    desc: 'Strategic search engine optimization and digital marketing to improve visibility, attract more customers, and grow your online presence with data-driven strategies.',
    features: ['Technical SEO', 'Local SEO', 'Performance Optimization', 'Analytics', 'Content Strategy', 'Conversion Optimization'],
    color: '#f59e0b',
    bgGradient: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    icon: '📈'
  }
];

// Problems We Solve
const problems = [
  { icon: <ClockIcon size={20} />, text: 'Manual Processes' },
  { icon: <GlobeIcon size={20} />, text: 'Poor Online Presence' },
  { icon: <Settings size={20} />, text: 'Slow Business Operations' },
  { icon: <Server size={20} />, text: 'Outdated Software' },
  { icon: <Users size={20} />, text: 'Low Customer Engagement' },
  { icon: <Zap size={20} />, text: 'Lack of Automation' },
  { icon: <Database size={20} />, text: 'Inefficient Inventory Tracking' },
  { icon: <Calendar size={20} />, text: 'Difficult Booking Processes' },
];

// Industries with descriptions
const industries = [
  { 
    name: 'Healthcare', 
    icon: <Stethoscope size={24} />,
    systems: ['Clinic Systems', 'Hospital Software', 'Pharmacy Management', 'Appointment Booking']
  },
  { 
    name: 'Education', 
    icon: <GraduationCap size={24} />,
    systems: ['Student Portals', 'School Management', 'E-learning Platforms']
  },
  { 
    name: 'Retail & E-commerce', 
    icon: <ShoppingBag size={24} />,
    systems: ['POS Systems', 'Inventory Management', 'E-commerce Platforms']
  },
  { 
    name: 'NGOs & CBOs', 
    icon: <Heart size={24} />,
    systems: ['Donation Platforms', 'Volunteer Management', 'Reporting Dashboards']
  },
  { 
    name: 'Real Estate', 
    icon: <Home size={24} />,
    systems: ['Property Management', 'Rental Platforms', 'Booking Systems']
  },
  { 
    name: 'Hospitality', 
    icon: <Utensils size={24} />,
    systems: ['Restaurant Systems', 'Ordering Platforms', 'Delivery Management', 'Reservation Systems']
  },
];

// Technologies
const technologies = {
  frontend: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Python', 'Django', 'PHP'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Firebase'],
  cloud: ['AWS', 'Docker', 'Nginx', 'Git', 'Google Cloud'],
  ai: ['OpenAI', 'NVIDIA NIM', 'Hugging Face', 'TensorFlow', 'LangChain']
};

// Why Choose KXBYTE
const whyChoose = [
  { icon: <CheckCircle size={20} />, text: 'Custom-built solutions' },
  { icon: <Zap size={20} />, text: 'Modern technologies' },
  { icon: <Layers size={20} />, text: 'Scalable architecture' },
  { icon: <Shield size={20} />, text: 'Security-first approach' },
  { icon: <Users size={20} />, text: 'Long-term support' },
  { icon: <MessageSquare size={20} />, text: 'Transparent communication' },
  { icon: <Target size={20} />, text: 'Business-focused development' },
  { icon: <Award size={20} />, text: 'Quality craftsmanship' },
];

// Pricing
const pricing = [
  { service: 'Business Website', startingFrom: 'KES 35,000' },
  { service: 'E-commerce Website', startingFrom: 'KES 80,000' },
  { service: 'Web Application', startingFrom: 'KES 150,000' },
  { service: 'Mobile App', startingFrom: 'KES 180,000' },
  { service: 'Branding', startingFrom: 'KES 15,000' },
  { service: 'SEO', startingFrom: 'Custom Quote' },
  { service: 'Enterprise Software', startingFrom: 'Custom Quote' },
];

// FAQ
const faqs = [
  {
    q: 'How much does software development cost?',
    a: 'Costs vary depending on project scope, features, integrations, and timeline. We provide transparent quotes after understanding your requirements. Contact us for a free consultation.'
  },
  {
    q: 'How long does a website take?',
    a: 'A standard business website typically takes 2-4 weeks. E-commerce websites and web applications take 4-8 weeks depending on complexity.'
  },
  {
    q: 'Do you build mobile apps?',
    a: 'Yes. We build Android and iOS apps using React Native and Flutter, as well as native development when required.'
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Absolutely. We can redesign, modernize, and optimize your existing website to improve performance, user experience, and conversions.'
  },
  {
    q: 'Do you provide maintenance?',
    a: 'Yes. We offer ongoing maintenance, updates, and support packages to ensure your software stays secure and performs optimally.'
  },
  {
    q: 'Can you build custom systems?',
    a: 'Yes. We specialize in custom software development including ERP, CRM, inventory, hospital, school, and booking systems.'
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We serve clients locally in Kenya and internationally. Our remote development process makes collaboration seamless.'
  },
  {
    q: 'Which technologies do you use?',
    a: 'We use modern technologies including React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, and various AI frameworks.'
  },
];

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Software Development Services | KXBYTE Kenya</title>
        <meta
          name="description"
          content="Custom software development, website design, mobile app development, AI solutions, branding, and business automation services in Kenya. Based in Nairobi, serving businesses locally and globally."
        />
        <meta
          name="keywords"
          content="
            software development Kenya,
            web development Kenya,
            mobile app development Kenya,
            custom software Kenya,
            AI solutions Kenya,
            business automation Kenya,
            branding Kenya,
            SEO Kenya,
            website design Kenya,
            Nairobi software company
          "
        />
        <link rel="canonical" href="https://kxbyte.com/services" />
      </Helmet>

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="services-page">
        {/* Hero Section */}
        <section className="services-page__hero">
          <div className="services-page__hero-content">
            <span className="services-page__hero-badge">Our Services</span>
            <h1 className="services-page__hero-title">
              Software Development <span>Services</span>
            </h1>
            <div className="services-page__hero-line"></div>
            <p className="services-page__hero-desc">
              Custom software, websites, mobile applications, AI solutions, and business automation 
              built for startups, SMEs, NGOs, enterprises, and growing businesses in Kenya and beyond.
            </p>
            <div className="services-page__hero-buttons">
              <Link to="/#contact" className="services-page__hero-cta services-page__hero-cta--primary">
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="services-page__hero-cta services-page__hero-cta--secondary">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="services-page__categories">
          <div className="services-page__categories-header">
            <span className="services-page__section-label">What We Build</span>
            <h2 className="services-page__section-heading">
              Our <span>Services</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__categories-subtitle">
              End-to-end digital solutions designed to help your business grow
            </p>
          </div>
          <div className="services-page__categories-grid">
            {services.map((service, index) => (
              <div className="services-page__category-card" key={index}>
                <div className="services-page__category-card-header">
                  <div className="services-page__category-card-icon" style={{ background: service.bgGradient, color: service.color }}>
                    <service.Icon size={28} />
                  </div>
                  <span className="services-page__category-card-emoji">{service.icon}</span>
                </div>
                <h3 className="services-page__category-card-title">{service.title}</h3>
                <p className="services-page__category-card-desc">{service.desc}</p>
                <ul className="services-page__category-card-features">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} color={service.color} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/service/${service.slug}`} className="services-page__category-card-cta" style={{ color: service.color }}>
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="services-page__problems">
          <div className="services-page__problems-content">
            <div className="services-page__problems-left">
              <span className="services-page__section-label">Problems We Solve</span>
              <h2 className="services-page__section-heading">
                Challenges We <span>Address</span>
              </h2>
              <div className="services-page__section-line"></div>
              <p className="services-page__problems-desc">
                Businesses come to us because they struggle with these challenges. 
                We build solutions that eliminate inefficiencies and drive growth.
              </p>
            </div>
            <div className="services-page__problems-grid">
              {problems.map((problem, index) => (
                <div className="services-page__problem-item" key={index}>
                  <div className="services-page__problem-item-icon">{problem.icon}</div>
                  <span>{problem.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose KXBYTE */}
        <section className="services-page__why">
          <div className="services-page__why-content">
            <span className="services-page__section-label">Why Choose KXBYTE</span>
            <h2 className="services-page__section-heading">
              Why <span>KXBYTE</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__why-subtitle">
              What sets us apart from the competition
            </p>
            <div className="services-page__why-grid">
              {whyChoose.map((item, index) => (
                <div className="services-page__why-item" key={index}>
                  <div className="services-page__why-item-icon">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="services-page__process">
          <div className="services-page__process-content">
            <span className="services-page__section-label">How We Work</span>
            <h2 className="services-page__section-heading">
              Development <span>Process</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__process-subtitle">
              A structured approach from concept to deployment
            </p>
            <div className="services-page__process-steps">
              {[
                'Discovery', 'Planning', 'UI/UX Design', 'Development', 
                'Testing', 'Deployment', 'Maintenance'
              ].map((step, index) => (
                <div className="services-page__process-step" key={index}>
                  <div className="services-page__process-step-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="services-page__process-step-arrow">↓</div>
                  <h4>{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="services-page__industries">
          <div className="services-page__industries-content">
            <span className="services-page__section-label">Industries</span>
            <h2 className="services-page__section-heading">
              Who We <span>Serve</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__industries-subtitle">
              We work with businesses and organizations across various sectors
            </p>
            <div className="services-page__industries-grid">
              {industries.map((industry, index) => (
                <div className="services-page__industry-card" key={index}>
                  <div className="services-page__industry-card-header">
                    <div className="services-page__industry-card-icon">{industry.icon}</div>
                    <h3>{industry.name}</h3>
                  </div>
                  <ul className="services-page__industry-card-systems">
                    {industry.systems.map((system, idx) => (
                      <li key={idx}>{system}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="services-page__tech">
          <div className="services-page__tech-content">
            <span className="services-page__section-label">Technologies</span>
            <h2 className="services-page__section-heading">
              Tech <span>Stack</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__tech-subtitle">
              Modern tools and frameworks we use to build exceptional solutions
            </p>
            <div className="services-page__tech-grid">
              <div className="services-page__tech-category">
                <h4>Frontend</h4>
                <ul>
                  {technologies.frontend.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
              <div className="services-page__tech-category">
                <h4>Backend</h4>
                <ul>
                  {technologies.backend.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
              <div className="services-page__tech-category">
                <h4>Databases</h4>
                <ul>
                  {technologies.databases.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
              <div className="services-page__tech-category">
                <h4>Cloud & DevOps</h4>
                <ul>
                  {technologies.cloud.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
              <div className="services-page__tech-category">
                <h4>AI & Machine Learning</h4>
                <ul>
                  {technologies.ai.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="services-page__pricing">
          <div className="services-page__pricing-content">
            <span className="services-page__section-label">Pricing</span>
            <h2 className="services-page__section-heading">
              Investment <span>Guide</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__pricing-subtitle">
              Starting prices for our most common services
            </p>
            <div className="services-page__pricing-table">
              <div className="services-page__pricing-header">
                <span className="services-page__pricing-header-service">Service</span>
                <span className="services-page__pricing-header-price">Starting From</span>
              </div>
              {pricing.map((item, index) => (
                <div className="services-page__pricing-row" key={index}>
                  <span className="services-page__pricing-row-service">{item.service}</span>
                  <span className="services-page__pricing-row-price">{item.startingFrom}</span>
                </div>
              ))}
            </div>
            <p className="services-page__pricing-note">
              Every project is unique. Final pricing depends on features, integrations, timeline, and project scope. 
              <Link to="/#contact" className="services-page__pricing-note-link"> Contact us for a custom quote</Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="services-page__faq">
          <div className="services-page__faq-content">
            <span className="services-page__section-label">FAQ</span>
            <h2 className="services-page__section-heading">
              Frequently Asked <span>Questions</span>
            </h2>
            <div className="services-page__section-line"></div>
            <div className="services-page__faq-list">
              {faqs.map((faq, index) => (
                <div 
                  className={`services-page__faq-item ${openFaq === index ? 'services-page__faq-item--open' : ''}`} 
                  key={index}
                >
                  <button 
                    className="services-page__faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.q}</span>
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <div className="services-page__faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="services-page__cta">
          <div className="services-page__cta-content">
            <div className="services-page__cta-left">
              <span className="services-page__cta-label">Ready to Build?</span>
              <h2>Ready to Build <span>Your Next Project?</span></h2>
              <p>
                Whether you need a business website, a custom software platform, a mobile application, 
                or AI-powered automation, we're ready to help.
              </p>
            </div>
            <div className="services-page__cta-right">
              <Link to="/#contact" className="services-page__cta-button services-page__cta-button--primary">
                Request a Quote
                <ArrowRight size={20} />
              </Link>
              <Link to="/#contact" className="services-page__cta-button services-page__cta-button--secondary">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;