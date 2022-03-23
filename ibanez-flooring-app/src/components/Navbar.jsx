import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
        <Link className="link" to="/"><h1>Ibanez Flooring</h1></Link>
        <div className='links'>
            <Link className='link' to="/">Home</Link>
        </div>
    </nav>
  )
}

export default Navbar