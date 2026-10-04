"use client";
// src/components/Process.jsx
import React, { useState } from 'react';
import '../styles/Process.css';

const steps = [
  {
    number: '01',
    title: 'Understand',
    desc: 'We start with the problem, not the technology.',
    detail: 'Every product and every system begins with what\'s actually happening in a business — what\'s broken, what\'s missing, what\'s being held together by memory and spreadsheets.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Software shaped around how the work actually runs.',
    detail: 'We design around the operations of the business — not a template the business has to bend into. The system follows the work, not the other way around.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Engineering we own, test, and maintain.',
    detail: 'The same craft goes into products and custom systems. Real code, running on real infrastructure, held to the same standard.',
  },
  {
    number: '04',
    title: 'Ship',
    desc: 'Running in production — not in slides.',
    detail: 'Products go live on our own infrastructure. Custom work ships into the environments where it will actually be used.',
  },
  {
    number: '05',
    title: 'Operate',
    desc: 'Monitored, maintained, kept reliable.',
    detail: 'We run what we build. Uptime, performance, and data integrity are our problem to solve, not a line on someone else\'s invoice.',
  },
  {
    number: '06',
    title: 'Improve',
    desc: 'Iterate from real usage, not from briefs.',
    detail: 'Products evolve based on how they\'re actually used. Custom systems stay in step with how the business grows.',
  },
  {
    number: '07',
    title: 'Support',
    desc: 'Fix, answer, adjust — long after launch.',
    detail: 'Software is never done. When something needs fixing, changing, or extending, we do it. That\'s the long-term commitment of a product company.',
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="process" id="process">
      <div className="process__container">
        {/* Header */}
        <div className="process__header">
          <span className="process__label">How We Work</span>
          <h2 className="process__title">
            Our <span className="process__title-accent">Process</span>
          </h2>
          <p className="process__subtitle">
            The same method whether it's a product or a custom system.
          </p>
        </div>

        {/* Road / Steps */}
        <div className="process__road">
          <svg className="process__path" viewBox="0 0 100 1400" preserveAspectRatio="none">
            <path className="process__path-line" d="M50,20 L50,1380" />
          </svg>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`process-card ${activeIndex === index ? 'active' : ''} ${
                index % 2 === 0 ? 'left' : 'right'
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="process-card__marker">{step.number}</div>
              <div className="process-card__content">
                <h3 className="process-card__title">{step.title}</h3>
                <p className="process-card__desc">{step.desc}</p>

                {activeIndex === index && (
                  <div className="process-card__details">
                    <p>{step.detail}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;