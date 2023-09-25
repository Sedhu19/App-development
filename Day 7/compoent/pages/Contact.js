import React, { useState } from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Navbar from "../Navbar";
import { Link ,NavLink} from "react-router-dom";
import '../asserts/css/contact.css';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [Mobile, setMobile] = useState(false);
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
  <NavLink to="/contact" className="contact" activeClassName="active">
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
      <div className="iXrBdFk">
      <div className="eTlFuKb">
        <div className="vWjUhTz">
          <div className="kCoInFs">
            <FaMapMarkerAlt className="FpMkRzI" />
            <div className="yLfHrI">Address</div>
            <div className="tOhNzOe">dubai narrow st</div>
            <div className="tOhNzOe">dubai</div>
          </div>
          <div className="kCoInFs">
            <FaPhoneAlt className="FpMkRzI" />
            <div className="yLfHrI">Phone</div>
            <div className="tOhNzOe">+004876534293</div>
            <div className="tOhNzOe">+004982822120</div>
          </div>
          <div className="kCoInFs">
            <FaEnvelope className="FpMkRzI" />
            <div className="yLfHrI">Email</div>
            <div className="tOhNzOe">resu@mail.com</div>
            <div className="tOhNzOe">info@mail.com</div>
          </div>
        </div>
        <div className="HtDbYvL">
          <div className="TtXxDqJ">Send us a message</div>
          <p className="pp">
            If you have any work for me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.
          </p>
          <form action="#">
            <div className="dYjIcNj">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="dYjIcNj">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="dYjIcNj oHrOnRo"></div>
            <div className="xLhRuBo">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="social-links">
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
          <a href="https://www.linkedin.com"><FaLinkedin /></a>
        </div>
    </>
  )
}
export default Contact;
