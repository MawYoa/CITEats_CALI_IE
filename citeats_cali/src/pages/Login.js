import React, { useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext';

import './main.css';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';
import Header from '../components/Header';
import "@fontsource/kumbh-sans"; 

const Login = ({loginHandler}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogIn = async (e) => {
    e.preventDefault();
  
    // Check if email and password are not empty
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
  
    try {
      const response = await axios.get('http://localhost:8080/users/getAllUsers');
      const users = response.data;
  
      const user = users.find((user) => user.email === email && user.password === password);
  
      if (user) {
        // Login successful
        setIsLoggedIn(true);
        setUserData(user); // Set user data in state
        loginHandler(true);
        alert(`User ${user.userId} logged in`);
  
        // You can store user data in state or any other necessary logic
      } else {
        alert('Invalid Email and Password.');
        // Handle invalid login (show error message, etc.)
      }
    } catch (error) {
      console.error('There was a problem with the login operation:', error);
      // Handle login failure, show error message, etc.
    }
  };
  

  useEffect(() => {
    // Check if login is successful
    if (isLoggedIn) {
      
      navigate('/Home', { state: { userId: userData.userId } });
    }
  }, [isLoggedIn, navigate, userData]);

  return (
    <div>
      <Header />
      <h2 style={{ fontFamily: 'Kumbh Sans', fontSize: '24px', letterSpacing: '-1px', textAlign: 'center' }}>
        Welcome back, Student!
      </h2>
      <div className="login-container">
        <h2 style={{fontFamily:'Kumbh Sans'}}>Login</h2>
        <form onSubmit={handleLogIn}>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <br />

          <div className="signup-link">
            Don't have an account?{' '}
            <Link to="/SignUp">
              <button type="button" className="signup-link-button">
                Sign up now!
              </button>
            </Link>
          </div>

          <br />

          <div className="forgot-password">
            <Link to="/ForgotPassword">
              <button type="button" className="forgotpassword">
                Forgot Password
              </button>
            </Link>
          </div>

          <br />
          <button
            type="submit"
            className="login-button"
            style={{ backgroundColor: 'maroon', color: '#fff', width: '300px', border: 'none', fontFamily: 'Kumbh Sans' }}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
