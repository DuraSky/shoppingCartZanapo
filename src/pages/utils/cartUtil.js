export const removeFromCart = (cart, itemIndex) => {
  return cart
    .map((item, index) => {
      if (index === itemIndex) {
        return null;
      }
      return item;
    })
    .filter((item) => item !== null);
};

export const changeQuantity = (cart, value, itemIndex) => {
  console.log("in changequantity", cart);
  const updatedValue = Number(value);
  if (updatedValue < 1) {
    return cart;
  }
  return cart.map((item, i) => {
    if (i === itemIndex) {
      return { ...item, quantity: updatedValue };
    }
    return item;
  });
};

export const getCartPrice = (cart_products) => {
  return cart_products.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
};

export const getFreeShippingMessage = (cart) => {
  const freeShipping = 4500;
  const remainingForFreeShipping = freeShipping - getCartPrice(cart);

  if (remainingForFreeShipping <= 0) {
    return "Dopravu mate zdarma";
  } else {
    console.log(remainingForFreeShipping);
    return `Do dopravy zdarma vam zbyva ${remainingForFreeShipping} Kč`;
  }
};

export const getProgressShipping = (cart) => {
  const freeShipping = 4500;
  const remainingForFreeShipping = Math.min(
    (getCartPrice(cart) / freeShipping) * 100,
    100
  );

  return remainingForFreeShipping.toFixed(1);
};
