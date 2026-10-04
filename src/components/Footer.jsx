"use client";
// src/components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import logo from '../assets/images/logo2.png';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo.src} alt="KXBYTE" />
            <span>KXBYTE</span>
          </div>
          <p className="footer__description">
            A technology company building connected software for how
            businesses actually operate. Products first. Custom work when
            it fits.
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
              href="https://www.linkedin.com/company/kxbyte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/theKxbyte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.tiktok.com/@kxbyte.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
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

        {/* Products */}
        <div className="footer__links">
          <h4>Products</h4>
          <ul>
            <li>
              <Link href="/kxtill">KxTill</Link>
            </li>
            <li>
              <a
                href="https://suite.kxbyte.co.ke"
                target="_blank"
                rel="noopener noreferrer"
              >
                KXBYTE Suite
              </a>
            </li>
            <li>
              <Link href="/products">All products</Link>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div className="footer__links">
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Custom work</Link>
            </li>
            <li>
              <Link href="/#team">Team</Link>
            </li>
            <li>
              <Link href="/#process">Process</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__contact">
          <h4>Get in touch</h4>
          <div className="footer__contact-item">
            <FaEnvelope />
            <a href="mailto:info@kxbyte.co.ke">info@kxbyte.co.ke</a>
          </div>
          <div className="footer__contact-item">
            <FaPhone />
            <a href="tel:+254768610613">+254 768 610 613</a>
          </div>
          <div className="footer__contact-item">
            <FaMapMarkerAlt />
            <span>Nairobi, Kenya</span>
          </div>

          <a
            href="https://suite.kxbyte.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__cta"
          >
            KXBYTE Suite <FiArrowUpRight />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <p>&copy; {currentYear} KXBYTE. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;