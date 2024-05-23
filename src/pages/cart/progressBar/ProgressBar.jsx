import React from "react";

import {
  getCartPrice,
  getFreeShippingMessage,
  getProgressShipping,
} from "../../utils/cartUtil";

export const ProgressBar = ({ cart }) => {
  return (
    <div className="progressBar">
      <h2>{getFreeShippingMessage(cart)}</h2>
      <div
        className="progress"
        style={{ height: "15px", width: "300px", backgroundColor: "#ccc" }}
      >
        <div
          className="progress-fill"
          style={{
            width: `${getProgressShipping(cart)}%`,
            height: "100%",
            backgroundColor: "#4caf50",
            textAlign: "center",
            lineHeight: "30px",
            color: "white",
          }}
        ></div>
        <p>{getCartPrice(cart)} / 4500</p>
      </div>
    </div>
  );
};
