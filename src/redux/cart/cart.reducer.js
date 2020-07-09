import cartTypes from "./cart.types";

import {
  addItemToCart,
  minusItemToCart,
  deleteItemFromCart,
} from "./cart.utils";

const initialState = {
  cartItems: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    }
    case cartTypes.MINUS_ITEM: {
      return {
        ...state,
        cartItems: minusItemToCart(state.cartItems, action.payload),
      };
    }

    case cartTypes.DELETE_ITEM: {
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };
    }

    default:
      return state;
  }
};

export default userReducer;
