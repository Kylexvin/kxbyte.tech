// src/components/CTA.jsx
import React, { useState } from 'react';
import '../styles/CTA.css';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
          {/* Left Column - Text */}
          <div className="cta__left">
            <span className="cta__badge">Get In Touch</span>
            <h2 className="cta__heading">
              Let's Build <span>Together</span>
            </h2>
            <div className="cta__line"></div>
            <p className="cta__text">
              Tell us about your project and we'll help you turn it into a fast,
              scalable digital product — built the right way from day one.
            </p>

            {/* Contact Options */}
            <div className="cta__contact-options">
              <a
                href="tel:+254768610613"
                className="contact-btn contact-btn--call"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>0768 610 613</span>
              </a>
              
              <a
                href="https://wa.me/254768610613?text=Hi%20KXByte%2C%20I%20have%20a%20project%20idea%20I'd%20like%20to%20discuss."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-btn--whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="cta__response">We respond within 24 hours</p>
          </div>

          {/* Right Column - Form */}
          <div className="cta__right">
            <form 
              className="cta__form"
              action="https://formsubmit.co/el/guzunu"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h3 className="form-title">Send a Message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select Project Type</option>
                  <option value="website">Website</option>
                  <option value="webapp">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="backend">Backend / API</option>
                  <option value="automation">Business Automation</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="4"
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
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <p className="form-note">No spam. Just a conversation about your project.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;