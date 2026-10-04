// src/components/products/kxtill/FaqSection.jsx
'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
          >
            <button
              className="faq-item__question"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="faq-item__q">{faq.q}</span>
              <span className="faq-item__icon" aria-hidden="true">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div className="faq-item__answer">
              <p className="faq-item__a">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}