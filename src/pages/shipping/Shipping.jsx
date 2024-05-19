import React, { useState, useContext } from "react";
import { CartContext } from "../cart/CartProvider";

const Shipping = () => {
  const { cart, cartTotal } = useContext(CartContext);

  const [openDoruceni, setOpenDoruceni] = useState(false);
  const [openVydejna, setOpenVydejna] = useState(false);
  const [openOdber, setOpenOdber] = useState(false);

  const handleOpenDoruceni = () => {
    setOpenDoruceni(!openDoruceni);
  };

  const handleOpenVydejna = () => {
    setOpenVydejna(!openVydejna);
  };

  const handleOpenOdber = () => {
    setOpenOdber(!openOdber);
  };

  return (
    <>
      <div onClick={handleOpenDoruceni}>Doruceni az k Vam domu</div>
      {openDoruceni && <div>Metoda 1</div>}

      <div onClick={handleOpenVydejna}>Doruceni na vydejni misto</div>
      {openVydejna && <div>Metoda 1</div>}

      <div onClick={handleOpenOdber}>Osobni odber v okoli ostravy</div>
      {openOdber && <div>Metoda 1</div>}

      <h2>cena kosiku:</h2>
      <p>{cartTotal}</p>
    </>
  );
};

export default Shipping;
