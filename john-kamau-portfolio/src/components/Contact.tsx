import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <h3>Connect with me:</h3>
        <a href="https://github.com/johnkamau106" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/johnkamau106" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;