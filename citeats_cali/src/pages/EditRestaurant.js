import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

const UserProfileContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 10px;
  font-family: 'Kumbh Sans';
  padding: 20px;
`;

const UserProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Add this line to center the content horizontally */
  background-color: maroon;
  color: #fff;
  padding: 20px;
  border-radius: 0px;
  height: 250px;
  width: 300px;
  margin-right: 10px;
`;

const UserProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Change the border-radius to 50% for a perfect circle */
  margin-right: 20px;
  align-self: center; /* Add this line to center the image vertically */
`;

const UserProfileButton = styled.button`
  width: 150px;
  height: 40px;
  font-weight: bold;
  font-size: 16px; /* Adjust the font size as needed */
  background-color: gold;
  color: black;
  border: 2px solid black; /* Add a black border with 2 pixels width */
  border-radius: 90px;
  margin-top: 10px;
  cursor: pointer;
`;


const UserProfileInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black; /* Added a 2px black border below General Information */
  margin-bottom: 15px; /* Added margin-bottom for spacing */
`;

const UserProfileInfo = styled.div`
  flex: 1;
  margin-left: 50px;
  padding: 20px;
  width: 1200px;
  background-color: white; /* Updated background color to white */
  border: 2px solid black; /* Added a 2px black border */
  border-radius: 10px; /* Added border-radius for a rounded appearance */
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
`;

const UserProfileInfoHeader = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
`;

const UserProfileInfoItem = styled.div`
  margin-bottom: 15px;
  margin-top: 10px;
`;

const UserProfileInfoLabel = styled.span`
  font-size: 26px;
  font-weight: bold;
  margin-right: 10px;
`;

const UserProfileInfoValue = styled.span`
  font-size: 26px;
`;

const UserReviewsContainer = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 0px;
  height: 500px;
  width: 1300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ReviewsHeader = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
  border-bottom: 2px solid black; /* Added a 2px black border below Your Reviews */
  padding-bottom: 10px; /* Added padding for spacing */
`;

const Review = styled.div`
  margin-bottom: 15px;
  border-radius: 20px;
  background-color: gold; /* Added gold background color */
  padding: 15px; /* Added padding for spacing */
`;

const Star = styled.span`
  font-size: 26px;
  color: yellow; /* Set the color to gold or any other color you prefer */
`;

const ReviewTitle = styled.h2`
  font-size: 20px;
  text-align: left;
`;

const ReviewRating = styled.span`
  font-size: 20px;
  margin-right: 100px;
  text-align: right;
  padding: 0 200px;
`;

const ReviewText = styled.p`
  font-size: 20px;
`;

const ReviewIcon = styled.img`
  width: 70px; // Adjust the width as needed
  height: 15px; // Adjust the height as needed
  margin-top: 10px; // Adjust the margin-top as needed
  margin-left: auto; // Center the image horizontally
  margin-right: auto;
`;

const ReviewButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`;

const AdditionalTextBelowUserProfile = styled.p`
  font-size: 26px;
  text-align: Left;
`;
const AdditionalTextContainer = styled.div`
  margin-top: -550px;
  position: absolute;
  left: 50px; /* Adjust the value as needed */
  font-weight: bold;
`;

const handleFileUpload = (e, section) => {
    const file = e.target.files[0]; // Get the first file from the selected files
  
    // Perform actions with the file, such as updating state or sending it to the server
    console.log(`File uploaded for ${section}:`, file);
  };
  
const EditRestaurant = () => {
  return (
    <div>
      <Header />
      <UserProfileContainer>
        <UserProfileHeader>
          <UserProfileImage src="user.png" alt="User Profile Image" />
        </UserProfileHeader>
        <UserProfileInfo>
          <UserProfileInfoContainer>
            <UserProfileInfoHeader>General Information</UserProfileInfoHeader>
            <UserProfileButton>Edit Profile</UserProfileButton>
          </UserProfileInfoContainer>
          <UserProfileInfoItem>
            <UserProfileInfoLabel>Restaurant Name:</UserProfileInfoLabel>
            <UserProfileInfoValue>Sisig ni Tatay</UserProfileInfoValue>
          </UserProfileInfoItem>
          <UserProfileInfoItem>
            <UserProfileInfoLabel>Email:</UserProfileInfoLabel>
            <UserProfileInfoValue>tatay@example.com</UserProfileInfoValue>
          </UserProfileInfoItem>
          <UserProfileInfoItem>
            <UserProfileInfoLabel>Address:</UserProfileInfoLabel>
            <UserProfileInfoValue>Mariano Abella St, Cebu City, 6000 Cebu</UserProfileInfoValue>
          </UserProfileInfoItem>
          <UserProfileInfoItem>
            <UserProfileInfoLabel>CuisineType:</UserProfileInfoLabel>
            <UserProfileInfoValue>Sisig</UserProfileInfoValue>
          </UserProfileInfoItem>
          <UserProfileInfoItem>
            <UserProfileInfoLabel>PhoneNumber:</UserProfileInfoLabel>
            <UserProfileInfoValue>09270393950</UserProfileInfoValue>
          </UserProfileInfoItem>
          <UserProfileInfoItem>
            <UserProfileInfoLabel>Operning Hours:</UserProfileInfoLabel>
            <UserProfileInfoValue>8:00AM-10:00PM Mon-Sat</UserProfileInfoValue>
          </UserProfileInfoItem>

          <UserProfileInfoItem>
            <UserProfileInfoLabel>Menu:</UserProfileInfoLabel>
            <UserProfileInfoValue>
                <input
                type="file"
                accept="image/*"  // Specify accepted file types (images in this case)
                onChange={(e) => handleFileUpload(e, 'menu')} // Add a function to handle file uploads
                />
            </UserProfileInfoValue>
            </UserProfileInfoItem>

            <UserProfileInfoItem>
            <UserProfileInfoLabel>Ambience:</UserProfileInfoLabel>
            <UserProfileInfoValue>
                <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'ambience')}
                />
            </UserProfileInfoValue>
            </UserProfileInfoItem>

            <UserProfileInfoItem>
            <UserProfileInfoLabel>Food:</UserProfileInfoLabel>
            <UserProfileInfoValue>
                <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'food')}
                />
            </UserProfileInfoValue>
            </UserProfileInfoItem>


          <UserReviewsContainer>
            <ReviewsHeader>Your Restaurant Reviews</ReviewsHeader>
            
          </UserReviewsContainer>

        </UserProfileInfo>
      </UserProfileContainer>
      <AdditionalTextContainer>
        <AdditionalTextBelowUserProfile>
          Feedback
        </AdditionalTextBelowUserProfile>
        <AdditionalTextBelowUserProfile>
          Contact Support
        </AdditionalTextBelowUserProfile>
      </AdditionalTextContainer>
      <Footer />
    </div>
  );
};

export default EditRestaurant;
