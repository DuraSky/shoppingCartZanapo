import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartProvider";
import { ProgressBar } from "./progressBar/ProgressBar";
import { CartPriceCalc } from "./cartPriceCalc/CartPriceCalc";
import { DiscountCodeBar } from "./discountCodeBar/DiscountCodeBar";
import { AllCartItems } from "./cartItems/AllCartItems";

const ShoppingCart = ({ showDiscountForm, setShowDiscountForm }) => {
  const { state } = useContext(CartContext);
  const { cart, cartTotal } = state;

  const [discountCode, setDiscountCode] = useState("");
  const [showDiscountField, setShowDiscountField] = useState(false);

  useEffect(() => {
    console.log("Current state of the cart", cart);
  }, [cart]);

  const checkDiscountCode = (code) => {
    if (code === "sleva100") {
      console.log("spravny kod");
      setShowDiscountForm(false);
    } else {
      console.log("spatny kod");
    }
  };

  return (
    <>
      <AllCartItems cart={cart} />

      <CartPriceCalc cartTotal={cartTotal} />

      <DiscountCodeBar
        setShowDiscountForm={setShowDiscountForm}
        showDiscountForm={showDiscountForm}
        showDiscountField={showDiscountField}
        setShowDiscountField={setShowDiscountField}
        setDiscountCode={setDiscountCode}
        discountCode={discountCode}
        handleCheckDiscountCode={checkDiscountCode}
      />

      <ProgressBar cart={cart} />
    </>
  );
};

export default ShoppingCart;
