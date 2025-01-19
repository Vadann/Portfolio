import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}

export default Header; 