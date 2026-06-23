// src/components/ProjectCard.jsx 
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBriefcase, FiUsers, FiMapPin, FiPackage, FiTarget } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  
  const getProjectIcon = () => {
    const iconMap = {
      'MoiHub': <FiPackage size={32} />,
      'Tujiinue CBO': <FiUsers size={32} />,
      'Sagrema': <FiTarget size={32} />,
      'Rada Ke': <FiMapPin size={32} />
    };
    return iconMap[project.title] || <FiBriefcase size={32} />;
  };

  return (
    <Link to={`/project/${project.slug}`} className="project-card-link">
      <div className="project-card">
        <div className="project-card__icon">{getProjectIcon()}</div>
        <div className="project-card__client">{project.client}</div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__problem">
          {(project.problem || project.intro?.summary || '').substring(0, 80)}...
        </p>
        
        <div className="project-card__results">
          {(project.results || project.impact || []).slice(0, 2).map((result, idx) => (
            <div key={idx} className="result-item">
              <span className="result-metric">{result.metric || result.value}</span>
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