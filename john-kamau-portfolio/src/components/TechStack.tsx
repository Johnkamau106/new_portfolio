import React from 'react';

const TechStack: React.FC = () => {
  const frontendSkills = ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML'];
  const backendSkills = ['Node.js', 'Express', 'MongoDB', 'SQL'];
  const tools = ['Git', 'Docker', 'Postman', 'Figma'];

  return (
    <section id="tech-stack" className="tech-stack">
      <h2>My Tech Stack</h2>
      <div className="skills-category">
        <h3>Frontend</h3>
        <ul>
          {frontendSkills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="skills-category">
        <h3>Backend</h3>
        <ul>
          {backendSkills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="skills-category">
        <h3>Tools</h3>
        <ul>
          {tools.map(tool => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;