import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Globe, Smartphone, Settings, Palette } from 'lucide-react';

const serviceDetails = {
  'web-development': {
    Icon: Globe,
    title: 'Web Development',
    tagline: 'Fast, scalable websites built for real business.',
    body: `We build everything from landing pages to full-stack web apps...` // expand as needed
  },
  'mobile-apps': {
    Icon: Smartphone,
    title: 'Mobile Apps',
    tagline: 'Cross-platform apps users actually love.',
    body: `React Native apps that work on iOS and Android...`
  },
  'systems-backends': {
    Icon: Settings,
    title: 'Systems & Backends',
    tagline: 'APIs and dashboards that run your operations.',
    body: `Custom REST APIs, admin dashboards, automation systems...`
  },
  'ui-ux-design': {
    Icon: Palette,
    title: 'UI & UX Design',
    tagline: 'Interfaces that convert and retain users.',
    body: `Clean, intuitive design systems built for real devices...`
  },
};

const ServicePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[slug];

  if (!service) return <div style={{ padding: '4rem', color: '#fff' }}>Service not found.</div>;

  const { Icon, title, tagline, body } = service;

  return (
    <section style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '2rem', background: 'none', border: 'none', color: '#E8450A', cursor: 'pointer', fontSize: '1rem' }}>
        ← Back
      </button>
      <Icon size={48} color="#E8450A" />
      <h1 style={{ marginTop: '1rem' }}>{title}</h1>
      <p style={{ fontSize: '1.2rem', color: '#aaa', margin: '0.5rem 0 2rem' }}>{tagline}</p>
      <p style={{ lineHeight: '1.8' }}>{body}</p>
    </section>
  );
};

export default ServicePage;