import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productListReducer from "./productList/productList.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "productList"],
};

const rootReducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
