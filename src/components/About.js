import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>about me</h2>
      <p>
        hi, i'm <span className="highlight-green">Hayk</span>. 
        i'm a <span className="highlight-purple">software developer</span> based in <span className="highlight-pink">Los Angeles, CA</span>.
      </p>
      
      <h2>programming</h2>
      <p>
        i'm best at <span className="highlight-green">Python</span>, 
        <span className="highlight-pink"> Java</span>, and 
        <span className="highlight-yellow"> JavaScript/TypeScript</span> but i'm always learning new languages and frameworks.
      </p>
    </section>
  );
}

export default About; 