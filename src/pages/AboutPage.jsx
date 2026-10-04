// src/pages/AboutPage.jsx
import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Users,
  Code,
  Globe,
  Wallet,
  Smartphone,
  Palette,
  Cpu,
  BarChart3,
  Cloud,
  Zap,
  Target,
  Truck,
  Award,
  Lightbulb,
  Shield,
  Sparkles,
  Briefcase,
  Rocket,
  GraduationCap,
  Heart,
  Stethoscope,
  ShoppingBag,
  Utensils,
  Package,
  Home,
  Landmark,
  Building2,
  Database,
  Bot,
  ShoppingCart,
  Hotel,
  School,
  Stethoscope as MedicalIcon,
  Layout,
  TrendingUp,
  Server,
  Layers,
} from 'lucide-react';
import founderImage from '../assets/team/vinny_.jpg';
import aboutImage from '../assets/images/about_hero.jpg';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const stats = [
    { value: 'KxTill', label: 'Live', icon: <ShoppingBag size={20} /> },
    { value: '6', label: 'Products', icon: <Layers size={20} /> },
    { value: '2025', label: 'Founded', icon: <Award size={20} /> },
    { value: 'Nairobi', label: 'Kenya', icon: <Globe size={20} /> },
  ];

  const services = [
    {
      icon: <ShoppingBag size={28} />,
      title: 'Retail Software',
      desc: 'KxTill — a point-of-sale system for growing retailers. Sales, stock, customers, payments, and branches in one place.',
    },
    {
      icon: <Layers size={28} />,
      title: 'Business Platform',
      desc: 'KXBYTE Suite — the organizational layer connecting our products, people, permissions, branches, and business data.',
    },
    {
      icon: <Users size={28} />,
      title: 'Workforce & Tasks',
      desc: 'KxWork — assign work, track progress, and give management visibility across teams and branches.',
    },
    {
      icon: <Building2 size={28} />,
      title: 'Customer Management',
      desc: 'KxCRM — keep customer information, interactions, and follow-ups organized in one place.',
    },
    {
      icon: <Package size={28} />,
      title: 'Invoicing',
      desc: 'KxInvoice — create invoices and track payments, connected to the work and sales that created them.',
    },
    {
      icon: <Code size={28} />,
      title: 'Custom Software',
      desc: 'When a business needs something our products don\'t cover, we build it. Custom systems, integrations, and internal tools.',
    },
    {
      icon: <Cloud size={28} />,
      title: 'Web Applications',
      desc: 'Platforms, portals, and dashboards — built around a specific business and maintained over time.',
    },
  ];

  const specialties = [
    { icon: <ShoppingBag size={20} />, name: 'Retail Operations' },
    { icon: <Package size={20} />, name: 'Inventory Management' },
    { icon: <ShoppingCart size={20} />, name: 'Point of Sale' },
    { icon: <Users size={20} />, name: 'Workforce Tools' },
    { icon: <Building2 size={20} />, name: 'Customer Management' },
    { icon: <Wallet size={20} />, name: 'Payments' },
    { icon: <Code size={20} />, name: 'Custom Systems' },
    { icon: <Globe size={20} />, name: 'Web Platforms' },
    { icon: <Layers size={20} />, name: 'Business Platforms' },
    { icon: <Database size={20} />, name: 'Business Data' },
  ];

  const reasons = [
    {
      icon: <Target size={24} />,
      title: 'Products, not projects',
      desc: 'We build and run our own software. Products get maintained and improved — not delivered and forgotten.',
    },
    {
      icon: <Layers size={24} />,
      title: 'Connected by design',
      desc: 'Every product works on its own. Everything connects through KXBYTE Suite into one system.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Built for real operations',
      desc: 'Our products model the actual operations of a business — not generic software with the business forced into it.',
    },
    {
      icon: <Truck size={24} />,
      title: 'Custom work still open',
      desc: 'When a business needs something our products don\'t cover, we take the work on. Same team, same method.',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Built to last',
      desc: 'Software you can still rely on in three years — not a prototype that ages out.',
    },
  ];

  const industries = [
    { name: 'Retail', icon: <ShoppingBag size={18} /> },
    { name: 'Operations', icon: <Briefcase size={18} /> },
    { name: 'Finance', icon: <Wallet size={18} /> },
    { name: 'Customer Management', icon: <Building2 size={18} /> },
    { name: 'Workforce', icon: <Users size={18} /> },
    { name: 'Business Systems', icon: <Layers size={18} /> },
    { name: 'Custom Software', icon: <Code size={18} /> },
    { name: 'Integrations', icon: <Cpu size={18} /> },
  ];

  const techStack = {
    frontend: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'Django'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    cloud: ['AWS', 'Docker', 'Nginx', 'Cloudflare', 'Git'],
    ai: ['OpenAI', 'Anthropic', 'Hugging Face', 'LangChain'],
  };

  const processSteps = [
    'Understand',
    'Design',
    'Build',
    'Ship',
    'Operate',
    'Improve',
    'Support',
  ];

  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation',
      desc: 'We look for better ways to solve old problems.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Reliability',
      desc: 'Systems that work when they matter, not just in demos.',
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Simplicity',
      desc: 'Software should be obvious to use, not require a manual.',
    },
    {
      icon: <Award size={24} />,
      title: 'Quality',
      desc: 'Craft, care, and attention in every part of the product.',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Integrity',
      desc: 'We say what we build, and build what we say.',
    },
  ];

  return (
    <div className="about-page">

      {/* 1. Hero Section - Mobile Only */}
      <section className="about-page__hero about-page__hero--mobile-only">
        <div className="about-page__hero-container">
          <div className="about-page__hero-content">
            <div className="about-page__hero-badge">About KXBYTE</div>
            <h1 className="about-page__hero-title">
              A Technology Company That <span>Builds Software.</span>
            </h1>
            <div className="about-page__hero-line"></div>

            <div className="about-page__hero-stats">
              {stats.map((stat, index) => (
                <div className="about-page__hero-stat" key={index}>
                  <div className="about-page__hero-stat-icon">{stat.icon}</div>
                  <div>
                    <span className="about-page__hero-stat-value">{stat.value}</span>
                    <span className="about-page__hero-stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-page__hero-visual">
            <div className="about-page__hero-image-wrapper">
              <div className="about-page__hero-image">
                <img
                  src={aboutImage.src}
                  alt="The KXBYTE team"
                  className="about-page__hero-image-photo"
                />
                <div className="about-page__hero-image-floating">
                  <div className="about-page__hero-image-floating-item">
                    <ShoppingBag size={18} color="#ff5c1a" />
                    <span>KxTill live</span>
                  </div>
                  <div className="about-page__hero-image-floating-item">
                    <Layers size={18} color="#ff5c1a" />
                    <span>Suite connecting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="about-page__who">
        <div className="about-page__who-content">
          <div className="about-page__who-left">
            <span className="about-page__section-label">Who We Are</span>
            <h2 className="about-page__section-heading">
              About <span>KXBYTE</span>
            </h2>
            <div className="about-page__section-line"></div>
            <div className="about-page__who-text">
              <p>
                <strong>KXBYTE is a business technology company based in Nairobi, Kenya</strong>, building connected software products for modern businesses. Our first product, KxTill, is a live point-of-sale system for growing retailers.
              </p>
              <p>
                Our products handle the operations a business runs on — sales, stock, customers, payments, staff, branches, and invoicing. Each product works on its own. Everything connects through <strong>KXBYTE Suite</strong>, the organizational layer that ties products, people, and business data into one system.
              </p>
              <p>
                We're a <strong>product company</strong> — we own, run, and improve what we build. We also take on custom software when a business needs something our products don't cover. It's not our main line, but it's real work we do.
              </p>
              <p className="about-page__who-highlight">
                Software should put knowledge and process into systems — not leave a business depending on one person's memory to keep running.
              </p>
            </div>
          </div>
          <div className="about-page__who-right">
            <div className="about-page__who-card">
              <div className="about-page__who-card-icon">
                <Target size={32} color="#ff4500" />
              </div>
              <h4>Our Mission</h4>
              <p>Build software that replaces fragmented processes with connected systems — so businesses can grow without everything living in one person's head.</p>
            </div>
            <div className="about-page__who-card">
              <div className="about-page__who-card-icon">
                <Globe size={32} color="#ff4500" />
              </div>
              <h4>Our Vision</h4>
              <p>A company whose products quietly run the operations of thousands of businesses — with KXBYTE behind them, reliable and invisible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="about-page__story">
        <div className="about-page__story-content">
          <div className="about-page__story-left">
            <span className="about-page__section-label">Our Story</span>
            <h2 className="about-page__section-heading">
              Why We <span>Started</span>
            </h2>
            <div className="about-page__section-line"></div>
            <div className="about-page__story-text">
              <p>Growing businesses outgrow their tools.</p>
              <p>
                What works for one shop stops working for two. What works for
                five staff stops working for twenty. Spreadsheets, notebooks,
                and disconnected applications hold the business back — and the
                owner ends up being the system.
              </p>
              <p>
                KXBYTE exists to replace that fragmentation with connected
                systems. Software that understands how a business actually
                operates — not generic tools the business has to bend around.
              </p>
              <p className="about-page__story-highlight">
                We build products first. That's the focus. But when a business
                needs something our products don't cover, we build that too —
                because the same instinct applies: solve the real problem.
              </p>
            </div>
          </div>
          <div className="about-page__story-right">
            <div className="about-page__story-timeline">
              <div className="about-page__story-timeline-item">
                <div className="about-page__story-timeline-year">2025</div>
                <div className="about-page__story-timeline-content">
                  <h4>KXBYTE Founded</h4>
                  <p>Established in Nairobi as a business technology company — building products, not client projects.</p>
                </div>
              </div>
              <div className="about-page__story-timeline-item">
                <div className="about-page__story-timeline-year">2025</div>
                <div className="about-page__story-timeline-content">
                  <h4>First products shipped</h4>
                  <p>KxTill and KXBYTE Suite went live — our first platform and product.</p>
                </div>
              </div>
              <div className="about-page__story-timeline-item">
                <div className="about-page__story-timeline-year">Today</div>
                <div className="about-page__story-timeline-content">
                  <h4>Growing the ecosystem</h4>
                  <p>More products in development. Custom software available alongside the product line.</p>
                </div>
              </div>
              <div className="about-page__story-timeline-item">
                <div className="about-page__story-timeline-year">Future</div>
                <div className="about-page__story-timeline-content">
                  <h4>The operating layer</h4>
                  <p>A connected set of products and systems that businesses run on — with KXBYTE quietly behind them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specialties */}
      <section className="about-page__specialties">
        <div className="about-page__specialties-content">
          <div className="about-page__specialties-header">
            <span className="about-page__section-label">What We Build</span>
            <h2 className="about-page__section-heading">
              Our <span>Specialties</span>
            </h2>
            <div className="about-page__section-line"></div>
            <p className="about-page__specialties-subtitle">
              The operations our products and systems run on
            </p>
          </div>
          <div className="about-page__specialties-grid">
            {specialties.map((specialty, index) => (
              <div className="about-page__specialty-item" key={index}>
                <div className="about-page__specialty-item-icon">{specialty.icon}</div>
                <span>{specialty.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What We Do */}
      <section className="about-page__services">
        <div className="about-page__services-content">
          <div className="about-page__services-header">
            <span className="about-page__section-label">What We Do</span>
            <h2 className="about-page__section-heading">
              Our <span>Products</span>
            </h2>
            <div className="about-page__section-line"></div>
            <p className="about-page__services-subtitle">
              Connected software for the operations a business runs on
            </p>
          </div>
          <div className="about-page__services-grid">
            {services.map((service, index) => (
              <div className="about-page__service-card" key={index}>
                <div className="about-page__service-card-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="about-page__services-cta-wrapper">
            <Link href="/products" className="about-page__services-cta">
              View All Products
              <ArrowRight className="about-page__services-cta-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Development Process */}
      <section className="about-page__process">
        <div className="about-page__process-content">
          <span className="about-page__section-label">How We Work</span>
          <h2 className="about-page__section-heading">
            Our <span>Process</span>
          </h2>
          <div className="about-page__section-line"></div>
          <p className="about-page__process-subtitle">
            The same method whether it's a product or a custom system
          </p>
          <div className="about-page__process-steps">
            {processSteps.map((step, index) => (
              <div className="about-page__process-step" key={index}>
                <div className="about-page__process-step-number">{String(index + 1).padStart(2, '0')}</div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose KXBYTE */}
      <section className="about-page__why">
        <div className="about-page__why-content">
          <div className="about-page__why-header">
            <span className="about-page__section-label">Why Choose KXBYTE</span>
            <h2 className="about-page__section-heading">
              Why <span>KXBYTE</span>
            </h2>
            <div className="about-page__section-line"></div>
            <p className="about-page__why-subtitle">
              What makes us different
            </p>
          </div>
          <div className="about-page__why-grid">
            {reasons.map((reason, index) => (
              <div className="about-page__why-item" key={index}>
                <div className="about-page__why-item-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technologies We Use */}
      <section className="about-page__tech">
        <div className="about-page__tech-content">
          <div className="about-page__tech-header">
            <span className="about-page__section-label">Technologies</span>
            <h2 className="about-page__section-heading">
              Tech <span>Stack</span>
            </h2>
            <div className="about-page__section-line"></div>
            <p className="about-page__tech-subtitle">
              Tools and frameworks we use to build
            </p>
          </div>
          <div className="about-page__tech-grid">
            <div className="about-page__tech-category">
              <h4>Frontend</h4>
              <ul>{techStack.frontend.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
            </div>
            <div className="about-page__tech-category">
              <h4>Backend</h4>
              <ul>{techStack.backend.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
            </div>
            <div className="about-page__tech-category">
              <h4>Databases</h4>
              <ul>{techStack.databases.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
            </div>
            <div className="about-page__tech-category">
              <h4>Cloud & DevOps</h4>
              <ul>{techStack.cloud.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
            </div>
            <div className="about-page__tech-category">
              <h4>AI & ML</h4>
              <ul>{techStack.ai.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Industries We Serve */}
      <section className="about-page__industries">
        <div className="about-page__industries-content">
          <div className="about-page__industries-header">
            <span className="about-page__section-label">What We Work On</span>
            <h2 className="about-page__section-heading">
              Business <span>Areas</span>
            </h2>
            <div className="about-page__section-line"></div>
            <p className="about-page__industries-subtitle">
              KXBYTE builds software for how businesses actually work
            </p>
          </div>
          <div className="about-page__industries-grid">
            {industries.map((industry, index) => (
              <div className="about-page__industry-tag" key={index}>
                <span className="about-page__industry-tag-icon">{industry.icon}</span>
                {industry.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Our Values */}
      <section className="about-page__values">
        <div className="about-page__values-content">
          <div className="about-page__values-header">
            <span className="about-page__section-label">Our Values</span>
            <h2 className="about-page__section-heading">
              What We <span>Believe In</span>
            </h2>
            <div className="about-page__section-line"></div>
            <p className="about-page__values-subtitle">
              The principles that guide everything we build
            </p>
          </div>
          <div className="about-page__values-grid">
            {values.map((value, index) => (
              <div className="about-page__value-item" key={index}>
                <div className="about-page__value-item-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Meet the Founder */}
      <section className="about-page__founder">
        <div className="about-page__founder-content">
          <div className="about-page__founder-image">
            <div className="about-page__founder-image-wrapper">
              <img
                src={founderImage.src}
                alt="Kylex Vinny - Founder of KXBYTE"
                className="about-page__founder-image-photo"
                loading="lazy"
              />
              <div className="about-page__founder-image-placeholder" style={{ display: 'none' }}>
                <Users size={64} color="#ff4500" />
              </div>
            </div>
            <div className="about-page__founder-badge">Founder</div>
          </div>

          <div className="about-page__founder-info">
            <span className="about-page__section-label">Meet the Founder</span>
            <h2 className="about-page__section-heading">
              Kylex <span>Vinny</span>
            </h2>
            <div className="about-page__section-line"></div>
            <p className="about-page__founder-quote">
              "KXBYTE began with a simple idea: build software that solves
              real problems for real businesses. That's still what we do —
              whether it's our own products or something built specifically
              for a client. The problem comes first. The software follows."
            </p>

            <div className="about-page__founder-stats">
              <div className="about-page__founder-stat">
                <span className="about-page__founder-stat-value">Product</span>
                <span className="about-page__founder-stat-label">Focus</span>
              </div>
              <div className="about-page__founder-stat">
                <span className="about-page__founder-stat-value">Builder</span>
                <span className="about-page__founder-stat-label">Approach</span>
              </div>
              <div className="about-page__founder-stat">
                <span className="about-page__founder-stat-value">Kenya</span>
                <span className="about-page__founder-stat-label">Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Call to Action */}
      <section className="about-page__cta">
        <div className="about-page__cta-content">
          <div className="about-page__cta-left">
            <span className="about-page__cta-label">Start with KXBYTE</span>
            <h2>Try our products. <span>Or talk to us.</span></h2>
            <p>
              Use our products if they fit. If you need something our products
              don't cover, we build that too. Either way — the problem comes
              first.
            </p>
          </div>
          <div className="about-page__cta-right">
            <a
              href="https://kxtill.kxbyte.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="about-page__cta-button about-page__cta-button--primary"
            >
              Start using KxTill
              <ArrowUpRight size={18} />
            </a>
            <a
              href="mailto:info@kxbyte.co.ke"
              className="about-page__cta-button about-page__cta-button--secondary"
            >
              Talk about custom work
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;