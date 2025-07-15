import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:john@example.com">john@example.com</a></p>
        <p>
          <a href="https://linkedin.com/in/johnkamau" target="_blank">LinkedIn</a> | 
          <a href="https://github.com/johnkamau" target="_blank">GitHub</a> | 
          <a href="https://twitter.com/johnkamau" target="_blank">Twitter</a>
        </p>
      </div>
      <form className="contact-form">
        {/* Add form fields and validation here */}
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact