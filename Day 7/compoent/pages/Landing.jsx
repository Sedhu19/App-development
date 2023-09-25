import React, { useState } from "react";
import { Link ,NavLink} from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import '../asserts/css/Landing.css';
import Footer from "./Footer";

const Landing = () => {
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

      {/* Landing page content */}
      <div className="landing-container">
        <div className="hero">
          <h1>Create Your Perfect Resume</h1>
          <Link to="/login">
            <button className="get-started-button">Get Started</button>
          </Link>
        </div>
      </div>

      {/* Features section */}
      <section className="features">
        <div className="feature">
          <h2>Customize</h2>
          <p>Build resumes with greater customization</p>
        </div>
        <div className="feature">
          <h2>Build in seconds</h2>
          <p>Make resumes in seconds with AI</p>
        </div>
        <div className="feature">
          <h2>Templates</h2>
          <p>select yours from 10000+ templates</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
