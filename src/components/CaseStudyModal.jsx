import React from 'react';

const CaseStudyModal = ({ project, onClose, onStartProject }) => {
  if (!project) return null;

  return (
    <div className="case-modal" onClick={onClose}>
      <div className="case-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="case-modal__close" onClick={onClose}>×</button>
        
        <div className="case-modal__header">
          <span className="case-client">{project.client}</span>
          <h2>{project.title}</h2>
        </div>

        <div className="case-modal__body">
          <div className="case-section">
            <h3>The Problem</h3>
            <p>{project.problem}</p>
          </div>

          <div className="case-section">
            <h3>The Solution</h3>
            <p>{project.solution}</p>
          </div>

          <div className="case-section">
            <h3>Key Features</h3>
            <ul className="case-features">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="case-section">
            <h3>The Results</h3>
            <div className="case-results">
              {project.results.map((result, idx) => (
                <div key={idx} className="case-result">
                  <span className="case-result-metric">{result.metric}</span>
                  <span className="case-result-label">{result.label}</span>
                </div>
              ))}
            </div>
          </div>

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
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="case-btn case-btn--live">
                View Live Project →
              </a>
            )}
            <button className="case-btn case-btn--start" onClick={onStartProject}>
              Start a similar project →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;