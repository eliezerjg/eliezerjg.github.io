import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './routes/home/home'
import About from './routes/About/about'
import HardSkills from './routes/hardskills/hardskills'

import './index.css'

const routes = [
  {
    Element: <App />,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/hardskills",
        element: <HardSkills/>
      },
    ]
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)