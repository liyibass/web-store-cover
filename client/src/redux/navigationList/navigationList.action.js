import navigationListTypes from "./navigationList.type";
import Axios from "axios";

export const fetchNavigationListFromApi = () => {
  return function (dispatch) {
    Axios.get(`https://liyi-web-server.herokuapp.com/api/navigation`)
      .then((response) => {
        dispatch(setNavigationList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setNavigationList = (navigationList) => {
  return {
    type: navigationListTypes.SET_NAVIGATION_LIST,
    payload: navigationList,
  };
};
