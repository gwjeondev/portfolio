import React, { useState } from "react";
import "../css/projects.css";
import "../css/Tablet/tablet_projects.css";
import "../css/Moblie/moblie_projects.css";
import styled from "styled-components";

const Projects = () => {
  const [projectSet, setProjectSet] = useState([
    {
      id:1,
      title:'Kakao Talk',
      url:'https://won-developer.github.io/kakao-clone/',
      image: 'https://raw.githubusercontent.com/won-developer/img/master/kakao_img.png',
      uselang: 'HTML + CSS'
    },
    {
      id:2,
      title:'Github',
      url:'https://won-developer.github.io/github-clone/',
      image: 'https://raw.githubusercontent.com/won-developer/img/master/github_img.png',
      uselang: 'HTML + CSS + JS'
    },
    {
      id:3,
      title:'TodoList',
      url:'https://won-developer.github.io/mommentum-clone/',
      image: 'https://raw.githubusercontent.com/won-developer/img/master/todolist_img.png',
      uselang: 'HTML + CSS + JS'
    },
    {
      id:4,
      title:'Movie App',
      url:'https://won-developer.github.io/first_react_movie_app/',
      image: 'https://raw.githubusercontent.com/won-developer/img/master/movie_app_img.png',
      uselang: 'HTML + CSS + JS + REACT'
    }
  ]);
  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__title">Projects</div>
        <ul className="projects__list project">
            {projectSet.map(value => {
                return <li className={`project__list--${value.id} project--list`} key={value.id}>
            <div className="project__title">{value.title}</div>
                    <a href={value.url} target="_blank" className="project__view">
                    <img src={value.image} alt={value.title}/>
                    </a>
            <div className="project__uselang">{value.uselang}</div>
                </li>
            })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
