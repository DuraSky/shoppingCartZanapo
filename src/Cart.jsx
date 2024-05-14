import { useState, useEffect } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./assets/products.json")
      .then((response) => response.json())
      .then((data) => setCart(data.cart))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  //Console logger to check cart status on every update
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleIncreaseQuantity = (itemIndex) => {
    setCart((prevCart) =>
      prevCart.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, mnozstvi: item.mnozstvi + 1 };
        }
        return item;
      })
    );
  };

  const handleDecreaseQuantity = (itemIndex) => {
    setCart((prevCart) =>
      prevCart
        .map((item, index) => {
          if (index === itemIndex) {
            if (item.mnozstvi > 1) {
              return { ...item, mnozstvi: item.mnozstvi - 1 };
            } else {
              return null;
            }
          }

          return item;
        })
        .filter((item) => item !== null)
    );
  };

  const handleRemoveFromCart = (itemIndex) => {
    setCart((prevCart) =>
      prevCart
        .map((item, index) => {
          if (index === itemIndex) {
            return null;
          } else {
            return item;
          }
        })
        .filter((item) => item !== null)
    );
  };

  const getCartPrice = () => {
    cart.map((item) => {
      return <p>{item}</p>;
    });
  };

  return (
    <>
      <div className="insideTheCart">
        <h1 className="text-2xl font-bold text-gray-900">Kosik:</h1>
        <div className="flex gap-40">
          <div>
            <h2>Produkt</h2>
            {cart.map((item, index) => (
              <div key={index}>
                <p>{item.produkt}</p>
              </div>
            ))}
          </div>
          <div>
            <h2>Dostupnost</h2>
            {cart.map((item, index) => (
              <div key={index}>
                <p>{item.dostupnost}</p>
              </div>
            ))}
          </div>
          <div>
            <h2>Mnozstvi</h2>
            {cart.map((item, index) => (
              <div key={index} className="flex">
                <p>{item.mnozstvi}</p>
                <button
                  type="button"
                  onClick={() => handleIncreaseQuantity(index)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-1 rounded"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => handleDecreaseQuantity(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold  px-1 rounded"
                >
                  -
                </button>
              </div>
            ))}
          </div>
          <div>
            <h2>Cena za kus</h2>
            {cart.map((item, index) => (
              <div key={index}>
                <p>{item.cena_za_kus}</p>
              </div>
            ))}
          </div>
          <div>
            <h2>Cena vc. DPH</h2>
            {cart.map((item, index) => (
              <div key={index}>
                <p>{item.mnozstvi * item.cena_za_kus}</p>
              </div>
            ))}
          </div>
          <div>
            <h2>Removal</h2>
            {cart.map((item, index) => (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => handleRemoveFromCart(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold  px-1 rounded"
                >
                  X
                </button>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="priceCalc">
        <h2 className="font-bold text-gray-900">Celkova Cena</h2>
        <p>{getCartPrice}</p>
      </div>
    </>
  );
};

export default ShoppingCart;
