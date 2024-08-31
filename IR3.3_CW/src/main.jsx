import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
//above line means import App() from ./App.jsx path
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';

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
    path: '/blogs',
    element: <Blogs />,
  },
  {
    path: '/blogs/:blogId',
    element: <BlogDetails />,
  },
]);
// :blogId in url is params
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
