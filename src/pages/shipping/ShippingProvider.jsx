import React, { createContext, useState, useEffect, useMemo } from "react";
import { shippingLoader } from "../utils/loader";

export const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [shippingOptions, setShippingOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const initialShipping = await shippingLoader();

      setShippingOptions(initialShipping);
    };
    fetchData();
  }, []);

  const value = useMemo(
    () => ({
      shippingOptions,
      setShippingOptions,
    }),
    [shippingOptions]
  );

  return (
    <ShippingContext.Provider value={value}>
      {children}
    </ShippingContext.Provider>
  );
};
