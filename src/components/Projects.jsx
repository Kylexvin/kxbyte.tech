// src/components/Projects.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FiArrowRight, FiTrendingUp, FiUsers, FiClock } from 'react-icons/fi';
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

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [displayedProjects]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects__container">
        {/* Header - Compressed */}
        <div className="projects__header">
          <span className="projects__label">Portfolio</span>
          <h2 className="projects__title">
            Featured <span className="projects__title-accent">Projects</span>
          </h2>
          <p className="projects__subtitle">We build digital solutions that drive real business results.</p>
        </div>

        {/* Stats - Compressed */}
        <div className="projects__stats">
          <div className="projects__stat">
            <span className="projects__stat-number">150+</span>
            <span className="projects__stat-label">Projects</span>
          </div>
          <div className="projects__stat">
            <span className="projects__stat-number">98%</span>
            <span className="projects__stat-label">Satisfaction</span>
          </div>
          <div className="projects__stat">
            <span className="projects__stat-number">50+</span>
            <span className="projects__stat-label">Clients</span>
          </div>
          <div className="projects__stat">
            <span className="projects__stat-number">5+</span>
            <span className="projects__stat-label">Years</span>
          </div>
        </div>

        {/* Filters */}
        <div className="projects__filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`projects__filter ${activeFilter === filter ? 'projects__filter--active' : ''}`}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleProjects(6);
              }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-card__image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-card__placeholder">
                      <span>{project.icon || '🚀'}</span>
                    </div>
                  )}
                  <span className="project-card__category">{project.category || 'Web'}</span>
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  
                  <div className="project-card__tech">
                    {project.tech?.slice(0, 3).map((tech, i) => (
                      <span key={i} className="project-card__tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-card__results">
                    {project.results?.map((result, i) => (
                      <div key={i} className="project-card__result">
                        <span className="project-card__result-icon">
                          {result.type === 'increase' && <FiTrendingUp />}
                          {result.type === 'users' && <FiUsers />}
                          {result.type === 'time' && <FiClock />}
                        </span>
                        <div>
                          <span className="project-card__result-value">{result.value}</span>
                          <span className="project-card__result-label">{result.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="project-card__btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project <FiArrowRight />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="projects__empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Load More */}
        {visibleProjects < filteredProjects.length && (
          <div className="projects__load-more">
            <button 
              className="projects__load-btn"
              onClick={() => setVisibleProjects(prev => prev + 3)}
            >
              Load More <FiArrowRight />
            </button>
          </div>
        )}

        {/* CTA - Compressed */}
        <div className="projects__cta">
          <div>
            <h3>Have a project in mind?</h3>
            <p>Let's bring your vision to life.</p>
          </div>
          <button className="projects__cta-btn" onClick={scrollToContact}>
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