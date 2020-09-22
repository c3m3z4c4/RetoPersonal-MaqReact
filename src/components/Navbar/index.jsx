import React from 'react'
import { Link } from 'react-router-dom'


import '../styles/Navbar.css'

import flecha from '../../images/navbar/flecha.svg'
import perfil from '../../images/navbar/avatar.png'



const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={flecha} width="30" height="30" className="d-inline-block align-left" alt="" loading="lazy"/>
            <h2 className="Display-3 d-inline-block align-top ml-3"> Details</h2>
          </Link>
          <img src={perfil} width="80" height="80" className="d-inline-block align-left" alt="" loading="lazy"/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
