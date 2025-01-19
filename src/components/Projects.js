import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      githubLink: 'https://github.com/yourusername/project1',
      technologies: ['React', 'Node.js']
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects; 