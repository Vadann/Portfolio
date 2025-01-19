import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <main>
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App; 