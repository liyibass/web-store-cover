import cartTypes from "./cart.types";

export const addCartItems = (newItem) => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: newItem,
  };
};

export const minusCartItems = (adjustItem) => {
  return {
    type: cartTypes.MINUS_ITEM,
    payload: adjustItem,
  };
};

export const deleteCartItems = (adjustItem) => {
  return {
    type: cartTypes.DELETE_ITEM,
    payload: adjustItem,
  };
};
