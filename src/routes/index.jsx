import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { App as AppEs } from "../components/main-es/App";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>
    },
    {
      path:"/es/:option?",
      element: <AppEs/>
  }
])

export const Rutas = () => {
  return <RouterProvider router={router} />
}
