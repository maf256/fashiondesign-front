import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../images/logo.png"

export default function Navbar () {
  return (
    <header>
      
      <Link to="/" ><img src={Logo} /></Link>
        
        <nav>

        </nav>
    
    </header>
  )
}