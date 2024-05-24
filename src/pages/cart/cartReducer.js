// cartReducer.js
import {
  removeFromCart,
  changeQuantity,
  getCartPrice,
} from "../utils/cartUtil";

const initialState = {
  cart: [],
  cartTotal: 0,
  voucher: null,
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
      const { cart_products, voucher } = action.payload;
      return {
        ...state,
        cart: cart_products,
        cartTotal: getCartPrice(cart_products),
        voucher: voucher,
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
