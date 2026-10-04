// src/components/About.jsx
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import '../styles/About.css';
import aboutImg from '../assets/images/about.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__image-wrap">
        <img src={aboutImg.src} alt="About KXBYTE" className="about__img" />
        <div className="about__image-accent" />
      </div>

      <div className="about__content">
        <p className="section__label">About KXBYTE</p>
        <h2 className="section__heading">
          SOFTWARE FOR HOW <span>BUSINESS ACTUALLY RUNS</span>
        </h2>
        <div className="section__line" />
        <p className="section__body">
          KXBYTE is a business technology company. We build connected software
          that helps businesses operate, manage, and grow.
        </p>

        <div className="about__cta-wrapper">
          <Link href="/about" className="about__cta">
            More about KXBYTE
            <FiArrowRight className="about__cta-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;