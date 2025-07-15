import React from 'react';
import './app.css'; // Importing main styles
import './animations.css'; // Importing animations

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-description">
        Hi, I'm John Kamau, a passionate web developer with a knack for creating dynamic and responsive web applications. I specialize in building user-friendly interfaces and have a strong foundation in both frontend and backend technologies.
      </p>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skills-badges">
          <span className="badge">JavaScript</span>
          <span className="badge">React</span>
          <span className="badge">TypeScript</span>
          <span className="badge">Node.js</span>
          <span className="badge">CSS</span>
        </div>
      </div>
      <div className="experience-timeline">
        <h3>Experience</h3>
        <ul>
          <li>
            <strong>Web Developer</strong> - Company A (2021 - Present)
            <p>Developing and maintaining web applications using React and Node.js.</p>
          </li>
          <li>
            <strong>Frontend Developer</strong> - Company B (2019 - 2021)
            <p>Worked on various projects focusing on responsive design and user experience.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;