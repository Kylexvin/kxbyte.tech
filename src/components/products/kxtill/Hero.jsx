// src/components/products/kxtill/Hero.jsx
import Link from "next/link";
import { ArrowUpRight, ArrowDown, ArrowRight } from "lucide-react";
import "@/styles/products/kxtill/Hero.css";

export default function Hero({ product }) {
  const { hero, screenshots, logo, name, status } = product;

  return (
    <section className="kt-hero">
      {/* ══════════════════════════════════════════════════════
          DESKTOP HERO
          Two columns: content left, screenshot right.
          ══════════════════════════════════════════════════════ */}
      <div className="kt-hero__desktop">
        <div className="kt-hero__container">
          <div className="kt-hero__grid">
            <div className="kt-hero__content">
              <HeroIdentity logo={logo} hero={hero} status={status} />

              <h1 className="kt-hero__headline">{hero.headline}</h1>
              <p className="kt-hero__description">{hero.description}</p>

              <HeroActions hero={hero} />

              <div className="kt-hero__links">
                <Link href="/kxtill/pricing" className="kt-hero__link">
                  See pricing
                  <ArrowRight size={13} />
                </Link>
                <Link href="/kxtill/faq" className="kt-hero__link">
                  FAQ
                  <ArrowRight size={13} />
                </Link>
              </div>

              <HeroProof items={hero.proofStrip} />
            </div>

            <div className="kt-hero__media">
              <div className="kt-hero__frame">
                <img
                  src={screenshots.hero.src}
                  alt={screenshots.hero.alt}
                  className="kt-hero__shot"
                  width={1200}
                  height={900}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          MOBILE HERO
          Stacked: text block, then a screenshot card with
          the CTAs rendered ON the card's bottom edge.
          ══════════════════════════════════════════════════════ */}
      <div className="kt-hero__mobile">
        <div className="kt-hero__mobile-content">
          <h1 className="kt-hero__mobile-headline">{hero.headline}</h1>
          <p className="kt-hero__mobile-description">{hero.description}</p>
        </div>

        <div className="kt-hero__mobile-media">
          <div className="kt-hero__mobile-frame">
            <img
              src={screenshots.hero.src}
              alt={screenshots.hero.alt}
              className="kt-hero__mobile-shot"
              width={1200}
              height={900}
            />

            <div className="kt-hero__mobile-fade" aria-hidden="true" />

            <div className="kt-hero__mobile-actions">
              <a
                href={hero.ctaPrimary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="kt-hero__mobile-btn kt-hero__mobile-btn--primary"
              >
                {hero.ctaPrimary.label}
                <ArrowUpRight size={14} />
              </a>
              <a
                href={`#${hero.ctaSecondary.anchor}`}
                className="kt-hero__mobile-btn kt-hero__mobile-btn--ghost"
              >
                {hero.ctaSecondary.label}
                <ArrowDown size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Small subcomponents (keeps main component readable) ──── */

function HeroIdentity({ logo, hero, status }) {
  return (
    <div className="kt-hero__identity">
      {/* {logo && (
        <img
          src={logo}
          alt=""
          className="kt-hero__logo"
          width={32}
          height={32}
        />
      )} */}
      {/* <span className="kt-hero__eyebrow">{hero.eyebrow}</span>
      <span className="kt-hero__status kt-hero__status--live">Live</span> */}
    </div>
  );
}

function HeroActions({ hero }) {
  return (
    <div className="kt-hero__actions">
      {hero.ctaPrimary?.url && (
        <a
          href={hero.ctaPrimary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="kt-hero__btn kt-hero__btn--primary"
        >
          {hero.ctaPrimary.label}
          <ArrowUpRight size={15} />
        </a>
      )}
      {hero.ctaSecondary?.anchor && (
        <a
          href={`#${hero.ctaSecondary.anchor}`}
          className="kt-hero__btn kt-hero__btn--ghost"
        >
          {hero.ctaSecondary.label}
          <ArrowDown size={15} />
        </a>
      )}
    </div>
  );
}

function HeroProof({ items = [] }) {
  if (items.length === 0) return null;
  return (
    <ul className="kt-hero__proof">
      {items.map((item, i) => (
        <li key={item}>
          {item}
          {i < items.length - 1 && (
            <span className="kt-hero__proof-sep" aria-hidden="true">
              ·
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}