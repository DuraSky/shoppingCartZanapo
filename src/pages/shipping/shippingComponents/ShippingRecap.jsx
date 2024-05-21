import React from "react";
import { useContext } from "react";
import { CartContext } from "../../cart/CartProvider";
import { ShippingContext } from "../ShippingProvider";

const ShippingRecap = () => {
  const { cart, cartTotal } = useContext(CartContext);
  const {
    selectedShippingOption,
    selectedShippingPrice,
    selectedPaymentOption,
    selectedPaymentOptionPrice,
  } = useContext(ShippingContext);

  const cartTotalCalc = () => {
    const result =
      cartTotal + selectedPaymentOptionPrice + selectedShippingPrice;
    return result;
  };

  return (
    <div className="recap">
      <h2>Rekaputilace objednavky</h2>
      <div>
        {cart.map((item, index) => {
          return (
            <div key={item.id} className="produktRecap">
              <p>{item.produkt}</p>
              <p>{item.mnozstvi}x</p>
              <p>{item.cena_za_kus * item.mnozstvi} Kč</p>
            </div>
          );
        })}
      </div>
      <div className="shippingRecap">
        <h3>Doprava:</h3>
        {selectedShippingOption}
        {selectedShippingPrice}
      </div>
      <div className="paymentRecap">
        <h3>Platba:</h3>
        {selectedPaymentOption}
        {selectedPaymentOptionPrice}
      </div>
      <div className="cartAndShippingTotal">
        <h2>Celkem</h2>
        {cartTotalCalc()}
      </div>
    </div>
  );
};

export default ShippingRecap;
