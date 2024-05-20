import React from "react";

const ShippingOptionMethod = ({ methods }) => {
  console.log(methods);
  return (
    <>
      {methods.map((method, index) => (
        <div key={index}>
          <p>{method.name}</p>
          <p>{method.price}</p>
        </div>
      ))}
    </>
  );
};

export default ShippingOptionMethod;
