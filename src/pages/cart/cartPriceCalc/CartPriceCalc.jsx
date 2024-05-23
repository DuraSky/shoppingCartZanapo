import React from "react";
import { StyledPriceCalc } from "./cartPriceCalcStyle";

export const CartPriceCalc = ({ cartTotal }) => {
  return (
    <StyledPriceCalc>
      <h3>Celkova Cena</h3>
      <p>{cartTotal} Kč</p>
    </StyledPriceCalc>
  );
};
