import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <p>I'm always open to new opportunities and collaborations.</p>
        <div className="contact-links">
          <a href="mailto:your.email@example.com" className="contact-link">
            Email
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact; 