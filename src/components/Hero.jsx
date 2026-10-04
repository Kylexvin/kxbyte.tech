"use client";
// Hero.jsx
import React, { useEffect } from 'react';
import '../styles/Hero.css';
import heroImg from '../assets/images/hero2.jpg';

const products = [
  { name: 'KxTill', status: 'live' },
  { name: 'KXBYTE Suite', status: 'live' },
  { name: 'KxWork', status: 'soon' },
  { name: 'KxCRM', status: 'soon' },
  { name: 'KxInvoice', status: 'soon' },
  { name: 'KxPay', status: 'soon' },
  { name: 'KxStock', status: 'soon' },
];

const scrollItems = [...products, ...products];

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

  const handleExploreProducts = () => scrollToSection('products');

  const handleExploreSuite = () => {
    window.location.href = 'https://suite.kxbyte.co.ke';
  };

  const TrustBar = () => (
    <div className="hero-trust-bar">
      <div className="trust-track">
        <div className="trust-content">
          {scrollItems.map((product, idx) => (
            <div key={idx} className="trust-item">
              <span className={`trust-dot trust-dot--${product.status}`} />
              <span className="trust-name">{product.name}</span>
              {product.status === 'soon' && (
                <span className="trust-tag">soon</span>
              )}
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
            WE BUILD THE<br />
            SYSTEMS BEHIND <span>BUSINESS</span>
          </h1>
          <div className="hero__line" />
          <p className="hero__sub">
            Software products built to help businesses run their
            day-to-day operations, manage their work, and grow with confidence.
          </p>
          <div className="hero__actions">
            <button className="btn--primary" onClick={handleExploreProducts}>
              Our Products →
            </button>
            <button className="btn--ghost" onClick={handleExploreSuite}>
              Use KXBYTE Suite
            </button>
          </div>
        </div>

        <div className="hero__image-wrap">
          <div className="hero__image-placeholder">
            <img src={heroImg.src} alt="KXBYTE" className="hero__img" />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-num">KxTill</span>
            <span className="hero__badge-text">Now live</span>
          </div>
        </div>
      </div>

      {/* MOBILE HERO */}
      <div className="hero-mobile-clean">
        <div className="mobile-bg-image" style={{ backgroundImage: `url(${heroImg.src})` }}>
          <div className="mobile-overlay"></div>
        </div>
        <div className="mobile-content-center">
          <h1 className="mobile-title">
            WE BUILD THE<br />
            SYSTEMS BEHIND
            <span className="mobile-highlight"> BUSINESS</span>
          </h1>
          <p className="mobile-text">
            Software products built to help businesses run their day-to-day operations.
          </p>
          <div className="mobile-stats-row">
            <div className="stat">
              <span className="stat-value">KxTill</span>
              <span className="stat-label">Live</span>
            </div>
            <div className="stat">
              <span className="stat-value">Suite</span>
              <span className="stat-label">Connected</span>
            </div>
            <div className="stat">
              <span className="stat-value">More</span>
              <span className="stat-label">Coming</span>
            </div>
          </div>
          <div className="mobile-buttons-center">
            <button className="mobile-btn-primary" onClick={handleExploreProducts}>
              Products
            </button>
            <button className="mobile-btn-secondary" onClick={handleExploreSuite}>
              Suite
            </button>
          </div>
        </div>
      </div>

      {/* TRUST / PRODUCT SCROLL */}
      <TrustBar />

    </section>
  );
};

export default Hero;