import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Globe, Smartphone, Settings, Palette, 
  CheckCircle, ArrowLeft, Zap, ChevronRight,
  ExternalLink
} from 'lucide-react';
import '../styles/ServicePage.css';

const serviceDetails = {
  'web-development': {
    Icon: Globe,
    title: 'Web Development',
    subtitle: 'Websites That Actually Bring You Customers',
    intro: 'Your website works 24/7 to bring customers — but only if it\'s built right. We fix slow load times, poor Google rankings, and low conversions.',
    problems: [
      'Takes over 3 seconds to load — customers leave',
      'Doesn\'t show up on Google searches',
      'People visit but never call or email',
      'Looks broken on mobile phones'
    ],
    solutions: [
      'Lightning-fast loading on all devices',
      'SEO-optimized to rank on Google',
      'Clear buttons that turn visitors into customers',
      'Perfect on iPhone, Samsung, and desktop'
    ],
    outcomes: [
      'More calls, emails, and bookings',
      'Customers actually stay and browse',
      'Look professional and trustworthy',
      'Update it yourself easily'
    ],
    process: [
      'We listen to your needs',
      'We design your mockup',
      'We build your site',
      'We launch and support'
    ],
    extendedFaq: [
      { q: 'How long does it take?', a: 'Most websites take 2-4 weeks from start to finish, depending on complexity.' },
      { q: 'Can I update it myself?', a: 'Absolutely. No coding needed — easy to change text, photos, and prices.' },
      { q: 'Will it work on phones?', a: 'Yes — every site works perfectly on phones, tablets, and computers.' },
      { q: 'What about maintenance?', a: 'We offer support packages or hand over everything for you to control.' },
      { q: 'Do you help with domain & hosting?', a: 'Yes — we can set everything up or use your existing providers.' },
      { q: 'What if I need changes later?', a: 'We\'re here for ongoing support whenever you need updates.' }
    ],
  },
  
  'mobile-apps': {
    Icon: Smartphone,
    title: 'Mobile Apps',
    subtitle: 'Put Your Business in Your Customers\' Pockets',
    intro: 'Kenyans check their phones over 100 times daily. An app puts your business on their home screen — one tap away.',
    problems: [
      'Customers forget you between visits',
      'No way to send instant updates',
      'Mobile website frustrates users',
      'Losing customers to competitors with apps'
    ],
    solutions: [
      'Push notifications for instant reach',
      'Easy ordering and booking',
      'Open in 1 second (not 10)',
      'Works offline for key features'
    ],
    outcomes: [
      '3x more repeat business',
      'Build loyalty with rewards',
      'Stay top-of-mind always',
      'Collect real customer feedback'
    ],
    process: [
      'Map out your needs',
      'Design the screens',
      'Build your app',
      'Launch on App & Play stores'
    ],
    extendedFaq: [
      { q: 'Do I need both iPhone and Android?', a: 'We build apps that work on both at once — reach everyone without paying twice.' },
      { q: 'How much does an app cost?', a: 'Apps start from KES 150,000 depending on features. Clear pricing before we start.' },
      { q: 'How long does it take?', a: 'Simple apps take 6-8 weeks. More complex ones take 10-12 weeks.' },
      { q: 'Can customers pay through the app?', a: 'Yes — integrate M-Pesa, cards, or any payment method.' },
      { q: 'Do I need to maintain the app?', a: 'We handle updates and maintenance, or train your team to do it.' },
      { q: 'Will it work without internet?', a: 'Key features work offline — perfect for Kenya\'s network conditions.' }
    ],
    // mockups: {
    //   type: 'app',
    //   projects: [
    //     {
    //       title: 'Food Delivery App',
    //       description: 'Order food from local restaurants',
    //       image: '../assets/images/hero.jpg',
    //       tags: ['Real-time Tracking', 'M-Pesa', 'Push Notifications']
    //     },
    //     {
    //       title: 'E-commerce Mobile App',
    //       description: 'Shop from your phone anywhere',
    //       image: '/mockups/shopapp-mockup.png',
    //       tags: ['Wishlist', 'Cart', 'Secure Payments']
    //     },
    //     {
    //       title: 'Service Booking App',
    //       description: 'Book services in seconds',
    //       image: '/mockups/booking-mockup.png',
    //       tags: ['Calendar', 'Reviews', 'Scheduling']
    //     }
    //   ]
    // }
  },

  'systems-backends': {
    Icon: Settings,
    title: 'Business Automation',
    subtitle: 'Stop Manual Work. Let Systems Run.',
    intro: 'You started your business to serve customers, not to drown in paperwork. We automate the boring stuff so you can focus on growth.',
    problems: [
      'Waste hours on data entry',
      'Mistakes from manual work',
      'Tools don\'t talk to each other',
      'No clear business reports'
    ],
    solutions: [
      'Automate invoices, receipts, inventory',
      'Connect website + accounting + CRM',
      'Real-time sales reports',
      'Eliminate human error'
    ],
    outcomes: [
      'Save 10-20 hours weekly',
      'Fewer mistakes = happier customers',
      'See your business performance instantly',
      'Scale without hiring more admins'
    ],
    process: [
      'Audit your current workflow',
      'Design automation plan',
      'Build & connect tools',
      'Train your team'
    ],
    extendedFaq: [
      { q: 'Do I need technical skills?', a: 'Not at all — if you can send an email, you can use our automation tools.' },
      { q: 'Will it work with my existing tools?', a: 'Yes — connects with Excel, QuickBooks, M-Pesa, and hundreds more.' },
      { q: 'How much does automation cost?', a: 'Small automations from KES 50,000. Full systems from KES 200,000-500,000.' },
      { q: 'How long to set up?', a: 'Simple automations take 2-3 weeks. Complex systems take 1-2 months.' },
      { q: 'What if something breaks?', a: '24/7 monitoring and support. We fix issues before you notice them.' },
      { q: 'Can we add more automation later?', a: 'Absolutely — we build systems that grow with your business.' }
    ],
  },

  'ui-ux-design': {
    Icon: Palette,
    title: 'UI & UX Design',
    subtitle: 'Designs That Build Trust & Drive Sales',
    intro: 'People decide to trust your business in seconds. Good design isn\'t just pretty — it builds confidence and turns visitors into customers.',
    problems: [
      'Old design looks unprofessional',
      'Visitors get confused and leave',
      'Losing sales from frustrating checkouts',
      'Inconsistent branding everywhere'
    ],
    solutions: [
      'Modern design that builds trust',
      'Clear paths to action',
      'Easy checkout & booking forms',
      'Consistent brand colors & fonts'
    ],
    outcomes: [
      'More sales from same visitors',
      'Customers stay longer',
      'People remember your brand',
      'Look as professional as you are'
    ],
    process: [
      'Research your customers',
      'Sketch layouts (wireframes)',
      'Create beautiful designs',
      'Deliver ready-to-build files'
    ],
    extendedFaq: [
      { q: 'Do I see designs before you build?', a: 'Yes — we show you designs and make changes until you love them.' },
      { q: 'Can you match my existing brand?', a: 'Absolutely — we use your colors, logo, and style.' },
      { q: 'How long does design take?', a: 'Most projects take 2-4 weeks depending on pages or screens needed.' },
      { q: 'Do you also build the designs?', a: 'We can hand off files or our development team can build them for you.' },
      { q: 'What about mobile design?', a: 'Everything is designed for phones, tablets, and computers.' },
      { q: 'Can I get revisions?', a: 'Yes — unlimited revisions until you\'re completely satisfied.' }
    ],
  }
};

const ServicePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[slug];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="service-page-compact">
        <div className="compact-container">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Back
          </button>
          <h2>Service not found</h2>
        </div>
      </div>
    );
  }

  const { Icon, title, subtitle, intro, problems, solutions, outcomes, process, extendedFaq, mockups } = service;

  return (
    <div className="service-page-compact">
      <div className="compact-container">
        {/* Header */}
        <div className="compact-header">
          <button className="back-btn" onClick={() => navigate('/')}>
            <ArrowLeft size={18} /> Back to Services
          </button>
          <div className="header-content">
            <div className="service-icon">
              <Icon size={40} />
            </div>
            <h1>{title}</h1>
            <p className="service-subtitle">{subtitle}</p>
            <p className="service-intro">{intro}</p>
            <button className="cta-btn" onClick={() => navigate('/#contact')}>
              Let's Talk About Your Project <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Problems & Solutions */}
        <div className="compact-section">
          <div className="split-grid">
            <div className="problems-box">
              <h3>⚠️ Sounds familiar?</h3>
              <ul>
                {problems.map((problem, i) => (
                  <li key={i}>{problem}</li>
                ))}
              </ul>
            </div>
            <div className="solutions-box">
              <h3>✓ Here's how we fix it</h3>
              <ul>
                {solutions.map((solution, i) => (
                  <li key={i}>
                    <CheckCircle size={18} />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="compact-section outcomes">
          <h3>📈 What you'll get</h3>
          <div className="outcomes-grid">
            {outcomes.map((outcome, i) => (
              <div className="outcome-chip" key={i}>
                {outcome}
              </div>
            ))}
          </div>
        </div>

        {/* Optional Mockups Section - Only shows if mockups exist */}
        {mockups && mockups.projects && mockups.projects.length > 0 && (
          <div className="compact-section mockups-section">
            <h3>📱 Recent {mockups.type === 'app' ? 'App' : mockups.type === 'website' ? 'Website' : mockups.type === 'dashboard' ? 'Dashboard' : 'Design'} Projects</h3>
            <div className="mockups-grid">
              {mockups.projects.map((project, i) => (
                <div className="mockup-card" key={i}>
                  <div className="mockup-image-placeholder">
                    {/* Replace with actual images when available */}
                    <div className="placeholder-content">
                      <div className="mockup-icon">
                        {mockups.type === 'app' && <Smartphone size={32} />}
                        {mockups.type === 'website' && <Globe size={32} />}
                        {mockups.type === 'dashboard' && <Settings size={32} />}
                        {mockups.type === 'design' && <Palette size={32} />}
                      </div>
                      <p className="placeholder-text">{project.title}</p>
                      <small>Mockup preview</small>
                    </div>
                    {/* Uncomment when you have actual images:
                    <img src={project.image} alt={project.title} />
                    */}
                  </div>
                  <div className="mockup-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="mockup-tags">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="mockup-tag">{tag}</span>
                      ))}
                    </div>
                    <button className="mockup-link" onClick={() => window.open('#', '_blank')}>
                      View Project <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process */}
        <div className="compact-section process-section">
          <h3>⚡ How it works</h3>
          <div className="process-flow">
            {process.map((step, i) => (
              <React.Fragment key={i}>
                <div className="process-node">
                  <div className="process-number">{i + 1}</div>
                  <div className="process-name">{step}</div>
                </div>
                {i < process.length - 1 && (
                  <div className="process-connector">
                    <ChevronRight size={20} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="compact-section faq-section">
          <h3>❓ Quick answers</h3>
          <div className="faq-detailed">
            {extendedFaq.map((item, i) => (
              <div className="faq-detailed-item" key={i}>
                <div className="faq-question">
                  <Zap size={16} className="faq-icon" />
                  <strong>{item.q}</strong>
                </div>
                <div className="faq-answer">{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="final-cta-tight">
          <div className="cta-content">
            <div className="cta-left">
              <Zap size={28} className="cta-icon" />
              <div className="cta-text">
                <strong>Ready to get started?</strong>
                <p>No pressure — just a conversation about what you need.</p>
              </div>
            </div>
            <button className="cta-action" onClick={() => navigate('/#contact')}>
              Book a Free Call → 
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;