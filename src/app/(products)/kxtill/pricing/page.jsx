// src/app/(products)/kxtill/pricing/page.jsx
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, Receipt, ShieldCheck } from 'lucide-react';
import { kxtill } from '@/data/kxtill';
import FaqSection from '@/components/products/kxtill/FaqSection';
import '@/styles/products/kxtill/Pricing.css';
import '@/styles/products/kxtill/Faq.css';

const SITE_URL = 'https://kxbyte.co.ke';

export const metadata = {
  title: 'KxTill Pricing — From KES 2,999/month',
  description:
    'KxTill starts at KES 2,999 per month. Every subscription includes the full product — no feature tiers. 14-day free trial, no card required.',
  keywords: [
    'KxTill pricing',
    'KxTill cost',
    'POS pricing Kenya',
    'point of sale price Kenya',
  ],
  alternates: { canonical: '/kxtill/pricing' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/kxtill/pricing`,
    title: 'KxTill Pricing — From KES 2,999/month',
    description:
      'Every subscription includes the full product. 14-day free trial, no card required.',
    siteName: 'KXBYTE',
    images: [
      {
        url: 'https://res.cloudinary.com/dlyfxympd/image/upload/v1782850061/WhatsApp_Image_2026-06-30_at_23.05.26_ci33jn.jpg',
        width: 1200,
        height: 630,
        alt: 'KxTill Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KxTill Pricing — From KES 2,999/month',
    description:
      'Every subscription includes the full product. 14-day free trial, no card required.',
  },
};

export default function KxTillPricingPage() {
  const { pricing } = kxtill;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'KxTill',
    description: pricing.description,
    brand: { '@type': 'Brand', name: 'KXBYTE' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'KES',
      price: '2999',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/kxtill/pricing`,
      description: 'Starting price. Final price depends on business size.',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'KxTill',
        item: `${SITE_URL}/kxtill`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pricing',
        item: `${SITE_URL}/kxtill/pricing`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricing.faqShort.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="kp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="kp-hero">
        <div className="kp-container">
 

          <span className="kp-label">KxTill pricing</span>
          <h1 className="kp-title">{pricing.headline}</h1>
          <div className="kp-line" />
          <p className="kp-sub">{pricing.description}</p>

          <div className="kp-price">
            <div className="kp-price__row">
              <span className="kp-price__currency">KES</span>
              <span className="kp-price__amount">{pricing.floor}</span>
              <span className="kp-price__unit">/ month</span>
            </div>
            <span className="kp-price__prefix">Starting from</span>
          </div>

          <div className="kp-hero__actions">
            <a
              href={pricing.ctaPrimary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="kp-btn kp-btn--primary"
            >
              {pricing.ctaPrimary.label}
              <ArrowUpRight size={15} />
            </a>
            <a
              href={pricing.ctaSecondary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="kp-btn kp-btn--ghost"
            >
              {pricing.ctaSecondary.label}
              <ArrowUpRight size={15} />
            </a>
          </div>

          <p className="kp-hero__note">
            No card required to start. 14-day free trial.
          </p>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="kp-how">
        <div className="kp-container">
          <header className="kp-section-head">
            <span className="kp-section-label">How pricing works</span>
            <h2 className="kp-section-title">
              From signup to your agreed price.
            </h2>
            <div className="kp-line" />
          </header>

          <ol className="kp-steps">
            {pricing.howItWorks.map((s) => (
              <li key={s.step} className="kp-step">
                <span className="kp-step__num">{s.step}</span>
                <h3 className="kp-step__title">{s.title}</h3>
                <p className="kp-step__body">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="kp-trust">
            <div className="kp-trust__item">
              <Receipt size={18} />
              <span>Your agreed amount is on your billing page</span>
            </div>
            <div className="kp-trust__item">
              <ShieldCheck size={18} />
              <span>Every billing change is logged with a full audit trail</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Everything included ───────────────────────────── */}
      <section className="kp-includes">
        <div className="kp-container">
          <header className="kp-section-head">
            <span className="kp-section-label">Everything included</span>
            <h2 className="kp-section-title">
              Every subscription. Every feature.
            </h2>
            <div className="kp-line" />
            <p className="kp-section-sub">
              No feature tiers. No locked capabilities. No upgrades inside
              the app.
            </p>
          </header>

          <ul className="kp-includes__grid">
            {pricing.includes.map((item) => (
              <li key={item} className="kp-include">
                <span className="kp-include__check">
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="kp-faq">
        <div className="kp-container">
          <header className="kp-section-head">
            <span className="kp-section-label">Pricing questions</span>
            <h2 className="kp-section-title">Common questions.</h2>
            <div className="kp-line" />
          </header>

          <FaqSection faqs={pricing.faqShort} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="kp-cta">
        <div className="kp-container kp-cta__inner">
          <div className="kp-cta__text">
            <h2 className="kp-cta__title">
              Start free. Pay only when it's working.
            </h2>
            <p className="kp-cta__body">
              14 days of full access. We'll talk about the price when you're
              ready.
            </p>
          </div>
          <div className="kp-cta__actions">
            <a
              href={pricing.ctaPrimary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="kp-cta__btn kp-cta__btn--primary"
            >
              {pricing.ctaPrimary.label}
              <ArrowUpRight size={15} />
            </a>
            <a
              href={pricing.ctaSecondary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="kp-cta__btn kp-cta__btn--ghost"
            >
              {pricing.ctaSecondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}