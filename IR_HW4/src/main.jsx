import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Employee from '../pages/Employee';
import EmployeeDetails from '../pages/EmployeeDetails';
import Report from '../pages/Report';
//import bootstrap js script file in main/index.js

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/employee',
    element: <Employee />,
  },
  {
    path: '/employee/:empId',
    element: <EmployeeDetails />,
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
