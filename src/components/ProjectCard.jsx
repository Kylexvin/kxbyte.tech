// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.slug}`} className="project-card-link">
      <div className="project-card">
        <div className="project-card__icon">{project.icon}</div>
        <div className="project-card__client">{project.client}</div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__problem">{project.problem.substring(0, 80)}...</p>
        
        <div className="project-card__results">
          {project.results.slice(0, 2).map((result, idx) => (
            <div key={idx} className="result-item">
              <span className="result-metric">{result.metric}</span>
              <span className="result-label">{result.label}</span>
            </div>
          ))}
        </div>
        
        <div className="project-card__btn">
          <span>View Case Study</span>
          <FiArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;