import React from 'react'
import Home from "./component/Home/Home"
import Fruits from "./component/Fruits/Fruits" 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", // 👈 root route
      element: <Home />,
    },
    {
      path: "/fruits", // 👈 correct path
      element: <Fruits />,
    }
  ])

  return <RouterProvider router={router} />
}

export default App
