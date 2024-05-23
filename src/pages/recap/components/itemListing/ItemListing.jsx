import React from "react";
import { StyledProductRecap } from "./ItemListingStyle";

export const ItemListing = ({ cart }) => {
  return (
    <>
      {cart.map((item, index) => {
        return (
          <StyledProductRecap key={item.id}>
            <p>{item.produkt}</p>
            <p>{item.mnozstvi}x</p>
            <p>{item.cena_za_kus * item.mnozstvi} Kč</p>
          </StyledProductRecap>
        );
      })}
    </>
  );
};
