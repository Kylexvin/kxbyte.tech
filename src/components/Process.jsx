// src/components/Process.js
import React, { useState } from 'react';
import '../styles/Process.css';

// SVG Icon Components
const DiscoveryIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11 8V11L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PlanningIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);



const ResearchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const AgreementIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V7H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V9L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 15L11 17L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContractIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 6H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 18L13 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 18L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MilestoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8H22L16 13L18 21L12 16.5L6 21L8 13L2 8H9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const KickoffIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 3L3 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 3L21 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GovernanceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 11H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 15H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const QAIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="1" fill="currentColor"/>
  </svg>
);

const HandoverIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12V18H4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 2V14M12 14L9 11M12 14L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SupportIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const steps = [
  {
    number: '01',
    title: 'Initial Engagement',
    shortDesc: 'We receive your inquiry and initiate a structured introduction.',
    icon: DiscoveryIcon,
    color: '#ff5c1a',
    duration: '2-3 days',
    details: 'We receive your inquiry through our official channels and initiate a structured introduction. Our team addresses key questions and schedules a formal project discovery session.'
  },
  {
    number: '02',
    title: 'Confidentiality & NDA Alignment',
    shortDesc: 'We establish confidentiality through a mutually agreed NDA.',
    icon: AgreementIcon,
    color: '#ff6e33',
    duration: '1 day',
    details: 'We establish confidentiality through a mutually agreed Non-Disclosure Agreement (NDA), either ours or yours, reviewed and aligned to protect all proprietary and sensitive information.'
  },
  {
    number: '03',
    title: 'Requirements Workshop',
    shortDesc: 'Structured session to understand your business and define objectives.',
    icon: PlanningIcon,
    color: '#ff804d',
    duration: '1-2 days',
    details: 'A structured session led by senior product and engineering leads to understand your business processes and challenges, define system objectives and requirements, assess technical and operational fit.'
  },
  {
    number: '04',
    title: 'Formal Proposal Submission',
    shortDesc: 'We deliver a comprehensive proposal with scope, timeline, and investment.',
    icon: ContractIcon,
    color: '#ff9468',
    duration: '3-5 days',
    details: 'We deliver a comprehensive proposal including detailed scope of work, system architecture and technical approach, delivery timeline and milestones, investment breakdown, recommended technology stack, dedicated project team and post-deployment support options.'
  },
  {
    number: '05',
    title: 'Research & Solution Development',
    shortDesc: 'We develop a solution aligned to your workflows and security needs.',
    icon: ResearchIcon,
    color: '#ffa882',
    duration: '5-7 days',
    details: 'After the session, we conduct research to further our understanding. We then develop a solution that is aligned to your organization\'s workflows, scalability needs, and security requirements.'
  },
  {
    number: '06',
    title: 'Negotiation & Agreement',
    shortDesc: 'Collaboratively refine scope, timelines, and investment structure.',
    icon: DiscoveryIcon,
    color: '#ffbc9c',
    duration: '2-5 days',
    details: 'We collaboratively refine scope, timelines and investment structure. This ensures alignment with your internal budgets and operational expectations.'
  },
  {
    number: '07',
    title: 'Contract Signing',
    shortDesc: 'We rewrite the proposal with agreed terms and sign as binding contract.',
    icon: ContractIcon,
    color: '#ffd0b6',
    duration: '1 day',
    details: 'We rewrite the proposal again as per the agreed cost and timeline and sign it off as a binding contract.'
  },
  {
    number: '08',
    title: 'Project Milestone Mapping',
    shortDesc: 'The Chief Product Officer leads milestone mapping with the team.',
    icon: MilestoneIcon,
    color: '#4a9eff',
    duration: '1-2 days',
    details: 'The Chief Product Officer leads a session with the lead team handling the project and maps out the key milestones with their subsequent timelines.'
  },
  {
    number: '09',
    title: 'Project Kick-off & Server Setup',
    shortDesc: 'UX design begins while engineers set up environments.',
    icon: KickoffIcon,
    color: '#3d8ef0',
    duration: '3-5 days',
    details: 'The team starts with the UX process as the engineers handle the system architecture design and set up environments.'
  },
  {
    number: '10',
    title: 'Governance & Progress Reporting',
    shortDesc: 'Consistent communication with bi-weekly updates and reviews.',
    icon: GovernanceIcon,
    color: '#3078e0',
    duration: 'Ongoing',
    details: 'We maintain consistent communication and visibility through bi-weekly progress updates, stakeholder review sessions, and transparent reporting on milestones and risks.'
  },
  {
    number: '11',
    title: 'Testing & QA',
    shortDesc: 'Rigorous QA ensures system stability, security, and performance.',
    icon: QAIcon,
    color: '#2368d0',
    duration: '2-3 weeks',
    details: 'A rigorous QA process ensures system stability and performance, security validation, functional and usability testing, and delivering enterprise-grade reliability.'
  },
  {
    number: '12',
    title: 'Project Completion & Handover',
    shortDesc: 'We deliver source code, builds, documentation, and assets.',
    icon: HandoverIcon,
    color: '#1a5cc0',
    duration: '2-3 days',
    details: 'We hand over source code repository link and access credentials, compiled builds (mobile apps, web apps, desktop apps), documentation (technical, user manual, API documentation), design assets (UI/UX files, branding materials).'
  },
  {
    number: '13',
    title: 'Ongoing Support & Partnership',
    shortDesc: 'We remain your technology partner with maintenance and improvements.',
    icon: SupportIcon,
    color: '#0f50b0',
    duration: 'Continuous',
    details: 'We remain your technology partner, offering system maintenance, continuous improvements, scalability support, AI and automation enhancements, and strategic technology advisory aligned to your business growth. We position ourselves as your innovation partner, ensuring your systems not only function but also continuously adapt, improve, and give you a competitive edge.'
  }
];

const Process = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [expandedStep, setExpandedStep] = useState(null);
  const [activePhase, setActivePhase] = useState(0);
  const [showAllSteps, setShowAllSteps] = useState(false);

  const phases = [
    { name: 'Discovery', range: [0, 4] },
    { name: 'Planning', range: [4, 7] },
    { name: 'Development', range: [7, 11] },
    { name: 'Delivery', range: [11, 13] }
  ];

  const toggleDetails = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewAll = () => {
    setShowAllSteps(true);
    setActivePhase(null);
    // Optional: smooth scroll to show all steps
    setTimeout(() => {
      const processGrid = document.querySelector('.process__grid');
      if (processGrid) {
        processGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleShowPhases = () => {
    setShowAllSteps(false);
    setActivePhase(0);
  };

  const getVisibleSteps = () => {
    if (showAllSteps) {
      return steps;
    }
    const [start, end] = phases[activePhase].range;
    return steps.slice(start, end);
  };

  return (
    <section className="process" id="process">
      <div className="process__watermark">FLOW</div>

      <div className="process-container">
        <div className="process__header">
          <div className="process__top">
            <span className="process__badge">How We Work</span>
            <p className="section__label">Our Process</p>
            <h2 className="section__heading">
              HOW WE <span>WORK</span>
            </h2>
            <div className="section__line" />
            <p className="section__body">
              A structured, transparent approach to delivering exceptional digital products.
              From initial conversation to ongoing support, we guide you every step of the way.
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

        {/* View Toggle Controls */}
        <div className="process__view-controls">
          <div className="process__phase-nav">
            {phases.map((phase, idx) => (
              <button
                key={idx}
                className={`phase-btn ${!showAllSteps && activePhase === idx ? 'active' : ''}`}
                onClick={() => {
                  setShowAllSteps(false);
                  setActivePhase(idx);
                }}
              >
                <span className="phase-number">0{idx + 1}</span>
                <span className="phase-name">{phase.name}</span>
              </button>
            ))}
          </div>
          
          <div className="process__view-toggle">
            <button 
              className={`view-all-btn ${showAllSteps ? 'active' : ''}`}
              onClick={handleViewAll}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              View All 13 Steps
            </button>
            {showAllSteps && (
              <button 
                className={`show-phases-btn`}
                onClick={handleShowPhases}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Group by Phases
              </button>
            )}
          </div>
        </div>

        {/* Steps Grid */}
        <div className={`process__grid ${showAllSteps ? 'show-all' : ''}`}>
          {getVisibleSteps().map((step, idx) => {
            const globalIndex = showAllSteps ? idx : phases[activePhase].range[0] + idx;
            const IconComponent = step.icon;
            return (
              <div 
                key={globalIndex}
                className={`process-card ${hoveredStep === globalIndex ? 'hovered' : ''} ${expandedStep === globalIndex ? 'expanded' : ''}`}
                onMouseEnter={() => setHoveredStep(globalIndex)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{ '--step-color': step.color }}
              >
                <div className="process-card__connector">
                  {idx < getVisibleSteps().length - 1 && <div className="connector-line"></div>}
                </div>
                
                <div className="process-card__icon">
                  <IconComponent />
                </div>
                <div className="process-card__number">{step.number}</div>
                <h3 className="process-card__title">{step.title}</h3>
                <p className="process-card__desc">{step.shortDesc}</p>
                
                <div className="process-card__duration">
                  <span className="duration-label">Timeline</span>
                  <span className="duration-value">{step.duration}</span>
                </div>
                
                {expandedStep === globalIndex && (
                  <div className="process-card__details">
                    <p>{step.details}</p>
                    <button className="process-card__contact" onClick={scrollToContact}>
                      Start Your Project
                    </button>
                  </div>
                )}
                
                <div className="process-card__glow"></div>
                
                <button 
                  className="process-card__learn"
                  onClick={() => toggleDetails(globalIndex)}
                >
                  <span>{expandedStep === globalIndex ? 'Show Less' : 'Learn More'}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ transform: expandedStep === globalIndex ? 'rotate(180deg)' : 'none' }}>
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator when showing all steps */}
        {showAllSteps && (
          <div className="process__progress">
            <span className="progress-text">Showing all 13 steps of our development process</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Process;