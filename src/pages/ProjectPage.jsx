import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import '../styles/ProjectPage.css';

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);
  const [imgError, setImgError] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  const isRichProject = !!project.intro;

  return (
    <div className="project-page">
      <div className="project-page__container">

        {/* Back Nav */}
        <button className="project-page__back" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back to projects
        </button>

        {/* Hero */}
        <div className="project-page__hero">
          <div className="project-page__hero-meta">
            <span className="project-page__category">{project.category || project.client}</span>
            {project.timeline && <span className="project-page__timeline">{project.timeline}</span>}
          </div>
          <h1>{project.title}</h1>
          {isRichProject && <p className="project-page__headline">{project.intro.headline}</p>}
          {isRichProject && <p className="project-page__summary">{project.intro.summary}</p>}

          <div className="project-page__tags">
            {project.tags.map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
            {project.platform?.map((p, idx) => <span key={idx} className="tag tag--platform">{p}</span>)}
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className={`project-page__mockup project-page__mockup--${project.mockupStyle || 'screen'}`}>
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={`${project.title} mockup`}
              className={`project-mockup-img project-mockup-img--${project.mockupStyle || 'screen'}`}
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="project-mockup-placeholder"
              style={{
                background: `linear-gradient(135deg, ${project.color}18, ${project.color}08)`,
                borderColor: `${project.color}22`
              }}
            >
              <span className="project-mockup-icon">{project.icon}</span>
              <span className="project-mockup-label">{project.title}</span>
            </div>
          )}
        </div>

        {/* Impact strip */}
        <div className="project-page__impact-strip">
          {(project.impact || project.results || []).map((item, idx) => (
            <div key={idx} className="impact-item">
              <span className="impact-value" style={{ color: project.color }}>{item.value || item.metric}</span>
              <span className="impact-label">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="project-page__body">

          {/* Context */}
          {isRichProject && project.context && (
            <section className="project-section project-section--context">
              <div className="section-label">Background</div>
              <p className="context-text">{project.context}</p>
            </section>
          )}

          {/* Challenges */}
          {isRichProject && project.challenge && (
            <section className="project-section">
              <div className="section-label">Challenges</div>
              <h2>What made this hard</h2>
              <div className="challenge-grid">
                {project.challenge.map((c, idx) => (
                  <div key={idx} className="challenge-card">
                    <span className="challenge-num" style={{ color: project.color }}>0{idx + 1}</span>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Approach */}
          {isRichProject && project.approach && (
            <section className="project-section project-section--approach">
              <div className="section-label">Approach</div>
              <h2>How we built it</h2>
              <p>{project.approach}</p>
            </section>
          )}

          {/* Architecture */}
          {isRichProject && project.architecture && (
            <section className="project-section">
              <div className="section-label">Architecture</div>
              <h2>System Stack</h2>
              <div className="arch-grid">
                {Object.entries(project.architecture).map(([layer, techs]) => (
                  <div key={layer} className="arch-layer">
                    <span className="arch-layer-name">{layer}</span>
                    <div className="arch-techs">
                      {techs.map((t, i) => <span key={i} className="tech-badge">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Features */}
          <section className="project-section">
            <div className="section-label">Features</div>
            <h2>What it does</h2>
            <div className="features-grid">
              {(isRichProject ? project.features : project.features.map(f => ({ title: f, description: '' }))).map((feature, idx) => (
                <div key={idx} className="feature-card" style={{ '--accent': project.color }}>
                  <h4>{feature.title}</h4>
                  {feature.description && <p>{feature.description}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Technical Highlights */}
          {isRichProject && project.technicalHighlights && (
            <section className="project-section project-section--tech">
              <div className="section-label">Engineering</div>
              <h2>Under the hood</h2>
              <ul className="tech-highlights">
                {project.technicalHighlights.map((t, idx) => (
                  <li key={idx}>
                    <span className="tech-dot" style={{ background: project.color }} />
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Lessons */}
          {isRichProject && project.lessons && (
            <section className="project-section project-section--lessons">
              <div className="section-label">Lessons</div>
              <blockquote className="lessons-quote">{project.lessons}</blockquote>
            </section>
          )}

          {/* Future */}
          {isRichProject && project.future && (
            <section className="project-section">
              <div className="section-label">What's Next</div>
              <h2>Future Direction</h2>
              <p className="future-text">{project.future}</p>
            </section>
          )}

          {/* CTA */}
          <section className="project-page__cta">
            <p>Interested in building something like this?</p>
            <div className="project-page__cta-links">
              <button onClick={() => {
                navigate('/#contact');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 200);
              }}>
                Let's talk
              </button>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cta-link">
                  <FiExternalLink /> View Live Site
                </a>
              )}
              {project.playStoreUrl && (
                <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="cta-link">
                  <FiExternalLink /> Play Store
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="cta-link cta-link--ghost">
                  View Repo
                </a>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ProjectPage;