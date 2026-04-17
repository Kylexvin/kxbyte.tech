import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo2.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Handle dynamic vh
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  const navItems = ['Home', 'Services', 'About Us', 'Contact'];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="navbar__logo">
          <img src={logo} alt="KXByte logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">KX<em>BYTE</em></span>
        </a>

        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(' ', '')}`}>
                {item}
                <span className="navbar__link-dot" />
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <button className="navbar__cta">
            <span>Get a Quote</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            className={`navbar__burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Redesigned Mobile Drawer - Clean, no weird numbers */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer__inner">
          {/* Close button */}
          <button className="mobile-drawer__close" onClick={() => setMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Logo in drawer */}
          <div className="mobile-drawer__logo">
            <img src={logo} alt="KXByte" />
            <span>KXBYTE</span>
          </div>

          {/* Navigation links - clean, no numbers */}
          <ul className="mobile-drawer__nav">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '')}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="mobile-drawer__cta" onClick={() => setMenuOpen(false)}>
            Get a Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Contact info - FIXED: Added proper href values */}
          <div className="mobile-drawer__contact">
            <a href="mailto:hello@kxbyte.co.ke">hello@kxbyte.co.ke</a>
            <div className="mobile-drawer__social">
              <a href="https://instagram.com/kxbyte" target="_blank" rel="noopener noreferrer">IG</a>
              <a href="https://twitter.com/kxbyte" target="_blank" rel="noopener noreferrer">TW</a>
              <a href="https://linkedin.com/company/kxbyte" target="_blank" rel="noopener noreferrer">LI</a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;