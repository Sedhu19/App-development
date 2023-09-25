import React from "react";
import '../asserts/css/Signupform.css';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text"  placeholder="Enter your first name" id="firstName" name="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text"  placeholder="Enter your last name" id="lastName" name="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email"  placeholder="Enter your email id" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password"  placeholder="Enter your pwd"id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password"  placeholder="Enter your pwd" id="confirmPassword" name="confirmPassword" />
        </div>
        <div className="form-group">
        <Link to="/login"> <button type="submit" >Sign Up</button></Link>
        </div>
      <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default SignUpForm;
