import React from "react";
import { StyledProductRecap } from "./ItemListingStyle";

export const ItemListing = ({ cart }) => {
  return (
    <>
      {cart.map((item, index) => {
        return (
          <StyledProductRecap key={index}>
            <p>{item.name}</p>
            <p>{item.quantity}x</p>
            <p>{item.price * item.quantity} Kč</p>
          </StyledProductRecap>
        );
      })}
    </>
  );
};
