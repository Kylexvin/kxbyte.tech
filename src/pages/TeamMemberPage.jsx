// src/pages/TeamMemberPage.js
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaGithub, FaArrowLeft, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { FiArrowUpRight, FiAward, FiBriefcase, FiCode } from 'react-icons/fi';
import { team } from '../data/teamData'; // Import from shared data
import '../styles/TeamMemberPage.css';

const TeamMemberPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const member = team.find(m => m.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return (
      <div className="team-member-notfound">
        <h2>Team member not found</h2>
        <Link to="/" className="team-member-back-home">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="team-member-page">
      <div className="team-member-container">
        {/* Back button */}
        <button onClick={() => navigate('/')} className="team-member-back-btn">
          <FaArrowLeft /> Back to Team
        </button>

        {/* Hero Section */}
        <div className="team-member-hero">
          <div className="team-member-avatar">
            {member.image ? (
              <img src={member.image} alt={member.name} />
            ) : (
              <div className="team-member-avatar-placeholder">
                {member.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="team-member-hero-content">
            <h1 className="team-member-name">{member.name}</h1>
            <p className="team-member-role">{member.role}</p>
            <div className="team-member-tag">{member.tag}</div>
            <div className="team-member-info-grid">
              {member.email && (
                <div className="team-member-info-item">
                  <FaEnvelope />
                  <span>{member.email}</span>
                </div>
              )}
              {member.location && (
                <div className="team-member-info-item">
                  <FaMapMarkerAlt />
                  <span>{member.location}</span>
                </div>
              )}
              {member.joined && (
                <div className="team-member-info-item">
                  <FaCalendarAlt />
                  <span>Joined {member.joined}</span>
                </div>
              )}
            </div>
            <div className="team-member-socials">
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn /> LinkedIn
                </a>
              )}
              {member.socials.twitter && (
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter /> Twitter
                </a>
              )}
              {member.socials.github && (
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="team-member-section">
          <h2 className="team-member-section-title">About Me</h2>
          <p className="team-member-bio">{member.bio}</p>
        </div>

        {/* Education Section (if available) */}
        {member.education && (
          <div className="team-member-section">
            <h2 className="team-member-section-title">
              <FaGraduationCap /> Education
            </h2>
            <p className="team-member-education">{member.education}</p>
          </div>
        )}

        {/* Skills Section */}
        <div className="team-member-section">
          <h2 className="team-member-section-title">
            <FiCode /> Technical Skills
          </h2>
          <div className="team-member-skills">
            {member.skills.map((skill, index) => (
              <span key={index} className="team-member-skill">{skill}</span>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="team-member-section">
          <h2 className="team-member-section-title">
            <FiBriefcase /> Work Experience
          </h2>
          <div className="team-member-experience">
            {member.experience.map((exp, index) => (
              <div key={index} className="team-member-exp-item">
                <div className="team-member-exp-year">{exp.year}</div>
                <div className="team-member-exp-content">
                  <h3>{exp.title}</h3>
                  <p>{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="team-member-section">
          <h2 className="team-member-section-title">
            <FiAward /> Featured Projects
          </h2>
          <div className="team-member-projects">
            {member.projects.map((project, index) => (
              <div key={index} className="team-member-project">
                <FiArrowUpRight />
                <span>{project}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section (if available) */}
        {member.achievements && member.achievements.length > 0 && (
          <div className="team-member-section">
            <h2 className="team-member-section-title">
              <FaTrophy /> Achievements
            </h2>
            <div className="team-member-achievements">
              {member.achievements.map((achievement, index) => (
                <div key={index} className="team-member-achievement">
                  <FiAward />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberPage;