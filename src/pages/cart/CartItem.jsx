import React, { useContext } from "react";
import { CartContext, actionTypes } from "./CartProvider";
import "./cartStyle.scss";

const CartItem = ({ item, index }) => {
  const { dispatch } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    if (value > 0) {
      dispatch({
        type: actionTypes.CHANGE_QUANTITY,
        payload: { index, value },
      });
    }
  };

  const handleRemove = () => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: index });
  };

  return (
    <div key={index} className="cartItem">
      <div>
        <p>{item.produkt}</p>
      </div>
      <div>
        <p>{item.dostupnost}</p>
      </div>
      <div>
        <input
          type="number"
          value={item.mnozstvi}
          onChange={handleQuantityChange}
          className="w-12 text-center border border-gray-300 rounded"
        />
      </div>
      <div>
        <p>{item.cena_za_kus}</p>
      </div>
      <div>
        <p>{item.mnozstvi * item.cena_za_kus}</p>
      </div>
      <div>
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
