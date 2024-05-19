import React from "react";
import { NavLink } from "react-router-dom";

import "./headerStyle.scss";
import logo from "../../../public/assets/logoZanapo.svg";

const Header = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="topbar">
          <img src={logo} width="300px" alt="" />
          <p>info@zanapo.cz</p>
        </div>
      </div>
      <div className="navLinks">
        <NavLink to="/">Nakupni Kosik</NavLink>
        <NavLink to="/shipping">Doprava a platba</NavLink>
        <NavLink to="/info">Kontaktni Udaje</NavLink>
      </div>
    </nav>
  );
};

export default Header;
