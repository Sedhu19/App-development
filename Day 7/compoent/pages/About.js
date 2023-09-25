import React, { useState } from "react"
import { Link ,NavLink} from "react-router-dom";
import '../asserts/css/contact.css'
import '../asserts/css/Aboutuser.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import '../asserts/css/Landing.css';
import profile from '../images/user1.png'

const Aboutuser = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo1'>Resume Maker</h3>
      
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <NavLink to="/about" className="about" activeClassName="active">
    <li>About</li>
  </NavLink>
  <NavLink to="/contactuser" className="contact" activeClassName="active">
    <li>Contact</li>
  </NavLink>
  <NavLink to="/adminlogin" className="admin" activeClassName="active">
    <li>Admin</li>
  </NavLink>
        </ul>

        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>

      <div className="about-us-container">
      <div className="profile-picture">
        <img src={profile} alt="Profile" />
      </div>
      <div className="content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
          <a href="https://www.linkedin.com"><FaLinkedin /></a>
        </div>
      </div>
    </div>
      </>
  )
}

export default Aboutuser;