// src/components/products/kxtill/SuiteNote.jsx
import { ArrowUpRight } from "lucide-react";
import "@/styles/products/kxtill/SuiteNote.css";

export default function SuiteNote({ product }) {
  return (
    <section className="kt-suite">
      <div className="kt-suite__container">
        <div className="kt-suite__inner">
          <p className="kt-suite__body">{product.suiteNote}</p>
          <a
            href="https://suite.kxbyte.co.ke/"
            className="kt-suite__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="kt-suite__cta-shimmer" aria-hidden="true" />
            <span className="kt-suite__cta-content">
              <img
                src="/icons/logo.png"
                alt=""
                className="kt-suite__cta-logo"
                width={22}
                height={22}
              />
              Explore KXBYTE Suite
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}