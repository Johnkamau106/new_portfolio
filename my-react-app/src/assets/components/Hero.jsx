import './Hero.css'
import profile from '../assets/profile.jpg'

function Hero() {
  return (
    <section className="hero" id="hero">
      <img src={profile} alt="John Kamau" className="profile-img" />
      <h1>Hi, I'm John Kamau</h1>
      <p>A Full-Stack Software Engineer who builds clean, impactful software with passion for React & Python</p>
      <div className="cta-buttons">
        <a href="#projects" className="btn">View My Work</a>
        <a href="/resume.pdf" className="btn" download>Download Resume</a>
      </div>
    </section>
  )
}

export default Hero