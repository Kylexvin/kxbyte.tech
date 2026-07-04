// src/pages/AboutPage.jsx
import React from 'react';
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
  Landmark
} from 'lucide-react';
import founderImage from '../assets/team/vinny_.jpg';
import '../styles/AboutPage.css';

const AboutPage = () => {
  // Company stats
  const stats = [
    { value: '50+', label: 'Clients Served', icon: <Users size={20} /> },
    { value: '100+', label: 'Projects Delivered', icon: <Code size={20} /> },
    { value: '10K+', label: 'Hours Saved', icon: <Zap size={20} /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Award size={20} /> },
  ];

  // What We Do - Services Cards
  const services = [
    { icon: <Globe size={28} />, title: 'Website Design', desc: 'Responsive websites built for speed, usability, and growth.' },
    { icon: <Code size={28} />, title: 'Web Development', desc: 'Custom web applications built with modern technologies.' },
    { icon: <Smartphone size={28} />, title: 'Mobile App Development', desc: 'Android and iOS applications designed for real-world users.' },
    { icon: <Palette size={28} />, title: 'Branding & Graphic Design', desc: 'Logos, visual identities, marketing materials, and brand strategy.' },
    { icon: <Cpu size={28} />, title: 'AI Solutions', desc: 'Integrating artificial intelligence to automate tasks and improve customer experiences.' },
    { icon: <BarChart3 size={28} />, title: 'SEO & Digital Growth', desc: 'Helping businesses improve visibility and attract more customers online.' },
    { icon: <Cloud size={28} />, title: 'Cloud & System Development', desc: 'Scalable business software and cloud-based solutions.' },
  ];

  // Why Choose Us
  const reasons = [
    { icon: <Target size={24} />, title: 'Problem-First Approach', desc: 'We understand your business before writing a single line of code.' },
    { icon: <Zap size={24} />, title: 'Modern Technologies', desc: 'We build using current technologies that are scalable and maintainable.' },
    { icon: <Truck size={24} />, title: 'Reliable Delivery', desc: 'Clear communication, realistic timelines, and quality results.' },
    { icon: <Users size={24} />, title: 'Long-Term Partnership', desc: 'We don\'t disappear after launch—we help businesses grow.' },
    { icon: <CheckCircle size={24} />, title: 'Custom Solutions', desc: 'Every project is tailored to your goals rather than one-size-fits-all templates.' },
  ];

  // Industries Served with icons
  const industries = [
    { name: 'Startups', icon: <Rocket size={18} /> },
    { name: 'SMEs', icon: <Briefcase size={18} /> },
    { name: 'Schools', icon: <GraduationCap size={18} /> },
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
    frontend: ['React', 'Next.js', 'React Native', 'TypeScript'],
    backend: ['Node.js', 'Express', 'Python', 'Django'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
    cloud: ['AWS', 'Docker', 'Nginx', 'Git'],
    ai: ['OpenAI', 'NVIDIA NIM', 'Hugging Face', 'TensorFlow']
  };

  // Values
  const values = [
    { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'We embrace new ideas and emerging technologies.' },
    { icon: <Shield size={24} />, title: 'Reliability', desc: 'We deliver dependable solutions that clients can trust.' },
    { icon: <Sparkles size={24} />, title: 'Simplicity', desc: 'Technology should be intuitive and accessible.' },
    { icon: <Award size={24} />, title: 'Quality', desc: 'We prioritize craftsmanship, performance, and attention to detail.' },
    { icon: <CheckCircle size={24} />, title: 'Integrity', desc: 'We communicate honestly and build lasting relationships.' },
  ];

  return (
    <div className="about-page">
      
      {/* 1. Hero Section with Image */}
      <section className="about-page__hero">
        <div className="about-page__hero-container">
          <div className="about-page__hero-content">
            <div className="about-page__hero-badge">About KXBYTE</div>
            <h1 className="about-page__hero-title">
              Building Technology That <span>Solves Real Problems.</span>
            </h1>
            <div className="about-page__hero-line"></div>
            <p className="about-page__hero-desc">
              KXBYTE is a digital solutions company helping businesses and organizations 
              grow through modern websites, mobile applications, branding, AI-powered 
              solutions, and custom software.
            </p>
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
            <div className="about-page__hero-buttons">
              <Link to="/#contact" className="about-page__hero-cta about-page__hero-cta--primary">
                Let's Work Together
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="about-page__hero-cta about-page__hero-cta--secondary">
                View Our Services
              </Link>
            </div>
          </div>
          <div className="about-page__hero-visual">
            <div className="about-page__hero-image-wrapper">
              <div className="about-page__hero-image">
                <div className="about-page__hero-image-grid">
                  <div className="about-page__hero-image-item" style={{ background: '#ff4500' }}>
                    <Globe size={32} color="white" />
                    <span>Global</span>
                  </div>
                  <div className="about-page__hero-image-item" style={{ background: '#4a6cf7' }}>
                    <Code size={32} color="white" />
                    <span>Code</span>
                  </div>
                  <div className="about-page__hero-image-item" style={{ background: '#10b981' }}>
                    <Smartphone size={32} color="white" />
                    <span>Mobile</span>
                  </div>
                  <div className="about-page__hero-image-item" style={{ background: '#8b5cf6' }}>
                    <Cpu size={32} color="white" />
                    <span>AI</span>
                  </div>
                </div>
                <div className="about-page__hero-image-floating">
                  <div className="about-page__hero-image-floating-item">
                    <Users size={18} color="#ff4500" />
                    <span>50+ Clients</span>
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
                KXBYTE is a technology company based in Kenya that creates modern digital 
                solutions for businesses, startups, organizations, and institutions.
              </p>
              <p>
                We specialize in designing and developing software that is beautiful, 
                scalable, secure, and built around real user needs. From business websites 
                to enterprise software, our goal is to transform ideas into digital products 
                that create lasting value.
              </p>
              <p className="about-page__who-highlight">
                We believe technology should simplify life—not complicate it.
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
              <p>To become a globally trusted technology company creating software that improves everyday life.</p>
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
                Today, we continue working toward our long-term vision of becoming a 
                trusted technology company serving clients across the world.
              </p>
            </div>
          </div>
          <div className="about-page__story-right">
            <div className="about-page__story-timeline">
              <div className="about-page__story-timeline-item">
                <div className="about-page__story-timeline-year">2020</div>
                <div className="about-page__story-timeline-content">
                  <h4>Founded</h4>
                  <p>KXBYTE was established with a mission to solve real business problems through technology.</p>
                </div>
              </div>
              <div className="about-page__story-timeline-item">
                <div className="about-page__story-timeline-year">2021</div>
                <div className="about-page__story-timeline-content">
                  <h4>First 50 Clients</h4>
                  <p>Grew our client base to 50+ businesses across various industries in Kenya.</p>
                </div>
              </div>
              <div className="about-page__story-timeline-item">
                <div className="about-page__story-timeline-year">2022</div>
                <div className="about-page__story-timeline-content">
                  <h4>Expanded Services</h4>
                  <p>Added AI solutions, mobile app development, and cloud services to our offerings.</p>
                </div>
              </div>
              <div className="about-page__story-timeline-item">
                <div className="about-page__story-timeline-year">2023</div>
                <div className="about-page__story-timeline-content">
                  <h4>Global Reach</h4>
                  <p>Started serving international clients while maintaining strong presence in Kenya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
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

      {/* 5. Why Choose KXBYTE */}
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

      {/* 6. Technologies We Use */}
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

      {/* 7. Industries We Serve */}
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

      {/* 8. Our Values */}
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

      {/* 9. Meet the Founder */}
<section className="about-page__founder">
  <div className="about-page__founder-content">
    <div className="about-page__founder-image">
      <div className="about-page__founder-image-wrapper">
        <img 
          src={founderImage} 
          alt="Kylex Vinny - Founder & CEO of KXBYTE"
          className="about-page__founder-image-photo"
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
        "KXBYTE started with a simple belief: technology should solve real problems. 
        Every solution we build is guided by that principle, whether it's a business 
        website, a mobile application, or an enterprise platform."
      </p>
      <div className="about-page__founder-stats">
        <div className="about-page__founder-stat">
          <span className="about-page__founder-stat-value">10+</span>
          <span className="about-page__founder-stat-label">Years Experience</span>
        </div>
        <div className="about-page__founder-stat">
          <span className="about-page__founder-stat-value">50+</span>
          <span className="about-page__founder-stat-label">Projects Led</span>
        </div>
        <div className="about-page__founder-stat">
          <span className="about-page__founder-stat-value">20+</span>
          <span className="about-page__founder-stat-label">Team Members</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 10. Call to Action */}
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
  );
};

export default AboutPage;