import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Employees from '../pages/Employees.jsx';
import EmployeeDetails from '../pages/EmployeeDetails.jsx';
import Report from '../pages/Report.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/employees',
    element: <Employees />,
  },
  {
    path: '/employees/:empId',
    element: <EmployeeDetails />,
  },
  {
    path: '/report',
    element: <Report />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
