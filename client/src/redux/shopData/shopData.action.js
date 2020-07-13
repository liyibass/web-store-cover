import shopDataTypes from "./shopData.type";
import Axios from "axios";

export const fetchProductListFromApi = () => {
  return function (dispatch) {
    Axios.get("http://localhost:5000/api/product/")
      .then((response) => {
        dispatch(setProductList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setProductList = (productList) => {
  return {
    type: shopDataTypes.SET_PRODUCT_LIST,
    payload: productList,
  };
};

export const showCatogoryShopData = (catogory) => {
  return {
    type: shopDataTypes.SHOW_CATOGORY_SHOPDATA,
    payload: catogory,
  };
};
