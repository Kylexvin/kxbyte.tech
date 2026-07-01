// src/pages/ProjectDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FiTrendingUp, FiUsers, FiClock, FiCheckCircle, 
  FiCode, FiBriefcase, FiCalendar, FiStar,
  FiArrowRight, FiExternalLink
} from 'react-icons/fi';
import { projectsData } from '../data/projectsData';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

  const scrollToContact = () => {
    navigate('/#contact');
  };

  const scrollToProjects = () => {
    navigate('/#projects');
  };

  if (loading) {
    return (
      <div className="project-detail-compact">
        <div className="compact-container">
          <div className="loading-state">Loading project details...</div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail-compact">
        <div className="compact-container">
          <div className="not-found">
            <h2>Project not found</h2>
            <button className="back-btn" onClick={scrollToProjects}>
              ← Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-compact">
      <div className="compact-container">
        {/* Header */}
        <div className="compact-header">
          <button className="back-btn" onClick={scrollToProjects}>
            ← Back to Projects
          </button>
          
          <div className="header-content">
            <div className="project-icon">
              <span>{project.icon || '🚀'}</span>
            </div>
            <h1>{project.title}</h1>
            <p className="project-client">{project.client}</p>
            <span className="project-category">{project.category}</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Problem & Solution - Large */}
          <div className="bento-card bento-card--large">
            <div className="bento-card__header">
              <span className="bento-card__icon">💡</span>
              <h3>Problem & Solution</h3>
            </div>
            <div className="problem-solution-content">
              <div className="problem-box">
                <h4>The Problem</h4>
                <p>{project.problem}</p>
              </div>
              <div className="solution-box">
                <h4>The Solution</h4>
                <p>{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Results - Medium */}
          <div className="bento-card bento-card--medium">
            <div className="bento-card__header">
              <span className="bento-card__icon">📊</span>
              <h3>Results</h3>
            </div>
            <div className="results-grid">
              {project.results?.map((result, idx) => (
                <div key={idx} className="result-item">
                  <span className="result-icon">
                    {result.type === 'increase' && <FiTrendingUp />}
                    {result.type === 'users' && <FiUsers />}
                    {result.type === 'time' && <FiClock />}
                  </span>
                  <div>
                    <span className="result-value">{result.value}</span>
                    <span className="result-label">{result.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack - Small */}
          <div className="bento-card bento-card--small">
            <div className="bento-card__header">
              <span className="bento-card__icon"><FiCode /></span>
              <h3>Tech Stack</h3>
            </div>
            <div className="tech-stack">
              {project.tech?.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Features - Medium */}
          <div className="bento-card bento-card--medium">
            <div className="bento-card__header">
              <span className="bento-card__icon">✨</span>
              <h3>Key Features</h3>
            </div>
            <ul className="features-list">
              {project.features?.map((feature, idx) => (
                <li key={idx}>
                  <FiCheckCircle className="feature-check" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial - Small */}
          {project.testimonial && (
            <div className="bento-card bento-card--small">
              <div className="bento-card__header">
                <span className="bento-card__icon"><FiStar /></span>
                <h3>Testimonial</h3>
              </div>
              <div className="testimonial-content">
                <blockquote>"{project.testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <strong>{project.testimonial.author}</strong>
                  <span>{project.testimonial.role}</span>
                </div>
              </div>
            </div>
          )}

          {/* Project Info - Small */}
          <div className="bento-card bento-card--small">
            <div className="bento-card__header">
              <span className="bento-card__icon"><FiBriefcase /></span>
              <h3>Project Info</h3>
            </div>
            <div className="project-info">
              <div className="info-item">
                <FiCalendar />
                <span>Completed 2024</span>
              </div>
              <div className="info-item">
                <FiUsers />
                <span>{project.client}</span>
              </div>
              <div className="info-item">
                <FiCode />
                <span>{project.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="final-cta-tight">
          <div className="cta-content">
            <div className="cta-left">
              <div className="cta-icon">
                <FiTrendingUp size={24} />
              </div>
              <div className="cta-text">
                <strong>Ready to build something amazing?</strong>
                <p>Let's create a project that delivers real results for your business.</p>
              </div>
            </div>
            <div className="cta-actions">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-action cta-action--live"
                >
                  View Live <FiExternalLink />
                </a>
              )}
              <button 
                className="cta-action cta-action--start"
                onClick={scrollToContact}
              >
                Start Project <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;