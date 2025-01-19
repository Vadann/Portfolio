import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    'JavaScript',
    'React',
    'HTML5',
    'CSS3',
    'Git',
    // Add more skills here
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 