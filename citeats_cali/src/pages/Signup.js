import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './GetStarted.css';  


const SignUp = () => {
  const navigate = useNavigate();
  const [regis, setRegis] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !confirmPassword || !userType) {
      alert('Please fill in all fields.');
      return;
    }

    // Password validation logic
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.length < 8 || !passwordRegex.test(password)) {
      alert('Invalid password. Follow the password combination rule.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setRegis(true);
  };

  useEffect(() => {
    // Check if registration is successful
    if (regis) {
      // Redirect or show a success message as needed
      navigate('/Login');
    }
  }, [regis, navigate]);

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:8080/users/createUser', {
        username: userName,
        password,
        email,
        userType,
      });
      console.log('Registration successful:', response.data);
      // Redirect or show a success message as needed
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle registration failure, show error message, etc.
    }
  };

  return (
    <div>
      
      <div className="signup-container" style={{fontFamily:'Kumbh Sans'}}>
        <h1>Sign Up!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            style={{width:'400px'}}
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            style={{width:'400px'}}
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            style={{width:'400px'}}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            style={{width:'400px'}}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br></br> 
          <label>User Type:</label>
          <div style={{width:'200px',marginLeft:'-200px'}}>
          <select
            name="userType"
            className="input"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select User Type</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            <option value="RestaurantOwner">Restaurant Owner</option>
          </select>
          </div>
          <br/>
          <br/>
          <button
            type="submit"
            className="maroon-button"
            onClick={handleSignUp}
          >
            SIGN UP
          </button>
          <br></br>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
