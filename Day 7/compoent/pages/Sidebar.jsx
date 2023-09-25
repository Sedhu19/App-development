import React from 'react';
import { Link } from 'react-router-dom';
import '../asserts/css/Sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/templates">Templates</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/login">Log out</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
