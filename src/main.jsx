import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css"; // Import Tailwind CSS

import Layout from "./Layout";
import ShoppingCart from "./pages/cart/Cart";
import Shipping from "./pages/shipping/Shipping";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ShoppingCart />,
      },
      {
        path: "shipping",
        element: <Shipping />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
