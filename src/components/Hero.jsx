// Hero.jsx
import React, { useEffect } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,

  SiVercel,
  SiGit,
  SiDocker,
  SiFigma,
  SiGoogleanalytics,
  SiWordpress
} from 'react-icons/si';

import '../styles/Hero.css';
import heroImg from '../assets/images/hero2.jpg';

const technologies = [
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiFirebase />, name: 'Firebase' },

  { icon: <SiVercel />, name: 'Vercel' },
  { icon: <SiGit />, name: 'Git' },
  { icon: <SiDocker />, name: 'Docker' },
  { icon: <SiFigma />, name: 'Figma' },
  { icon: <SiGoogleanalytics />, name: 'SEO' },
  { icon: <SiWordpress />, name: 'WordPress' },
];

const scrollItems = [...technologies, ...technologies];

const Hero = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleGetQuote = () => scrollToSection('contact');
  const handleViewWork = () => scrollToSection('projects');

  const TrustBar = () => (
    <div className="hero-trust-bar">
      
      <div className="trust-track">
        <div className="trust-content">
          {scrollItems.map((tech, idx) => (
            <div key={idx} className="trust-item">
              <span className="trust-icon">{tech.icon}</span>
              <span className="trust-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="hero-section" id="home">

      {/* DESKTOP HERO */}
      <div className="hero hero--desktop">
        <div className="hero__watermark">KX</div>

        <div className="hero__content">
          <h1 className="hero__heading">
            WE BUILD <span>SCALABLE</span><br />DIGITAL PRODUCTS
          </h1>
          <div className="hero__line" />
          <p className="hero__sub">
            We design and develop fast, reliable web and mobile applications — 
            built to help businesses launch, grow, and scale with confidence.
          </p>
          <div className="hero__actions">
            <button className="btn--primary" onClick={handleGetQuote}>Get a Free Quote →</button>
            <button className="btn--ghost" onClick={handleViewWork}>View Our Work ↓</button>
          </div>
        </div>

        <div className="hero__image-wrap">
          <div className="hero__image-placeholder">
            <img src={heroImg} alt="KXByte Hero" className="hero__img" />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-num">20+</span>
            <span className="hero__badge-text">Projects Delivered</span>
          </div>
        </div>
      </div>

      {/* MOBILE HERO */}
      <div className="hero-mobile-clean">
        <div className="mobile-bg-image" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="mobile-overlay"></div>
        </div>
        <div className="mobile-content-center">
          <h1 className="mobile-title">
            WE BUILD
            <span className="mobile-highlight"> SCALABLE</span>
            <br />DIGITAL PRODUCTS
          </h1>
          <p className="mobile-text">
            Fast, modern web and mobile apps built to help your business grow and scale.
          </p>
          <div className="mobile-stats-row">
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-value">Fast</span>
              <span className="stat-label">Delivery</span>
            </div>
            <div className="stat">
              <span className="stat-value">Clean</span>
              <span className="stat-label">Code</span>
            </div>
          </div>
          <div className="mobile-buttons-center">
            <button className="mobile-btn-primary" onClick={handleGetQuote}>Get a Free Quote</button>
            <button className="mobile-btn-secondary" onClick={handleViewWork}>View Work</button>
          </div>
        </div>
      </div>

      {/* TRUST SCROLL — baked in, sits at bottom of 100vh */}
      <TrustBar />

    </section>
  );
};

export default Hero;