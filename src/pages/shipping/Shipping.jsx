import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../cart/CartProvider";
import { ShippingContext } from "./ShippingProvider";

import "./shippingStyle.scss";
import ShippingOption from "./ShippingOption";

import { paymentText, cartAndShippingTotal } from "../utils/shippingUtil";

const Shipping = ({ payment, setPayment }) => {
  const { cart, cartTotal } = useContext(CartContext);
  const { shippingOptions, setShippingOptions } = useContext(ShippingContext);

  const [openDoruceni, setOpenDoruceni] = useState(false);
  const [openVydejna, setOpenVydejna] = useState(false);
  const [openOdber, setOpenOdber] = useState(false);

  const handleOpenDoruceni = () => setOpenDoruceni(!openDoruceni);
  const handleOpenVydejna = () => setOpenVydejna(!openVydejna);
  const handleOpenOdber = () => setOpenOdber(!openOdber);

  const handlePaymentChange = (value) => {
    console.log(value);
    setPayment(value);
  };

  const getPaymentText = () => {
    return <p>{paymentText(payment)}</p>;
  };

  useEffect(() => {
    console.log("Shipping Options in Shipping Component:", shippingOptions); // Add this log
  }, [shippingOptions]);

  return (
    <>
      <ShippingOption />
      {/* <div className="doprava">
        <h2>Vyberte dopravu</h2>
        <div onClick={handleOpenDoruceni}>Doruceni az k Vam domu</div>
        {openDoruceni && <div>Metoda 1</div>}
        <div onClick={handleOpenVydejna}>Doruceni na vydejni misto</div>
        {openVydejna && <div>Metoda 1</div>}
        <div onClick={handleOpenOdber}>Osobni odber v okoli ostravy</div>
        {openOdber && <div>Metoda 1</div>}
      </div>

      <div className="platba">
        <h2>Vyberte platbu</h2>
        <div className="radios">
          <label>
            <input
              type="radio"
              value="CreditCard"
              name="payment"
              checked={payment === "CreditCard"}
              onChange={(event) => handlePaymentChange(event.target.value)}
            />
            Platbeni Kartou Online
          </label>
          <label>
            <input
              type="radio"
              value="BankTransfer"
              name="payment"
              checked={payment === "BankTransfer"}
              onChange={(event) => handlePaymentChange(event.target.value)}
            />
            Bankovni prevod
          </label>
          <label>
            <input
              type="radio"
              value="Dobirka"
              name="payment"
              checked={payment === "Dobirka"}
              onChange={(event) => handlePaymentChange(event.target.value)}
            />
            Dobirka
          </label>
          <label>
            <input
              type="radio"
              value="HomeCredit"
              name="payment"
              checked={payment === "HomeCredit"}
              onChange={(event) => handlePaymentChange(event.target.value)}
            />
            Na Splatky - Home Credit
          </label>
        </div>
      </div> */}

      <div className="recap">
        <h2>Rekaputilace objednavky</h2>
        <div>
          {cart.map((item, index) => {
            return (
              <div key={item.id} className="produktRecap">
                <p>{item.produkt}</p>
                <p>{item.mnozstvi}x</p>
                <p>{item.cena_za_kus * item.mnozstvi} Kč</p>
              </div>
            );
          })}
        </div>
        <h3>Doprava:</h3>
        <div className="paymentRecep">
          <h3>Platba:</h3>
          {getPaymentText()}
        </div>
        <div className="cartAndShippingTotal">
          <h2>Celkem</h2>
        </div>
      </div>
    </>
  );
};

export default Shipping;
