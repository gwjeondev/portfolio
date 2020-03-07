import React, { useState } from "react";
import "../css/projects.css";
import "../css/Tablet/tablet_projects.css";
import "../css/Moblie/moblie_projects.css";
import styled from "styled-components";

const Projects = () => {
  const [projectSet, setProjectSet] = useState([
    {
      id: 1,
      title: "Geunwon Board",
      url: "https://my-first-board.herokuapp.com/",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/geunwonboard.png",
      uselang: "Skills : Vanila JS, Node JS, Express, MongoDB, SCSS, Pug",
      projectintro: "프로젝트 소개",
      text: ["- Naver를 살짝 카피한 게시판","- Passport Local Login", "- 페이징", "- CkEditor", "- 게시글 검색, 업로드, 좋아요, 조회수", "- 댓글 & 답글"]
    },
    {
      id: 2,
      title: "Youtube Cloneing",
      url: "https://won-wetube.com",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/wetube.png",
      uselang: "Skills: Vanila JS, Node JS, Express, MongoDB, SCSS, Pug",
      projectintro: "프로젝트 소개",
      text: ["- 유튜브 따라 만들기", "- Passport Local, Github, Naver, Kakao Login", "- 영상 검색, 업로드, 녹화, 수정, 좋아요, 조회수",  "- 프로필 관리", "- 댓글", "- 반응형 웹"]
    },
    {
      id: 3,
      title: "Movie App",
      url: "https://won-developer.github.io/first_react_movie_app/",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/movie_app_img.png",
      uselang: "Skills: React",
      projectintro: "프로젝트 소개",
      text: ["- 영화 정보 API", "- React Hooks를 사용한 간단한 영화 소개"]
    },
    {
      id: 4,
      title: "TodoList",
      url: "https://won-developer.github.io/mommentum-clone/",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/todolist_img.png",
      uselang: "Skills: HTML, CSS, Vanila JS",
      projectintro: "프로젝트 소개",
      text: ["- 날씨 API", "- Local Storage에 목록 저장", "- 실시간 시간"]
    },
    {
      id: 5,
      title: "Github",
      url: "https://won-developer.github.io/github-clone/",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/github_img.png",
      uselang: "Skills: HTML, CSS, Vanila JS",
      projectintro: "프로젝트 소개",
      text: ["- Github 따라 만들기", "- 반응형 웹"]
    },
    {
      id: 6,
      title: "Kakao Talk",
      url: "https://won-developer.github.io/kakao-clone/",
      image:
        "https://raw.githubusercontent.com/won-developer/img/master/kakao_img.png",
      uselang: "Skills: HTML, CSS",
      projectintro: "프로젝트 소개",
      text: ["- Kakao Talk 따라 만들기", "- 모바일 화면에서만 적용"]
    },
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
              <a className="project__link" target="_blank" href={project.url}>
                <img
                  className="project__img"
                  src={project.image}
                  alt={`${project.title}_image`}
                />
              </a>
              <div className="project__info">
                <h2>{project.title}</h2>
                <h3>{project.projectintro}</h3>
                {project.text.map(text => {
                  return ( <span className="introlist" key={text}>{text}</span> );
                })}
                <span className="uselang">{project.uselang}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
