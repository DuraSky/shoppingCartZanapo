export const cartLoader = async () => {
  const response = await fetch("./assets/products.json");
  const data = await response.json();
  return data.cart;
};

// utils/loader.js
export const shippingLoader = async () => {
  const response = await fetch("/assets/shipping.json"); // Adjust path if necessary
  if (!response.ok) {
    throw new Error("Failed to fetch shipping options");
  }
  const data = await response.json();
  return data;
};
