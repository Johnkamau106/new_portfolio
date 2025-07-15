import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          {/* Add your personal description here */}
          Passionate full-stack developer with experience in building modern web applications...
        </p>
        <div className="badges">
          <span>Fast Learner</span>
          <span>Problem Solver</span>
          <span>Team Player</span>
          <span>Detail-Oriented</span>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Full-Stack Developer</h3>
          <span>Freelance, 2023-Present</span>
        </div>
        <div className="timeline-item">
          <h3>Software Engineering Student</h3>
          <span>Moringa School, 2022-2023</span>
        </div>
      </div>
    </section>
  )
}

export default About