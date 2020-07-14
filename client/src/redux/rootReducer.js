import { combineReducers } from "redux";

import productListReducer from "./productList/productList.reducer";

import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  productList: productListReducer,

  cart: cartReducer,
});
