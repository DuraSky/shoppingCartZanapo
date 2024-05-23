import React, { useContext } from "react";
import { CartContext, actionTypes } from "../CartProvider";

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
    <>
      <p>{item.produkt}</p>
      <p>{item.dostupnost}</p>
      <input
        type="number"
        value={item.mnozstvi}
        onChange={handleQuantityChange}
        className="w-12 text-center border border-gray-300 rounded"
      />
      <p>{item.cena_za_kus}</p>
      <p>{item.mnozstvi * item.cena_za_kus}</p>
      <button
        type="button"
        onClick={handleRemove}
        className="bg-red-500 hover:bg-red-700 text-white font-bold px-1 rounded"
      >
        X
      </button>
    </>
  );
};

export default CartItem;
