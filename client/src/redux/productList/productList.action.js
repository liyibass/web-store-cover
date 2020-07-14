import productListTypes from "./productList.type";
import Axios from "axios";

export const fetchProductListFromApi = (catogoryId) => {
  return function (dispatch) {
    Axios.get(`http://localhost:5000/api/product/catogory/${catogoryId}`)
      .then((response) => {
        dispatch(setProductList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchResultListFromApi = (search) => {
  return function (dispatch) {
    const encodeUrl = encodeURIComponent(search);
    Axios.get(`http://localhost:5000/api/product/search/${encodeUrl}`)
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
    type: productListTypes.SET_PRODUCT_LIST,
    payload: productList,
  };
};

export const setCatogoryProductList = (catogory) => {
  return {
    type: productListTypes.SET_CATOGORY_PRODUCT_LIST,
    payload: catogory,
  };
};
