// src/components/About.jsx
import React from 'react';
import { FiZap, FiTarget, FiTruck, FiUsers, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js
import '../styles/About.css';
import aboutImg from '../assets/images/about.png';

const About = () => {
  const features = [
    { icon: <FiZap size={24} />, title: 'Clean Code' },
    { icon: <FiTarget size={24} />, title: 'Modern Design' },
    { icon: <FiTruck size={24} />, title: 'Fast Delivery' },
    { icon: <FiUsers size={24} />, title: 'Local Support' }
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

        {/* 👇 NEW: Read More CTA */}
        <div className="about__cta-wrapper">
          <Link to="/about" className="about__cta">
            Learn More About KXByte
            <FiArrowRight className="about__cta-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;