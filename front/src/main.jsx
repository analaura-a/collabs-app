import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import ExplorePage from './pages/ExplorePage.jsx'
import ExploreUsersPage from './pages/ExploreUsersPage.jsx'
import Error404Page from './pages/Error404Page.jsx'

const routes = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/explorar",
        element: <ExplorePage />,
      },
      {
        path: "/colaboradores",
        element: < ExploreUsersPage />,
      },
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
