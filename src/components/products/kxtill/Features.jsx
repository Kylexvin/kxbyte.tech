// src/components/products/kxtill/Features.jsx
import "@/styles/products/kxtill/Features.css";

export default function Features({ product }) {
  const groups = product.featureGroups || [];

  return (
    <section className="kt-features" id="features">
      <div className="kt-features__container">
        <header className="kt-features__header">
          <span className="kt-features__label">What KxTill gives you</span>
          <h2 className="kt-features__title">
            Everything a retail business runs on.
          </h2>
          <div className="kt-features__line" />
          <p className="kt-features__subtitle">
            From the first sale of the day to the cash count at closing —
            KxTill keeps the whole operation connected.
          </p>
        </header>

        <div className="kt-features__grid">
          {groups.map((group, i) => (
            <article key={group.id} className="kt-feature">
              <span className="kt-feature__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="kt-feature__title">{group.title}</h3>
              <p className="kt-feature__summary">{group.summary}</p>
              <ul className="kt-feature__points">
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}