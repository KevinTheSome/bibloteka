import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Rauter from './Rauter.jsx'
import { RouterProvider } from 'react-router-dom'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Rauter} />
  </React.StrictMode>
)
