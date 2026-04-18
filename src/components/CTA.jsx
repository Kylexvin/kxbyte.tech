import React, { useState, useEffect } from 'react';
import '../styles/CTA.css';

const CTA = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.querySelector('.cta')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="cta" id="contact">
      {/* Animated gradient background */}
      <div 
        className="cta__gradient-bg"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}
      ></div>
      
      <div className="cta__overlay"></div>

      <div className="cta-container">
        <div className="cta__content">
          <div className="cta__badge">
            <span>✦ Ready to Start?</span>
          </div>

          <p className="cta__label">Start a Project</p>

          <h2 className="cta__heading">
            HAVE AN IDEA? <br />
            LET'S <span>BUILD IT</span>
          </h2>

          <div className="cta__line"></div>

          <p className="cta__text">
            Tell us about your project and we'll help you turn it into a fast,
            scalable digital product — built the right way from day one.
          </p>

          <div className="cta__stats">
            <div className="cta-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="cta-stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="cta-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>

          <div className="cta__actions">
            <a
              href="https://wa.me/254768610613?text=Hi%20KXByte%2C%20I%20have%20a%20project%20idea%20I'd%20like%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--primary"
            >
              <span>Chat on WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>

            <a
              href="mailto:hello@kxbyte.co.ke"
              className="cta-btn cta-btn--secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <span>Send Email</span>
            </a>
          </div>

          <div className="cta__trust">
            <div className="trust-badge">
              <span>⭐ 4.9/5 Rating</span>
              <span>🔒 No Obligation Quote</span>
              <span>⚡ 24hr Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;