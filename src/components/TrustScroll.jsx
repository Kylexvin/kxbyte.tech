// src/components/TrustScroll.jsx
import React from 'react';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, 
  SiFirebase, SiVercel, SiGit, SiFigma 
} from 'react-icons/si';
import '../styles/TrustScroll.css';

const TrustScroll = () => {
  const technologies = [
    { icon: <SiReact />, name: 'React' },
    { icon: <SiNodedotjs />, name: 'Node.js' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiVercel />, name: 'Vercel' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiFigma />, name: 'Figma' }
  ];

  // Duplicate for seamless loop
  const scrollItems = [...technologies, ...technologies];

  return (
    <section className="trust-scroll">

      <div className="trust-scroll__track">
        <div className="trust-scroll__content">
          {scrollItems.map((tech, idx) => (
            <div key={idx} className="trust-scroll__item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustScroll;