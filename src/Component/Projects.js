import React, { useState } from "react";
import "../css/projects.css";
import "../css/Tablet/tablet_projects.css";
import "../css/Moblie/moblie_projects.css";
import styled from "styled-components";

const Projects = () => {
  const [projectSet, setProjectSet] = useState([
    {
      id: 1,
      title: "Kakao Talk",
      url: "https://won-developer.github.io/kakao-clone/",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/kakao_img.png",
      uselang: "HTML / CSS / 모바일",
      text: "Kakao Talk 클론 코딩"
    },
    {
      id: 2,
      title: "Github",
      url: "https://won-developer.github.io/github-clone/",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/github_img.png",
      uselang: "HTML / CSS / JS / 반응형(Desktop,Tablet,Mobile)",
      text: "GitHub 클론 코딩"
    },
    {
      id: 3,
      title: "TodoList",
      url: "https://won-developer.github.io/mommentum-clone/",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/todolist_img.png",
      uselang: "HTML / CSS / JS",
      text: "현재 시간과 날씨 API를 활용, 날씨를 확인 할 수 있는 투두 리스트"
    },
    {
      id: 4,
      title: "Movie App",
      url: "https://won-developer.github.io/first_react_movie_app/",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/movie_app_img.png",
      uselang: "REACT",
      text:
        "영화 정보 API를 활용, React Hooks를 사용한 간단한 영화 소개"
    }
  ]);
  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__title">Projects</div>
        {projectSet.map(project => {
          return (
            <div
              className={`projects__list-${project.id} project`}
              key={project.id}
            >
              <a className="project__link" href={project.url}>
                <img
                  className="project__img"
                  src={project.image}
                  alt={`${project.title}_image`}
                />
              </a>
              <div className="project__info">
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <span>{project.uselang}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
