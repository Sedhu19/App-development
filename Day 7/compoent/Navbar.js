import React, { useState } from "react"
import "./navbar.css"
import { Link , NavLink} from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo1'>Resume Maker</h3>
      
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
  <NavLink exact to="/home" className="home" activeClassName="active">
    <li>Home</li>
  </NavLink>
  <NavLink to="/services" className="services" activeClassName="active">
    <li>Templates</li>
  </NavLink>
  <NavLink to="/skills" className="skills" activeClassName="active">
    <li>Saved</li>
  </NavLink>
  <NavLink to="/aboutuser" className="about" activeClassName="active">
    <li>About</li>
  </NavLink>
  <NavLink to="/contactuser" className="contact" activeClassName="active">
    <li>Contact</li>
  </NavLink>
  <NavLink to="/profile" className="profile" activeClassName="active">
    <li>Profile</li>
  </NavLink>
</ul>

        
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
