import cartTypes from "./cart.types";

export const addCartItems = (newItem) => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: newItem,
  };
};
