export const addItemToCart = (cartItems, newItem) => {
  const existFlag = cartItems.find((item) => item.id === newItem.id);

  if (!existFlag) {
    return [...cartItems, { ...newItem, quantity: 1 }];
  } else {
    return cartItems.map((cartItem) => {
      if (cartItem.id !== newItem.id) return cartItem;
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    });
  }
};
