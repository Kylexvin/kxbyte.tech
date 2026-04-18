import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiX, FiArrowRight } from 'react-icons/fi';
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
  
  // Map nav items to section IDs
  const getSectionId = (item) => {
    const mapping = {
      'Home': 'home',
      'Services': 'services',
      'About Us': 'about',
      'Contact': 'contact'
    };
    return mapping[item];
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a 
          href="#home" 
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <img src={logo} alt="KXByte logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">KX<em>BYTE</em></span>
        </a>

        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${getSectionId(item)}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(getSectionId(item));
                }}
              >
                {item}
                <span className="navbar__link-dot" />
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <button 
            className="navbar__cta"
            onClick={() => scrollToSection('contact')}
          >
            <span>Get a Quote</span>
            <FiArrowRight />
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

      {/* Light Theme Mobile Drawer with Icons */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer__inner">
          {/* Close button */}
          <button className="mobile-drawer__close" onClick={() => setMenuOpen(false)}>
            <FiX size={24} />
          </button>

          {/* Logo in drawer */}
          <div className="mobile-drawer__logo">
            <img src={logo} alt="KXByte" />
            <span>KXBYTE</span>
          </div>

          {/* Navigation links */}
          <ul className="mobile-drawer__nav">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${getSectionId(item)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(getSectionId(item));
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button 
            className="mobile-drawer__cta" 
            onClick={() => {
              scrollToSection('contact');
            }}
          >
            Get a Quote
            <FiArrowRight />
          </button>

          {/* Contact info with Social Icons */}
          <div className="mobile-drawer__contact">
            <a href="mailto:hello@kxbyte.co.ke" className="contact-email">
              hello@kxbyte.co.ke
            </a>
            <div className="mobile-drawer__social">
              <a 
                href="https://instagram.com/kxbyte" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://twitter.com/kxbyte" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon twitter"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://linkedin.com/company/kxbyte" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://wa.me/254XXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
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