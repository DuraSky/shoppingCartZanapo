import React from "react";
import { ShippingContext } from "../ShippingProvider";
import { useContext } from "react";

const ShippingOptionMethod = ({ methods, onSelectMethod }) => {
  const { state } = useContext(ShippingContext);
  const { selectedShippingOption } = state;
  return (
    <>
      {methods.map((method, index) => (
        <div key={index} className="shippingMethod">
          <label>
            <input
              type="radio"
              name="shippingMethod"
              value={method.name}
              onChange={() => onSelectMethod(method)}
              checked={selectedShippingOption === method.name}
            />
            <span>{method.name}</span>
            <span>{method.price}</span>
            <span>{method.canShipDate}</span>
          </label>
        </div>
      ))}
    </>
  );
};

export default ShippingOptionMethod;
