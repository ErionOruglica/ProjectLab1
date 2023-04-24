import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <header>
       <ul>
        <Link to='/' ><li>Home</li></Link>
        <Link to='/menu' ><li>Menu</li></Link>
        <Link to='/about' ><li>About</li></Link>
       </ul>
       
       <div className="logo">LOGO</div>

    </header>
  )
}

export default Navbar