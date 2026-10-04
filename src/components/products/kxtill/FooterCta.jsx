// src/components/products/kxtill/FooterCta.jsx
import { ArrowUpRight } from "lucide-react";
import "@/styles/products/kxtill/FooterCta.css";

export default function FooterCta({ product }) {
  const { hero, trial } = product;

  return (
    <section className="kt-cta">
      <div className="kt-cta__container">
        <div className="kt-cta__inner">
          <div className="kt-cta__text">
            <h2 className="kt-cta__title">Ready to see it running?</h2>
            <p className="kt-cta__body">
              Start using KxTill — the whole operation in one place, from the
              first sale to the closing shift.
            </p>
          </div>

          <div className="kt-cta__action">
            {hero.ctaPrimary?.url && (
              <a
                href={hero.ctaPrimary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="kt-cta__btn"
              >
                {hero.ctaPrimary.label}
                <ArrowUpRight size={15} />
              </a>
            )}
            {trial && (
              <span className="kt-cta__trial">
                {trial.label} · No card required
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}