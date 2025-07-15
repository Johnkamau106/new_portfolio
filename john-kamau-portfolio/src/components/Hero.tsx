import React from 'react';
import './Hero.css'; // Assuming you will create a Hero.css for specific styles

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">John Kamau</h1>
        <p className="hero-subtitle">Welcome to my portfolio</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/path/to/profile-image.jpg" alt="John Kamau" />
      </div>
    </section>
  );
};

export default Hero;