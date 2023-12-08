import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  const navigate = useNavigate();
  const [regis, setRegis] = useState(false);
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation ();
  const [address, setAddress] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !email || !password || !confirmPassword || !address || !cuisineType || !phoneNumber || !website) {
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
      navigate('/RestaurantOwnerLogin');
    }
  }, [regis, navigate]);
  
  const handleJoinUs = async () => {
    try {
      const response = await axios.post('http://localhost:8080/restaurants/createRestaurants', {
        name,
        password,
        email,
        address,
        cuisineType,
        phoneNumber,
        website,
      });
      alert('Registration successful:', response.data);
      // Redirect or show a success message as needed
    } catch (error) {
      alert('Error during registration:', error);
      // Handle registration failure, show error message, etc.
    }
  };
  
  return (
    <div >
      <div className="signup-container" style={{fontFamily:'Kumbh Sans', textAlign: 'center', position: 'relative', left:"150px", paddingBottom: '150px'}}>
      
        <h1 className="heading" style={{fontFamily:'Kumbh Sans'}}>Boost your reputation with CIT Eats!</h1>
        <p className="paragraph">Sign up now and start gaining new customers to boost your restaurant growth.</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="restaurantName"
            className="input"
            placeholder="Restaurant Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
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
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            name="cuisineType"
            className="input"
            placeholder="Cuisine Type"
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
          />
          <input
            type="tel"
            name="phoneNumber"
            className="input"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            name="website"
            className="input"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
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
        <p style={{ marginTop: '20px', fontFamily: 'Kumbh Sans' }}>
          Already have an account?{' '}
          <Link to="/" style={{ color: 'maroon', textDecoration: 'underline' }}>
            Sign In!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
