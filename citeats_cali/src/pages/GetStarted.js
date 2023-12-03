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
      <div style={{backgroundColor:'#e9e9e9'}}>
        <div style={{ display: 'flex'}}>
          <div>
            <br />
            <img src="GetStarted.png" alt="GetStarted" style={{ width: '480px', height: '700px', marginLeft: '300px', marginTop:'10px'}} />
          </div>


          <div style={{ width: '500px',height:'800px', marginLeft: '-10px', marginTop: '20px' ,fontFamily: 'Kumbh Sans'}}>
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
                <button className="maroon-button">
                  Sign in as Student
                </button>
                </StyledLink>
              </div>

              <div className="button-container">
              <StyledLink to="/Login">
                <button className="maroon-button">
                  Sign in as Restaurant Owner
                </button>
                </StyledLink>
              </div>

              <div className="button-container">
              <StyledLink to="/Login">
                <button className="maroon-button">
                  Sign in as Admin
                </button>
                </StyledLink>
              </div>

              <h4 style={{ textAlign: 'center', alignItems: 'center' }}>Or</h4>

              <div className="button-container">
              <StyledLink to="/SignUp">
                <button className="maroon-button">
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
