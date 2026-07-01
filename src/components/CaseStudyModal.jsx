// src/components/CaseStudyModal.jsx
import React, { useEffect } from 'react';

const CaseStudyModal = ({ project, onClose, onStartProject }) => {
  // Handle escape key - moved BEFORE any conditional returns
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Now we can check if project exists and return null
  if (!project) return null;

  return (
    <div className="case-modal" onClick={onClose}>
      <div className="case-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="case-modal__close" onClick={onClose} aria-label="Close modal">×</button>
        
        <div className="case-modal__header">
          <span className="case-client">{project.client}</span>
          <h2>{project.title}</h2>
          {project.category && (
            <span className="case-category">{project.category}</span>
          )}
        </div>

        <div className="case-modal__body">
          {project.problem && (
            <div className="case-section">
              <h3>The Problem</h3>
              <p>{project.problem}</p>
            </div>
          )}

          {project.solution && (
            <div className="case-section">
              <h3>The Solution</h3>
              <p>{project.solution}</p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="case-section">
              <h3>Key Features</h3>
              <ul className="case-features">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.results && project.results.length > 0 && (
            <div className="case-section">
              <h3>The Results</h3>
              <div className="case-results">
                {project.results.map((result, idx) => (
                  <div key={idx} className="case-result">
                    <span className="case-result-metric">{result.value}</span>
                    <span className="case-result-label">{result.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.tech && project.tech.length > 0 && (
            <div className="case-section">
              <h3>Technologies Used</h3>
              <div className="case-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="case-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {project.testimonial && (
            <div className="case-section case-testimonial">
              <p className="testimonial-quote">"{project.testimonial.quote}"</p>
              <p className="testimonial-author">
                — {project.testimonial.author}<br />
                <span>{project.testimonial.role}</span>
              </p>
            </div>
          )}

          <div className="case-actions">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="case-btn case-btn--live"
              >
                View Live Project
              </a>
            )}
            <button 
              className="case-btn case-btn--start" 
              onClick={() => {
                onClose();
                onStartProject();
              }}
            >
              Start a similar project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;