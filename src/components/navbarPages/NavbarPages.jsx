import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/darkTheme.png'

const NavbarPages = () => {
  return (
    <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <Link className="navbar-brand fw-bold fs-4" to={"/"}>
                <h1>Raul's HardwareStore</h1>
            </Link>

            </a>
            </div>
        </nav>
    </>
  )
}

export {NavbarPages}