import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error404 from './routes/Error404/Error404.jsx'
import Home from './routes/Home/Home.jsx'
import Login from './routes/Login/Login.jsx'
import Cadastro from './routes/Cadastro/Cadastro.jsx'
import Perfil from './routes/Perfil/Perfil.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <Error404/>,
  children: [
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/perfil',
      element: <Perfil/>
    },
    {
      path:'/cadastro',
      element: <Cadastro/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
