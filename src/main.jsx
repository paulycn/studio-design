import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import './css/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <h1>Error!</h1>,

    children:[
      {
        path:"/",
        element:<Home/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
