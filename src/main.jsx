import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog'
import CatalogItem from './pages/CatalogItem'
import About from './pages/About'

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>Error!</h1>,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/catalog',
        element: <Catalog />
      },
      {
        path: '/catalog/:slug',
        element: <CatalogItem />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
