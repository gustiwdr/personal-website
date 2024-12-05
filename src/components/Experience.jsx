import React from "react";

function Experience(props) {
  return (
    <div>
      {props.experienceData.map((experience, index) => (
        <div key={index} className="experience-card">
          <h2 className="experience-year">{experience.year}</h2>
          <div className="experience-container">
            <h2 className="experience-job">{experience.title}</h2>
            <p className="experience-desc">{experience.desc}</p>
            <div className="skills-container">
              {experience.skills.map((skills, index) => (
                <button key={index} className="skills">{skills}</button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;