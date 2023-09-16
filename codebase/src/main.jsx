import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './routes/home/home'
import About from './routes/About/about'
import Skills from './routes/skills/skills'

import './index.css'
import Contact from './routes/contact/contact';
import Projects from './routes/projects/projects';

const routes = [
  {
    Element: <App />,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/:recoverRoute",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/skills",
        element: <Skills/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/projects",
        element: <Projects/>
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