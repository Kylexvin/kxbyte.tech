import React from 'react';
import '../styles/Services.css';

const services = [
  { icon: '🌐', title: 'Web Development', desc: 'Custom websites and web apps built with modern frameworks — fast, responsive, and SEO-ready.' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Cross-platform iOS and Android apps using React Native. From MVP to full product launch.' },
  { icon: '⚙️', title: 'Systems & Backends', desc: 'APIs, databases, admin dashboards and business logic systems that power your operations.' },
  { icon: '🎨', title: 'UI & UX Design', desc: 'Clean, intuitive interfaces designed for real users. Figma prototypes to pixel-perfect code.' },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__watermark">DO</div>

      <div className="services__left">
        <p className="section__label">Our Services</p>
        <h2 className="section__heading">
          WHAT WE <span>DO?</span>
        </h2>
        <div className="section__line" />
        <p className="section__body">
          We cover the full stack — from the interface your users see to the
          systems running behind the scenes. Every solution is tailored, not templated.
        </p>
        <p className="section__body" style={{ marginTop: '1rem' }}>
          Whether you're a startup, an SME, or an established business in Kenya,
          we have the right tech to move you forward.
        </p>
        <button className="btn--primary" style={{ marginTop: '2rem' }}>View All Services</button>
      </div>

      <div className="services__grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;