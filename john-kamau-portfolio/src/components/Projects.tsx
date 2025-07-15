import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/path/to/image1.jpg',
    link: 'https://link-to-project-one.com',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/path/to/image2.jpg',
    link: 'https://link-to-project-two.com',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    image: '/path/to/image3.jpg',
    link: 'https://link-to-project-three.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;