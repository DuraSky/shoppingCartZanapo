import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { cartLoader, apiLoader } from "../utils/loader";
import { initialState, actionTypes, cartReducer } from "./cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialCart = await cartLoader();
        // const initialCart = await apiLoader();
        if (initialCart) {
          dispatch({ type: actionTypes.SET_CART, payload: initialCart });
        } else {
          console.error("Failed to load cart data");
        }
      } catch (error) {
        console.error("Fetch data error:", error);
      }
    };
    fetchData();
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { actionTypes };
