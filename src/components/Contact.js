import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>contact</h2>
      
      <div className="contact-container">
        <div className="email-section">
          <p className="contact-text">Get in touch</p>
          <a href="mailto:[your-email]" className="email-link">
            <FaEnvelope className="email-icon" />
            <span className="highlight-green">[your-email]</span>
          </a>
        </div>

        <div className="social-section">
          <p className="contact-text">Follow Me!</p>
          <div className="social-container">
            <div className="social-links">
              <a href="https://github.com/Vadann" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="[your-linkedin-url]" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon" onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText('[your-discord-username]');
              }}>
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 