import React, { useState } from "react";
import "../css/skills.css";
import styled from "styled-components";

// const Image = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 30px;
//   box-shadow: 0px 0px 20px rgba(150, 150, 150, 1);
//   margin: 30px;
// `;

// const imgstyle = {
//   width: "150px",
//   height: "150px",
//   borderRadius: "30px",
//   boxShadow: "0px 0px 20px rgba(150, 150, 150, 1)",
//   margin: "30px"
// };

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
      title: "C",
      level: "basic"
    },
    {
      id: 6,
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
