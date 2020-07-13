import { combineReducers } from "redux";

import shopDataReducer from "./shopData/shopData.reducer";
import cartReducer from "./cart/cart.reducer";
export default combineReducers({
  shopData: shopDataReducer,
  cart: cartReducer,
});
