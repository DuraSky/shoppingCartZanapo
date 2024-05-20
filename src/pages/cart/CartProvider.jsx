import React, { createContext, useState, useEffect, useMemo } from "react";
import { cartLoader } from "../utils/loader";
import { getCartPrice } from "../utils/cartUtil";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const initialCart = await cartLoader();
      setCart(initialCart);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const total = getCartPrice(cart);
    setCartTotal(total);
  }, [cart]);

  const value = useMemo(
    () => ({
      cart,
      setCart,
      cartTotal,
      setCartTotal,
    }),
    [cart, cartTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
