import shopDataTypes from "./shopData.type";

export const showCatogoryShopData = (catogory) => {
  return {
    type: shopDataTypes.SHOW_CATOGORY_SHOPDATA,
    payload: catogory,
  };
};
