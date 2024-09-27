import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Biography from '../pages/Biography';
import Records from '../pages/Records';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/biography',
    element: <Biography />,
  },
  {
    path: '/records',
    element: <Records />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
