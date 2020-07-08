import { shopData } from "./shopData";
import shopDataTypes from "./shopData.type";

import { sortShopDataByCatogory } from "./shopData.utils";

const initialState = {
  shopData: shopData,
  shopDataList: shopData,
  showShopData: [],
};

const shopDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopDataTypes.SHOW_CATOGORY_SHOPDATA: {
      return {
        ...state,
        showShopData: sortShopDataByCatogory(state.shopData, action.payload),
      };
    }

    default:
      return state;
  }
};

export default shopDataReducer;
