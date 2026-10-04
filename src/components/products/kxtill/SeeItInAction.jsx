// src/components/products/kxtill/SeeItInAction.jsx
import "@/styles/products/kxtill/SeeItInAction.css";

export default function SeeItInAction({ product }) {
  const gallery = product.screenshots?.gallery || [];
  if (gallery.length === 0) return null;

  return (
    <section className="kt-see" id="see-it">
      <div className="kt-see__container">
        <header className="kt-see__header">
          <span className="kt-see__label">See it in action</span>
          <h2 className="kt-see__title">
            Built for the way retail actually runs.
          </h2>
          <div className="kt-see__line" />
          <p className="kt-see__subtitle">
            From the first sale of the day to closing the shift — KxTill keeps
            the whole operation visible.
          </p>
        </header>

        <div className="kt-see__grid">
          {gallery.map((shot, i) => (
            <figure
              key={shot.src}
              className={`kt-see__item kt-see__item--${i % 2 === 0 ? "left" : "right"}`}
            >
              <div className="kt-see__frame">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="kt-see__shot"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
              </div>
              <figcaption className="kt-see__caption">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}