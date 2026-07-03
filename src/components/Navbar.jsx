// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiX, FiArrowRight } from 'react-icons/fi';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/images/logo2.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on an inner page (not homepage)
  const isInnerPage = location.pathname !== '/';

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

  const navItems = ['Home', 'Services', 'Projects', 'About Us', 'Team', 'Contact'];
  
  // Map nav items to section IDs
  const getSectionId = (item) => {
    const mapping = {
      'Home': 'home',
      'Services': 'services',
      'Projects': 'projects',
      'About Us': 'about',
      'Team': 'team',
      'Contact': 'contact'
    };
    return mapping[item];
  };

  // Handle navigation - works for both homepage and inner pages
  const handleNavigation = (sectionId) => {
    if (isInnerPage) {
      // If on inner page, navigate to homepage first, then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMenuOpen(false);
  };

  // Handle back button for inner pages
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isInnerPage ? 'inner-page-nav' : ''}`}>
        <div className="navbar__left">
          {/* Show back button on ALL inner pages */}
          {isInnerPage && (
            <button className="navbar__back-btn" onClick={handleBack}>
              <ArrowLeft size={20} />
            </button>
          )}
          
          <a 
            href="#home" 
            className="navbar__logo"
            onClick={(e) => {
              e.preventDefault();
              if (isInnerPage) {
                navigate('/');
              } else {
                handleNavigation('home');
              }
            }}
          >
            <img src={logo} alt="KXByte logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">KX<em>BYTE</em></span>
          </a>
        </div>

        {/* Only show nav links on homepage */}
        {!isInnerPage && (
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${getSectionId(item)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(getSectionId(item));
                  }}
                >
                  {item}
                  <span className="navbar__link-dot" />
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="navbar__right">
          <button 
            className="navbar__cta"
            onClick={() => handleNavigation('contact')}
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
                    handleNavigation(getSectionId(item));
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
              handleNavigation('contact');
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
                href="https://wa.me/254768610613" 
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