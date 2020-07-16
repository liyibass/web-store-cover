import navigationListTypes from "./navigationList.type";

// import { sortShopDataByCatogory } from "./productList.utils";

const initialState = {
  navigationList: [],
};

const navigationListReducer = (state = initialState, action) => {
  switch (action.type) {
    case navigationListTypes.SET_NAVIGATION_LIST: {
      return {
        ...state,
        navigationList: action.payload,
      };
    }

    default:
      return state;
  }
};

export default navigationListReducer;
