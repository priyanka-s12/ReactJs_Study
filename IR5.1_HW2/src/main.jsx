import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Food from '../pages/Food';
import FoodDetails from '../pages/FoodDetails';
import Report from '../pages/Report';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/food',
    element: <Food />,
  },
  {
    path: '/food/:foodId',
    element: <FoodDetails />,
  },
  {
    path: '/report',
    element: <Report />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
