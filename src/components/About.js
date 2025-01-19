import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>about me</h2>
      <p>
        [Your intro] @ [Your school/work]. i do [your specialties]
      </p>
      
      <h2>programming</h2>
      <p>
        i'm best at [your primary languages] but i'm learning [languages you're learning]
      </p>
      
      <h2>tech stack</h2>
      <p>
        frontend: [your frontend tech]<br/>
        backend: [your backend tech]<br/>
        platforms: [your platforms]<br/>
        databases: [your databases]
      </p>
    </section>
  );
}

export default About; 