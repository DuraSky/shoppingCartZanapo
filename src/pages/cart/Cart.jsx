import React, { useState, useEffect, useContext } from "react";
import {
  getCartPrice,
  getFreeShippingMessage,
  getProgressShipping,
} from "../utils/cartUtil";
import "./cartStyle.scss";
import CartItem from "./CartItem";
import { CartContext } from "./CartProvider";

const ShoppingCart = ({ showDiscountForm, setShowDiscountForm }) => {
  const { state } = useContext(CartContext);
  const { cart, cartTotal } = state;

  const [discountCode, setDiscountCode] = useState("");
  const [showDiscountField, setShowDiscountField] = useState(false);

  useEffect(() => {
    console.log("Current state of the cart", cart);
  }, [cart]);

  const checkDiscountCode = (discountCode) => {
    if (discountCode === "sleva100") {
      console.log("spravny kod");
      setShowDiscountForm(false);
    } else {
      console.log("spatny kod");
    }
  };

  return (
    <>
      <div className="cart">
        <div className="cartHeaders">
          <h2>Produkt</h2>
          <h2>Dostupnost</h2>
          <h2>Množství</h2>
          <h2>Cena za kus</h2>
          <h2>Cena vc. DPH</h2>
          <h2>Removal</h2>
        </div>
        {cart.map((item, index) => (
          <CartItem key={item.id} item={item} index={index} />
        ))}
      </div>

      <div className="priceCalc">
        <h2>Celkova Cena</h2>
        <p>{cartTotal} Kč</p>
      </div>

      {showDiscountForm && (
        <div className="discount">
          <div>
            <input
              type="checkbox"
              id="displayForm"
              onClick={() => setShowDiscountField((prev) => !prev)}
            />
            <label htmlFor="displayForm">
              Mám dárkový poukaz, slevový kupón nebo kód na dárek
            </label>
          </div>
          {showDiscountField && (
            <div>
              <input
                type="text"
                placeholder="hi"
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                type="button"
                onClick={() => checkDiscountCode(discountCode)}
              >
                Pouzit slevu
              </button>
            </div>
          )}
        </div>
      )}

      <div className="progressBar">
        <h2>{getFreeShippingMessage(cart)}</h2>
        <div
          className="progress"
          style={{ height: "15px", width: "300px", backgroundColor: "#ccc" }}
        >
          <div
            className="progress-fill"
            style={{
              width: `${getProgressShipping(cart)}%`,
              height: "100%",
              backgroundColor: "#4caf50",
              textAlign: "center",
              lineHeight: "30px",
              color: "white",
            }}
          ></div>
          <p>{getCartPrice(cart)} / 4500</p>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
