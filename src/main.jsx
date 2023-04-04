import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Contact from './components/contact';
import About from './components/About';
import Home from './components/Home';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "Header",
        element: <Header></Header>
      },
      {
        path: "About",
        element: <About></About>
      },
      {
        path: "Contact",
        element: <Contact></Contact>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
