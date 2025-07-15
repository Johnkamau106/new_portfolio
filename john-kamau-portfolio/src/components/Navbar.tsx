import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">John Kamau</div>
      <ul className="navbar-links">
        <li>
          <Link to="hero" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="techstack" smooth={true} duration={500}>Tech Stack</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      <div className="navbar-toggle">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="toggle-label">
          <span className="toggle-inner"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;