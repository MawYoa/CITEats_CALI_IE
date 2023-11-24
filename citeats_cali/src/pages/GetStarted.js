import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './GetStarted.css';  // Import the CSS file

const GetStarted = () => {
  return (
    <>
      <div>
        <div style={{ display: 'flex'}}>
          <div>
            <br />
            <img src="GetStarted.png" alt="GetStarted" style={{ width: '500px', height: '800px', marginLeft: '300px' }} />
          </div>

          <div style={{ width: '500px',height:'700px', marginLeft: '40px', marginTop: '100px' }}>
            <div className="form-container">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '26px' }}>
                  Elevate Your Campus Dining:
                  <br />
                  Join CITEats Now!
                </h2>
              </div>
              <br/>
              <br/>
              <div className="button-container">
                <button className="maroon-button" onClick={() => console.log('Sign in as Student')}>
                  Sign in as Student
                </button>
              </div>

              <div className="button-container">
                <button className="maroon-button" onClick={() => console.log('Sign in as Restaurant Owner')}>
                  Sign in as Restaurant Owner
                </button>
              </div>

              <div className="button-container">
                <button className="maroon-button" onClick={() => console.log('Sign in as Admin')}>
                  Sign in as Admin
                </button>
              </div>

              <h4 style={{ textAlign: 'center', alignItems: 'center' }}>Or</h4>

              <div className="button-container">
                <button className="maroon-button" onClick={() => console.log('Sign Up Now')}>
                  Sign Up Now
                </button>
                
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
