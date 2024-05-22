import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { cartLoader } from "../utils/loader";
import { initialState, actionTypes, cartReducer } from "./cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const initialCart = await cartLoader();
      dispatch({ type: actionTypes.SET_CART, payload: initialCart });
    };
    fetchData();
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { actionTypes };
