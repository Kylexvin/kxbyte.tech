// src/components/Footer.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import logo from '../assets/images/logo2.png';
import '../styles/Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Section */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="KXByte" />
            <span>KXBYTE</span>
          </div>
          <p className="footer__description">
            We build digital solutions that drive real business results. 
            From websites and mobile apps to automation and AI — we deliver 
            quality, on time, every time.
          </p>
          <div className="footer__social">
            <a 
              href="https://instagram.com/kxbyte" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://twitter.com/kxbyte" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://linkedin.com/company/kxbyte" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://wa.me/254768610613" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <button onClick={() => handleNavClick('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('projects')}>Projects</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')}>About Us</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('team')}>Team</button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')}>Contact</button>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer__services">
          <h4>Our Services</h4>
          <ul>
            <li>
              <Link to="/service/web-development">Web Development</Link>
            </li>
            <li>
              <Link to="/service/mobile-apps">Mobile Apps</Link>
            </li>
            <li>
              <Link to="/service/systems-backends">Business Automation</Link>
            </li>
            <li>
              <Link to="/service/ui-ux-design">UI/UX Design</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__contact">
          <h4>Get in Touch</h4>
          <div className="footer__contact-item">
            <FaPhone />
            <a href="tel:+254768610613">0768 610 613</a>
          </div>
          <div className="footer__contact-item">
            <FaEnvelope />
            <a href="mailto:kxbyte.tech@gmail.com">kxbyte.tech@gmail.com</a>
          </div>
          <div className="footer__contact-item">
            <FaMapMarkerAlt />
            <span>Nairobi, Kenya</span>
          </div>
          <div className="footer__contact-item">
            <FaClock />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </div>

          <button 
            className="footer__cta"
            onClick={() => handleNavClick('contact')}
          >
            Get a Quote <FiArrowRight />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <p>&copy; {currentYear} KXByte. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;