import React from 'react';
import './Technologies.css';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiSpringboot,
  SiRailway
} from 'react-icons/si';

function Technologies() {
  const techs = [
    // Frontend Core
    { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS", color: "#1572B6" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    
    // Frontend Framework
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    
    // Backend Languages & Frameworks
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <SiDjango />, name: "Django", color: "#092E20" },
    { icon: <FaJava />, name: "Java", color: "#ED8B00" },
    { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
    
    // Databases
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
    
    // Version Control & Deployment
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <FaGithub />, name: "GitHub", color: "#ffffff" },
    { icon: <SiRailway />, name: "Railway", color: "#0B0D0E" }
  ];

  return (
    <section className="technologies" id="technologies">
      <h2>technologies</h2>
      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div 
            key={tech.name} 
            className="tech-item"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div 
              className="tech-icon"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies; 