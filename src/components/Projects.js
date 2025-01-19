import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';  // First run: npm install react-icons

function Projects() {
  const projects = [
    {
      title: "InsightWrite",
      tech: ["python", "django", "railway"],
      description: "A journaling web application with integrated mood tracking, calendar, and motivational features.",
      link: "https://github.com/Vadann/InsightWrite"
    },
    {
      title: "DreamScripts Automation",
      tech: ["java", "dreambot api", "automation"],
      description: "An automation software with multiboxing capabilities, featuring dynamic item processing and advanced crafting systems.",
      link: "https://github.com/Vadann/DreamScripts"
    },
    {
      title: "Movie Recommendation System",
      tech: ["python", "pandas", "scikit-learn", "streamlit"],
      description: "A movie recommendation system utilizing TMDB API and Kaggle dataset to suggest films based on user preferences and viewing history.",
      link: "https://github.com/Vadann/Movie-Recommender"
    }
  ];

  return (
    <section className="projects">
      <h2>projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={project.link} className="project-card" key={index} target="_blank" rel="noopener noreferrer">
            <div className="card-header">
              <h3>{project.title}</h3>
              <FaGithub className="github-icon" />
            </div>
            <p className="tech">
              {project.tech.map((tech, i) => (
                <span key={i} className={`highlight-${i % 3 === 0 ? 'green' : i % 3 === 1 ? 'purple' : 'pink'}`}>
                  {tech}{i !== project.tech.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </p>
            <p className="description">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects; 