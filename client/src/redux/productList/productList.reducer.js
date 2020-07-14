import productListTypes from "./productList.type";

// import { sortShopDataByCatogory } from "./productList.utils";

const initialState = {
  productList: [],
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case productListTypes.SET_PRODUCT_LIST: {
      return {
        ...state,
        productList: action.payload,
      };
    }

    case productListTypes.SET_CATOGORY_PRODUCT_LIST: {
      return state;
    }

    default:
      return state;
  }
};

export default productListReducer;
