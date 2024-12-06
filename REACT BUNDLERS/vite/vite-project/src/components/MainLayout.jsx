import React from 'react'
import "./MainLayout.css"
import {Link, Outlet} from "react-router-dom"
function MainLayout() {

  return (
      <div><h1>Welcome to home page</h1>
      <nav>
        <ul className='aa'>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Registration">Registration</Link></li>
        </ul>
      </nav>
      <Outlet/>
      </div>

  )
}

export default MainLayout