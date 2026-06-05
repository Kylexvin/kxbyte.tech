import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/Team.css';

import vinny from '../assets/images/hero2.jpg';

const team = [
  {
    slug: 'vincent-kipchirchir',
    name: 'Vincent Kipchirchir',
    role: 'Founder & Lead Developer',
    tag: 'Full-Stack • React Native',
    image: vinny,
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    slug: 'member-two',
    name: 'Member Two',
    role: 'Frontend Developer',
    tag: 'React • UI Engineering',
    image: null,
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    slug: 'member-three',
    name: 'Member Three',
    role: 'Backend Developer',
    tag: 'Node.js • MongoDB',
    image: null,
    socials: { linkedin: '#', twitter: '#', github: null },
  },
  {
    slug: 'member-four',
    name: 'Member Four',
    role: 'UI/UX Designer',
    tag: 'Figma • Prototyping',
    image: null,
    socials: { linkedin: '#', twitter: null, github: null },
  },
  {
    slug: 'member-five',
    name: 'Member Five',
    role: 'Project Manager',
    tag: 'Agile • Client Relations',
    image: null,
    socials: { linkedin: '#', twitter: '#', github: null },
  },
];

const MemberCard = ({ member, navigate }) => (
  <div className="team__card">
    <div className="team__card-photo">
      {member.image ? (
        <img src={member.image} alt={member.name} />
      ) : (
        <div className="team__card-placeholder">{member.name.charAt(0)}</div>
      )}
      <div className="team__card-tag">{member.tag}</div>
    </div>
    <div className="team__card-bottom">
      <div className="team__card-info">
        <h3 className="team__card-name">{member.name}</h3>
        <p className="team__card-role">{member.role}</p>
      </div>
      <div className="team__card-socials">
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        )}
        {member.socials.twitter && (
          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        )}
        {member.socials.github && (
          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        )}
      </div>
      <button className="team__card-cta" onClick={() => navigate(`/team/${member.slug}`)}>
        View Profile <FiArrowUpRight size={16} />
      </button>
    </div>
  </div>
);

const Team = () => {
  const [active, setActive] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth * 0.78 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setCarouselIndex(index);
  };

  return (
    <section className="team" id="team">
      <div className="team__header">
        <span className="team__label">OUR TEAM</span>
        <h2 className="team__heading">
          The Builders <span className="team__heading--accent">Behind The Work</span>
        </h2>
      </div>

      {/* Desktop split layout */}
      <div className="team__body">
        <div className="team__list">
          {team.map((member, i) => (
            <div
              key={i}
              className={`team__item ${active === i ? 'team__item--active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <div className="team__item-index">0{i + 1}</div>
              <div className="team__item-info">
                <span className="team__item-name">{member.name}</span>
                <span className="team__item-role">{member.role}</span>
              </div>
              <button
                className="team__item-arrow"
                onClick={(e) => { e.stopPropagation(); navigate(`/team/${member.slug}`); }}
                aria-label={`View ${member.name} profile`}
              >
                <FiArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div key={active}>
          <MemberCard member={team[active]} navigate={navigate} />
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="team__carousel-wrap">
        <div
          className="team__carousel"
          ref={carouselRef}
          onScroll={handleCarouselScroll}
        >
          {team.map((member, i) => (
            <div className="team__carousel-item" key={i}>
              <MemberCard member={member} navigate={navigate} />
            </div>
          ))}
        </div>
        <div className="team__carousel-dots">
          {team.map((_, i) => (
            <span
              key={i}
              className={`team__dot ${carouselIndex === i ? 'team__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;