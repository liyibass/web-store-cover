import { combineReducers } from "redux";

import productListReducer from "./productList/productList.reducer";
import shopDataReducer from "./shopData/shopData.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  productList: productListReducer,
  shopData: shopDataReducer,
  cart: cartReducer,
});
