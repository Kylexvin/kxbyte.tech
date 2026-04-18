import React, { useState } from 'react';
import '../styles/Process.css';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We understand your idea, goals, and requirements to define the right solution.',
    icon: '🔍',
    color: '#ff5c1a',
    details: 'We start by learning everything about your business, target audience, and project goals. This includes workshops, stakeholder interviews, and market research to ensure we\'re building the right thing.'
  },
  {
    number: '02',
    title: 'Planning',
    desc: 'We map out the structure, tech stack, and timeline before development begins.',
    icon: '📋',
    color: '#ff784a',
    details: 'We create detailed technical specifications, architecture diagrams, and a realistic timeline. You\'ll know exactly what we\'re building, when, and with what technology.'
  },
  {
    number: '03',
    title: 'Development',
    desc: 'We build your product using clean, scalable code with regular updates.',
    icon: '💻',
    color: '#ff9468',
    details: 'Agile development with weekly updates. You see progress every week, provide feedback, and we iterate. Clean code, proper documentation, and scalable architecture.'
  },
  {
    number: '04',
    title: 'Delivery',
    desc: 'We test, launch, and support your product to ensure everything runs smoothly.',
    icon: '🚀',
    color: '#ffb088',
    details: 'Rigorous testing, smooth deployment, and ongoing support. We don\'t just launch and leave — we stay to ensure everything runs perfectly.'
  },
];

const Process = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleDetails = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="process" id="process">
      <div className="process__watermark">FLOW</div>

      <div className="process-container">
        <div className="process__header">
          <div className="process__top">
            <span className="process__badge">✦ How We Work</span>
            <p className="section__label">Our Process</p>
            <h2 className="section__heading">
              HOW WE <span>WORK</span>
            </h2>
            <div className="section__line" />
            <p className="section__body">
              A simple, structured approach that ensures your project is delivered
              on time, with clarity and zero guesswork.
            </p>
          </div>

          <div className="process__stats">
            <div className="process-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Project Success</span>
            </div>
            <div className="process-stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Client Rating</span>
            </div>
          </div>
        </div>

        <div className="process__grid">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`process-card ${hoveredStep === index ? 'hovered' : ''} ${expandedStep === index ? 'expanded' : ''}`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{ '--step-color': step.color }}
            >
              <div className="process-card__connector">
                {index < steps.length - 1 && <div className="connector-line"></div>}
              </div>
              
              <div className="process-card__icon">{step.icon}</div>
              <div className="process-card__number">{step.number}</div>
              <h3 className="process-card__title">{step.title}</h3>
              <p className="process-card__desc">{step.desc}</p>
              
              {/* Expanded details */}
              {expandedStep === index && (
                <div className="process-card__details">
                  <p>{step.details}</p>
                  <button className="process-card__contact" onClick={scrollToContact}>
                    Start a project →
                  </button>
                </div>
              )}
              
              <div className="process-card__glow"></div>
              
              <button 
                className="process-card__learn"
                onClick={() => toggleDetails(index)}
              >
                <span>{expandedStep === index ? 'Show Less' : 'Learn More'}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ transform: expandedStep === index ? 'rotate(180deg)' : 'none' }}>
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;