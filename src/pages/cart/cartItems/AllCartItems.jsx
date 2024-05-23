import React from "react";
import CartItem from "./CartItem";
import { CartContainer, CartHeaders, CartItemRow } from "./allCartItemsStyle";

export const AllCartItems = ({ cart }) => {
  return (
    <CartContainer>
      <CartHeaders>
        <h2>Produkt</h2>
        <h2>Dostupnost</h2>
        <h2>Množství</h2>
        <h2>Cena za kus</h2>
        <h2>Cena vc. DPH</h2>
        <h2>Removal</h2>
      </CartHeaders>
      {cart.map((item, index) => (
        <CartItemRow key={item.id}>
          <CartItem item={item} index={index} />
        </CartItemRow>
      ))}
    </CartContainer>
  );
};

export default AllCartItems;
