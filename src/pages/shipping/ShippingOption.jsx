import React, { useContext } from "react";
import { ShippingContext } from "./ShippingProvider";
import ShippingOptionMethod from "./ShippingOptionMethod";

const ShippingOption = () => {
  const { shippingOptions } = useContext(ShippingContext);

  if (!shippingOptions.deliveryOptions) {
    return <div>Loading...</div>; // Handle loading state if necessary
  }

  return (
    <>
      {shippingOptions.deliveryOptions.map((option, index) => (
        <div key={index}>
          <h2>{option.type}</h2>
          <ShippingOptionMethod methods={option.methods} />
        </div>
      ))}
    </>
  );
};

export default ShippingOption;
