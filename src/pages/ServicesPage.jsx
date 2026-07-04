// src/pages/ServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Smartphone, Settings, Palette, ArrowRight, CheckCircle,
  Users, TrendingUp, Clock, Code
} from 'lucide-react';
import '../styles/ServicesPage.css';

const services = [
  {
    Icon: Globe,
    title: 'Web Development',
    slug: 'web-development',
    desc: 'Get a website that loads fast, looks professional, and actually brings in customers — not just a pretty page.',
    features: ['Custom Websites', 'E-commerce', 'CMS Integration', 'SEO Optimized'],
    color: '#ff4500',
    bgGradient: 'linear-gradient(135deg, #fff5f0, #ffe8e0)',
  },
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    slug: 'mobile-apps',
    desc: 'Put your business in your customers\' pockets. Apps that work, retain users, and grow with your business.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
    color: '#4a6cf7',
    bgGradient: 'linear-gradient(135deg, #f0f4ff, #e0e8ff)',
  },
  {
    Icon: Settings,
    title: 'Business Automation',
    slug: 'systems-backends',
    desc: 'Stop doing manually what a system can do for you. We build tools that save time, cut costs, and reduce errors.',
    features: ['Workflow Automation', 'CRM Systems', 'Inventory Management', 'Custom Dashboards'],
    color: '#10b981',
    bgGradient: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
  },
  {
    Icon: Palette,
    title: 'UI & UX Design',
    slug: 'ui-ux-design',
    desc: 'First impressions close deals. We design interfaces that build trust and turn visitors into paying customers.',
    features: ['User Research', 'Prototyping', 'Visual Design', 'Usability Testing'],
    color: '#8b5cf6',
    bgGradient: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
  },
];

// Technologies used - grouped by category
const technologies = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Python', 'Django'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
  cloud: ['AWS', 'Docker', 'Nginx', 'Git'],
  ai: ['OpenAI', 'Hugging Face', 'TensorFlow', 'PyTorch'],
};

// Service packages
const packages = [
  {
    name: 'Starter',
    price: 'From KES 50K',
    features: ['Business Website', 'Mobile Responsive', 'SEO Basics', '1 Month Support'],
    recommended: false,
  },
  {
    name: 'Professional',
    price: 'From KES 150K',
    features: ['Custom Web App', 'Mobile App', 'Advanced SEO', '3 Months Support', 'Analytics Dashboard'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    features: ['Full System Development', 'AI Integration', 'Cloud Infrastructure', '12 Months Support', 'Dedicated Team'],
    recommended: false,
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="services-page__header">
        <div className="services-page__header-content">
          <span className="services-page__header-badge">What We Do</span>
          <h1 className="services-page__header-title">
            Digital Solutions That <span>Drive Growth</span>
          </h1>
          <div className="services-page__header-line"></div>
          <p className="services-page__header-desc">
            End-to-end digital solutions built for Kenyan businesses. 
            From web to mobile to automation — we've got you covered.
          </p>
          <div className="services-page__header-stats">
            <div className="services-page__header-stat">
              <Users size={20} color="#ff4500" />
              <div>
                <span className="services-page__header-stat-value">50+</span>
                <span className="services-page__header-stat-label">Clients Served</span>
              </div>
            </div>
            <div className="services-page__header-stat">
              <Code size={20} color="#4a6cf7" />
              <div>
                <span className="services-page__header-stat-value">100+</span>
                <span className="services-page__header-stat-label">Projects Delivered</span>
              </div>
            </div>
            <div className="services-page__header-stat">
              <Clock size={20} color="#10b981" />
              <div>
                <span className="services-page__header-stat-value">10K+</span>
                <span className="services-page__header-stat-label">Hours Saved</span>
              </div>
            </div>
            <div className="services-page__header-stat">
              <TrendingUp size={20} color="#8b5cf6" />
              <div>
                <span className="services-page__header-stat-value">150%</span>
                <span className="services-page__header-stat-label">Growth Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-page__grid">
        <div className="services-page__grid-content">
          {services.map((service, index) => (
            <div className="services-page__service" key={index}>
              <div className="services-page__service-header">
                <div className="services-page__service-icon" style={{ background: service.bgGradient, color: service.color }}>
                  <service.Icon size={32} />
                </div>
                <span className="services-page__service-number">0{index + 1}</span>
              </div>
              <h3 className="services-page__service-title">{service.title}</h3>
              <p className="services-page__service-desc">{service.desc}</p>
              <ul className="services-page__service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} color={service.color} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={`/service/${service.slug}`} className="services-page__service-cta" style={{ color: service.color }}>
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="services-page__packages">
        <div className="services-page__packages-content">
          <span className="services-page__packages-label">Pricing</span>
          <h2 className="services-page__packages-title">
            Choose Your <span>Package</span>
          </h2>
          <p className="services-page__packages-subtitle">
            Flexible options tailored to your business needs and budget
          </p>
          <div className="services-page__packages-grid">
            {packages.map((pkg, index) => (
              <div className={`services-page__package ${pkg.recommended ? 'services-page__package--recommended' : ''}`} key={index}>
                {pkg.recommended && (
                  <div className="services-page__package-badge">Recommended</div>
                )}
                <h3 className="services-page__package-name">{pkg.name}</h3>
                <div className="services-page__package-price">{pkg.price}</div>
                <ul className="services-page__package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} color={pkg.recommended ? '#ff4500' : '#666'} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/#contact" className={`services-page__package-cta ${pkg.recommended ? 'services-page__package-cta--primary' : 'services-page__package-cta--secondary'}`}>
                  Get Started
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="services-page__tech">
        <div className="services-page__tech-content">
          <span className="services-page__tech-label">Technologies</span>
          <h2 className="services-page__tech-title">
            Our Tech <span>Stack</span>
          </h2>
          <p className="services-page__tech-subtitle">
            Modern tools and frameworks we use to build exceptional solutions
          </p>
          <div className="services-page__tech-grid">
            <div className="services-page__tech-category">
              <h4>Frontend</h4>
              <ul>
                {technologies.frontend.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="services-page__tech-category">
              <h4>Backend</h4>
              <ul>
                {technologies.backend.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="services-page__tech-category">
              <h4>Databases</h4>
              <ul>
                {technologies.databases.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="services-page__tech-category">
              <h4>Cloud & DevOps</h4>
              <ul>
                {technologies.cloud.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="services-page__tech-category">
              <h4>AI & Machine Learning</h4>
              <ul>
                {technologies.ai.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-page__cta">
        <div className="services-page__cta-content">
          <div className="services-page__cta-left">
            <span className="services-page__cta-label">Ready to Grow?</span>
            <h2>Let's Build <span>Something Amazing</span></h2>
            <p>Book a free consultation and let's discuss how we can help your business thrive.</p>
          </div>
          <div className="services-page__cta-right">
            <Link to="/#contact" className="services-page__cta-button">
              Contact Us Now
              <ArrowRight size={20} />
            </Link>
            <p className="services-page__cta-note">Free consultation for new clients</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;