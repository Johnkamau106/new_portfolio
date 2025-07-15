import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import './styles/app.css';
import './styles/animations.css';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <div>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
};

export default App;