import React, { useContext, useState, useEffect } from "react";
import { ShippingContext } from "../ShippingProvider";
import ShippingOptionMethod from "./ShippingTypeMethod";

const ShippingOption = () => {
  const { shippingOptions, selectedShippingOption } =
    useContext(ShippingContext);

  if (!shippingOptions.deliveryOptions) {
    return <div>Loading...</div>; // Handle loading state if necessary
  }

  const [openOptionIndex, setOpenOptionIndex] = useState(null);

  useEffect(() => {
    // Check if any of the methods are selected and set the corresponding index to open
    shippingOptions.deliveryOptions.forEach((option, index) => {
      option.methods.forEach((method) => {
        if (method.name === selectedShippingOption) {
          setOpenOptionIndex(index);
        }
      });
    });
  }, [shippingOptions, selectedShippingOption]);

  const toggleOption = (index) => {
    setOpenOptionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {shippingOptions.deliveryOptions.map((option, index) => (
        <div key={index} className="shippingTypes">
          <h2 onClick={() => toggleOption(index)} style={{ cursor: "pointer" }}>
            {option.type}
          </h2>
          {openOptionIndex === index && (
            <ShippingOptionMethod methods={option.methods} />
          )}
        </div>
      ))}
    </>
  );
};

export default ShippingOption;
