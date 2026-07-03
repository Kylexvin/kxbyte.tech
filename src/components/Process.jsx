// src/components/Process.jsx
import React, { useState } from 'react';
import '../styles/Process.css';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We understand your goals, challenges, and requirements.'
  },
  {
    number: '02',
    title: 'Planning',
    desc: 'We map out the solution architecture and project milestones.'
  },
  {
    number: '03',
    title: 'Design',
    desc: 'We create intuitive interfaces that users love.'
  },
  {
    number: '04',
    title: 'Development',
    desc: 'We build robust, scalable solutions with clean code.'
  },
  {
    number: '05',
    title: 'Testing',
    desc: 'We ensure quality through rigorous testing and QA.'
  },
  {
    number: '06',
    title: 'Launch',
    desc: 'We deploy and hand over your fully functional product.'
  },
  {
    number: '07',
    title: 'Support',
    desc: 'We provide ongoing maintenance and continuous improvement.'
  }
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            A structured approach to delivering exceptional digital products.
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
                    <p>
                      Detailed breakdown of the {step.title.toLowerCase()} phase, including key
                      activities and deliverables.
                    </p>
                    <button
                      className="process-card__btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToContact();
                      }}
                    >
                      Start Your Project →
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="process__cta">
          <div>
            <h3>Ready to start your project?</h3>
            <p>Let's bring your vision to life.</p>
          </div>
          <button className="process__cta-btn" onClick={scrollToContact}>
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;