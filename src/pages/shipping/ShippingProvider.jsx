import React, { createContext, useState, useEffect, useMemo } from "react";
import { shippingLoader } from "../utils/loader";

export const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedShippingOption, setSelectedShippingOption] = useState(null);
  const [selectedShippingPrice, setSelectedShippingPrice] = useState(null);
  const [selectedShippingOptions, setSelectedShippingOptions] = useState([]);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [selectedPaymentOptionPrice, setSelectedPaymentOptionPrice] =
    useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const initialShipping = await shippingLoader();
      setShippingOptions(initialShipping);

      // Set default selected shipping option and price based on the first available method
      if (
        initialShipping.deliveryOptions &&
        initialShipping.deliveryOptions.length > 0
      ) {
        const firstOption = initialShipping.deliveryOptions[0].methods[0];
        setSelectedShippingOption(firstOption.name);
        setSelectedShippingPrice(firstOption.price);
        setSelectedShippingOptions(firstOption.options);
      }
    };
    fetchData();
  }, []);

  const value = useMemo(
    () => ({
      shippingOptions,
      setShippingOptions,

      selectedShippingOption,
      setSelectedShippingOption,

      selectedShippingPrice,
      setSelectedShippingPrice,

      selectedShippingOptions,
      setSelectedShippingOptions,

      selectedPaymentOption,
      setSelectedPaymentOption,

      selectedPaymentOptionPrice,
      setSelectedPaymentOptionPrice,
    }),
    [
      shippingOptions,
      selectedShippingOption,
      selectedShippingPrice,
      selectedShippingOptions,
      selectedPaymentOption,
      selectedPaymentOptionPrice,
    ]
  );

  return (
    <ShippingContext.Provider value={value}>
      {children}
    </ShippingContext.Provider>
  );
};
