const cartLoader = async () => {
  const response = await fetch("./assets/products.json");
  const data = await response.json();
  return data.cart;
};

export default cartLoader;
