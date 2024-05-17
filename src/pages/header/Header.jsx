import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Zanapo Shop</h1>
      <div>
        <NavLink to="/" activeClassName="active-link">
          Cart
        </NavLink>
        <NavLink to="/shipping" activeClassName="active-link">
          Shipping
        </NavLink>
      </div>
    </>
  );
};

export default Header;
