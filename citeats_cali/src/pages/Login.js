import React, { useState, useEffect } from 'react';
import './main.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/users/getAllUsers');

      const users = response.data;

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        // Login successful
        setIsLoggedIn(true);
        console.log('User logged in:', user);
        alert('User logged in:', user);
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
      // Redirect or show a success message as needed
      navigate('/Home');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>Login</h2>
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
            style={{ backgroundColor: 'maroon', color: '#fff', width: '300px', border: 'none' }}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
