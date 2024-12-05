import React from "react";

function Projects(props) {
  return (
    <div className="project-container">
      {props.projectData.map((project, index) => (
        <div key={index} className="project-list">
          <a className="project-name" href={project.github} target="_blank" rel="noopener noreferrer">{project.title}</a>
          <p className="project-desc">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Live Project</button>
          </a>
          <div className="skills-container">
            {project.skills.map((skills, index) => (
              <button key={index} className="skills">{skills}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;