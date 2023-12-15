import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Styled components for layout
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  font-family: 'Kumbh Sans';
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  margin-left: 20px;
  margin-right: 20px;
`;

const AccountImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const ImageText = styled.p`
  text-align: right;
  font-weight: bold;
  margin: 0;
  font-size: 0.8rem;
`;

const Container = styled.div`
  border: 2px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-left: -10px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
`;

const EditButton = styled.button`
  margin-left: auto;
  border-radius: 100px;
  background-color: #ffb413;
  color: black;
  border: none;
  cursor: pointer;
  width: 60px;
  height: 25px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-size: 0.8rem;
  &:hover {
    background-color: maroon;
    color: white;
  }
`;

const RestaurantName = styled.h1`
  font-size: 1rem;
  margin: 5px 0;
`;

const EmailText = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

const RestaurantIdText = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

const BoldLabel = styled.label`
  font-weight: bold;
  margin: 5px 0;
  font-size: 0.9rem;
`;

const Input = styled.input`
  border-radius: 10px;
  height: 30px;
  width: calc(100% - 20px);
  margin-left: 10px;
  background-color: #F7F7F7;
  border: none;
  font-size: 0.8rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ReviewsTitle = styled.h2`
  font-size: 1rem;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  margin-top: 20px;
`;

const NoReviewsText = styled.p`
  font-size: 0.8rem;
  margin-top: 10px;
  font-style: italic;
`;

const RestaurantProfile = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status when the component mounts
    if (!authenticated) {
      // Redirect to login page if not authenticated
      // You can use the Redirect component from react-router-dom
      return <Link to="/login" />;
    }
  }, [authenticated]);

  const restaurant = {
    name: 'Unknown',
    email: 'Unknown',
    restaurantId: 'R#01',
    // Add more restaurant details as needed
  };

  const handleEdit = () => {
    // Logic for handling edit action
    console.log('Edit clicked');
  };

  const handleLogout = () => {
    // Logic for handling logout
    setAuthenticated(false);
    alert('Logged out successfully!');
  };

  if (!authenticated) {
    return (
      <Layout>
        <Header />
        <Content>
          <Container>
            <Title>Authentication Required</Title>
            <p>Please login to view the restaurant profile.</p>
          </Container>
        </Content>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <Content>
        <ImageContainer>
          <AccountImage src="account.png" alt="" />
          <ImageText>Feedback</ImageText>
          <ImageText>Contact Support</ImageText>
        </ImageContainer>
        <Container>
          <Title>
            General Information
            <EditButton onClick={handleEdit}>Edit</EditButton>
          </Title>
          <RestaurantName>Restaurant Name: {restaurant.name}</RestaurantName>
          <EmailText>Email: {restaurant.email}</EmailText>
          <RestaurantIdText>RestaurantID: {restaurant.restaurantId}</RestaurantIdText>

          <InputContainer>
            <BoldLabel>Address</BoldLabel>
            <Input className='input-address' />
          </InputContainer>

          <InputContainer>
            <BoldLabel>CuisineType</BoldLabel>
            <Input className='input-type' />
          </InputContainer>

          <InputContainer>
            <BoldLabel>PhoneNumber</BoldLabel>
            <Input className='input-address' />
          </InputContainer>

          <InputContainer>
            <BoldLabel>OpeningHours</BoldLabel>
            <Input className='input-address' />
          </InputContainer>

          <InputContainer>
            <BoldLabel>RestaurantLink</BoldLabel>
            <Input className='input-address' />
          </InputContainer>

          <InputContainer>
            <BoldLabel>Menu</BoldLabel>
            <Input className='input-address' />
          </InputContainer>


          <ReviewsTitle>Your Restaurant Reviews</ReviewsTitle>
          <NoReviewsText>You have no reviews as of yet...</NoReviewsText>
        </Container>
      </Content>
      <Footer />
    </Layout>
  );
};

export default RestaurantProfile;
