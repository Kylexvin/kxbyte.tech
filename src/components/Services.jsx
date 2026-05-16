import React from 'react';
import { Globe, Smartphone, Settings, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';

const services = [
  {
    Icon: Globe,
    title: 'Web Development',
    slug: 'web-development',
    desc: 'Get a website that loads fast, looks professional, and actually brings in customers — not just a pretty page.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    slug: 'mobile-apps',
    desc: 'Put your business in your customers\' pockets. Apps that work, retain users, and grow with your business.',
  },
  {
    Icon: Settings,
    title: 'Business Automation',
    slug: 'systems-backends',
    desc: 'Stop doing manually what a system can do for you. We build tools that save time, cut costs, and reduce errors.',
  },
  {
    Icon: Palette,
    title: 'UI & UX Design',
    slug: 'ui-ux-design',
    desc: 'First impressions close deals. We design interfaces that build trust and turn visitors into paying customers.',
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
  Whether you need a website that wins clients, an app your customers love,
  or a system that runs your operations — we build it right, on time, and
  built to last.
</p>

<p className="section__body" style={{ marginTop: '1rem' }}>
  Trusted by startups, local businesses, and growing brands across Kenya.
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
