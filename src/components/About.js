import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="education">
        <h3>Education</h3>
        <div className="education-item">
          <h4>Your University</h4>
          <p>Your Degree</p>
          <p>Graduation Year</p>
        </div>
      </div>
    </section>
  );
}

export default About; 