import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./Component/Container";
import GlobalStyles from "./Component/GlobalStyles";
import Header from "./Component/Header";
import Mainfrom from "./Component/Mainform";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Container className="b" />
    </>
  );
}

export default App;
