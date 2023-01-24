import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <section className='brand_name'>
          <img src='\images\sigma_v1_logo.png' alt='sigma_app' className='brand_logo'/>
        </section>
        <ul className='menu'>
            <li className='active'><Link to="/"><i className='bi bi-house-door'></i> <span>Home</span></Link></li>
            <li><Link to="/"><i className='bi bi-people'></i> <span>People</span></Link></li>
            <li><Link to="/"><i className='bi bi-chat'></i> <span>Chats</span></Link></li>
            <li><Link to="/"><i className='bi bi-person'></i> <span>Profile</span></Link></li>
            <li><Link to="/"><i className='bi bi-gear'></i> <span>Settings</span></Link></li>
            
        </ul>
    </nav>
  )
}

export default Navbar