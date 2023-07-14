import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";


const App = () => {
  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Services",
        element:<Services/>
      },
      {
        path:"/About",
        element:<About/>
      },
    ]
  )
  return (
    <div><RouterProvider router={router}></RouterProvider>
    </div>
    
  )
}

export default App