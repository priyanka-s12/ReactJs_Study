import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Restaurants from './pages/Restaurants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Restaurants',
    element: <Restaurants />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
