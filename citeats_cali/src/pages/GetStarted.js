import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import "@fontsource/kumbh-sans"; 
import './GetStarted.css';  // Import the CSS file

const GetStarted = () => {

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the color from the parent */
`;
  return (
    <>
      <div>
        <Header/>
        <div style={{ display: 'flex'}}>
          <div>
            <br />
            <img src="GetStarted.png" alt="GetStarted" style={{ width: '500px', height: '800px', marginLeft: '300px' }} />
          </div>


          <div style={{ width: '500px',height:'700px', marginLeft: '40px', marginTop: '100px' ,fontFamily: 'Kumbh Sans'}}>
            <div className="form-container">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ fontFamily: 'Kumbh Sans',fontSize:'28px',letterSpacing:'-1px'}}>
                  Elevate Your Campus Dining:
                  <br />
                  Join CITEats Now!
                </h2>
              </div>
              <br/>
              <br/>
              <div className="button-container">
                <StyledLink to="/Login">
                <button className="maroon-button" onClick={() => alert('Sign in as Student')}>
                  Sign in as Student
                </button>
                </StyledLink>
              </div>

              <div className="button-container">
              <StyledLink to="/Login">
                <button className="maroon-button" onClick={() => alert('Sign in as Restaurant Owner')}>
                  Sign in as Restaurant Owner
                </button>
                </StyledLink>
              </div>

              <div className="button-container">
              <StyledLink to="/Login">
                <button className="maroon-button" onClick={() => alert('Sign in as Admin')}>
                  Sign in as Admin
                </button>
                </StyledLink>
              </div>

              <h4 style={{ textAlign: 'center', alignItems: 'center' }}>Or</h4>

              <div className="button-container">
              <StyledLink to="/SignUp">
                <button className="maroon-button" onClick={() => alert('Sign Up Now')}>
                  Sign Up Now
                </button>
                </StyledLink>
                
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
