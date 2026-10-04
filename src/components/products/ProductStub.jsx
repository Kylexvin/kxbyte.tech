// src/components/products/ProductStub.jsx
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import '@/styles/products/ProductStub.css';

export default function ProductStub({ product }) {
  return (
    <main className="stub">
      <div className="stub__container">
        <Link href="/products" className="stub__back">
          <ArrowLeft size={14} /> All products
        </Link>

        <div className="stub__grid">
          <div className="stub__content">
            <div className="stub__identity">
              {product.logo && (
                <img
                  src={product.logo}
                  alt=""
                  className="stub__logo"
                  width={32}
                  height={32}
                />
              )}
              <span className="stub__status">In development</span>
            </div>

            <h1 className="stub__title">{product.name}</h1>
            <div className="stub__line" />
            <p className="stub__tagline">{product.tagline}</p>
            <p className="stub__desc">{product.description}</p>

            <div className="stub__actions">
              <a
                href="https://kxtill.kxbyte.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="stub__btn stub__btn--primary"
              >
                Try KxTill today
                <ArrowUpRight size={15} />
              </a>
              <Link href="/products" className="stub__btn stub__btn--ghost">
                See all products
              </Link>
            </div>
          </div>

          <div className="stub__media">
            <div className="stub__frame">
              <div className="stub__frame-inner">
                <span className="stub__frame-name">{product.name}</span>
                <span className="stub__frame-hint">Coming soon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stub__note">
          <h2 className="stub__note-title">
            Want early access to {product.name}?
          </h2>
          <p className="stub__note-body">
            {product.name} is in development. Sign up to the waitlist and
            we'll let you know the moment it launches.
          </p>
          <Link href="/#products" className="stub__note-cta">
            Join the waitlist →
          </Link>
        </div>
      </div>
    </main>
  );
}