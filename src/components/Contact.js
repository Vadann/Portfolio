import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [showCopied, setShowCopied] = useState(false);

  return (
    <section className="contact" id="contact">
      <h2>contact</h2>
      
      <div className="contact-container">
        <div className="email-section">
          <p className="contact-text">Get in touch</p>
          <a href="mailto:[your-email]" className="email-link">
            <FaEnvelope className="email-icon" />
            <span className="highlight-green">haykvadan@gmail.com</span>
          </a>
        </div>

        <div className="social-section">
          <p className="contact-text">Follow Me!</p>
          <div className="social-container">
            <div className="social-links">
              <a href="https://github.com/Vadann" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/haykvardapetyan/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <div className="discord-wrapper">
                <a href="#" className="social-icon" onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText('vadannn');
                  setShowCopied(true);
                  setTimeout(() => setShowCopied(false), 2000);
                }}>
                  <FaDiscord />
                </a>
                {showCopied && <span className="copied-message">Copied!</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Contact Form */}
      {/*
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <textarea
            name="message"
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn">send message</button>
      </form>
      */}
    </section>
  );
}

export default Contact; 