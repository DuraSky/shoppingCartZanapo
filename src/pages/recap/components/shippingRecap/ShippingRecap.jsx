import React from "react";
import { StyledShippingRecap } from "./shippingRecapStyle";

export const ShippingRecap = ({
  selectedShippingOption,
  selectedShippingPrice,
}) => {
  return (
    <StyledShippingRecap>
      <h3>Doprava:</h3>
      {selectedShippingOption}
      {selectedShippingPrice}
    </StyledShippingRecap>
  );
};
