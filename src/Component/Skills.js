import React, { useState } from "react";
import "../css/skills.css";
import "../css/Tablet/tablet_skills.css";
import "../css/Moblie/moblie_skills.css";

const Skills = () => {
  const [skillset, setSkillset] = useState([
    {
      id: 1,
      title: "HTML",
      level: "intermediate"
    },
    {
      id: 2,
      title: "CSS",
      level: "intermediate"
    },
    {
      id: 3,
      title: "JavaScript",
      level: "intermediate"
    },
    {
      id: 4,
      title: "React",
      level: "basic"
    },
    {
      id: 5,
      title: "NodeJS",
      level: "basic"
    },
    {
      id: 6,
      title: "MongoDB",
      level: "basic"
    },
    {
      id: 7,
      title: "C",
      level: "basic"
    },
    {
      id: 8,
      title: "SQL",
      level: "basic"
    }
  ]);

  return (
    <div className="sks">
      <div className="sks__container">
        <div className="sks__title">Skills</div>
        <div className="sks__set">
          {skillset.map(skill => {
            return (
              <div className={`sks__${skill.title} sk`} key={skill.id}>
                <div className="sk__hoverbox"><span className="sk__level">{skill.level}</span></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
