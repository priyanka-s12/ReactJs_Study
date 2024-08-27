import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
//above line means import App() from ./App.jsx path
import About from './pages/About';
import Blogs from './pages/Blogs';

//doc.getEleId only code from vanilla js used in react
//root means index.html
//to create routes, have react router DOM - need routes for browser(createBrowserRouter), RouterProvider
//createBrowserRouter takes array of routes/objs
//path: '/' means App.jsx, define path and element to be rendered on that path - this is the way to create routes using react-router-dom

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> don't need as we want multiple pages in this webapp*/}

    {/* if want other pages to render, import pages and add them here - for that want react router library that helps in routing react app, 
		router is attribute of RouterProvider and RouterProvider is provided by react-router-dom
		*/}
    {/*RouterProvider helps to navigate through pages in app  */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
