// src/app/products/page.jsx
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Minus,
  ShoppingBasket,
  Pill,
  WifiOff,
  RefreshCw,
  ShieldCheck,
  Building2,
  Smartphone,
  BarChart3,
} from "lucide-react";
import { products } from "@/data/products";
import productsHero from "@/assets/images/hero.jpg";
import "@/styles/kxProducts.css";

const SITE_URL = "https://kxbyte.co.ke";

/* Edit these if your routes change */
const KXTILL_PAGE = "/kxtill";
const RETAIL_URL = "/products/kxtill";
const PHARMACY_URL = "https://pharmacy.kxbyte.co.ke";
const SUITE_URL = "https://suite.kxbyte.co.ke";

export const metadata = {
  title: "Products",
  description:
    "KXBYTE builds connected software for modern businesses. KxTill for retail and pharmacy, plus KxWork, KxCRM, KxInvoice, and KxPay — connected through KXBYTE Suite.",
  alternates: { canonical: "/products" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/products`,
    title: "Products | KXBYTE",
    description:
      "Connected software for modern businesses. Sales, inventory, invoicing, customers, workforce — in one platform.",
    siteName: "KXBYTE",
    images: [
      {
        url: "https://res.cloudinary.com/dlyfxympd/image/upload/v1782850061/WhatsApp_Image_2026-06-30_at_23.05.26_ci33jn.jpg",
        width: 1200,
        height: 630,
        alt: "KXBYTE Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | KXBYTE",
    description:
      "Connected software for modern businesses. Sales, inventory, invoicing, customers, workforce — in one platform.",
  },
};

const statusLabel = (s) =>
  s === "live" ? "Live" : s === "beta" ? "Beta" : "In development";

const getFeatureLabel = (feature) => {
  if (typeof feature === "string") return feature;
  if (feature && typeof feature === "object") {
    const label =
      feature.label ??
      feature.name ??
      feature.title ??
      feature.description ??
      feature.text;
    if (typeof label === "string" || typeof label === "number") {
      return String(label);
    }
  }
  return "Feature";
};

/* ── KxTill content ─────────────────────────────────────── */

const instances = [
  {
    key: "retail",
    Icon: ShoppingBasket,
    name: "KxTill Retail",
    audience: "Shops, supermarkets, and general retail",
    desc: "Fast checkout and accurate stock for businesses that sell across the counter all day.",
    features: [
      "Quick checkout with printed or digital receipts",
      "Item-level stock tracking and low-stock alerts",
      "Cashier shifts and end-of-day till reports",
      "M-Pesa and cash payments in one flow",
    ],
    href: RETAIL_URL,
    external: false,
    cta: "Open Retail POS",
  },
  {
    key: "pharmacy",
    Icon: Pill,
    name: "KxTill Pharmacy",
    audience: "Pharmacies and chemists",
    desc: "The same reliable till, with the inventory discipline a pharmacy needs to stay safe and compliant.",
    features: [
      "Batch-level stock with supplier details",
      "Expiry tracking with near-expiry alerts",
      "Dispensing and sales records per item",
      "M-Pesa and cash payments in one flow",
    ],
    href: PHARMACY_URL,
    external: true,
    cta: "Open Pharmacy POS",
  },
];

const sharedPlatform = [
  {
    Icon: WifiOff,
    title: "Offline-first",
    desc: "Keep selling when the internet drops. Every sale is saved on the device first.",
  },
  {
    Icon: RefreshCw,
    title: "Automatic sync",
    desc: "When the connection returns, data syncs to the server cleanly in the background.",
  },
  {
    Icon: Building2,
    title: "Multi-branch",
    desc: "Run one outlet or several, with each branch's stock and sales kept separate.",
  },
  {
    Icon: ShieldCheck,
    title: "Roles and access",
    desc: "Owners, managers, and cashiers each see and do only what they should.",
  },
  {
    Icon: Smartphone,
    title: "Mobile money",
    desc: "M-Pesa payments sit beside cash at the till, not in a separate process.",
  },
  {
    Icon: BarChart3,
    title: "Reports that matter",
    desc: "Daily sales, stock movement, and cashier summaries without exporting to spreadsheets.",
  },
];

/* true = included, false = not applicable, string = custom text */
const compareRows = [
  { label: "Built for", retail: "Shops and supermarkets", pharmacy: "Pharmacies and chemists" },
  { label: "Sales and checkout", retail: true, pharmacy: true },
  { label: "Stock tracking", retail: "Item level", pharmacy: "Batch level" },
  { label: "Expiry tracking", retail: false, pharmacy: "Built in, with alerts" },
  { label: "Offline-first with sync", retail: true, pharmacy: true },
  { label: "M-Pesa payments", retail: true, pharmacy: true },
  { label: "Roles and branches", retail: true, pharmacy: true },
  { label: "Status", retail: "Live", pharmacy: "Live" },
];

const renderCell = (v) => {
  if (v === true) return <Check size={16} className="kx-compare__yes" aria-label="Included" />;
  if (v === false) return <Minus size={16} className="kx-compare__no" aria-label="Not applicable" />;
  return <span>{v}</span>;
};

export default function ProductsPage() {
  const others = products.filter((p) => p.slug !== "kxtill");

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KXBYTE Products",
    url: `${SITE_URL}/products`,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/${p.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/products`,
      },
    ],
  };

  return (
    <main className="kx-products" id="products">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ══ HERO ═══════════════════════════════════════════ */}
      <section className="kx-products__hero">
        <div className="kx-products__container kx-products__hero-grid">
          <div className="kx-products__hero-content">
            <span className="kx-products__label">Products</span>
            <h1 className="kx-products__title">
              Software for the work that <span>keeps business moving.</span>
            </h1>
            <div className="kx-products__line" />
            <p className="kx-products__subtitle">
              Each product handles a specific area of your business. KXBYTE
              Suite brings them together so your people, data, and operations
              can work as one.
            </p>
            <div className="kx-products__hero-buttons">
              <Link href={KXTILL_PAGE} className="kx-btn kx-btn--primary">
                Explore KxTill
                <ArrowRight size={16} />
              </Link>
              <a href="#ecosystem" className="kx-btn kx-btn--secondary">
                See all products
              </a>
            </div>
          </div>

          <div className="kx-products__hero-visual">
            <div className="kx-products__hero-frame">
              <img
                src={productsHero.src}
                alt="KXBYTE products"
                className="kx-products__hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ KXTILL FEATURE ═════════════════════════════════ */}
      <section className="kx-products__section" id="kxtill">
        <div className="kx-products__container">
          <div className="kx-products__section-header">
            <span className="kx-products__label">Flagship product</span>
            <h2 className="kx-products__heading">
              KxTill: one platform, <span>two instances.</span>
            </h2>
            <div className="kx-products__line" />
            <p className="kx-products__section-sub">
              A single POS platform, tuned for two kinds of business. Same
              engine underneath, specialized workflows on top. Both are live
              and in daily use.
            </p>
          </div>

          <div className="kx-instances">
            {instances.map((inst) => (
              <article className="kx-instance" key={inst.key}>
                <div className="kx-instance__top">
                  <span
                    className={`kx-instance__icon kx-instance__icon--${inst.key}`}
                  >
                    <inst.Icon size={24} />
                  </span>
                  <span className="kx-card__status kx-card__status--live">
                    Live
                  </span>
                </div>

                <h3 className="kx-instance__name">{inst.name}</h3>
                <span className="kx-instance__audience">{inst.audience}</span>
                <p className="kx-instance__desc">{inst.desc}</p>

                <ul className="kx-instance__features">
                  {inst.features.map((f, i) => (
                    <li key={i}>
                      <Check size={14} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="kx-instance__actions">
                  {inst.external ? (
                    <a
                      href={inst.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kx-btn kx-btn--primary kx-btn--block"
                    >
                      {inst.cta}
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <Link
                      href={inst.href}
                      className="kx-btn kx-btn--primary kx-btn--block"
                    >
                      {inst.cta}
                      <ArrowUpRight size={15} />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="kx-products__center">
            <Link href={KXTILL_PAGE} className="kx-btn kx-btn--secondary">
              Learn more about KxTill
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SHARED PLATFORM ════════════════════════════════ */}
      <section className="kx-products__section kx-products__section--alt">
        <div className="kx-products__container">
          <div className="kx-products__section-header">
            <span className="kx-products__label">Under the hood</span>
            <h2 className="kx-products__heading">
              What both instances <span>share.</span>
            </h2>
            <div className="kx-products__line" />
            <p className="kx-products__section-sub">
              Retail and Pharmacy run on the same foundation, so every
              improvement to the platform reaches both.
            </p>
          </div>

          <div className="kx-shared">
            {sharedPlatform.map((s, i) => (
              <div className="kx-shared__item" key={i}>
                <span className="kx-icon-tile">
                  <s.Icon size={21} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPARE ════════════════════════════════════════ */}
      <section className="kx-products__section">
        <div className="kx-products__container">
          <div className="kx-products__section-header">
            <span className="kx-products__label">Compare</span>
            <h2 className="kx-products__heading">
              Retail or <span>Pharmacy?</span>
            </h2>
            <div className="kx-products__line" />
            <p className="kx-products__section-sub">
              Pick the instance that matches how your stock actually works.
            </p>
          </div>

          <div className="kx-compare">
            <table>
              <thead>
                <tr>
                  <th scope="col">Capability</th>
                  <th scope="col">
                    <ShoppingBasket size={15} /> Retail
                  </th>
                  <th scope="col">
                    <Pill size={15} /> Pharmacy
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={i}>
                    <th scope="row">{r.label}</th>
                    <td>{renderCell(r.retail)}</td>
                    <td>{renderCell(r.pharmacy)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ ECOSYSTEM ══════════════════════════════════════ */}
      {others.length > 0 && (
        <section
          className="kx-products__section kx-products__section--alt"
          id="ecosystem"
        >
          <div className="kx-products__container">
            <div className="kx-products__section-header">
              <span className="kx-products__label">The wider ecosystem</span>
              <h2 className="kx-products__heading">
                More products, <span>one business.</span>
              </h2>
              <div className="kx-products__line" />
              <p className="kx-products__section-sub">
                Beyond the till: tools for the rest of how a business runs,
                each built to connect through KXBYTE Suite.
              </p>
            </div>

            <div className="kx-products__grid">
              {others.map((p) => {
                const isLive = p.status === "live";
                return (
                  <article key={p.slug} className="kx-card">
                    <div className="kx-card__top">
                      <div className="kx-card__identity">
                        {p.logo && (
                          <img
                            src={p.logo}
                            alt=""
                            className="kx-card__logo"
                            width={28}
                            height={28}
                          />
                        )}
                        <h3 className="kx-card__name">{p.name}</h3>
                      </div>
                      <span
                        className={`kx-card__status kx-card__status--${p.status}`}
                      >
                        {statusLabel(p.status)}
                      </span>
                    </div>

                    <h4 className="kx-card__heading">{p.tagline}</h4>
                    <p className="kx-card__desc">{p.description}</p>

                    {p.features?.length > 0 && (
                      <ul className="kx-card__features">
                        {p.features.slice(0, 3).map((f, i) => (
                          <li key={`${p.slug}-f-${i}`}>
                            <Check size={14} />
                            <span>{getFeatureLabel(f)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="kx-card__actions">
                      <Link href={`/${p.slug}`} className="kx-card__cta">
                        Learn more <ArrowRight size={13} />
                      </Link>
                      {isLive && p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="kx-card__cta kx-card__cta--quiet"
                        >
                          Open {p.name} <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══ SUITE ══════════════════════════════════════════ */}
      <section className="kx-products__section">
        <div className="kx-products__container">
          <div className="kx-suite">
            <div className="kx-suite__text">
              <span className="kx-products__label">The bigger picture</span>
              <h2 className="kx-products__heading">
                KXBYTE Suite. <span>One business, connected.</span>
              </h2>
              <div className="kx-products__line" />
              <p>
                Suite connects your products, people, branches, permissions,
                and business data in one place, so a sale at the till, an
                invoice, and a customer record all tell the same story.
              </p>
            </div>
            <div className="kx-suite__action">
              <a
                href={SUITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="kx-btn kx-btn--primary kx-btn--block"
              >
                Explore KXBYTE Suite
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CUSTOM WORK NOTE ═══════════════════════════════ */}
      <section className="kx-products__section kx-products__section--tail">
        <div className="kx-products__container">
          <div className="kx-products__note">
            <div className="kx-products__note-text">
              <h2 className="kx-products__note-title">
                Need something our products don't cover?
              </h2>
              <p className="kx-products__note-body">
                KXBYTE also takes on custom software when a business needs
                something specific — a workflow, an integration, an internal
                system. Same team, same method.
              </p>
            </div>
            <Link href="/services" className="kx-products__note-cta">
              About custom work
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}