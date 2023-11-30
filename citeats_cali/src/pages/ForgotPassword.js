import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForgotPasswordContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-Family: Kumbh Sans;
`;

const ForgotPasswordForm = styled.form`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #FAD247;
`;

const ForgotPasswordHeading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ForgotPasswordInput = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
`;

const ForgotPasswordButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #E21B70;
  align-items: center;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

const CenteredText = styled.p`
  text-align: center;
`;


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changeSuccess, setChangeSuccess] = useState(false);
  const [changeError, setChangeError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Fetch users
      const response = await axios.get(`http://localhost:8080/users/getAllUsers`);
      const users = response.data;
  
      // Find user by email
      const user = users.find((user) => user.email === email);
  
      if (!user) {
        setChangeError('User not found with the provided email.');
        setChangeSuccess(false);
        return;
      }
  
      // Update user password
      const responseUpdate = await axios.put(`http://localhost:8080/users/updateUser/1`, {
        newPassword: password,
      });
  
      console.log('Password reset successful:', responseUpdate.data);
      setChangeSuccess(true);
      setChangeError('');
    } catch (error) {
      console.error('Error resetting password:', error);
      setChangeSuccess(false);
      setChangeError('Error resetting password. Please try again.');
    }
  };
  

  return (
    <div>
      <Header />
      <div>
        <ForgotPasswordContainer>
          <ForgotPasswordForm onSubmit={handleSubmit}>
            <ForgotPasswordHeading>Forgot Password?</ForgotPasswordHeading>
            <CenteredText>Enter your email address.</CenteredText>
            <ForgotPasswordInput
              type="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ForgotPasswordHeading>New Password</ForgotPasswordHeading>
            <CenteredText>
              Please create a new password that you don’t use on any other site.
            </CenteredText>
            <ForgotPasswordInput
              type="password"
              name="newPassword"
              placeholder="Create new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ForgotPasswordInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ForgotPasswordButton type="submit">Change</ForgotPasswordButton>

            {/* Display success or error message */}
            {changeSuccess && <p style={{ color: 'green' }}>Password changed successfully!</p>}
            {changeError && <p style={{ color: 'red' }}>{changeError}</p>}
          </ForgotPasswordForm>
        </ForgotPasswordContainer>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
