import React from "react";
import { useContext } from "react";
import { CartContext } from "../cart/CartProvider";
import { ShippingContext } from "../shipping/ShippingProvider";
import { ItemListing } from "./components/itemListing/ItemListing";
import { ShippingRecap } from "./components/shippingRecap/ShippingRecap";
import { PaymentRecap } from "./components/paymentRecap/PaymentRecap";
import { CartAndShippingTotal } from "./components/cartAndShippingTotal/CartAndShippingTotal";
import { StyledRecap } from "./recapStyle";

const Recap = () => {
  const { state: cartState } = useContext(CartContext);
  const { state: shippingState } = useContext(ShippingContext);

  const { cart, cartTotal } = cartState;
  const {
    selectedShippingOption,
    selectedShippingPrice,
    selectedPaymentOption,
    selectedPaymentOptionPrice,
  } = shippingState;

  const cartTotalCalc = () => {
    console.log(
      "in calc" + cartTotal + selectedPaymentOptionPrice + selectedShippingPrice
    );
    const result =
      cartTotal + selectedPaymentOptionPrice + selectedShippingPrice;
    return result;
  };
  return (
    <StyledRecap>
      <h2>Rekaputilace objednavky</h2>

      <ItemListing cart={cart} />

      <ShippingRecap
        selectedShippingOption={selectedShippingOption}
        selectedShippingPrice={selectedShippingPrice}
      />

      <PaymentRecap
        selectedPaymentOption={selectedPaymentOption}
        selectedPaymentOptionPrice={selectedPaymentOptionPrice}
      />

      <CartAndShippingTotal cartTotalCalc={cartTotalCalc} />
    </StyledRecap>
  );
};

export default Recap;
