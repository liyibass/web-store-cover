import userTypes from "./user.types";
import Axios from "axios";

export const fetchUserListFromApi = () => {
  return function (dispatch) {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(setUserList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setUserList = (userList) => {
  return {
    type: userTypes.SET_USER_LIST,
    payload: userList,
  };
};

export const setWinner = () => {
  return {
    type: userTypes.SET_WINNER,
  };
};

export const clearWinner = () => {
  return {
    type: userTypes.CLEAR_WINNER,
  };
};

export const addUser = (newUser) => {
  return {
    type: userTypes.ADD_USER,
    payload: newUser,
  };
};

export const deleteUser = (selectedUser) => {
  return {
    type: userTypes.DELETE_USER,
    payload: selectedUser,
  };
};
