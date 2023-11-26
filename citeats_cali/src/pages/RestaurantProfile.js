import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { FaCamera } from 'react-icons/fa'; // Import the camera icon from react-icons/fa

const FoodInputContainer = styled.div`
  position: relative;
  width: 500px;
  margin-bottom: 20px;
  font-family: 'Kumbh Sans';
`;


const FoodInput = styled.input`
  padding-left: 40px; /* Add padding for the icon */
  /* Your other styles */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM22 6h-4l-2-2h-4l-2 2H2v14h20V6zm-2 12H4V8h3l2-2h6l2 2h3v10z"/></svg>');
  background-repeat: no-repeat;
  background-position: 500px center; /* Adjust the position of the icon */
  background-size: 24px 24px; /* Adjust the size of the icon */
`;

const AmbienceInputContainer = styled.div`
  position: relative;
  width: 500px;
  margin-bottom: 20px;
`;

const AmbienceInput = styled.input`
  padding-left: 40px; /* Add padding for the icon */
  /* Your other styles */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM22 6h-4l-2-2h-4l-2 2H2v14h20V6zm-2 12H4V8h3l2-2h6l2 2h3v10z"/></svg>');
  background-repeat: no-repeat;
  background-position: 500px center; /* Adjust the position of the icon */
  background-size: 24px 24px; /* Adjust the size of the icon */
`;
const MenuInputContainer = styled.div`
  position: relative;
  width: 500px;
  margin-bottom: 20px;
`;

const MenuInput = styled.input`
  padding-left: 40px; /* Add padding for the icon */
  /* Your other styles */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM22 6h-4l-2-2h-4l-2 2H2v14h20V6zm-2 12H4V8h3l2-2h6l2 2h3v10z"/></svg>');
  background-repeat: no-repeat;
  background-position: 500px center; /* Adjust the position of the icon */
  background-size: 24px 24px; /* Adjust the size of the icon */
`;

const AccountImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 20px;
  align-self: left; /* Add this line to center the image vertically */
`;


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
  margin-left: 200px;
  align-self: left;
  margin-right: 30px;
`;

const ImageText = styled.p`
  margin-top: 10px;
  text-align: right; /* Align the text to the right */
  margin-right: 10px; /* Set left margin to push the text to the right */
  font-weight: bold; /* Make the text bold */
`;

const Container = styled.div`
  border: 2px solid black; /* Border style */
  padding: 20px; /* Padding around the content */
  display: flex;
  flex-direction: column;
  margin-left: -10px; /* Space between image and content container */
  width: 800px;
`;

const Title = styled.h1`
  font-size: 1.5rem; /* Adjust the font size as needed */
  margin-bottom: 20px; /* Additional spacing between title and content */
  display: flex;
  align-items: center;
  border-bottom: 2px solid black; /* Add black line below the title */
`;

const EditButton = styled.button`
  margin-left: auto;
  /* Define oblong shape */
  border-radius: 100px; /* Adjust border radius */
  background-color: #ffb413; /* Button color */
  color: black; /* Text color */
  border: none; /* Remove default button border */
  cursor: pointer;
  width:80px;
  height:30px;
  font-weight: bold; /* Make the text bold */
  transition: background-color 0.3s ease; /* Add transition effect */
  font-family: 'Kumbh Sans';
  &:hover {
    background-color: maroon; /* Change color on hover */
    color:white;
  }
`;

const RestaurantName = styled.h1`
  font-size: 1rem; /* Adjust the font size as needed */
  /* Additional styles as needed */
`;

const EmailText = styled.h1`
  font-size: 1rem; /* Adjust the font size as needed */
  /* Additional styles as needed */
`;

const RestaurantIdText = styled.h1`
  font-size: 1rem; /* Adjust the font size as needed */
  /* Additional styles as needed */
`;

const BoldLabel = styled.label`
  font-weight: bold; /* Making the label text bold */
  /* Additional styles as needed */
`;

const RestaurantReviews = styled.h2`
  font-size: 1.2rem; /* Adjust the font size for reviews */
  border-bottom: 2px solid black; /* Add black line below the reviews */
  padding-bottom: 10px; /* Optional padding below the line */
  /* Additional styles as needed */
`;

const NoReviewsText = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  font-style: italic;
`;

const RestaurantProfile = () => {
  const restaurant = {
    name: '', // Empty string for the name
    description: '', // Empty string for the description
    address: '', // Empty string for the address
    contact: '', // Empty string for the contact
    phoneNumber: '', // Empty string for the phone number
    // Add more restaurant details as needed
  };

  const handleEdit = () => {
    // Logic for handling edit action
    console.log('Edit clicked');
  };

  return (
    <Layout>
      <Header />
      <Content>
        <ImageContainer>
          <AccountImage src="account.png" alt="" /> {/* Image here */}
          <ImageText>Feedback</ImageText>
          <ImageText>Contact Support</ImageText>
        </ImageContainer>
        <Container>
          <Title>
            General Information
            <br/>
            <EditButton onClick={handleEdit}>Edit</EditButton>
          </Title>
          <RestaurantName>Restaurant Name: Unknown</RestaurantName>
          <EmailText>Email: Unknown</EmailText>
          <br></br>
          <RestaurantIdText>RestaurantID: R#01</RestaurantIdText>
          <br />
          <br />
          <div className='ad-input'>
          <BoldLabel>Address</BoldLabel>
          <input className='input-address' style={{borderRadius: "40px", marginLeft:"80px", width: "500px", backgroundColor: "#F7F7F7", border: "none"}}></input>
          </div>
          
          <br />
          <br />
          <div className='c-type'>
          <BoldLabel>CuisineType</BoldLabel>
          <input className='input-type' style={{borderRadius: "40px", marginLeft:"55px", width: "500px", backgroundColor: "#F7F7F7", border: "none"}}></input>
          </div>
        
            <br />
            <br />
            <div className='ad-input'>
          <BoldLabel>PhoneNumber</BoldLabel>
          <input className='input-address' style={{borderRadius: "40px", marginLeft:"40px", width: "500px", backgroundColor: "#F7F7F7", border: "none"}}></input>
          </div>
        
            <br />
            <br />
            <div className='ad-input'>
          <BoldLabel>OpeningHours</BoldLabel>
          <input className='input-address' style={{borderRadius: "40px", marginLeft:"40px", width: "500px", backgroundColor: "#F7F7F7", border: "none"}}></input>
          </div>
    
            <br />
            <br />
            <div className='ad-input'>
          <BoldLabel>RestaurantLink</BoldLabel>
          <input className='input-address' style={{borderRadius: "40px", marginLeft:"40px", width: "500px", backgroundColor: "#F7F7F7", border: "none"}}></input>
          </div>
    
            <br />
            <br />
            <MenuInputContainer>
            <BoldLabel>Menu</BoldLabel>
            <MenuInput
            className='input-address'
            style={{
              borderRadius: "20px",
              height: "70px",
              width: "500px",
              backgroundColor: "#F7F7F7",
              marginLeft: "150px",
              border: "none"
            }}
          />
            </MenuInputContainer>
            
            
            
            <br />
            <br />

            <BoldLabel>Ambience</BoldLabel>
            <AmbienceInputContainer>
                <AmbienceInput 
                className='input-address'
                style={{
                  borderRadius: "20px",
                  height: "70px",
                  width: "500px",
                  backgroundColor: "#F7F7F7",
                  border: "none",
                  marginLeft: "150px"
                }}
              />
            </AmbienceInputContainer>
            
            <br />
            <br />
            <BoldLabel>Food</BoldLabel>
            <FoodInputContainer>
                <FoodInput 
                className='input-address'
                style={{
                  borderRadius: "20px",
                  height: "70px",
                  width: "500px",
                  backgroundColor: "#F7F7F7",
                  border: "none",
                  marginLeft: "150px"
                }}
              />
            </FoodInputContainer>
        
            <br />
            <br />
          <RestaurantReviews>Your Restaurant Reviews</RestaurantReviews>
          <NoReviewsText>You have no reviews as of yet...</NoReviewsText>
          
        </Container>
      </Content>
      <Footer />
    </Layout>
  );
};

export default RestaurantProfile;