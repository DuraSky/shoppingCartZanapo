import { useState, useEffect, React } from "react";
import {
  removeFromCart,
  changeQuantity,
  getCartPrice,
  getFreeShippingMessage,
  getProgressShipping,
} from "./utils/cartUtil";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [discountField, setDiscountField] = useState(true);

  useEffect(() => {
    fetch("./assets/products.json")
      .then((response) => response.json())
      .then((data) => setCart(data.cart))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  //Console logger to check cart status on every update
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <div className="insideTheCart">
        <h1 className="text-2xl font-bold text-gray-900">Kosik:</h1>
        <div className="flex flex-col gap-4">
          {cart.map((item, index) => (
            <div key={index} className="flex gap-40">
              <div className="">
                <h2>Produkt</h2>
                <p>{item.produkt}</p>
              </div>
              <div>
                <h2>Dostupnost</h2>
                <p>{item.dostupnost}</p>
              </div>
              <div>
                <h2>Mnozstvi</h2>
                <input
                  type="number"
                  value={item.mnozstvi}
                  onChange={(event) =>
                    setCart((prevCart) =>
                      changeQuantity(prevCart, event.target.value, index)
                    )
                  }
                  className="w-12 text-center border border-gray-300 rounded"
                />
              </div>
              <div>
                <h2>Cena za kus</h2>
                <p>{item.cena_za_kus}</p>
              </div>
              <div>
                <h2>Cena vc. DPH</h2>
                <p>{item.mnozstvi * item.cena_za_kus}</p>
              </div>
              <div>
                <h2>Removal</h2>
                <button
                  type="button"
                  onClick={() =>
                    setCart((prevCart) => removeFromCart(prevCart, index))
                  }
                  className="bg-red-500 hover:bg-red-700 text-white font-bold px-1 rounded"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="priceCalc">
        <h2 className="font-bold text-gray-900">Celkova Cena</h2>
        <p>{getCartPrice(cart)} Kč</p>
      </div>
      <div className="discountCode">
        {discountField && (
          <div>
            <label>
              Mám dárkový poukaz, slevový kupón nebo kód na dárek
              <input type="checkbox" />
            </label>
            <input type="text" placeholder="hello world"></input>
          </div>
        )}
      </div>
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
