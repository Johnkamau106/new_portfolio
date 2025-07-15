import React from 'react';
import './animations.css';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-background">
      <div className="floating-code">
        <pre>
          {`const john = {
  name: "John Kamau",
  profession: "Web Developer",
  skills: ["React", "TypeScript", "CSS", "Node.js"]
};`}
        </pre>
      </div>
      <div className="circuit-pattern">
        {/* Circuit pattern SVG or CSS animation can be added here */}
      </div>
    </div>
  );
};

export default AnimatedBackground;