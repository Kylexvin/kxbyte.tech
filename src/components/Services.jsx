"use client";
// src/components/Services.jsx
import React from 'react';
import { Code, Layers, Plug, Wrench, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../styles/Services.css';

const services = [
  {
    Icon: Code,
    title: 'Custom Software',
    slug: 'custom-software',
    desc: 'Business systems built around a specific workflow — when our products don\'t cover it, we build it.',
  },
  {
    Icon: Layers,
    title: 'Web Applications',
    slug: 'web-applications',
    desc: 'Platforms, portals, and dashboards — built, shipped, and maintained by the same team behind our products.',
  },
  {
    Icon: Plug,
    title: 'Integrations',
    slug: 'integrations',
    desc: 'Connecting existing systems, payment providers, and data sources — so the business stops moving data by hand.',
  },
  {
    Icon: Wrench,
    title: 'Internal Tools',
    slug: 'internal-tools',
    desc: 'Software that replaces spreadsheets, notebooks, and manual processes inside a business.',
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <section className="services" id="services">
      <div className="services__watermark">DO</div>

      <div className="services__left">
        <p className="section__label">Custom work</p>

        <h2 className="section__heading">
          WHAT WE BUILD <span>BEYOND PRODUCTS</span>
        </h2>

        <div className="section__line" />

        <p className="section__body">
          KXBYTE builds products first. But when a business needs software
          our products don't cover — a specific workflow, an integration, a
          system that has to be its own thing — we take the work on.
        </p>

        <p className="section__body" style={{ marginTop: '1rem' }}>
          Same team, same method, same standard as our products.
        </p>

        <div className="services__cta-wrapper">
          <Link href="/services" className="services__cta">
            More about custom work
            <ArrowRight className="services__cta-icon" size={18} />
          </Link>
        </div>
      </div>

      <div className="services__grid">
        {services.map((s, i) => (
          <div
            className="service-card"
            key={i}
            onClick={() => router.push(`/service/${s.slug}`)}
          >
            <div className="service-card__header">
              <div className="service-card__icon">
                <s.Icon size={32} />
              </div>
              <ChevronRight className="service-card__chevron" size={20} />
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