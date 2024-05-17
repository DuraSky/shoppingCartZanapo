import { useState, useEffect, React } from "react";
import {
  getCartPrice,
  getFreeShippingMessage,
  getProgressShipping,
} from "../utils/cartUtil";

import CartItem from "./CartItem";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  //staty pro slevovy kupon
  const [discountCode, setDiscountCode] = useState("");
  const [showDiscountForm, setShowDiscountForm] = useState(true); //for the whole form element, display on load
  const [showDiscountField, setShowDiscountField] = useState(false); //only for the input element, don't display on load

  //fetch jsonu
  useEffect(() => {
    fetch("./assets/products.json")
      .then((response) => response.json())
      .then((data) => setCart(data.cart))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  // Console logger to check cart status on every update
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // prozatimni kontrola slevoveho kodu
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
      <div className="insideTheCart">
        <h1 className="text-2xl font-bold text-gray-900">Kosik:</h1>
        <div className="flex flex-col gap-4">
          {cart.map((item, index) => (
            <CartItem
              key={item.id}
              item={item}
              index={index}
              setCart={setCart}
            />
          ))}
        </div>
      </div>

      {/* vypocet celkove ceny kosiku */}
      <div className="priceCalc">
        <h2 className="font-bold text-gray-900">Celkova Cena</h2>
        <p>{getCartPrice(cart)} Kč</p>
      </div>

      {/* conditional zobrazeni formu na slevu */}
      {showDiscountForm && (
        <div className="checkBox flex flex-col">
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

      {/* progress bar */}
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
