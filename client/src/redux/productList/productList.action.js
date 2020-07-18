import productListTypes from "./productList.type";
import Axios from "axios";

export const fetchProductListFromApi = (catogoryId) => {
  return function (dispatch) {
    Axios.get(
      `https://liyi-web-server.herokuapp.com/api/product/catogory/${catogoryId}`
    )
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
    Axios.get(
      `https://liyi-web-server.herokuapp.com/api/product/search/${encodeUrl}`
    )
      .then((response) => {
        dispatch(setProductList(response.data, search));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setProductList = (productList, search) => {
  window.scrollTo(0, 0);
  return {
    type: productListTypes.SET_PRODUCT_LIST,
    payload: productList,
    search: search,
  };
};

export const setCatogoryProductList = (catogory) => {
  return {
    type: productListTypes.SET_CATOGORY_PRODUCT_LIST,
    payload: catogory,
  };
};
