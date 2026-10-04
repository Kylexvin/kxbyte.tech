// src/app/products/page.jsx
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import productsHero from "@/assets/images/hero.jpg";
import "@/styles/kxProducts.css";

const SITE_URL = "https://kxbyte.co.ke";

export const metadata = {
  title: "Products",
  description:
    "KXBYTE builds connected software for modern businesses. KxTill for retail, plus KxWork, KxCRM, KxInvoice, and KxPay — connected through KXBYTE Suite.",
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

export default function ProductsPage() {
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
    <main className="products" id="products">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="products__container">
        {/* ── Header with image on the right (large screens) ──── */}
        <header className="products__header">
          <div className="products__header-content">
            <span className="products__label">Products</span>
            <h1 className="products__title">
              Software for the work that <span>keeps business moving.</span>
            </h1>
            <div className="products__line" />
            <p className="products__subtitle">
              Each product handles a specific area of your business. KXBYTE
              Suite brings them together so your people, data, and operations
              can work as one.
            </p>
          </div>

          <div className="products__header-visual">
            <div className="products__header-frame">
              <img
                src={productsHero.src}
                alt="KXBYTE products"
                className="products__header-img"
              />
            </div>
          </div>
        </header>

        {/* ── Product grid ────────────────────────────────────── */}
        <div className="products__grid">
          {products.map((p) => {
            const isLive = p.status === "live";
            return (
              <article key={p.slug} className="card">
                <div className="card__top">
                  <div className="card__identity">
                    {p.logo && (
                      <img
                        src={p.logo}
                        alt=""
                        className="card__logo"
                        width={26}
                        height={26}
                      />
                    )}
                    <h2 className="card__name">{p.name}</h2>
                  </div>
                  <span className={`card__status card__status--${p.status}`}>
                    {statusLabel(p.status)}
                  </span>
                </div>

                <h3 className="card__heading">{p.tagline}</h3>
                <p className="card__desc">{p.description}</p>

                <div className="card__actions">
                  <Link href={`/${p.slug}`} className="card__cta">
                    Learn more <ArrowRight size={13} />
                  </Link>
                  {isLive && p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card__cta card__cta--quiet"
                    >
                      Open {p.name} <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Custom work note ────────────────────────────────── */}
        <div className="products__custom-note">
          <div className="products__custom-note-text">
            <h2 className="products__custom-note-title">
              Need something our products don't cover?
            </h2>
            <p className="products__custom-note-body">
              KXBYTE also takes on custom software when a business needs
              something specific — a workflow, an integration, an internal
              system. Same team, same method.
            </p>
          </div>
          <Link href="/services" className="products__custom-note-cta">
            About custom work
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}