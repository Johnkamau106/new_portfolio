import './Projects.css'
import projects from '../data/projects'

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-badges">
              {project.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className="links">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.demo} target="_blank">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects