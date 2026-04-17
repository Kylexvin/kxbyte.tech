// Hero.js - Clean mobile hero with background image
import React, { useEffect } from 'react';
import '../styles/Hero.css';
import heroImg from '../assets/images/hero2.jpg';

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

  return (
    <section className="hero-section" id="home">
      {/* DESKTOP HERO - YOUR EXACT DESIGN */}
      <div className="hero hero--desktop">
        <div className="hero__watermark">KX</div>
        <div className="hero__content">
          <p className="hero__label">Digital Agency</p>
          <h1 className="hero__heading">
            WE BUILD <span>DIGITAL</span><br />EXPERIENCES
          </h1>
          <div className="hero__line" />
          <p className="hero__sub">
            From websites to mobile apps and full systems — we craft solutions
            that are fast, modern, and built to scale for businesses across Kenya and beyond.
          </p>
          <div className="hero__actions">
            <button className="btn--primary">View Our Work</button>
            <button className="btn--ghost">What We Do ↓</button>
          </div>
        </div>
        <div className="hero__image-wrap">
          <div className="hero__image-placeholder">
            <img src={heroImg} alt="KXByte Hero" className="hero__img" />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-num">50+</span>
            <span className="hero__badge-text">Projects Delivered</span>
          </div>
        </div>
      </div>

      {/* ========== CLEAN MOBILE HERO WITH BACKGROUND IMAGE ========== */}
      <div className="hero-mobile-clean">
        {/* Background image with overlay */}
        <div className="mobile-bg-image" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="mobile-overlay"></div>
        </div>

        {/* Content centered on top of background */}
        <div className="mobile-content-center">
          {/* Badge */}
          <div className="mobile-badge">
            <span>✦ DIGITAL AGENCY</span>
          </div>

          {/* Main heading */}
          <h1 className="mobile-title">
            WE BUILD
            <span className="mobile-highlight"> DIGITAL</span>
            <br />EXPERIENCES
          </h1>

          {/* Short description */}
          <p className="mobile-text">
            Fast, modern, and scalable solutions for businesses across Kenya and beyond.
          </p>

          {/* Stats row */}
          <div className="mobile-stats-row">
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Success</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mobile-buttons-center">
            <button className="mobile-btn-primary">Get a Quote →</button>
            <button className="mobile-btn-secondary">View Work</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;