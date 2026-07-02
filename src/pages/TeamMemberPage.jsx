// src/pages/TeamMemberPage.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaLinkedinIn, 
  FaTwitter, 
  FaGithub,    
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaBriefcase, 
  FaCode, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaUsers
} from 'react-icons/fa';
import { team } from '../data/teamData'; 
import '../styles/TeamMemberPage.css';

const TeamMemberPage = () => {
  const { slug } = useParams();
  const member = team.find(m => m.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return (
      <div className="team-member-notfound">
        <h2>Team member not found</h2>
        <Link to="/team" className="team-member-back-home">Back to Team</Link>
      </div>
    );
  }

  return (
    <div className="team-member-page">
      <div className="team-member-top-bar">
        <div className="team-member-breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/team">Our Team</Link>
          <span className="separator">/</span>
          <span className="current">{member.name}</span>
        </div>

      </div>

      <div className="team-member-profile">
        <div className="team-member-profile-left">
          <div className="team-member-avatar-wrapper">
            {member.image ? (
              <img src={member.image} alt={member.name} className="team-member-avatar" />
            ) : (
              <div className="team-member-avatar-placeholder">
                {member.name.charAt(0)}
              </div>
            )}
            <span className="team-member-status">Active Team Member</span>
          </div>
          
          <div className="team-member-contact-card">
            <h4>Contact Information</h4>
            {member.email && (
              <a href={`mailto:${member.email}`} className="team-member-contact-item">
                <FaEnvelope />
                <span>{member.email}</span>
              </a>
            )}
            {member.location && (
              <div className="team-member-contact-item">
                <FaMapMarkerAlt />
                <span>{member.location}</span>
              </div>
            )}
            {member.joined && (
              <div className="team-member-contact-item">
                <FaCalendarAlt />
                <span>Joined {member.joined}</span>
              </div>
            )}
          </div>

          <div className="team-member-social-card">
            <h4>Connect</h4>
            <div className="team-member-socials">
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="team-member-social-link linkedin">
                  <FaLinkedinIn /> LinkedIn
                </a>
              )}
              {member.socials.twitter && (
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="team-member-social-link twitter">
                  <FaTwitter /> Twitter
                </a>
              )}
              {member.socials.github && (
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="team-member-social-link github">
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="team-member-profile-right">
          <div className="team-member-header">
            <div className="team-member-title">
              <h1 className="team-member-name">{member.name}</h1>
              <p className="team-member-role">{member.role}</p>
            </div>
            <div className="team-member-tags">
              <span className="team-member-tag">{member.tag}</span>
              <span className="team-member-tag team-member-tag-secondary">
                <FaUsers /> Team Player
              </span>
            </div>
          </div>

          <div className="team-member-bio-section">
            <div className="team-member-bio-quote">
              <FaQuoteLeft />
            </div>
            <p className="team-member-bio">{member.bio}</p>
            <div className="team-member-bio-quote team-member-bio-quote-right">
              <FaQuoteRight />
            </div>
          </div>

          <div className="team-member-contribution-section">
            <h3 className="team-member-section-title">
              <FaBriefcase /> Role & Contributions
            </h3>
            <div className="team-member-contribution-content">
              <p className="team-member-contribution-text">
                As our {member.role}, {member.name.split(' ')[0]} brings expertise in {member.skills?.slice(0, 3).join(', ')}.
              </p>
            </div>
          </div>

          <div className="team-member-skills-section">
            <h3 className="team-member-section-title">
              <FaCode /> Technical Expertise
            </h3>
            <div className="team-member-skills">
              {member.skills.map((skill, index) => (
                <span key={index} className="team-member-skill">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPage;