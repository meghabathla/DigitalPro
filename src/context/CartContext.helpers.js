export const updateQuantity = (cartArr, productId, diff = 1) => {
  return cartArr.map((cartProduct) =>
    cartProduct.id === productId
      ? { ...cartProduct, quantity: cartProduct.quantity + diff }
      : cartProduct
  );
};
