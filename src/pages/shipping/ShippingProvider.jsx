import React, { createContext, useReducer, useEffect, useMemo } from "react";
import { shippingLoader } from "../utils/loader";
import { initialState, actionTypes, shippingReducer } from "./shippingReducer";

export const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shippingReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const initialShipping = await shippingLoader();
      dispatch({
        type: actionTypes.SET_SHIPPING_OPTIONS,
        payload: initialShipping,
      });

      if (
        initialShipping.deliveryOptions &&
        initialShipping.deliveryOptions.length > 0
      ) {
        const firstOption = initialShipping.deliveryOptions[0].methods[0];
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_OPTION,
          payload: firstOption.name,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_PRICE,
          payload: firstOption.price,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_OPTIONS,
          payload: firstOption.options,
        });
      }
    };
    fetchData();
  }, []);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <ShippingContext.Provider value={value}>
      {children}
    </ShippingContext.Provider>
  );
};

export { actionTypes };
