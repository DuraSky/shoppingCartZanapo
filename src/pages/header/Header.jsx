import React from "react";
import NavLinks from "./navlinks/NavLinks";

import { StyledNav } from "./headerStyle";
import { WrapperWithTopBar } from "./wrapper/WrapperWithTopBar";

const Header = () => {
  return (
    <StyledNav>
      <WrapperWithTopBar />
      <NavLinks />
    </StyledNav>
  );
};

export default Header;
