// src/app/(products)/kxtill/faq/page.jsx
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { kxtill } from '@/data/kxtill';
import FaqSection from '@/components/products/kxtill/FaqSection';
import '@/styles/products/kxtill/Faq.css';

const SITE_URL = 'https://kxbyte.co.ke';

export const metadata = {
  title: 'KxTill FAQ — Answers about sales, stock, branches, payments',
  description:
    'Everything you need to know about KxTill — sales, stock, branches, shifts, M-Pesa, Deni, offline operation, and subscriptions.',
  keywords: [
    'KxTill FAQ',
    'KxTill questions',
    'POS FAQ',
    'offline POS',
    'KxTill pricing',
    'KxTill Deni',
    'KxTill M-Pesa',
  ],
  alternates: { canonical: '/kxtill/faq' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/kxtill/faq`,
    title: 'KxTill FAQ — Answers about sales, stock, branches, payments',
    description:
      'Everything you need to know about KxTill — sales, stock, branches, shifts, M-Pesa, Deni, and offline operation.',
    siteName: 'KXBYTE',
    images: [
      {
        url: 'https://res.cloudinary.com/dlyfxympd/image/upload/v1782850061/WhatsApp_Image_2026-06-30_at_23.05.26_ci33jn.jpg',
        width: 1200,
        height: 630,
        alt: 'KxTill FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KxTill FAQ',
    description:
      'Everything you need to know about KxTill — sales, stock, branches, shifts, M-Pesa, Deni, and offline operation.',
  },
};

export default function KxTillFaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: kxtill.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
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
        name: 'FAQ',
        item: `${SITE_URL}/kxtill/faq`,
      },
    ],
  };

  return (
    <main className="kf">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="kf-hero">
        <div className="kf-container">


          <span className="kf-label">KxTill FAQ</span>
          <h1 className="kf-title">
            Everything you need to know about KxTill.
          </h1>
          <div className="kf-line" />
          <p className="kf-sub">
            From everyday sales to branches, stock, payments, shifts, and
            offline operation. If your question isn&apos;t here,{' '}
            <a
              href="https://wa.me/254768610613?text=Hi%20KXBYTE%2C%20I%20have%20a%20question%20about%20KxTill."
              target="_blank"
              rel="noopener noreferrer"
              className="kf-inline-link"
            >
              talk to us <ArrowUpRight size={12} />
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="kf-body">
        <div className="kf-container">
          <FaqSection faqs={kxtill.faqs} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="kf-cta">
        <div className="kf-container kf-cta__inner">
          <div className="kf-cta__text">
            <h2 className="kf-cta__title">Still have a question?</h2>
            <p className="kf-cta__body">
              We answer on WhatsApp. Usually within a few hours.
            </p>
          </div>
          <div className="kf-cta__actions">
            <a
              href="https://wa.me/254768610613?text=Hi%20KXBYTE%2C%20I%20have%20a%20question%20about%20KxTill."
              target="_blank"
              rel="noopener noreferrer"
              className="kf-cta__btn kf-cta__btn--primary"
            >
              WhatsApp us <ArrowUpRight size={15} />
            </a>
            <a
              href="https://kxtill.kxbyte.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="kf-cta__btn kf-cta__btn--ghost"
            >
              Start using KxTill
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}