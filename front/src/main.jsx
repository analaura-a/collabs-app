import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Error404Page from './pages/Error404Page.jsx'

const routes = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      // {
      //   path: "/explore",
      //   element: < ProductsListPage />,
      // },
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
