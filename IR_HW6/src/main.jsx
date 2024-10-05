import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Players from '../pages/Players';
import PlayerDetails from '../pages/PlayerDetails';
import Report from '../pages/Report';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/players',
    element: <Players />,
  },
  {
    path: '/players/:playerName',
    element: <PlayerDetails />,
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
