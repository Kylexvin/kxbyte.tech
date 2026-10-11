
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ShoppingBasket,
  Pill,
} from "lucide-react";
import { products } from "@/data/products";
import "../styles/Products.css";

const statusLabel = (status) => {
  if (status === "live") return "Live";
  if (status === "beta") return "Beta";
  return "In development";
};

const getFeatureLabel = (feature) => {
  if (typeof feature === "string") {
    return feature;
  }

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

function NotifyRow() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !email.includes("@")) return;

    setState("sending");

    try {
      const res = await fetch(
        "https://auth.kxbyte.co.ke/api/v1/public/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            newsletter: true,
            waitlists: ["kxwork", "kxcrm", "kxinvoice", "kxpay"],
            source: "kxbyte.co.ke",
          }),
        }
      );

      if (!res.ok) throw new Error("Subscription failed");

      setState("done");
    } catch {
      setState("error");
    }
  }

  return (
    <aside className="notify">
      <div className="notify__text">
        <span className="notify__eyebrow">The bigger picture</span>

        <h3 className="notify__title">
          One business. Connected.
        </h3>

        <p className="notify__desc">
          <strong>KXBYTE Suite</strong> connects your products,
          people, branches, permissions, and business data in one place.
        </p>

        <a
          href="https://suite.kxbyte.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="notify__link"
        >
          Explore KXBYTE Suite
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="notify__action">
        {state === "done" ? (
          <div className="notify__done" role="status">
            <span className="notify__done-icon">
              <Check size={17} strokeWidth={2.5} />
            </span>

            <div className="notify__done-text">
              <span className="notify__done-title">
                You're on the list.
              </span>
              <span className="notify__done-sub">
                We'll email you when new products launch.
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="notify__form-heading">
              <span className="notify__form-title">
                What's coming next
              </span>
              <span className="notify__form-subtitle">
                Get updates on upcoming KXBYTE products.
              </span>
            </div>

            <form
              className="notify__form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                className="notify__input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={state === "sending"}
                aria-label="Email for product updates"
              />

              <button
                type="submit"
                className="notify__btn"
                disabled={state === "sending"}
              >
                {state === "sending" ? "Saving..." : "Get updates"}
                {state !== "sending" && (
                  <ArrowRight size={15} />
                )}
              </button>
            </form>

            {state === "error" && (
              <span className="notify__error" role="alert">
                Couldn't save your email. Please try again.
              </span>
            )}
          </>
        )}
      </div>
    </aside>
  );
}

function KxTillActions() {
  return (
    <div className="card__actions card__actions--kxtill">
      <Link
        href="/kxtill"
        className="card__cta card__cta--primary"
      >
        Learn more
        <ArrowRight size={15} />
      </Link>

      <a
        href="https://kxbyte.co.ke/products/kxtill"
        className="card__cta card__cta--secondary"
      >
        <ShoppingBasket size={15} />
        Retail POS
        <ArrowUpRight size={14} />
      </a>

      <a
        href="https://pharmacy.kxbyte.co.ke"
        target="_blank"
        rel="noopener noreferrer"
        className="card__cta card__cta--secondary"
      >
        <Pill size={15} />
        Pharmacy POS
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="products__container">
        <header className="products__header">
          <div className="products__eyebrow">
            <span className="products__eyebrow-mark" />
            <span>Built by KXBYTE</span>
          </div>

          <h2 className="products__title">
            Software for the work that{" "}
            <span>keeps business moving.</span>
          </h2>

          <p className="products__subtitle">
            Products built for the different parts of running
            a business. Use what you need, with KXBYTE Suite
            connecting your operations.
          </p>
        </header>

        <div className="products__grid">
          {products.map((p) => {
            const isLive = p.status === "live";
            const isKxTill = p.slug === "kxtill";

            return (
              <article
                key={p.slug}
                className={`card${isKxTill ? " card--kxtill" : ""}`}
              >
                <div className="card__top">
                  <div className="card__identity">
                    {p.logo && (
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        className="card__logo"
                        width={32}
                        height={32}
                        loading="lazy"
                      />
                    )}

                    <h3 className="card__name">{p.name}</h3>
                  </div>

                  <span
                    className={`card__status card__status--${p.status}`}
                  >
                    <span className="card__status-dot" />
                    {statusLabel(p.status)}
                  </span>
                </div>

                <h4 className="card__heading">
                  {isKxTill
                    ? "One POS platform. Two specialized instances."
                    : p.tagline}
                </h4>

                <p className="card__desc">
                  {isKxTill
                    ? "From everyday retail sales to pharmacy inventory, KxTill provides specialized workflows for different businesses on a shared POS platform."
                    : p.description}
                </p>

                {isKxTill && (
                  <div className="card__instances">
                    <div className="card__instance">
                      <span className="card__instance-icon">
                        <ShoppingBasket size={17} />
                      </span>

                      <div className="card__instance-copy">
                        <span className="card__instance-name">
                          Retail
                        </span>
                        <span className="card__instance-desc">
                          Sales and stock management
                        </span>
                      </div>

                      <span className="card__instance-status">
                        Live
                      </span>
                    </div>

                    <div className="card__instance">
                      <span className="card__instance-icon card__instance-icon--pharmacy">
                        <Pill size={17} />
                      </span>

                      <div className="card__instance-copy">
                        <span className="card__instance-name">
                          Pharmacy
                        </span>
                        <span className="card__instance-desc">
                          Batches and expiry tracking
                        </span>
                      </div>

                      <span className="card__instance-status">
                        Live
                      </span>
                    </div>
                  </div>
                )}

                {!isKxTill && p.features?.length > 0 && (
                  <ul className="card__features">
                    {p.features.slice(0, 3).map((feature, index) => (
                      <li key={`${p.slug}-feature-${index}`}>
                        <Check size={14} />
                        <span>{getFeatureLabel(feature)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {isLive &&
                  (isKxTill ? (
                    <KxTillActions />
                  ) : (
                    <div className="card__actions">
                      <Link
                        href={`/${p.slug}`}
                        className="card__cta card__cta--primary"
                      >
                        Learn more
                        <ArrowRight size={15} />
                      </Link>

                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card__cta card__cta--secondary"
                        >
                          Open {p.name}
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  ))}

                {!isLive && (
                  <div className="card__coming">
                    <span className="card__coming-mark" />
                    Part of the connected KXBYTE ecosystem
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <NotifyRow />
      </div>
    </section>
  );
};

export default Products;
