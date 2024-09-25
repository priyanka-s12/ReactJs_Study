import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import History from '../pages/History';
import Architecture from '../pages/Architecture';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/history',
    element: <History />,
  },
  {
    path: '/architecture',
    element: <Architecture />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
