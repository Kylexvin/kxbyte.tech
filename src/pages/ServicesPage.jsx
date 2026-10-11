// src/pages/ServicesPage.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Code,
  Layers,
  Plug,
  Wrench,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  Search,
  PenTool,
  Hammer,
  Rocket,
  LifeBuoy,
  WifiOff,
  Smartphone,
  ShieldCheck,
  BarChart3,
} from 'lucide-react';
import servicesHero from '../assets/images/comp.jpg';
import '../styles/ServicesPage.css';

const trustPoints = [
  { label: 'Product team', value: 'Same engineers as our products' },
  { label: 'Ownership', value: 'You own the code and data' },
  { label: 'Support', value: 'Maintained by us after launch' },
  { label: 'Payments', value: 'M-Pesa ready' },
];

const customWork = [
  {
    id: 'custom-software',
    Icon: Code,
    title: 'Custom software',
    desc: "Business systems built around a specific workflow — when our products don't cover it, we build it.",
    fit: 'Your process is unusual enough that off-the-shelf tools force workarounds.',
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
    fit: 'You need customers, partners, or staff to log in and do something real.',
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
    fit: 'Your systems work, but they don\'t talk to each other.',
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
    fit: 'Your team runs on WhatsApp, paper, and Excel — and it\'s starting to break.',
    examples: [
      'Approval workflows',
      'Inventory and stock tools',
      'Staff and shift systems',
      'Document management',
    ],
  },
];

const goodFit = [
  'The problem is real and specific to your business',
  'No existing product or off-the-shelf tool solves it properly',
  'You can describe what\'s going wrong today, even if not the fix',
  'You want software that is maintained, not just delivered',
  'You have someone who can make decisions and give feedback',
];

const notFit = [
  'A product we already build covers it — we\'ll point you there',
  'You need a simple brochure site or template store',
  'You want the cheapest possible build with no ongoing ownership',
  'The scope is undefined and nobody can say what success looks like',
  'You need a large team in a short window with no discovery',
];

const process = [
  {
    Icon: Search,
    title: 'Discovery',
    desc: 'We talk to the people who actually use the process. We look at what exists today — spreadsheets, tools, workarounds — and find where time and money leak.',
    output: 'A clear problem statement',
  },
  {
    Icon: PenTool,
    title: 'Scope & design',
    desc: 'We define what gets built first, what waits, and what doesn\'t get built at all. You see flows and screens before any code is committed.',
    output: 'Scope, timeline, and fixed quote',
  },
  {
    Icon: Hammer,
    title: 'Build',
    desc: 'Short iterations with working software at each step. You test real features early, so changes happen while they\'re cheap.',
    output: 'Working releases, not status reports',
  },
  {
    Icon: Rocket,
    title: 'Launch',
    desc: 'Deployment, data migration, and training for your team. We stay close during the first weeks, when real usage exposes what testing missed.',
    output: 'Live system, trained users',
  },
  {
    Icon: LifeBuoy,
    title: 'Support',
    desc: 'Monitoring, fixes, backups, and improvements as the business changes. The people who built it are the people who maintain it.',
    output: 'Ongoing maintenance',
  },
];

const engagements = [
  {
    title: 'Fixed scope',
    best: 'Well-defined projects',
    desc: 'A clear deliverable, a clear price, a clear timeline. Best when the problem is understood and the boundaries are known.',
    points: ['Agreed scope and quote upfront', 'Milestone-based delivery', 'Handover and documentation'],
  },
  {
    title: 'Phased build',
    best: 'Larger or evolving systems',
    desc: 'We start with the smallest useful version, put it in use, then build the next phase based on what actually happens.',
    points: ['Start small, grow with usage', 'Each phase scoped separately', 'Lower risk, faster first value'],
  },
  {
    title: 'Ongoing partnership',
    best: 'Systems that keep changing',
    desc: 'A monthly arrangement for maintenance, improvements, and new features on software we\'ve already built with you.',
    points: ['Priority fixes and updates', 'Monitoring and backups', 'Steady feature development'],
  },
];

const capabilities = [
  {
    Icon: WifiOff,
    title: 'Offline-first systems',
    desc: 'Software that keeps working when the connection drops, then syncs cleanly when it returns. Built into our own products and available to yours.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile money',
    desc: 'M-Pesa collections, confirmations, and reconciliation handled properly — including the failed and duplicate cases that break naive integrations.',
  },
  {
    Icon: ShieldCheck,
    title: 'Roles and access',
    desc: 'Owners, managers, and staff see and do different things. Permissions and audit trails designed in from the start, not bolted on.',
  },
  {
    Icon: BarChart3,
    title: 'Reports that matter',
    desc: 'Dashboards and exports built around the numbers you act on, instead of generic charts nobody opens.',
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
    q: 'How long does a project take?',
    a: "It depends on scope. A focused internal tool or integration can take a few weeks. A full platform is built in phases over several months. After discovery we give you a realistic timeline, not a guess.",
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
    q: 'Who owns the code and data?',
    a: "You own your data, always. Code ownership and licensing are agreed in writing before work starts, so there are no surprises at handover.",
  },
  {
    q: 'Do you support what you build?',
    a: "Yes. Everything we ship — products and custom work — is maintained by us. That's the same long-term commitment either way.",
  },
  {
    q: 'Can you improve or rescue software someone else built?',
    a: "Often, yes. We review the codebase first and tell you honestly whether it's worth keeping, fixing, or replacing.",
  },
  {
    q: 'Do you work with businesses outside Kenya?',
    a: "Yes. We're Kenya-based and understand local payment and connectivity realities well, but the work is done remotely and we're comfortable with clients elsewhere.",
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

      {/* ══ TRUST STRIP ════════════════════════════════════ */}
      <section className="services-page__trust">
        <div className="services-page__trust-grid">
          {trustPoints.map((t, i) => (
            <div className="services-page__trust-item" key={i}>
              <span className="services-page__trust-label">{t.label}</span>
              <span className="services-page__trust-value">{t.value}</span>
            </div>
          ))}
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
                <p className="services-page__category-card-fit">
                  <strong>Good fit when:</strong> {item.fit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FIT CHECK ══════════════════════════════════════ */}
      <section className="services-page__fit">
        <div className="services-page__block-content">
          <div className="services-page__block-header">
            <span className="services-page__section-label">Is it a fit?</span>
            <h2 className="services-page__section-heading">
              Honest about <span>fit.</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__block-subtitle">
              We'd rather tell you no early than take a project we can't do well.
            </p>
          </div>

          <div className="services-page__fit-grid">
            <div className="services-page__fit-col services-page__fit-col--yes">
              <h3>Good fit</h3>
              <ul>
                {goodFit.map((g, i) => (
                  <li key={i}>
                    <CheckCircle size={16} />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="services-page__fit-col services-page__fit-col--no">
              <h3>Probably not a fit</h3>
              <ul>
                {notFit.map((n, i) => (
                  <li key={i}>
                    <XCircle size={16} />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════ */}
      <section className="services-page__process">
        <div className="services-page__block-content">
          <div className="services-page__block-header">
            <span className="services-page__section-label">How it works</span>
            <h2 className="services-page__section-heading">
              From problem to <span>production.</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__block-subtitle">
              A simple, predictable process — no surprises on scope, price, or
              progress.
            </p>
          </div>

          <div className="services-page__process-list">
            {process.map((step, i) => (
              <div className="services-page__process-step" key={i}>
                <div className="services-page__process-num">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="services-page__process-body">
                  <div className="services-page__process-title-row">
                    <step.Icon size={18} />
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.desc}</p>
                  <span className="services-page__process-output">
                    You get: {step.output}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ═══════════════════════════════════ */}
      <section className="services-page__capabilities">
        <div className="services-page__block-content">
          <div className="services-page__block-header">
            <span className="services-page__section-label">Proven ground</span>
            <h2 className="services-page__section-heading">
              Problems we've <span>already solved.</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__block-subtitle">
              Building our own products meant hitting the hard problems first.
              That experience goes into every custom project.
            </p>
          </div>

          <div className="services-page__capabilities-grid">
            {capabilities.map((c, i) => (
              <div className="services-page__capability" key={i}>
                <div className="services-page__category-card-icon">
                  <c.Icon size={22} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENGAGEMENT MODELS ══════════════════════════════ */}
      <section className="services-page__engage">
        <div className="services-page__block-content">
          <div className="services-page__block-header">
            <span className="services-page__section-label">Working together</span>
            <h2 className="services-page__section-heading">
              Ways to <span>engage.</span>
            </h2>
            <div className="services-page__section-line"></div>
            <p className="services-page__block-subtitle">
              Pricing is by scope. These are the structures we usually work in.
            </p>
          </div>

          <div className="services-page__engage-grid">
            {engagements.map((e, i) => (
              <div className="services-page__engage-card" key={i}>
                <span className="services-page__engage-best">{e.best}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <ul>
                  {e.points.map((p, idx) => (
                    <li key={idx}>
                      <CheckCircle size={13} />
                      {p}
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
              The same stack behind our products and our custom work — chosen
              for reliability and long-term maintainability, not trend.
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