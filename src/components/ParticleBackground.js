import React from 'react';
import './ParticleBackground.css';

function ParticleBackground() {
  // Large particles
  const largeParticles = Array.from({ length: 15 }, (_, i) => (
    <div 
      key={`large-${i}`} 
      className="particle large" 
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 15 + 20}s`,
        animationDelay: `${Math.random() * 5}s`
      }}
    />
  ));

  // Medium particles
  const mediumParticles = Array.from({ length: 25 }, (_, i) => (
    <div 
      key={`medium-${i}`} 
      className="particle medium" 
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 15 + 15}s`,
        animationDelay: `${Math.random() * 5}s`
      }}
    />
  ));

  // Small particles
  const smallParticles = Array.from({ length: 35 }, (_, i) => (
    <div 
      key={`small-${i}`} 
      className="particle small" 
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 15 + 10}s`,
        animationDelay: `${Math.random() * 5}s`
      }}
    />
  ));

  return (
    <div className="particle-container">
      {largeParticles}
      {mediumParticles}
      {smallParticles}
    </div>
  );
}

export default ParticleBackground; 