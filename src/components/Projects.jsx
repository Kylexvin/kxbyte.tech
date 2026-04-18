// src/components/Projects.jsx
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSelectedProject(null);
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <p className="section__label">Portfolio</p>
        <h2 className="section__heading">
          FEATURED <span>PROJECTS</span>
        </h2>
        <div className="section__line" />
        <p className="projects__description">
          Real problems, real solutions. Here's what we've built.
        </p>
      </div>

      <div className="projects__grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
            isHovered={hoveredCard === project.id}
            onHover={setHoveredCard}
          />
        ))}
      </div>

      <CaseStudyModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={scrollToContact}
      />

      <div className="projects__footer">
        <button className="projects__footer-btn" onClick={scrollToContact}>
          Start a project
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;