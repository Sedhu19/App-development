import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'C:/Users/rajas/resume/src/assets/css/Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/UserSlice';
import Popup from '../popup/Popup';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();



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

    const showMessage = (type, content, url = '', btn = 'Got it') => {
      setMessage({ type, content, url, btn });
      setPopupVisible(true);
  };

  const handleGotItClick = () => {
    if (message.url) {
        navigate(message.url);
    }
    setPopupVisible(false);
};

    const eventHandler = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
  };


  const submitLoginForm = (e) => {
    e.preventDefault();
    const formValues = Object.values(formData);
    if (!formValues.some((value) => !value)) {
        showMessage('success', 'Login successful!', '/dashboard');
        dispatch(login({ username: formData.username }));
    } else {
        showMessage('error', 'Please fill in all fields');
    }
};
  return (
    <div className="container">
      <div className="lefttext">
        Resume 
        <br></br>
        Builder
      </div>
      <h1>Login</h1>
      <form onSubmit={submitLoginForm}>
      <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={eventHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            value={formData.password}
            onChange={eventHandler}
          />
        </div>
        <div className="form-group">
          <button type='submit'>Login</button>
        </div>
      </form>
      <p>New user ? <Link to="/signup">Register</Link></p>
      {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}

    </div>
    
  );
}

export default Login;
