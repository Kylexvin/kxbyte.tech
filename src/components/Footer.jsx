import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">KX<span>BYTE</span></div>
          <p>Building digital products for businesses across Kenya and beyond. Web. Mobile. Systems.</p>
        </div>

        <div className="footer__links">
          <h4>Company</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Mobile Apps</a></li>
            <li><a href="#services">Systems & Backend</a></li>
            <li><a href="#services">UI/UX Design</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Get In Touch</h4>
          <p>📧 hello@kxbyte.co.ke</p>
          <p>📍 Kenya</p>
          <button className="btn--primary" style={{ marginTop: '1rem', fontSize: '0.75rem' }}>
            Start a Project
          </button>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} KXByte. All rights reserved.</p>
        <p>Design & Built by <span>KXByte</span></p>
      </div>
    </footer>
  );
};

export default Footer;