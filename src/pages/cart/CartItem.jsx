import React from "react";
import { removeFromCart, changeQuantity } from "../utils/cartUtil";

const CartItem = ({ item, setCart, index }) => {
  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setCart((prevCart) => changeQuantity(prevCart, value, index));
  };

  const handleRemove = () => {
    setCart((prevCart) => removeFromCart(prevCart, index));
  };

  return (
    <div key={index} className="flex gap-40">
      <div>
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
          onChange={handleQuantityChange}
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
          onClick={handleRemove}
          className="bg-red-500 hover:bg-red-700 text-white font-bold px-1 rounded"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
