"use client";
// src/components/TrustScroll.jsx
import React from 'react';
import '../styles/TrustScroll.css';

const products = [
  { name: 'KxTill', status: 'live' },
  { name: 'KXBYTE Suite', status: 'live' },
  { name: 'KxWork', status: 'soon' },
  { name: 'KxCRM', status: 'soon' },
  { name: 'KxInvoice', status: 'soon' },
  { name: 'KxPay', status: 'soon' },
  { name: 'KxStock', status: 'soon' },
];

const scrollItems = [...products, ...products];

const TrustScroll = () => {
  return (
    <section className="trust-scroll">
      <div className="trust-scroll__track">
        <div className="trust-scroll__content">
          {scrollItems.map((product, idx) => (
            <div key={idx} className="trust-scroll__item">
              <img
                src="/icons/logo.png"
                alt=""
                className="trust-logo"
                width={26}
                height={26}
                loading="lazy"
              />
              <span className="trust-name">{product.name}</span>
              <span
                className={`trust-status trust-status--${product.status}`}
              >
                {product.status === 'live' ? 'Live' : 'Soon'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustScroll;