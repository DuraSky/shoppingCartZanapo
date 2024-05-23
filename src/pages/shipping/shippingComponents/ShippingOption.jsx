import React, { useContext, useState, useEffect } from "react";
import { ShippingContext, actionTypes } from "../ShippingProvider";
import { ShippingOptionMethod } from "./ShippingOptionMethod";

const ShippingOption = () => {
  const { state, dispatch } = useContext(ShippingContext);
  const { shippingOptions, selectedShippingOption } = state;

  const [openOptionIndex, setOpenOptionIndex] = useState(null);

  useEffect(() => {
    if (shippingOptions && shippingOptions.deliveryOptions) {
      let foundIndex = null;
      shippingOptions.deliveryOptions.forEach((option, index) => {
        option.methods.forEach((method) => {
          if (method.name === selectedShippingOption) {
            foundIndex = index;
          }
        });
      });
      setOpenOptionIndex(foundIndex);
    }
  }, [shippingOptions, selectedShippingOption]);

  const toggleOption = (index) => {
    setOpenOptionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleMethodSelection = (method) => {
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_OPTION,
      payload: method.name,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_PRICE,
      payload: method.price,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_OPTIONS,
      payload: method.options,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION,
      payload: null,
    });
  };

  // Ensure shippingOptions is defined to avoid errors
  const deliveryOptions = shippingOptions?.deliveryOptions || [];

  return (
    <>
      {deliveryOptions.map((option, index) => (
        <div key={index} className="shippingTypes">
          <h2 onClick={() => toggleOption(index)} style={{ cursor: "pointer" }}>
            {option.type}
          </h2>
          {openOptionIndex === index && (
            <ShippingOptionMethod
              methods={option.methods}
              onSelectMethod={handleMethodSelection}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ShippingOption;
