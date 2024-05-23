import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Layout from "./Layout";
import ShoppingCart from "./pages/cart/Cart";
import Shipping from "./pages/shipping/Shipping";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import { CartProvider } from "./pages/cart/CartProvider";
import { ShippingProvider } from "./pages/shipping/ShippingProvider";

const App = () => {
  const [showDiscountForm, setShowDiscountForm] = useState(true);
  const [payment, setPayment] = useState("CreditCard");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="kosik" />,
        },
        {
          path: "kosik",
          element: (
            <ShoppingCart
              showDiscountForm={showDiscountForm}
              setShowDiscountForm={setShowDiscountForm}
            />
          ),
        },
        {
          path: "doprava",
          element: <Shipping payment={payment} setPayment={setPayment} />,
        },
        {
          path: "info",
          element: <PersonalInfo />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ShippingProvider>
        <App />
      </ShippingProvider>
    </CartProvider>
  </React.StrictMode>
);
