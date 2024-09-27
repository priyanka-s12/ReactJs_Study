import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
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
    path: '/players/:playerId',
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
