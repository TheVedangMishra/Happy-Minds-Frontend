import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Header from './components/header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/login",
    // element: <Login />,
  },
  {
    path: "/signup",
    // element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
