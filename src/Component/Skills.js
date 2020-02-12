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
    <div className="skills">
      <div className="skills__container">
        <div className="skills__title">Skills</div>
        <div className="skills__set">
          {skillset.map(skill => {
            return (
              <div className={`skills__${skill.title} skill`} key={skill.id}>
                <div className={`${skill.title}`}><span>{skill.level}</span></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
