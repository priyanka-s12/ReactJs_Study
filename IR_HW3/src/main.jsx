import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Features from '../pages/Features';
import Specifications from '../pages/Specifications';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/features',
    element: <Features />,
  },
  {
    path: '/specifications',
    element: <Specifications />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
