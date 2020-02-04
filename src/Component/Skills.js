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
      img:
        "https://raw.githubusercontent.com/won-developer/img/master/HTML.png",
      level: "intermediate",
      text: ""
    },
    {
      id: 2,
      title: "CSS",
      img: "https://raw.githubusercontent.com/won-developer/img/master/CSS.png",
      level: "intermediate",
      text: ""
    },
    {
      id: 3,
      title: "JavaScript",
      img: "https://raw.githubusercontent.com/won-developer/img/master/JS.png",
      level: "intermediate",
      text: ""
    },
    {
      id: 4,
      title: "React",
      img:
        "https://raw.githubusercontent.com/won-developer/img/master/REACT_1.png",
      level: "basic",
      text: ""
    },
    {
      id: 5,
      title: "C",
      img: "https://raw.githubusercontent.com/won-developer/img/master/C.png",
      level: "basic",
      text: ""
    },
    {
      id: 6,
      title: "SQL",
      img: "https://raw.githubusercontent.com/won-developer/img/master/SQL.png",
      level: "basic",
      text: ""
    }
  ]);

  return (
    <div className="skills">
      <div className="skills__container">
        <div className="skills__title">Skills</div>
        <ul className="skills__list skill">
          {skillset.map(value => {
            return (
              <li
                className={`skills__list--${value.id} skills--list`}
                key={value.id}
              >
                <div className={`skill__inner--${value.title}`}>
                  <img src={value.img} alt={value.title} />
                  <span>{value.level}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
