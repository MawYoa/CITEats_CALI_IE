import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
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
  max-height: 500px; /* Set a maximum height */
  overflow-y: auto;
  padding: 0 0px;
  height: 500px;
  width: 100%;
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
  background-color: white;
  border: 2px solid black; /* Add yellow borders */
  padding: 15px;
`;

const Star = styled.span`
  font-size: 26px;
  color: yellow; /* Set the color to gold or any other color you prefer */
  
`;


const ReviewRating = styled.span`
  font-size: 20px;
  margin-right: 100px;
  text-align: left;
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

const handleFileUpload = (e, section) => {
    const file = e.target.files[0];
    console.log(`File uploaded for ${section}:`, file);
    // Perform actions with the file, such as updating state or sending it to the server
  };
  
  const EditRestaurant = () => {
    const [restaurantData, setRestaurantData] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [restaurantOpeningHours, setrestaurantOpeningHours] = useState('');
    const { restaurantId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get(`http://localhost:8080/restaurants/${restaurantId}`); // Update the API endpoint
          setRestaurantData(result.data);
  
          // Set the initial values, handling the case where they might be null or undefined
          setName(result.data.name ?? '');
          setAddress(result.data.address ?? '');
          setCuisineType(result.data.cuisineType ?? '');
          setPhoneNumber(result.data.phoneNumber ?? '');
          setrestaurantOpeningHours(result.data.restaurantOpeningHours ?? '');
          setWebsite(result.data.website ?? '');

        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleWebsiteChange = (e) => {
      setWebsite(e.target.value);
    };
  
    const handleAddressChange = (e) => {
      setAddress(e.target.value);
    };
  
    const handleCuisineTypeChange = (e) => {
      setCuisineType(e.target.value);
    };
  
    const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
    };
  
    const handlerestaurantOpeningHoursChange = (e) => {
      setrestaurantOpeningHours(e.target.value);
    };
  
    const handleToggleEdit = () => {
      setEditMode(!editMode);
    };
  
    const handleSaveProfile = async () => {
      try {
        const response = await axios.put(`http://localhost:8080/restaurants/updateRestaurantsProfile/${restaurantId}`, {
          
          restaurantId: restaurantData.restaurantId,
          name,
          website,
          address,
          cuisineType,
          phoneNumber,
          restaurantOpeningHours,
        });
  
        // Update the restaurant data state using the response data
        setRestaurantData(response.data);
  
        handleToggleEdit(); // Toggle back to view mode after saving
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleFileUpload = (e, section) => {
      const file = e.target.files[0];
      console.log(`File uploaded for ${section}:`, file);
      // Perform actions with the file, such as updating state or sending it to the server
    };

    console.log(reviews);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const reviewsResult = await axios.get(`http://localhost:8080/reviews/getReviewsByRestaurantId/${restaurantId}`);
          const filteredReviews = reviewsResult.data.filter(review => {
            console.log('Review.restaurantId Type:', typeof review.restaurantId);
            console.log('restaurantId Type:', typeof restaurantId);
            return review.restaurantId.toString() === restaurantId;
          });
          
          console.log('Filtered Reviews:', filteredReviews);
          setReviews(filteredReviews);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, [restaurantId]);
    


    

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UserProfileButton onClick={handleToggleEdit} style={{ marginRight: '10px' }}>
                {editMode ? 'Cancel Changes' : 'Edit Profile'}
              </UserProfileButton>
              {editMode && (
                <UserProfileButton onClick={handleSaveProfile}>
                  Save Changes
                </UserProfileButton>
              )}
            </div>
          </UserProfileInfoContainer>
          <UserProfileInfoItem>
          <UserProfileInfoLabel>Restaurant Name:</UserProfileInfoLabel>
          {editMode ? (
            <input
              type="text"
              value={name}
              placeholder={restaurantData.name}
              onChange={handleNameChange}
            />
          ) : (
            <UserProfileInfoValue>{restaurantData.name}</UserProfileInfoValue>
          )}
        </UserProfileInfoItem>
          <UserProfileInfoItem>
          <UserProfileInfoLabel>Website:</UserProfileInfoLabel>
          {editMode ? (
            <input
              type="text"
              value={website}
              placeholder={restaurantData.website}
              onChange={handleWebsiteChange}
            />
          ) : (
            <UserProfileInfoValue>{restaurantData.website}</UserProfileInfoValue>
          )}
        </UserProfileInfoItem>
        <UserProfileInfoItem>
          <UserProfileInfoLabel>Address:</UserProfileInfoLabel>
          {editMode ? (
            <input
              type="text"
              value={address}
              placeholder={restaurantData.address}
              onChange={handleAddressChange}
            />
          ) : (
            <UserProfileInfoValue>{restaurantData.address}</UserProfileInfoValue>
          )}
          </UserProfileInfoItem>
          <UserProfileInfoItem>
                <UserProfileInfoLabel>CuisineType:</UserProfileInfoLabel>
                {editMode ? (
                  <input
                    type="text"
                    value={cuisineType}
                    placeholder={restaurantData.cuisineType}
                    onChange={handleCuisineTypeChange}
                  />
                ) : (
                  <UserProfileInfoValue>{restaurantData.cuisineType}</UserProfileInfoValue>
                )}
              </UserProfileInfoItem>
              <UserProfileInfoItem>
                <UserProfileInfoLabel>PhoneNumber:</UserProfileInfoLabel>
                {editMode ? (
                  <input
                    type="text"
                    value={phoneNumber}
                    placeholder={restaurantData.phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                ) : (
                  <UserProfileInfoValue>{restaurantData.phoneNumber}</UserProfileInfoValue>
                )}
              </UserProfileInfoItem>
              <UserProfileInfoItem>
                <UserProfileInfoLabel>Opening Hours:</UserProfileInfoLabel>
                {editMode ? (
                  <input
                    type="text"
                    value={restaurantOpeningHours}
                    placeholder={restaurantData.restaurantOpeningHours}
                    onChange={handlerestaurantOpeningHoursChange}
                  />
                ) : (
                  <UserProfileInfoValue>{restaurantData.restaurantOpeningHours}</UserProfileInfoValue>
                )}
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

            <ReviewsHeader>Your Restaurant Reviews</ReviewsHeader>
            <UserReviewsContainer>
              {reviews.map((review) => (
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

export default EditRestaurant;
