// src/components/Projects.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FiArrowRight, FiExternalLink, FiTrendingUp, FiUsers, FiClock } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';
import CaseStudyModal from './CaseStudyModal';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const sectionRef = useRef(null);

  const filters = ['all', 'web', 'mobile', 'ecommerce', 'enterprise'];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.project-card-modern');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [displayedProjects]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getMetricIcon = (type) => {
    switch(type) {
      case 'increase': return <FiTrendingUp />;
      case 'users': return <FiUsers />;
      case 'time': return <FiClock />;
      default: return <FiTrendingUp />;
    }
  };

  return (
    <section className="projects-modern" id="projects" ref={sectionRef}>
      {/* Background decoration */}
      <div className="projects-bg-decoration">
        <div className="projects-bg-blob projects-bg-blob-1"></div>
        <div className="projects-bg-blob projects-bg-blob-2"></div>
      </div>

      <div className="projects-modern__container">
        {/* Header */}
        <div className="projects-modern__header">
          <div className="projects-modern__label-wrapper">
            <span className="projects-modern__label">Our Work</span>
            <div className="projects-modern__label-line"></div>
          </div>
          
          <h2 className="projects-modern__title">
            Transforming Ideas Into 
            <span className="gradient-text"> Digital Excellence</span>
          </h2>
          
          <p className="projects-modern__subtitle">
            Explore our portfolio of successful projects that have helped businesses grow, 
            innovate, and dominate their markets.
          </p>
        </div>

        {/* Stats Section */}
        <div className="projects-stats">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Average</div>
          </div>
        </div>

        {/* Filters */}
        <div className="projects-modern__filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-modern__grid">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card-modern"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image/Thumbnail Area */}
              <div className="project-card__media">
                <div className="project-card__image-wrapper">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-card__image" />
                  ) : (
                    <div className="project-card__image-placeholder">
                      <div className="placeholder-icon">{project.icon || '🚀'}</div>
                    </div>
                  )}
                  <div className="project-card__overlay">
                    <button 
                      className="project-card__view-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FiExternalLink /> View Case Study
                    </button>
                  </div>
                </div>
                <div className="project-card__category">{project.category || 'Web Development'}</div>
              </div>

              {/* Content */}
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.problem}</p>
                
                {/* Tech Stack */}
                {project.tech && (
                  <div className="project-card__tech">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}

                {/* Results */}
                <div className="project-card__results-modern">
                  {project.results?.map((result, i) => (
                    <div key={i} className="result-item-modern">
                      <div className="result-icon-modern">
                        {getMetricIcon(result.type)}
                      </div>
                      <div className="result-content">
                        <div className="result-value">{result.value}</div>
                        <div className="result-label-modern">{result.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client & Link */}
                <div className="project-card__footer">
                  <div className="project-client">
                    <span className="client-label">Client</span>
                    <span className="client-name">{project.client}</span>
                  </div>
                  <button 
                    className="project-link-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    Read Story <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleProjects < filteredProjects.length && (
          <div className="projects-modern__load-more">
            <button 
              className="load-more-btn"
              onClick={() => setVisibleProjects(prev => prev + 3)}
            >
              Load More Projects <FiArrowRight />
            </button>
          </div>
        )}

        {/* CTA Banner */}
        <div className="projects-modern__cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's create something amazing together</p>
          </div>
          <button className="cta-button" onClick={scrollToContact}>
            Start a Project <FiArrowRight />
          </button>
        </div>
      </div>

      <CaseStudyModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={scrollToContact}
      />
    </section>
  );
};

export default Projects;