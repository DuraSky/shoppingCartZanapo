import { useState, useEffect, React } from "react";
import {
  //increaseQuantity,
  //decreaseQuantity,
  removeFromCart,
  changeQuantity,
  getCartPrice,
} from "./utils/cartUtil";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

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

  const handleRemoveFromCart = (itemIndex) => {
    setCart((prevCart) => removeFromCart(prevCart, itemIndex));
  };

  const handleItemChange = (value, index) => {
    setCart((prevCart) => changeQuantity(prevCart, value, index));
  };

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
                    handleItemChange(event.target.value, index)
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
                  onClick={() => handleRemoveFromCart(index)}
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
    </>
  );
};

export default ShoppingCart;
