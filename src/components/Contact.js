import React, { useState } from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Initialize EmailJS once, outside the component
console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function Contact() {
  const [showCopied, setShowCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Hayk",
        reply_to: formData.email,
      };

      console.log('Sending email with params:', {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        templateParams: templateParams
      });

      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      console.log('Success:', result);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>contact</h2>

      {/* Contact Form */}
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
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'sending...' : 'send message'}
        </button>

        {status === 'success' && (
          <div className="success-message">Message sent successfully!</div>
        )}
        {status === 'error' && (
          <div className="error-message">Failed to send message. Please try again.</div>
        )}
      </form>

      <div className="contact-container">
        <div className="email-section">
          <p className="contact-text">Get in touch</p>
          <a href="mailto:haykvadan@gmail.com" className="email-link">
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
    </section>
  );
}

export default Contact; 