import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/index.css';

import Home from './pages/Home'
import AuthForm from './pages/AuthForm'
import AuthFormCheck from './pages/AuthFormCheck'
import UsersPage from './pages/UsersPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/authForm",
    element: <AuthForm />
  },
  {
    path: "/authFormCheck",
    element: <AuthFormCheck />
  },
  {
    path: "/UsersPage",
    element: <UsersPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
