import React, { useState } from "react";
import "../css/header.css";
import "../css/Tablet/tablet_header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const Header = () => {

  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  const [menu, setMenu] = useState([
    {
      id: 1,
      title: "Home"
    },
    {
      id: 2,
      title: "About"
    },
    {
      id: 3,
      title: "Skills"
    },
    {
      id: 4,
      title: "Projects"
    },
    {
      id: 5,
      title: "Contact"
    }
  ]);
  return (
    <header className="header">
      <div className={`header__container ${toggle ? '' : 'toggle'}`}>
        <ul className="header__list">
          {menu.map(title => {
            return (
              <li
                className={`header__list--${title.id} header--list`}
                key={title.id}
              >
                <Link
                  activeClass="active"
                  to={title.title}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {title.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <GiHamburgerMenu id="toggle-btn" className={`${toggle ? '' : 'toggle'}`}onClick={onClick}/>
    </header>
  );
};

export default Header;
