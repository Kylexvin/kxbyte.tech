import React from 'react';
import '../styles/Services.css';

const services = [
  { 
    icon: '🌐', 
    title: 'Web Development', 
    desc: 'High-performance websites and web apps built for speed, scalability, and real-world usage — not just visuals.' 
  },
  { 
    icon: '📱', 
    title: 'Mobile Apps', 
    desc: 'Cross-platform mobile apps that are smooth, reliable, and ready for real users from day one.' 
  },
  { 
    icon: '⚙️', 
    title: 'Systems & Backends', 
    desc: 'Custom systems, APIs, and dashboards that automate operations and keep your business running efficiently.' 
  },
  { 
    icon: '🎨', 
    title: 'UI & UX Design', 
    desc: 'Clean, intuitive interfaces designed to convert users and deliver seamless experiences across devices.' 
  },
];

const Services = () => {
  // Smooth scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="services" id="services">
      <div className="services__watermark">DO</div>

      <div className="services__left">
        <p className="section__label">Our Services</p>

        <h2 className="section__heading">
          WHAT WE <span>BUILD</span>
        </h2>

        <div className="section__line" />

        <p className="section__body">
          We don't just build websites — we build systems that power real businesses.
          From simple landing pages to complex platforms, every solution is designed
          to be fast, scalable, and built for growth.
        </p>

        <p className="section__body" style={{ marginTop: '1rem' }}>
          Built for startups, businesses, and growing brands that need more than
          just a basic website.
        </p>

        <button 
          className="btn--primary" 
          style={{ marginTop: '2rem' }}
          onClick={scrollToProjects}
        >
          View Our Work →
        </button>
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