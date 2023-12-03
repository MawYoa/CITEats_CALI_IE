import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const JoinUs = () => {
  const navigate = useNavigate();
  const [regis, setRegis] = useState(false);
  const [restaurantName, setRestaurantName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation ();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!restaurantName || !email || !password || !confirmPassword) {
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

  const handleJoinUs = async () => {
    try {
      const response = await axios.post('http://localhost:8080/users/createUser', {
        username: restaurantName,
        password,
        email,
        userType: 'RestaurantOwner', // Set the userType to 'RestaurantOwner'
      });
      alert('Registration successful:', response.data);
      // Redirect or show a success message as needed
    } catch (error) {
      alert('Error during registration:', error);
      // Handle registration failure, show error message, etc.
    }
  };

  return (
    <div>
      <Header userId={location.state.userId}/>
      <div className="signup-container" style={{fontFamily:'Kumbh Sans'}}>
      
        <h1 className="heading" style={{fontFamily:'Kumbh Sans'}}>Boost your reputation with CIT Eats!</h1>
        <p className="paragraph">Sign up now and start gaining new customers to boost your restaurant growth.</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="restaurantName"
            className="input"
            placeholder="Restaurant Name"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
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
            style={{ backgroundColor: 'maroon', color: '#fff' }}
            onClick={handleJoinUs}
          >
            JOIN US
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
