import React from "react";
import "./App.css";
import Container from "./Component/Container";
import GlobalStyles from "./Component/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Container className="b" />
    </>
  );
}

export default App;
