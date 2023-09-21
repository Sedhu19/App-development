import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/rajas/resume/src/assets/css/Login.css'

function Login() {
  return (
    
    <div className="container">
      <div className="lefttext">
        Resume 
        <br></br>
        Builder
      </div>
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <p>New user ? <Link to="/signup">Register</Link></p>
    </div>
    
  );
}

export default Login;
