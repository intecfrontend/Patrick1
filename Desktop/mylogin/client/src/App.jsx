import { useState } from 'react'

import './App.css'
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import Register from './Components/Register/Register'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },

])
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
