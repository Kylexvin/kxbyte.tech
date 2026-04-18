// src/pages/ProjectPage.jsx - Alternative approach
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import '../styles/ProjectPage.css';

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  const scrollToContact = () => {
    // Navigate to home with hash
    navigate('/#contact');
    
    // After navigation, scroll to contact
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };

  return (
    <div className="project-page">
      <div className="project-page__container">
        <button className="project-page__back" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back to projects
        </button>

        <div className="project-page__header">
          <span className="project-page__client">{project.client}</span>
          <h1>{project.title}</h1>
          <div className="project-page__tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="project-page__grid">
          <div className="project-page__main">
            <section className="project-section">
              <h2>The Problem</h2>
              <p>{project.problem}</p>
            </section>

            <section className="project-section">
              <h2>The Solution</h2>
              <p>{project.solution}</p>
            </section>

            <section className="project-section">
              <h2>Key Features</h2>
              <ul className="features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="project-section">
              <h2>Technology Stack</h2>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-item">{tech}</span>
                ))}
              </div>
            </section>
          </div>

          <div className="project-page__sidebar">
            <div className="project-stats">
              <h3>Results</h3>
              {project.results.map((result, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-value">{result.metric}</span>
                  <span className="stat-label">{result.label}</span>
                </div>
              ))}
            </div>

            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-btn">
                View Live Project <FiExternalLink />
              </a>
            )}

            <button className="start-btn" onClick={scrollToContact}>
              Start a similar project →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;