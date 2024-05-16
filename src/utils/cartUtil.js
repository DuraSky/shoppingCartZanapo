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
  const updatedValue = Number(value);
  if (updatedValue < 1) {
    return cart; // Return the unchanged cart if the value is less than 1
  }
  return cart.map((item, i) => {
    if (i === itemIndex) {
      return { ...item, mnozstvi: updatedValue };
    }
    return item; // Return the unchanged item for other indices
  });
};

export const getCartPrice = (cart) => {
  return cart.reduce(
    (total, item) => total + item.mnozstvi * item.cena_za_kus,
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
