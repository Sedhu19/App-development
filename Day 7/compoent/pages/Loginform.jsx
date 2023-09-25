import React, { useState } from "react";
import '../asserts/css/Loginform.css';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/UserSlice";
import { useDispatch } from 'react-redux';
import Popup from "../popup/popup";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [message, setMessage] = useState({
    type: '',
    content: '',
    url: '',
    btn: ''
  });

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showMessage = (type, content, url = '', btn = 'Got it') => {
    setMessage({ type, content, url, btn });
    setPopupVisible(true);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    showMessage('error', 'Restricted action');
  };

  const handleGotItClick = () => {
    if (message.url) {
      navigate(message.url);
    }
    setPopupVisible(false);
  };

  const submitLoginForm = (e) => {
    e.preventDefault();
    const formValues = Object.values(formData);
    if (!formValues.some((value) => !value)) {
      showMessage('success', 'Login successful!', '/home');
      dispatch(login({ username: formData.username }));
    } else {
      showMessage('error', 'Please fill in all fields');
    }
  };

  return (
    <div>
      <div className="container">
        <form className="form" onSubmit={submitLoginForm}>
        <h1>Login</h1>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              required
              placeholder="Enter your username"
              onChange={eventHandler}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              required
              placeholder="Enter your password"
              onChange={eventHandler}
              onPaste={handlePaste}
            />
          </div>
          {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
          <div className='button-container'>
            <button type="submit">Login</button>
          </div>
      <div className='fi'>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
        </form>
        </div>
    </div>
  );
};

export default LoginForm;
