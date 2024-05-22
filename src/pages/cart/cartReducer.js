// cartReducer.js
import {
  removeFromCart,
  changeQuantity,
  getCartPrice,
} from "../utils/cartUtil";

const initialState = {
  cart: [],
  cartTotal: 0,
};

const actionTypes = {
  SET_CART: "SET_CART",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CHANGE_QUANTITY: "CHANGE_QUANTITY",
  UPDATE_CART_TOTAL: "UPDATE_CART_TOTAL",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      console.log(action);
      return {
        ...state,
        cart: action.payload,
        cartTotal: getCartPrice(action.payload),
      };

    case actionTypes.REMOVE_FROM_CART:
      const updatedCartRemove = removeFromCart(state.cart, action.payload);
      return {
        ...state,
        cart: updatedCartRemove,
        cartTotal: getCartPrice(updatedCartRemove),
      };

    case actionTypes.CHANGE_QUANTITY:
      const updatedCartQuantity = changeQuantity(
        state.cart,
        action.payload.value,
        action.payload.index
      );
      return {
        ...state,
        cart: updatedCartQuantity,
        cartTotal: getCartPrice(updatedCartQuantity),
      };
    default:
      return state;
  }
};

export { initialState, actionTypes, cartReducer };
