import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFile, faInfo, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';


import 'C:/Users/rajas/resume/src/assets/css/Navbar.css'; // Update the path to your CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faHome} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/my-resumes">
            <FontAwesomeIcon icon={faUser} />
            Users
          </Link>
        </li>
        <li>
          <Link to="/resume-templates">
            <FontAwesomeIcon icon={faFile} />
            Templates
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfo} />
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
