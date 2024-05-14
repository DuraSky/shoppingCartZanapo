// export const increaseQuantity = (cart, itemIndex) => {
//   return cart.map((item, index) => {
//     if (index === itemIndex) {
//       return { ...item, mnozstvi: item.mnozstvi + 1 };
//     }
//     return item;
//   });
// };

// export const decreaseQuantity = (cart, itemIndex) => {
//   return cart
//     .map((item, index) => {
//       if (index === itemIndex) {
//         if (item.mnozstvi > 1) {
//           return { ...item, mnozstvi: item.mnozstvi - 1 };
//         } else {
//           return null;
//         }
//       }
//       return item;
//     })
//     .filter((item) => item !== null);
// };

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

export const changeQuantity = (cart, value, index) => {
  const updatedValue = Number(value);
  if (updatedValue < 1) {
    return cart; // Return the unchanged cart if the value is less than 1
  }
  return cart.map((item, i) =>
    i === index ? { ...item, mnozstvi: updatedValue } : item
  );
};

export const getCartPrice = (cart) => {
  return cart.reduce(
    (total, item) => total + item.mnozstvi * item.cena_za_kus,
    0
  );
};
