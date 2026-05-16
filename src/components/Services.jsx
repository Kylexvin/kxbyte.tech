import React from 'react';
import { Globe, Smartphone, Settings, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';

const services = [
  {
    Icon: Globe,
    title: 'Web Development',
    slug: 'web-development',
    desc: 'High-performance websites and web apps built for speed, scalability, and real-world usage — not just visuals.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    slug: 'mobile-apps',
    desc: 'Cross-platform mobile apps that are smooth, reliable, and ready for real users from day one.',
  },
  {
    Icon: Settings,
    title: 'Systems & Backends',
    slug: 'systems-backends',
    desc: 'Custom systems, APIs, and dashboards that automate operations and keep your business running efficiently.',
  },
  {
    Icon: Palette,
    title: 'UI & UX Design',
    slug: 'ui-ux-design',
    desc: 'Clean, intuitive interfaces designed to convert users and deliver seamless experiences across devices.',
  },
];

const Services = () => {
  const navigate = useNavigate();

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
          <div
            className="service-card"
            key={i}
            onClick={() => navigate(`/service/${s.slug}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className="service-card__icon">
              <s.Icon size={32} />
            </div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
