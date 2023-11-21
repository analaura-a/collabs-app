import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import ExploreProjectsPage from './pages/ExploreProjectsPage.jsx'
import ExploreUsersPage from './pages/ExploreUsersPage.jsx'
import Error404Page from './pages/Error404Page.jsx'
import UserProfilePage from './pages/UserProfilePage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import LoginPage from './pages/LoginPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import MyProjectsPage from './pages/MyProjectsPage.jsx';

const routes = createBrowserRouter([

  {
    path: "/",
    element: <PrivateRoute> <App /> </PrivateRoute>,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/explorar/proyectos",
        element: <ExploreProjectsPage />,
      },
      {
        path: "/explorar/proyectos/:id",
        element: <ProjectDetailPage />,
      },
      {
        path: "/explorar/colaboradores",
        element: <ExploreUsersPage />,
      },
      {
        path: "/user/:id",
        element: <UserProfilePage />,
      },
      {
        path: "/mis-proyectos",
        element: <MyProjectsPage />,
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <Error404Page />,

  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
