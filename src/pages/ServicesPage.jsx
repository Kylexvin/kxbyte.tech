// src/pages/ServicesPage.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  Code,
  Layers,
  Plug,
  Wrench,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from 'lucide-react';
import servicesHero from '../assets/images/comp.jpg';
import '../styles/ServicesPage.css';

const customWork = [
  {
    id: 'custom-software',
    Icon: Code,
    title: 'Custom software',
    desc: "Business systems built around a specific workflow — when our products don't cover it, we build it.",
    examples: [
      'Workflow tools specific to a business',
      'Systems that replace spreadsheets',
      'Internal operational software',
      'Data pipelines and reports',
    ],
  },
  {
    id: 'web-applications',
    Icon: Layers,
    title: 'Web applications',
    desc: 'Platforms, portals, and dashboards — built, shipped, and maintained by the same team behind our products.',
    examples: [
      'Customer portals',
      'Partner platforms',
      'Admin dashboards',
      'Reporting tools',
    ],
  },
  {
    id: 'integrations',
    Icon: Plug,
    title: 'Integrations',
    desc: 'Connecting existing systems, payment providers, and data sources — so the business stops moving data by hand.',
    examples: [
      'M-Pesa and payment integrations',
      'Third-party API connections',
      'Data sync between systems',
      'Custom middleware',
    ],
  },
  {
    id: 'internal-tools',
    Icon: Wrench,
    title: 'Internal tools',
    desc: 'Software that replaces spreadsheets, notebooks, and manual processes inside a business.',
    examples: [
      'Approval workflows',
      'Inventory and stock tools',
      'Staff and shift systems',
      'Document management',
    ],
  },
];

const techStack = {
  frontend: ['React', 'Next.js', 'React Native', 'TypeScript'],
  backend: ['Node.js', 'Express', 'Python', 'Django'],
  data: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  infrastructure: ['AWS', 'Docker', 'Nginx', 'Cloudflare'],
};

const faqs = [
  {
    q: 'What does KXBYTE build?',
    a: "KXBYTE builds software products first — KxTill, KXBYTE Suite, and more in development. We also take on custom software when a business needs something our products don't cover.",
  },
  {
    q: 'When do you take on custom work?',
    a: "When the problem is real, the need is specific, and our existing products genuinely don't fit. If a product already solves it, we'll say so and point you there instead.",
  },
  {
    q: 'How do custom projects usually work?',
    a: "Start with the problem. We talk to understand what's actually happening, then design and build around that. Custom work ships and runs like our products — same team, same standards.",
  },
  {
    q: 'Do you build integrations with existing systems?',
    a: 'Yes. Payment providers, third-party APIs, data sources, and legacy systems — if it needs to connect, we can build the connection.',
  },
  {
    q: 'Can you take on a project outside your product areas?',
    a: "Sometimes. KXBYTE is a product company, not an agency. If the work fits what we do and the fit is right, we take it on. If not, we'll tell you honestly.",
  },
  {
    q: 'How is custom work priced?',
    a: "By scope — what needs to be built, how complex it is, and how long it takes. We don't publish a rate card because every project is different. Talk to us and we'll give you a straight answer.",
  },
  {
    q: 'Do you support what you build?',
    a: "Yes. Everything we ship — products and custom work — is maintained by us. That's the same long-term commitment either way.",
  },
  {
    q: 'How do I start?',
    a: "Email info@kxbyte.co.ke or use the contact option below. Describe the problem, not the solution. We'll tell you whether it's a fit.",
  },
];

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="services-page">
      {/* ══ HERO — two-column with image ═══════════════════ */}
      <section className="services-page__hero">
        <div className="services-page__hero-container">
          <div className="services-page__hero-content">
            <span className="services-page__hero-badge">Custom work</span>
            <h1 className="services-page__hero-title">
              Beyond our <span>products.</span>
            </h1>
            <div className="services-page__hero-line"></div>
            <p className="services-page__hero-desc">
              KXBYTE is a product company. But when a business needs software
              our products don't cover — a specific workflow, an integration,
              a system that has to be its own thing — we take the work on.
            </p>
            <div className="services-page__hero-buttons">
              <a
                href="mailto:info@kxbyte.co.ke"
                className="services-page__hero-cta services-page__hero-cta--primary"
              >
                Talk to us
                <ArrowUpRight size={18} />
              </a>
              <Link
                href="/products"
                className="services-page__hero-cta services-page__hero-cta--secondary"
              >
                See our products first
              </Link>
            </div>
          </div>

          <div className="services-page__hero-visual">
            <div className="services-page__hero-frame">
              <img
                src={servicesHero.src}
                alt="Custom software at KXBYTE"
                className="services-page__hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE BUILD ══════════════════════════════════ */}
      <section className="services-page__categories">
        <div className="services-page__categories-content">
          <div className="services-page__categories-header">
            <span className="services-page__section-label">What we build</span>
            <h2 className="services-page__section-heading">
              When products <span>don't fit.</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__categories-subtitle">
              Four kinds of work, all built by the same team that runs our
              products.
            </p>
          </div>

          <div className="services-page__categories-grid">
            {customWork.map((item) => (
              <div className="services-page__category-card" key={item.id}>
                <div className="services-page__category-card-icon">
                  <item.Icon size={22} />
                </div>
                <h3 className="services-page__category-card-title">
                  {item.title}
                </h3>
                <p className="services-page__category-card-desc">
                  {item.desc}
                </p>
                <ul className="services-page__category-card-features">
                  {item.examples.map((ex, idx) => (
                    <li key={idx}>
                      <CheckCircle size={13} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW WE BUILD (tech stack) ══════════════════════ */}
      <section className="services-page__tech">
        <div className="services-page__tech-content">
          <div className="services-page__tech-header">
            <span className="services-page__section-label">Built with</span>
            <h2 className="services-page__section-heading">
              How we <span>build.</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__tech-subtitle">
              The same stack behind our products and our custom work.
            </p>
          </div>

          <div className="services-page__tech-grid">
            <div className="services-page__tech-category">
              <h4>Frontend</h4>
              <ul>
                {techStack.frontend.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="services-page__tech-category">
              <h4>Backend</h4>
              <ul>
                {techStack.backend.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="services-page__tech-category">
              <h4>Data</h4>
              <ul>
                {techStack.data.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="services-page__tech-category">
              <h4>Infrastructure</h4>
              <ul>
                {techStack.infrastructure.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="services-page__faq">
        <div className="services-page__faq-content">
          <div className="services-page__faq-header">
            <span className="services-page__section-label">FAQ</span>
            <h2 className="services-page__section-heading">
              Common <span>questions.</span>
            </h2>
            <div className="services-page__section-line"></div>
          </div>

          <div className="services-page__faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`services-page__faq-item ${
                  openFaq === index ? 'services-page__faq-item--open' : ''
                }`}
                key={index}
              >
                <button
                  className="services-page__faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                <div className="services-page__faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════ */}
      <section className="services-page__cta">
        <div className="services-page__cta-content">
          <div className="services-page__cta-left">
            <span className="services-page__cta-label">Get in touch</span>
            <h2>
              Have a problem <span>we should solve?</span>
            </h2>
            <p>
              Describe the problem, not the solution. We'll tell you
              honestly whether it fits what we do.
            </p>
          </div>
          <div className="services-page__cta-right">
            <a
              href="mailto:info@kxbyte.co.ke"
              className="services-page__cta-button services-page__cta-button--primary"
            >
              info@kxbyte.co.ke
              <ArrowUpRight size={18} />
            </a>
            <Link
              href="/products"
              className="services-page__cta-button services-page__cta-button--secondary"
            >
              See our products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;