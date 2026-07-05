// src/pages/AboutPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Users,
  Code,
  Globe,
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
  
  Layers
} from 'lucide-react';
import founderImage from '../assets/team/vinny_.jpg';
import '../styles/AboutPage.css';

// Structured Data (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kxbyte.co.ke/#organization",
      "name": "KXBYTE",
      "url": "https://kxbyte.co.ke",
      "logo": "https://kxbyte.co.ke/logo.png",
      "image": "https://kxbyte.co.ke/logo.png",
      "description": "KXBYTE is a Kenyan software development company specializing in custom software development, website design, mobile application development, AI solutions, branding, SEO, and business automation.",
      "foundingDate": "2025-08",
      "founder": {
        "@id": "https://kxbyte.co.ke/#founder"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Kenya"
        },
        {
          "@type": "Place",
          "name": "Worldwide"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "telephone": "+2547XXXXXXXX",
        "email": "hello@kxbyte.co.ke",
        "availableLanguage": [
          "English"
        ]
      },
      "sameAs": [
        "https://linkedin.com/company/kxbyte",
        "https://github.com/kxbyte",
        "https://x.com/kxbyte",
        "https://facebook.com/kxbyte",
        "https://instagram.com/kxbyte"
      ],
      "knowsAbout": [
        "Software Development",
        "Custom Software Development",
        "Website Development",
        "Web Design",
        "Mobile Application Development",
        "Artificial Intelligence",
        "Business Automation",
        "UI/UX Design",
        "Brand Identity",
        "Search Engine Optimization",
        "Cloud Computing",
        "API Development",
        "Enterprise Software",
        "ERP Systems",
        "POS Systems"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "KXBYTE Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Design & Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Application Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branding & Graphic Design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO & Digital Marketing"
            }
          }
        ]
      }
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://kxbyte.co.ke/#localbusiness",
      "name": "KXBYTE",
      "url": "https://kxbyte.co.ke",
      "image": "https://kxbyte.co.ke/logo.png",
      "description": "Custom software development company based in Nairobi, Kenya.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
      },
      "telephone": "+2547XXXXXXXX",
      "email": "hello@kxbyte.co.ke",
      "priceRange": "$$"
    },

    {
      "@type": "Person",
      "@id": "https://kxbyte.co.ke/#founder",
      "name": "Kylex Vinny",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@id": "https://kxbyte.co.ke/#organization"
      }
    },

    {
      "@type": "WebSite",
      "@id": "https://kxbyte.co.ke/#website",
      "url": "https://kxbyte.co.ke",
      "name": "KXBYTE",
      "description": "Software development company in Kenya providing websites, mobile apps, AI solutions, branding, SEO, and custom business software."
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://kxbyte.co.ke/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kxbyte.co.ke/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://kxbyte.co.ke/about"
        }
      ]
    }
  ]
};

const AboutPage = () => {
  // Company stats
  const stats = [
    { value: '20+', label: 'Clients Served', icon: <Users size={20} /> },
    { value: '50+', label: 'Projects Delivered', icon: <Code size={20} /> },
    { value: '10K+', label: 'Hours Saved', icon: <Zap size={20} /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Award size={20} /> },
  ];

  // What We Do - Services Cards with high-value keywords
  const services = [
    { 
      icon: <Globe size={28} />, 
      title: 'Website Design & Development', 
      desc: 'Professional, responsive websites built for speed, usability, and growth. We create custom websites, e-commerce platforms, and CMS solutions.' 
    },
    { 
      icon: <Smartphone size={28} />, 
      title: 'Mobile App Development', 
      desc: 'Native and cross-platform Android and iOS applications designed for real-world users and business needs.' 
    },
    { 
      icon: <Building2 size={28} />, 
      title: 'Custom Software Development', 
      desc: 'Tailor-made business software including ERP systems, inventory management, POS systems, and management information systems.' 
    },
    { 
      icon: <Palette size={28} />, 
      title: 'Branding & Graphic Design', 
      desc: 'Comprehensive brand identity development including logos, visual identities, marketing materials, and brand strategy.' 
    },
    { 
      icon: <Cpu size={28} />, 
      title: 'AI Solutions & Automation', 
      desc: 'Artificial intelligence integration for business automation, intelligent assistants, document processing, predictive analytics, and AI-powered tools.' 
    },
    { 
      icon: <BarChart3 size={28} />, 
      title: 'SEO & Digital Growth', 
      desc: 'Strategic search engine optimization and digital marketing to improve visibility and attract more customers online.' 
    },
    { 
      icon: <Cloud size={28} />, 
      title: 'Cloud & System Development', 
      desc: 'Scalable cloud-based business software, SaaS applications, and enterprise solutions designed for growth.' 
    },
  ];

  // Specialties - High-value search terms
  const specialties = [
    { icon: <Layers size={20} />, name: 'ERP Systems' },
    { icon: <Database size={20} />, name: 'Inventory Management' },
    { icon: <ShoppingCart size={20} />, name: 'POS Systems' },
    { icon: <MedicalIcon size={20} />, name: 'Hospital Management' },
    { icon: <School size={20} />, name: 'School Management' },
    { icon: <Hotel size={20} />, name: 'Booking Platforms' },
    { icon: <Layout size={20} />, name: 'Marketplace Platforms' },
    { icon: <Bot size={20} />, name: 'AI Assistants' },
    { icon: <TrendingUp size={20} />, name: 'SaaS Applications' },
    { icon: <Server size={20} />, name: 'Business Management' },
  ];

  // Why Choose Us
  const reasons = [
    { icon: <Target size={24} />, title: 'Problem-First Approach', desc: 'We understand your business before writing a single line of code.' },
    { icon: <Zap size={24} />, title: 'Modern Technologies', desc: 'We build using current technologies that are scalable and maintainable.' },
    { icon: <Truck size={24} />, title: 'Reliable Delivery', desc: 'Clear communication, realistic timelines, and quality results.' },
    { icon: <Users size={24} />, title: 'Long-Term Partnership', desc: 'We don\'t disappear after launch—we help businesses grow.' },
    { icon: <CheckCircle size={24} />, title: 'Custom Solutions', desc: 'Every project is tailored to your goals rather than one-size-fits-all templates.' },
  ];

  // Industries Served
  const industries = [
    { name: 'Startups', icon: <Rocket size={18} /> },
    { name: 'SMEs', icon: <Briefcase size={18} /> },
    { name: 'Educational Institutions', icon: <GraduationCap size={18} /> },
    { name: 'NGOs & CBOs', icon: <Heart size={18} /> },
    { name: 'Healthcare', icon: <Stethoscope size={18} /> },
    { name: 'Retail & E-commerce', icon: <ShoppingBag size={18} /> },
    { name: 'Hospitality', icon: <Utensils size={18} /> },
    { name: 'Logistics', icon: <Package size={18} /> },
    { name: 'Real Estate', icon: <Home size={18} /> },
    { name: 'Government Projects', icon: <Landmark size={18} /> },
  ];

  // Technologies
  const techStack = {
    frontend: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'PHP'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Firebase'],
    cloud: ['AWS', 'Docker', 'Nginx', 'Git', 'Google Cloud'],
    ai: ['OpenAI', 'NVIDIA NIM', 'Hugging Face', 'TensorFlow', 'LangChain']
  };

  // Development Process
  const processSteps = [
    'Research',
    'Planning',
    'UI/UX Design',
    'Development',
    'Testing',
    'Deployment',
    'Continuous Support'
  ];

  // Values
  const values = [
    { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'We embrace new ideas and emerging technologies.' },
    { icon: <Shield size={24} />, title: 'Reliability', desc: 'We deliver dependable solutions that clients can trust.' },
    { icon: <Sparkles size={24} />, title: 'Simplicity', desc: 'Technology should be intuitive and accessible.' },
    { icon: <Award size={24} />, title: 'Quality', desc: 'We prioritize craftsmanship, performance, and attention to detail.' },
    { icon: <CheckCircle size={24} />, title: 'Integrity', desc: 'We communicate honestly and build lasting relationships.' },
  ];

  return (
    <>
      {/* Meta Tags */}
      <Helmet>
        <title>KXBYTE | Software Development Company in Kenya</title>
        <meta
          name="description"
          content="KXBYTE is a Kenyan software development company specializing in website development, mobile apps, AI solutions, branding, SEO, and custom business software. Based in Nairobi, serving clients locally and globally."
        />
        <meta
          name="keywords"
          content="
            software company Kenya,
            software development Kenya,
            custom software development Kenya,
            web development Kenya,
            website design Kenya,
            mobile app development Kenya,
            AI solutions Kenya,
            business automation Kenya,
            branding Kenya,
            SEO Kenya,
            ERP systems Kenya,
            inventory management Kenya,
            POS systems Kenya,
            Nairobi software company
          "
        />
        <meta property="og:title" content="KXBYTE | Software Development Company in Kenya" />
        <meta
          property="og:description"
          content="KXBYTE is a software development company based in Nairobi, Kenya, specializing in custom software development, website design, mobile app development, AI solutions, branding, and business automation."
        />
        <meta property="og:url" content="https://kxbyte.co.ke/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KXBYTE | Software Development Company in Kenya" />
        <meta
          name="twitter:description"
          content="KXBYTE is a software development company based in Nairobi, Kenya, specializing in custom software development, website design, mobile app development, AI solutions, branding, and business automation."
        />
        <link rel="canonical" href="https://kxbyte.co.ke/about" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="about-page">
        
        {/* 1. Hero Section - Mobile Only */}
        <section className="about-page__hero about-page__hero--mobile-only">
          <div className="about-page__hero-container">
            <div className="about-page__hero-content">
              <div className="about-page__hero-badge">About KXBYTE</div>
              <h1 className="about-page__hero-title">
                Building Technology That <span>Solves Real Problems.</span>
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
                  <div className="about-page__hero-image-grid">
                    {/* Image grid removed as requested */}
                  </div>
                  <div className="about-page__hero-image-floating">
                    <div className="about-page__hero-image-floating-item">
                      <Users size={18} color="#ff4500" />
                      <span>20+ Clients</span>
                    </div>
                    <div className="about-page__hero-image-floating-item">
                      <Award size={18} color="#4a6cf7" />
                      <span>98% Satisfaction</span>
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
                  <strong>KXBYTE is a software development company based in Nairobi, Kenya</strong>, serving clients locally and internationally. We specialize in custom software development, website design, mobile app development, AI solutions, branding, SEO, and business automation.
                </p>
                <p>
                  We design and build <strong>custom software</strong> tailored to each client's unique requirements rather than relying on generic templates. From business websites to enterprise software, our goal is to transform ideas into digital products that create lasting value.
                </p>
                <p>
                  We work with <strong>startups, SMEs, NGOs, educational institutions, healthcare organizations, retailers, and growing businesses</strong> looking to digitize their operations.
                </p>
                <p className="about-page__who-highlight">
                  We believe software should solve problems, not create them. Every solution is designed around simplicity, reliability, scalability, and measurable business value.
                </p>
              </div>
            </div>
            <div className="about-page__who-right">
              <div className="about-page__who-card">
                <div className="about-page__who-card-icon">
                  <Target size={32} color="#ff4500" />
                </div>
                <h4>Our Mission</h4>
                <p>To provide innovative, reliable, and user-focused digital solutions that empower businesses and communities.</p>
              </div>
              <div className="about-page__who-card">
                <div className="about-page__who-card-icon">
                  <Globe size={32} color="#ff4500" />
                </div>
                <h4>Our Vision</h4>
                <p>To become one of Africa's leading software companies, delivering innovative digital products that improve businesses and everyday life across the world.</p>
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
                <p>
                  Every successful business begins with solving a problem.
                </p>
                <p>
                  KXBYTE was founded after recognizing that many businesses struggled with 
                  outdated systems, poor online presence, and expensive software that didn't 
                  truly meet their needs.
                </p>
                <p>
                  Instead of creating technology for the sake of technology, we focus on 
                  building practical digital solutions that help businesses operate more 
                  efficiently and reach more customers.
                </p>
                <p className="about-page__story-highlight">
                  Today, we continue working toward our long-term vision of becoming one of 
                  Africa's leading software companies, serving clients across the world.
                </p>
              </div>
            </div>
<div className="about-page__story-right">
  <div className="about-page__story-timeline">
    <div className="about-page__story-timeline-item">
      <div className="about-page__story-timeline-year">Aug 2025</div>
      <div className="about-page__story-timeline-content">
        <h4>KXBYTE Founded</h4>
        <p>
          KXBYTE was established with a vision of building innovative digital
          solutions that solve real-world problems for businesses and
          organizations.
        </p>
      </div>
    </div>

    <div className="about-page__story-timeline-item">
      <div className="about-page__story-timeline-year">2025</div>
      <div className="about-page__story-timeline-content">
        <h4>Building the Foundation</h4>
        <p>
          Focused on delivering high-quality websites, branding, custom software,
          and mobile applications while establishing KXBYTE as a trusted digital
          solutions partner.
        </p>
      </div>
    </div>

    <div className="about-page__story-timeline-item">
      <div className="about-page__story-timeline-year">Today</div>
      <div className="about-page__story-timeline-content">
        <h4>Growing with Every Project</h4>
        <p>
          Every project strengthens our expertise and reinforces our commitment
          to creating reliable, scalable, and user-focused technology.
        </p>
      </div>
    </div>

    <div className="about-page__story-timeline-item">
      <div className="about-page__story-timeline-year">Future</div>
      <div className="about-page__story-timeline-content">
        <h4>Global Vision</h4>
        <p>
          Our goal is to become a globally trusted technology company, delivering
          software and AI-powered solutions that make everyday life and business
          more efficient.
        </p>
      </div>
    </div>
  </div>
</div>
          </div>
        </section>

        {/* 4. Specialties - High-value search terms */}
        <section className="about-page__specialties">
          <div className="about-page__specialties-content">
            <div className="about-page__specialties-header">
              <span className="about-page__section-label">What We Build</span>
              <h2 className="about-page__section-heading">
                Our <span>Specialties</span>
              </h2>
              <div className="about-page__section-line"></div>
              <p className="about-page__specialties-subtitle">
                High-value business solutions we deliver
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
                Our <span>Services</span>
              </h2>
              <div className="about-page__section-line"></div>
              <p className="about-page__services-subtitle">
                End-to-end digital solutions to help your business grow
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
              <Link to="/services" className="about-page__services-cta">
                View All Services
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
              Our Development <span>Process</span>
            </h2>
            <div className="about-page__section-line"></div>
            <p className="about-page__process-subtitle">
              Every project follows a structured approach from concept to deployment
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
                What sets us apart from the competition
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
                Modern tools and frameworks we use to build exceptional solutions
              </p>
            </div>
            <div className="about-page__tech-grid">
              <div className="about-page__tech-category">
                <h4>Frontend</h4>
                <ul>
                  {techStack.frontend.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
              <div className="about-page__tech-category">
                <h4>Backend</h4>
                <ul>
                  {techStack.backend.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
              <div className="about-page__tech-category">
                <h4>Databases</h4>
                <ul>
                  {techStack.databases.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
              <div className="about-page__tech-category">
                <h4>Cloud & DevOps</h4>
                <ul>
                  {techStack.cloud.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
              <div className="about-page__tech-category">
                <h4>AI & ML</h4>
                <ul>
                  {techStack.ai.map((tech, i) => <li key={i}>{tech}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Industries We Serve */}
        <section className="about-page__industries">
          <div className="about-page__industries-content">
            <div className="about-page__industries-header">
              <span className="about-page__section-label">Industries</span>
              <h2 className="about-page__section-heading">
                Who We <span>Serve</span>
              </h2>
              <div className="about-page__section-line"></div>
              <p className="about-page__industries-subtitle">
                We work with businesses and organizations across various sectors
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
                The principles that guide everything we do
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
                  src={founderImage} 
                  alt="Kylex Vinny - Founder & CEO of KXBYTE"
                  className="about-page__founder-image-photo"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.about-page__founder-image-placeholder').style.display = 'flex';
                  }}
                />
                <div className="about-page__founder-image-placeholder" style={{ display: 'none' }}>
                  <Users size={64} color="#ff4500" />
                </div>
              </div>
              <div className="about-page__founder-badge">Founder & CEO</div>
            </div>
<div className="about-page__founder-info">
  <span className="about-page__section-label">Meet the Founder</span>

  <h2 className="about-page__section-heading">
    Kylex <span>Vinny</span>
  </h2>

  <div className="about-page__section-line"></div>

  <p className="about-page__founder-quote">
    "KXBYTE began with a simple idea: technology should solve real problems.
    Every project we undertake is driven by purpose, innovation, and a commitment
    to building digital solutions that create lasting value for businesses and communities."
  </p>

  <div className="about-page__founder-stats">
    <div className="about-page__founder-stat">
      <span className="about-page__founder-stat-value">MERN</span>
      <span className="about-page__founder-stat-label">Full-Stack Development</span>
    </div>

    <div className="about-page__founder-stat">
      <span className="about-page__founder-stat-value">UI/UX</span>
      <span className="about-page__founder-stat-label">Design & Branding</span>
    </div>

    <div className="about-page__founder-stat">
      <span className="about-page__founder-stat-value">AI</span>
      <span className="about-page__founder-stat-label">Building Intelligent Solutions</span>
    </div>
  </div>
</div>
          </div>
        </section>

        {/* 12. Call to Action */}
        <section className="about-page__cta">
          <div className="about-page__cta-content">
            <div className="about-page__cta-left">
              <span className="about-page__cta-label">Ready to Build?</span>
              <h2>Let's Create <span>Something Amazing</span></h2>
              <p>
                Whether you're launching a startup, modernizing your business, or creating 
                a custom digital platform, KXBYTE is ready to help bring your vision to life.
              </p>
            </div>
            <div className="about-page__cta-right">
              <Link to="/#contact" className="about-page__cta-button about-page__cta-button--primary">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link to="/#contact" className="about-page__cta-button about-page__cta-button--secondary">
                Contact Us
              </Link>
              <p className="about-page__cta-note">Free consultation for new clients</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;