"use client";
// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { ArrowUpRight } from 'lucide-react';
import logo from '../assets/images/logo2.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* ── Primary navigation ──────────────────────────────────── */
  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'KxTill', href: '/kxtill' },
    { label: 'About', href: '/about' },
    { label: 'Custom work', href: '/services' },
  ];

  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar__container">
          <Link href="/" className="navbar__logo">
            <img
              src={logo.src}
              alt="KXBYTE"
              className="navbar__logo-img"
            />
            <span className="navbar__logo-text">
              KX<em>BYTE</em>
            </span>
          </Link>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar__link ${
                    isActive(link.href) ? 'navbar__link--active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__right">
            <a
              href="https://kxtill.kxbyte.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta"
            >
              <span>Start with KxTill</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              className={`navbar__burger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      <div
        className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer__inner">
          <div className="mobile-drawer__head">
            <Link
              href="/"
              className="mobile-drawer__logo"
              onClick={() => setMenuOpen(false)}
            >
              <img src={logo.src} alt="KXBYTE" />
              <span>KXBYTE</span>
            </Link>

            <button
              className="mobile-drawer__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={22} />
            </button>
          </div>

          <ul className="mobile-drawer__nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isActive(link.href) ? 'mobile-drawer__link--active' : ''
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer__subnav">
            <span className="mobile-drawer__subnav-label">KxTill</span>
            <Link
              href="/kxtill/pricing"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/kxtill/faq"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>

          <a
            href="https://kxtill.kxbyte.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer__cta"
            onClick={() => setMenuOpen(false)}
          >
            Start with KxTill
            <ArrowUpRight size={16} />
          </a>

          <div className="mobile-drawer__contact">
            <a
              href="mailto:info@kxbyte.co.ke"
              className="mobile-drawer__email"
            >
              info@kxbyte.co.ke
            </a>

            <div className="mobile-drawer__social">
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
                href="https://wa.me/254768610613"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;