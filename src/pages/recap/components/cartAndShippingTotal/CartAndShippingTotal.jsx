import React from "react";
import { StyledCartAndShippingTotal } from "./cartAndShippingTotalStyle";

export const CartAndShippingTotal = ({ cartTotalCalc }) => {
  return (
    <StyledCartAndShippingTotal>
      <h2>Celkem</h2>
      {cartTotalCalc()}
    </StyledCartAndShippingTotal>
  );
};
