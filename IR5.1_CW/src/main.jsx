import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Report from '../pages/Report';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/movies/:movieId',
    element: <MovieDetails />,
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
