// frontend/Login.js

import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter valid login credentials.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password is short');
      alert('Password is short');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8081/api/v1/auth/authenticate', {
        email,
        password,
      });

      navigate('/home');

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error: ', error);
      setErrorMessage('Password is Incorrect');
    }
    // navigate('/home');
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            className="in"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="in"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
    <div className='logbtn'>
          <button className="b">Login</button>
          </div>
        </form>
      <div className='newpage'>
      <h3>New User?<Link to='/signup'><a>Register here!</a></Link></h3>
      
      </div>
      </div>
    </div>
  );
}

export default Login;



