import productListTypes from "./productList.type";

// import { sortShopDataByCatogory } from "./productList.utils";

const initialState = {
  productList: [],
  search: "",
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case productListTypes.SET_PRODUCT_LIST: {
      return {
        ...state,
        productList: action.payload,
        search: action.search,
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
