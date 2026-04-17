import React from 'react';
import '../styles/About.css';
import aboutImg from '../assets/images/about.jpg';

const About = () => {
  const features = [
    { icon: '⚡', title: 'Clean Code', desc: 'Maintainable, scalable architecture from day one.' },
    { icon: '🎯', title: 'Modern Design', desc: 'Interfaces that look great and convert better.' },
    { icon: '🚀', title: 'Fast Delivery', desc: 'We ship on time, every time. No ghost clients.' },
    { icon: '🤝', title: 'Local Support', desc: 'Kenya-based team, always reachable and responsive.' }
  ];

  return (
    <section className="about" id="about">
      <div className="about__image-wrap">
        <img src={aboutImg} alt="About KXByte" className="about__img" />
        <div className="about__image-accent" />
      </div>

      <div className="about__content">
        <p className="section__label">About Us</p>
        <h2 className="section__heading">
          WHO ARE <span>WE?</span>
        </h2>
        <div className="section__line" />
        <p className="section__body">
          KXByte is a digital solutions agency based in Kenya. We build the web,
          mobile, and system infrastructure that modern businesses need — with clean
          code, sharp design, and zero fluff.
        </p>

        <div className="about__features">
          {features.map((feature, index) => (
            <div className="about__feature" key={index}>
              <div className="about__feature-icon">{feature.icon}</div>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;