import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/:leng?/:option?",
    element: <App />,
  }
]);

export const Rutas = () => {
  return <RouterProvider router={router} />;
};
