import React, { useEffect, useRef } from 'react';
import './About.css';
import Typed from 'typed.js';

function About() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['software developer', 'problem solver', 'tech enthusiast'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 1500,
        showCursor: true,
        cursorChar: '|'
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="about" id="about">
      <h1 className="name-title">HAYK VARDAPETYAN</h1>
      <h2>about me</h2>
      <p>
        hi, i'm <span className="highlight-green name-text animate-name">Hayk</span>. 
        i'm a{' '}
        <span className="highlight-purple">
          <span ref={typedRef}></span>
        </span>{' '}
        based in <span className="highlight-pink">Los Angeles, CA</span>.
      </p>
      
      <p>
        i'm passionate about <span className="highlight-yellow">full-stack development</span> and 
        <span className="highlight-purple"> machine learning</span>, always eager to learn and build innovative solutions.
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