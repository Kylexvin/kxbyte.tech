// src/components/products/kxtill/HowItWorks.jsx
import { Clock } from "lucide-react";
import "@/styles/products/kxtill/HowItWorks.css";

export default function HowItWorks({ product }) {
  const { howItWorks, trial } = product;
  if (!howItWorks) return null;

  return (
    <section className="kt-how" id="how-it-works">
      <div className="kt-how__container">
        <header className="kt-how__header">
          <span className="kt-how__label">How it works</span>
          <h2 className="kt-how__title">{howItWorks.heading}</h2>
          <div className="kt-how__line" />
          <p className="kt-how__subtitle">{howItWorks.subtitle}</p>
        </header>

        <ol className="kt-how__steps">
          {howItWorks.steps.map((s, i) => (
            <li key={s.step} className="kt-step">
              <div className="kt-step__head">
                <span className="kt-step__num">{s.step}</span>
                {s.time && (
                  <span className="kt-step__time">
                    <Clock size={11} />
                    {s.time}
                  </span>
                )}
              </div>
              <h3 className="kt-step__title">{s.title}</h3>
              <p className="kt-step__body">{s.body}</p>
              {i < howItWorks.steps.length - 1 && (
                <span className="kt-step__connector" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        {howItWorks.closing && (
          <div className="kt-how__closing">
            <h3 className="kt-how__closing-title">{howItWorks.closing.title}</h3>
            <p className="kt-how__closing-body">{howItWorks.closing.body}</p>
          </div>
        )}

        {trial && (
          <div className="kt-how__trial">
            <div className="kt-how__trial-text">
              <span className="kt-how__trial-label">{trial.label}</span>
              <p className="kt-how__trial-body">{trial.body}</p>
            </div>
            {product.hero?.ctaPrimary?.url && (
              <a
                href={product.hero.ctaPrimary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="kt-how__trial-cta"
              >
                {product.hero.ctaPrimary.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}