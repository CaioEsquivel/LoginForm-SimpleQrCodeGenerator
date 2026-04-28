import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { LoginPage } from './Pages/Login.jsx'
import { RegisterPage } from './Pages/Register.jsx'
import { ErrorPage } from './Pages/Undefined.jsx'
import { Qrcode } from './Pages/Qrcode.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"



const router = createBrowserRouter([
  {path:"/", element: <LoginPage />},
  {path:"/register", element: <RegisterPage />},
  {path:"/qrcode", element: <Qrcode />},
  {path:"*", element: <ErrorPage />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
