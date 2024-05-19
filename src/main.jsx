import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import ShoppingCart from "./pages/cart/Cart";
import Shipping from "./pages/shipping/Shipping";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import { CartProvider } from "./pages/cart/CartProvider";

const App = () => {
  const [showDiscountForm, setShowDiscountForm] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ShoppingCart
              showDiscountForm={showDiscountForm}
              setShowDiscountForm={setShowDiscountForm}
            />
          ),
        },
        {
          path: "shipping",
          element: <Shipping />,
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
      <App />
    </CartProvider>
  </React.StrictMode>
);
