import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">JK</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="mode-toggle">🌙</button>
    </nav>
  )
}

export default Navbar