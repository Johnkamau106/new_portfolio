import './Skills.css'
import skills from '../data/skills'

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((category) => (
          <div className="skills-category" key={category.title}>
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills