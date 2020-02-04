import React, { useState } from "react";
import "../css/contact.css";
import styled from "styled-components";

const Contact = () => {
    return (
        <footer className="contact">
            <div className="contact__container">
                <div className="contact__title">Contact</div>
                <div className="contact__info">
                    <div className="contact__email">gw4609@gamil.com</div>
                    <div className="contact__cpyright">Copyright ⓒ 2020 geunwon Jeon All right reserved.</div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;