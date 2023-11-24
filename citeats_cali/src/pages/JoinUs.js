import React, { useState } from 'react';
import Header from '../components/Header';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Import the icon components
import "@fontsource/kumbh-sans"; 

const JoinUs = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!restaurantName || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    // TODO: Submit the signup form to the server
  };

  return (
    <>
    
    <div style={{ backgroundColor: '#F4F4F4', textAlign: 'center' ,fontFamily:'Kumbh Sans'}}> {/* Center align the entire form */}
      <Header />
      <div className="joinus-container" style={{fontFamily:'Kumbh Sans'}}>
        <h1 className="heading" style={{fontFamily:'Kumbh Sans'}}>Boost your reputation with CIT Eats!</h1>
        <p className="paragraph">Sign up now and start gaining new customers to boost your restaurant growth.</p>
        <div style={{ position:'relative', right:'110px' }}>
        <form className="form" onSubmit={handleSubmit}>
          {/* Inserting the account icon */}
          <div style={{ position: 'relative', display: 'inline-block', textAlign: 'left' }}>
            <FaUser style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input
              type="text"
              name="restaurantName"
              className="input"
              placeholder="Restaurant Name"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              style={{ paddingLeft: '30px' }}
            />
          </div>
          {/* Inserting the email icon */}
          <div style={{ position: 'relative', display: 'inline-block', textAlign: 'left' }}>
            <FaEnvelope style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingLeft: '30px' }}
            />
          </div>
          {/* Inserting the password icon */}
          <div style={{ position: 'relative', display: 'inline-block', textAlign: 'left' }}>
            <FaLock style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingLeft: '30px' }}
            />
          </div>
          {/* Inserting the password icon for confirm password */}
          <div style={{ position: 'relative', display: 'inline-block', textAlign: 'left' }}>
            <FaLock style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input
              type="password"
              name="confirmPassword"
              className="input"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ paddingLeft: '30px' }}
            />
          </div>
          <button
            type="submit"
            className="signup-button"
            style={{ backgroundColor: '#E21B70', color: '#fff', marginTop: '20px', position:'relative', left:'110px',fontFamily:'Kumbh Sans' }} // Added margin-top for spacing
          
          >
            SIGN UP
          </button>
        
        </form>
        
        </div>
      </div>
    </div>
    </>
  );
};

export default JoinUs;