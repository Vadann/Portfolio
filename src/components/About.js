import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>about me</h2>
      <p>
        hi, i'm <span className="highlight-green">[your name]</span>. 
        i'm a <span className="highlight-purple">software developer</span> based in <span className="highlight-pink">[your location]</span>.
      </p>
      
      <h2>programming</h2>
      <p>
        i specialize in <span className="highlight-yellow">web development</span> and 
        <span className="highlight-purple"> full-stack applications</span>
      </p>
      
      <h2>tech stack</h2>
      <p>
        frontend: <span className="highlight-pink">react, javascript, html/css</span><br/>
        backend: <span className="highlight-green">python, django</span><br/>
        databases: <span className="highlight-yellow">postgresql</span><br/>
        tools: <span className="highlight-purple">git, railway</span>
      </p>
    </section>
  );
}

export default About; 