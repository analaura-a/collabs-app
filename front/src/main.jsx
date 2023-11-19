import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import ExploreProjectsPage from './pages/ExploreProjectsPage.jsx'
import ExploreUsersPage from './pages/ExploreUsersPage.jsx'
import Error404Page from './pages/Error404Page.jsx'
import UserProfilePage from './pages/UserProfilePage.jsx'

const routes = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/explorar/proyectos",
        element: <ExploreProjectsPage />,
      },
      {
        path: "/explorar/colaboradores",
        element: < ExploreUsersPage />,
      },
      {
        path: "/user/:id",
        element: < UserProfilePage />,
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
