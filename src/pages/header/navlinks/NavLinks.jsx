import React from "react";
import { StyledLinksDiv, StyledNavLink } from "./navLinksStyle";

export const NavLinks = () => {
  return (
    <StyledLinksDiv>
      <StyledNavLink to="/kosik">Nakupni Kosik</StyledNavLink>
      <StyledNavLink to="/doprava">Doprava a platba</StyledNavLink>
      <StyledNavLink to="/info">Kontaktni Udaje</StyledNavLink>
    </StyledLinksDiv>
  );
};

export default NavLinks;
