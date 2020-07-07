import cartTypes from "./cart.types";

import { addItemToCart } from "./cart.utils";

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

    default:
      return state;
  }
};

export default userReducer;
