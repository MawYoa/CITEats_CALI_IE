import React, { useState } from 'react';
import './main.css';
//import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const history = useHistory();

  const handleLogin = () => {
    // Add your login logic here
    
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    //history.push('/ForgotPassword');
  };

  const handleSignUp = () => {
    // Redirect to the signup page
   // history.push('Signup');
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            //onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            //onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <br></br>
          
          <div className="signup-link">
            Don't have an account?{' '}
            <Link to="/SignUp"><button type="button" className="signup-link-button">Sign up now!</button></Link>
          </div>
          
          <br></br>

          
          <div className="forgot-password">
            <Link to="/ForgotPassword"><button type="button" className="forgotpassword">Forgot Password</button></Link>
          </div>
          

          
          <br></br>
          <Link to="/Home"><button type="button" className="login">Login</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
