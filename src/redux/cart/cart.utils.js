const addItemToCart = (cartItems, newItem) => {
  console.log(newItem);

  return [...cartItems, newItem];
};

export { addItemToCart };
