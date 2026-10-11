// src/components/products/kxtill/Hero.jsx
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ShoppingBasket,
  Pill,
} from "lucide-react";
import "@/styles/products/kxtill/Hero.css";

const PHARMACY_URL = "https://pharmacy.kxbyte.co.ke";

export default function Hero({ product }) {
  const { hero, screenshots, logo, status } = product;

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

              <HeroInstances retailUrl={hero.ctaPrimary?.url} />

              <HeroActions />
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
          <HeroInstances retailUrl={hero.ctaPrimary?.url} />
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
              <Link
                href="/kxtill/pricing"
                className="kt-hero__mobile-btn kt-hero__mobile-btn--primary"
              >
                See pricing
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/kxtill/faq"
                className="kt-hero__mobile-btn kt-hero__mobile-btn--ghost"
              >
                FAQ
                <ArrowRight size={14} />
              </Link>
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

function HeroInstances({ retailUrl }) {
  const items = [
    {
      key: "retail",
      Icon: ShoppingBasket,
      name: "KxTill Retail",
      desc: "Shops, minimarts, general retail",
      url: retailUrl,
    },
    {
      key: "pharmacy",
      Icon: Pill,
      name: "KxTill Pharmacy",
      desc: "Batches, expiry, FEFO dispensing",
      url: PHARMACY_URL,
    },
  ];

  return (
    <div className="kt-hero__instances">
      {items.map((item) => (
        <a
          key={item.key}
          href={item.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="kt-hero__instance"
        >
          <span
            className={`kt-hero__instance-icon kt-hero__instance-icon--${item.key}`}
          >
            <item.Icon size={18} />
          </span>
          <span className="kt-hero__instance-copy">
            <span className="kt-hero__instance-name">{item.name}</span>
            <span className="kt-hero__instance-desc">{item.desc}</span>
          </span>
          <ArrowUpRight size={15} className="kt-hero__instance-arrow" />
        </a>
      ))}
    </div>
  );
}

function HeroActions() {
  return (
    <div className="kt-hero__actions">
      <Link
        href="/kxtill/pricing"
        className="kt-hero__btn kt-hero__btn--primary"
      >
        See pricing
        <ArrowRight size={15} />
      </Link>
      <Link href="/kxtill/faq" className="kt-hero__btn kt-hero__btn--ghost">
        FAQ
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}