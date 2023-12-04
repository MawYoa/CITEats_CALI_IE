import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ForgotPasswordContainer = styled.div`

  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 100px;
  margin-left: 450px;
  margin-right: 450px;
  font-Family: Kumbh Sans;
`;

const ForgotPasswordForm = styled.form`
  width: 500px;
  padding: 40px;
  border: 4px solid #FAD247;
  border-radius: 25px;
  background-color: #FAD247;
  font-family: Kumbh Sans;
  height: 600px;
  
`;

const ForgotPasswordHeading = styled.h1`
  text-align: center;
  font-family: Kumbh Sans;

  margin-bottom: 20px;
`;

const ForgotPasswordInput = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  font-family: Kumbh Sans;

  align-items: center;
`;

const ForgotPasswordButton = styled.button`
  width: 80%;
  padding: 10px;
  margin-left:40px;
  margin-right:40px;
  background-color: #E21B70;
  align-items: center;
  color: #fff;
  border: 4px solid #FAD247;
  border-radius: 25px;
  font-family: Kumbh Sans;

  &:hover {
    background-color: white;
    
    color:black;
  }
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
  const [userId, setUserId] = useState("");

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
      const responseUpdate = await axios.put(`http://localhost:8080/users/updateUser/${userId}`, {
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
      
        <ForgotPasswordContainer>
          <ForgotPasswordForm onSubmit={handleSubmit}>
            <ForgotPasswordHeading>Forgot Password?</ForgotPasswordHeading>
            <br/>
            <CenteredText>Enter your email address.</CenteredText>
            <br/>
            <ForgotPasswordInput
              type="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <ForgotPasswordHeading>New Password</ForgotPasswordHeading>
            <CenteredText>
              Please create a new password that you don’t use on any other site.
            </CenteredText>
            <br/>
            <ForgotPasswordInput
              type="password"
              name="newPassword"
              placeholder="Create new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <ForgotPasswordInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br/>
            <br/>
            <ForgotPasswordButton type="submit">Change</ForgotPasswordButton>

            {/* Display success or error message */}
            {changeSuccess && <p style={{ color: 'green' }}>Password changed successfully!</p>}
            {changeError && <p style={{ color: 'red' }}>{changeError}</p>}
          </ForgotPasswordForm>
        </ForgotPasswordContainer>
      
  );
};

export default ForgotPassword;
