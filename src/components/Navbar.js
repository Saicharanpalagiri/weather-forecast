import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
     <nav class="navbar fixed-top navbar-dark bg-dark">
     <Link class="navbar-brand" to="/"style={{"marginLeft":"5%"}}>Weather Data</Link>
     </nav>
    </div>
  )
}
