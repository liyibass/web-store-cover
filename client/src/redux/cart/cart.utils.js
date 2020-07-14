export const addItemToCart = (cartItems, newItem) => {
  const existFlag = cartItems.find((item) => item._id === newItem._id);

  if (!existFlag) {
    return [...cartItems, { ...newItem, quantity: 1 }];
  } else {
    return cartItems.map((cartItem) => {
      if (cartItem._id !== newItem._id) return cartItem;
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    });
  }
};

export const minusItemToCart = (cartItems, adjustItem) => {
  console.log("YO");

  // 建立商品數量是否=1的flag
  const onlyOne = adjustItem.quantity === 1;

  // 如果flag=true，就不能再繼續減少數量了（O）
  if (onlyOne) {
    return cartItems;

    // 如果flag=false，代表商品數量不只一個
    // 就要從購物車中把他找出來，並且quantity-1
  } else {
    return cartItems.map((cartItem) => {
      if (cartItem._id !== adjustItem._id) {
        return cartItem;
      } else {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
    });
  }
};

export const deleteItemFromCart = (cartItems, adjustItem) => {
  return cartItems.filter((cartItem) => cartItem._id !== adjustItem._id);
};
