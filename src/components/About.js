import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>about me</h2>
      <p>
        hi, i'm <span className="highlight-green">[your name]</span>. 
        i'm a <span className="highlight-purple">[your role]</span> based in <span className="highlight-pink">[your location]</span>.
      </p>
      
      <h2>programming</h2>
      <p>
        i specialize in <span className="highlight-yellow">[your specialty]</span> and 
        <span className="highlight-purple"> [your focus area]</span>
      </p>
      
      <h2>tech stack</h2>
      <p>
        frontend: <span className="highlight-pink">[your frontend skills]</span><br/>
        backend: <span className="highlight-green">[your backend skills]</span><br/>
        databases: <span className="highlight-yellow">[your databases]</span><br/>
        tools: <span className="highlight-purple">[your tools]</span>
      </p>
    </section>
  );
}

export default About; 