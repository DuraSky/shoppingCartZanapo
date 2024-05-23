import React from "react";
import { StyledWrapper, TopBar } from "./wrapperStyle";
import logo from "../../../../public/assets/logoZanapo.svg";

export const WrapperWithTopBar = () => {
  return (
    <StyledWrapper>
      <TopBar>
        <img src={logo} width="300px" alt="" />
        <p>info@zanapo.cz</p>
      </TopBar>
    </StyledWrapper>
  );
};
