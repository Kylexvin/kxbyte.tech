"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { products } from '@/data/products';
import '../styles/Products.css';

const statusLabel = (s) =>
  s === 'live' ? 'Live' : s === 'beta' ? 'Beta' : 'In development';

function NotifyRow() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setState('sending');
    try {
      const res = await fetch(
        'https://auth.kxbyte.co.ke/api/v1/public/subscribe',
        // 'http://localhost:5000/api/v1/public/subscribe',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            newsletter: true,
            waitlists: ['kxwork', 'kxcrm', 'kxinvoice', 'kxpay'],
            source: 'kxbyte.co.ke',
          }),
        }
      );
      if (!res.ok) throw new Error();
      setState('done');
    } catch {
      setState('error');
    }
  }

  return (
    <div className="notify">
      <div className="notify__text">
        <h3 className="notify__title">One business. Connected.</h3>
        <p className="notify__desc">
          <strong>KXBYTE Suite</strong> connects your products, people,
          branches, permissions, and business data in one place.{' '}
          <a
            href="https://suite.kxbyte.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="notify__link"
          >
            Use KXBYTE Suite <ArrowUpRight size={13} />
          </a>
        </p>
      </div>

      <div className="notify__action">
        {state === 'done' ? (
          <div className="notify__done">
            <span className="notify__done-icon">
              <Check size={16} strokeWidth={3} />
            </span>
            <div className="notify__done-text">
              <span className="notify__done-title">
                You&rsquo;re on the list.
              </span>
              <span className="notify__done-sub">
                We&rsquo;ll email you when products launch.
              </span>
            </div>
          </div>
        ) : (
          <form className="notify__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="notify__input"
              placeholder="Email for launch updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={state === 'sending'}
              aria-label="Email for launch updates"
            />
            <button
              type="submit"
              className="notify__btn"
              disabled={state === 'sending'}
            >
              {state === 'sending' ? 'Saving…' : 'Get notified'}
            </button>
          </form>
        )}
        {state === 'error' && (
          <span className="notify__error">
            Couldn&rsquo;t save. Try again.
          </span>
        )}
      </div>
    </div>
  );
}

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="products__container">
        <header className="products__header">
          <span className="products__label">Products</span>
          <h2 className="products__title">
            Software for the work that <span>keeps business moving.</span>
          </h2>
          <div className="products__line" />
          <p className="products__subtitle">
            Each product handles a specific area of your business. KXBYTE
            Suite brings them together so your people, data, and operations
            can work as one.
          </p>
        </header>

        <div className="products__grid">
          {products.map((p) => {
            const isLive = p.status === 'live';
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
                    <h3 className="card__name">{p.name}</h3>
                  </div>
                  <span className={`card__status card__status--${p.status}`}>
                    {statusLabel(p.status)}
                  </span>
                </div>

                <h4 className="card__heading">{p.tagline}</h4>
                <p className="card__desc">{p.description}</p>

                {isLive && (
                  <div className="card__actions">
                    <Link href={`/${p.slug}`} className="card__cta">
                      Learn more <ArrowRight size={13} />
                    </Link>
                    {p.url && (
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