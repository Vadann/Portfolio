import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Project Name",
      tech: "Tech1, Tech2, Tech3",
      description: "Brief project description goes here",
      link: "#"
    },
    // Add more projects...
  ];

  return (
    <section className="projects">
      <h2>projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={project.link} className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <p className="description">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects; 