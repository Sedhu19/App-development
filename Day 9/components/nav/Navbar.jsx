import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/rajas/resume/src/assets/css/Navbar.css'


const NavBar = () => {
  return (
    <nav>
    <ul>
      <li><Link to="/dashboard">Home</Link></li>
      <li><Link to="/my-resumes">My Resumes</Link></li>
      <li><Link to="/resume-templates">Resume Templates</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
    );
}

export default NavBar;
