"use client";
// src/components/CTA.jsx
import React, { useState } from 'react';
import '../styles/CTA.css';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <section className="cta" id="contact">
      <div className="cta-container">
        <div className="cta__content">
          {/* Left — the two paths */}
          <div className="cta__left">
            <span className="cta__badge">Get in touch</span>
            <h2 className="cta__heading">
              Try the products. <span>Or talk to us.</span>
            </h2>
            <div className="cta__line"></div>
            <p className="cta__text">
              Use KxTill and KXBYTE Suite if they fit what you need. If you
              need something our products don't cover, tell us about the
              problem — not the solution. We'll tell you honestly whether
              it's a fit.
            </p>

            <div className="cta__contact-options">
              <a
                href="https://kxtill.kxbyte.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-btn--call"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Start using KxTill</span>
              </a>

              <a
                href="https://suite.kxbyte.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-btn--whatsapp"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Explore Suite</span>
              </a>
            </div>

            <div className="cta__alt-contact">
              <span className="cta__alt-label">Or reach us directly</span>
              <div className="cta__alt-links">
                <a href="mailto:info@kxbyte.co.ke" className="cta__alt-link">
                  info@kxbyte.co.ke
                </a>
                <span className="cta__alt-sep" aria-hidden="true">·</span>
                <a
                  href="https://wa.me/254768610613?text=Hi%20KXBYTE%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta__alt-link"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="cta__right">
            <form
              className="cta__form"
              action="https://formsubmit.co/el/guzunu"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h3 className="form-title">Send a message</h3>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Describe the problem. Not the solution — just what's actually happening."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="cta-btn--submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send message'}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className="form-note">
                We reply within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;