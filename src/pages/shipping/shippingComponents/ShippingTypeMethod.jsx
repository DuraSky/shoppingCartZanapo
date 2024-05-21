import React, { useContext, useState } from "react";
import { ShippingContext } from "../ShippingProvider";

// Toto generuje variace doruceni, jako Balikovna, PPL, Zasilkovna

const ShippingOptionMethod = ({ methods }) => {
  const {
    selectedShippingOption,
    setSelectedShippingOption,
    setSelectedShippingPrice,
    setSelectedShippingOptions,
    setSelectedPaymentOption,
    setSelectedPaymentOptionPrice,
  } = useContext(ShippingContext);

  const handleShippingSelect = (method, price, options) => {
    setSelectedShippingOption(method);
    setSelectedShippingPrice(price);
    setSelectedShippingOptions(options);
    setSelectedPaymentOption(null); //state reset when different type of delivery is selected
    setSelectedPaymentOptionPrice(null);
  };

  return (
    <>
      {methods.map((method, index) => (
        <div key={index} className="shippingTypeMethods">
          <label>
            <input
              type="radio"
              name="shippingMethod"
              value={method.name}
              onChange={() =>
                handleShippingSelect(method.name, method.price, method.options)
              }
              checked={selectedShippingOption === method.name}
            />
            <p>{method.name}</p>
            <p>{method.canShipDate}</p>
            <p>{method.price}</p>
          </label>
        </div>
      ))}
    </>
  );
};

export default ShippingOptionMethod;
