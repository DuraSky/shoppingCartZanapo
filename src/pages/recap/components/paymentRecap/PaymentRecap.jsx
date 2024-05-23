import React from "react";
import { StyledPaymentRecap } from "./paymentRecapStyle";

export const PaymentRecap = ({
  selectedPaymentOption,
  selectedPaymentOptionPrice,
}) => {
  return (
    <StyledPaymentRecap>
      <h3>Platba:</h3>
      {selectedPaymentOption}
      {selectedPaymentOptionPrice}
    </StyledPaymentRecap>
  );
};
