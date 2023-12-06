import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useParams } from "react-router";

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
  align-self: flex-end;
  margin-bottom: 20px;
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
  padding: 0 20px; /* Adjust padding as needed */
  height: 500px;
  max-height: 500px; /* Added max-height to limit the height */
  overflow-y: auto; /* Added overflow-y to add vertical scrollbar if needed */
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
  border: 2px solid black;
  background-color: white; /* Added gold background color */
  padding: 15px; /* Added padding for spacing */
`;

const Star = styled.span`
  font-size: 26px;
  margin-right: 10px;
  color: yellow; /* Set the color to gold or any other color you prefer */
`;

const ReviewRating = styled.span`
  font-size: 20px;
  margin-right: 100px;
  text-align: right;
`;

const ReviewText = styled.p`
  font-size: 20px;
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



const UserProfile = () => {

  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); 
  const [userReviews, setUserReviews] = useState([]); 
  const { userId } = useParams() ?? {};
  const location = useLocation();

  useEffect(() => {
    console.log("User ID:", userId); // Add this line for debugging
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/users/${userId}`);
        setUserData(result.data);

        // Set the initial name, handling the case where it might be null or undefined
        setUsername(result.data.username ?? '');
        setEmail(result.data.email ?? '');

        const reviewsResult = await axios.get(`http://localhost:8080/reviews/getReviewsByUserId/${userId}`);
        setUserReviews(reviewsResult.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveProfile = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/users/updateUser/${userId}`, {
        userId,
        username,
        email,
        // Add other fields as needed
      });
  
      // Update the user data state using the response data
      setUserData(response.data);
  
      handleEditClick();
    } catch (error) {
      console.error(error);
    }
  };
  

  
  
  return (
    <div>
      <Header userId={location.state.userId}/>
      <UserProfileContainer>
        <UserProfileHeader>
          <UserProfileImage src="user.png" alt="User Profile Image" />
        </UserProfileHeader>
            <UserProfileInfo>
            <UserProfileInfoContainer>
            <UserProfileInfoHeader>General Information </UserProfileInfoHeader>
              <UserProfileButton onClick={handleEditClick}>
                {editMode ? 'Cancel Changes' : 'Edit Profile'}          
              </UserProfileButton>
              </UserProfileInfoContainer>
              <UserProfileInfoItem>
                <UserProfileInfoLabel>Name:</UserProfileInfoLabel>
                {editMode ? (
                  <input
                    type="text"
                    value={username}
                    placeholder={userData.username}
                    onChange={handleNameChange}
                  />
                ) : (
                  <UserProfileInfoValue>{userData.username}</UserProfileInfoValue>
                )}
              </UserProfileInfoItem>
              <UserProfileInfoItem>
                <UserProfileInfoLabel>Email:</UserProfileInfoLabel>
                {editMode ? (
                  <input 
                  type="text"
                  value={email}
                  placeholder={userData.email}
                  onChange={handleEmailChange}
                  />
                ) : (
                  <UserProfileInfoValue>{userData.email}</UserProfileInfoValue>

                )}
                
              </UserProfileInfoItem>
              {editMode && (
                <UserProfileButton onClick={handleSaveProfile}>
                  Save Profile
                </UserProfileButton>
              )}
          <ReviewsHeader>Your Reviews</ReviewsHeader>
           <UserReviewsContainer>

              {userReviews.map((review) => (
                <Review key={review.reviewId}>
                    <ReviewText><b>User ID: </b>{review.userId}</ReviewText>
                  <ReviewRating>
                    <Star>⭐</Star> {review.rating}
                  </ReviewRating>
                  <ReviewText><b>Comment:</b></ReviewText>
                  <ReviewText>{review.comment}</ReviewText>
                  <ReviewText><b>Date Posted: </b>{new Date(review.datePosted).toLocaleString()}</ReviewText>
                </Review>
              ))}
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

export default UserProfile;
