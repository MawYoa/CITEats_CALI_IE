import React, { useState } from 'react';
import './main.css';
import Header from '../components/Header';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    // TODO: Submit the signup form to the server
  };

  return (
    <div>
      <Header />
      <div className="signup-container">
        <h1>Sign Up!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            className="input"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            className="input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="signup-button"
            style={{ backgroundColor: '#E21B70', color: '#fff' }}
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
