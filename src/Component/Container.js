import React from "react";
import Header from "./Header";
import Mainfrom from "./Mainform";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import styled from "styled-components";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const Container = () => {
  return (
    <>
      <Element name="Home">
        <Header/>
      </Element>
      <div className="body__container">
        <Mainfrom title={'Front-end 개발자 전근원 입니다.'} />
        <Element name="About">
          <About/>
        </Element>
        <Element name="Skills">
          <Skills/>
        </Element>
        <Element name="Projects">
          <Projects/>
        </Element>
        <Element name="Contact">
          <Contact/>
        </Element>
      </div>
    </>
  );
};

export default Container;
