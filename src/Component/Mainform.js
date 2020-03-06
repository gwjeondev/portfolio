import React from "react";
import "../css/mainform.css";
import "../css/Tablet/tablet_mainform.css";
import "../css/Moblie/moblie_mainform.css";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const Mainform = ({title}) => {

    return (
    <div className="mainform">
      <div className="mainform__container">
        <div className="mainform__shadow">
          <span className="mainform__title"><Typist avgTypingDelay = {150}>< Typist.Delay ms = { 500 } />{title}</Typist></span>
        </div>
      </div>
    </div>
  );
};

export default Mainform;
