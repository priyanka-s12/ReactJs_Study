import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import React from "react";
// import ReactDOM from "react-dom";
import App from './App';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

//root id is in index.html(public folder), all pages renders in that root div element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// ReactDOM.createRoot(dpcument.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/:productId',
    element: <ProductDetails />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
