import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  createBrowserRouter,
  RouterProvider,} from 'react-router-dom'
import UserDetails from './UserDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <RouterProvider router={routes}/> */}
   <App />
  </React.StrictMode>
);


