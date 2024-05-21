import React from "react";
import { useContext } from "react";
import { ShippingContext } from "../ShippingProvider";

const ShippingPriceOptions = () => {
  const {
    selectedShippingOptions,
    setSelectedPaymentOption,
    selectedShippingOption,
    selectedPaymentOption,
    setSelectedPaymentOptionPrice,
  } = useContext(ShippingContext);

  const handlePriceMethodChange = (name, price) => {
    setSelectedPaymentOption(name);
    setSelectedPaymentOptionPrice(price);
  };

  return (
    <>
      {selectedShippingOptions.map((option, index) => (
        <div key={index} className="payOption">
          <label>
            <input
              type="radio"
              name="shippingPriceMethod"
              value={option.method}
              onChange={() => {
                handlePriceMethodChange(option.method, option.price);
              }}
              checked={selectedPaymentOption === option.method}
            />
            <p>{option.method}</p>
            <p>{option.price}</p>
          </label>
        </div>
      ))}
    </>
  );
};

export default ShippingPriceOptions;
