import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation, useParams,useNavigate } from "react-router";
import { LoginContext } from './Rando';

const UserProfileContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 10px;
  margin-left:120px;
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

const ReviewsHeader = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: left;
`;

const UserReviewsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const ReviewRow = styled.tr`
  border-bottom: 2px solid black;
`;

const ReviewCell = styled.td`
  padding: 15px;
`;

const Star = styled.span`
  font-size: 26px;
  margin-right: 10px;
  color: yellow;
`;

const ReviewRating = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const ReviewButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewUpdateButton = styled.button`
  background-color: green;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #4a7c47;
  }
`;

const ReviewCancelButton = styled.button`
  background-color: blue;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

const ReviewDeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;


const ReviewRestaurantId = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;


const UserProfile = ({loginHandler}) => {
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userReviews, setUserReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [editableReview, setEditableReview] = useState({
    reviewId: '',
    userId: '',
    rating: 0,
    comment: '',
    datePosted: '',
  });

  const [editedRating, setEditedRating] = useState(0);
  const [editedComment, setEditedComment] = useState('');

  const { userId } = useParams() || {};
  const location = useLocation();

  const nav = useNavigate()
  const userLoggedIn = useContext(LoginContext)


    console.log("User ID:", userId); // Add this line for debugging
    useEffect(() => {

      const fetchData = async () => {
        try {
          console.log(userLoggedIn.userLoggedIn)
          // Check if the user is logged in
          if (!userLoggedIn.userLoggedIn) {
            alert('You must be logged in to access this page');
            nav('/');
            
            return null;
          }
    
          console.log("User ID:", userId);
          const result = await axios.get(`http://localhost:8080/users/${userId}`);
          setUserData(result.data);
    
          setUsername(result.data.username ?? '');
          setEmail(result.data.email ?? '');
    
          const reviewsResult = await axios.get(`http://localhost:8080/reviews/getReviewsByUserId/${userId}`);
          setUserReviews(reviewsResult.data);
    
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, [userId, userLoggedIn]);

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

  const handleUpdateReview = (review) => {
    setEditableReview({
      reviewId: review.reviewId,
      userId: review.userId,
      rating: review.rating,
      comment: review.comment,
      datePosted: review.datePosted,
      restaurantId: review.restaurantId,
    });

    // Set the initial values for editedRating and editedComment
    setEditedRating(review.rating);
    setEditedComment(review.comment);
  };

  const handleCancelUpdate = () => {
    // Display a confirmation dialog
    const confirmCancel = window.confirm("Are you sure you want to cancel the update? Any unsaved changes will be lost.");
  
    if (confirmCancel) {
      // If the user confirms, reset the state values to their original values
      setEditedRating(editableReview.rating);
      setEditedComment(editableReview.comment);
  
      // Close the edit mode
      setEditableReview({
        reviewId: '',
        userId: '',
        rating: 0,
        comment: '',
        datePosted: '',
        restaurantId: '',
      });
    }
  };
  


  const handleSaveReviewUpdate = async () => {
    try {
      const currentDate = new Date().toISOString(); // Get the current date and time
      const response = await axios.put(
        `http://localhost:8080/reviews/updateReview/${editableReview.reviewId}`,
        {
          userId: editableReview.userId,
          rating: editedRating,
          comment: editedComment,
          datePosted: currentDate,
          restaurantId: editableReview.restaurantId, // Add this line
          // other fields as needed
        }
      );
  
      // Update the reviews state with the updated review
      setUserReviews((prevReviews) =>
        prevReviews.map((item) =>
          item.reviewId === editableReview.reviewId
            ? {
                ...item,
                rating: editedRating,
                comment: editedComment,
                datePosted: currentDate,
                restaurantId: editableReview.restaurantId, // Add this line
              }
            : item
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      // Reset the editableReview state
      setEditableReview({
        reviewId: '',
        userId: '',
        rating: 0,
        comment: '',
        datePosted: '',
        restaurantId: '', // Add this line
      });
    }
  };
  
  
  const handleDeleteReview = async (reviewId) => {
    try {
      // Display a confirmation dialog
      const confirmDelete = window.confirm("Are you sure you want to delete this review?");
  
      if (confirmDelete) {
        // If the user confirms, proceed with deletion
        await axios.put(`http://localhost:8080/reviews/softDeleteReview/${reviewId}`);
  
        // Update the userReviews state after soft deletion
        setUserReviews((prevReviews) => prevReviews.filter((item) => item.reviewId !== reviewId));
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <div>
      <Header loginHandler={loginHandler} userId={location.state.userId}/>
      <UserProfileContainer>
        
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
        <UserReviewsTable>
          <thead>
            <ReviewRow>
              <ReviewCell>Restaurant ID</ReviewCell>
              <ReviewCell>User ID</ReviewCell>
              <ReviewCell>Rating</ReviewCell>
              <ReviewCell>Comment</ReviewCell>
              <ReviewCell>Date Posted</ReviewCell>
              <ReviewCell>Actions</ReviewCell>
            </ReviewRow>
          </thead>
          <tbody>
            {userReviews.map((review) => (
              <ReviewRow key={review.reviewId}>
                <ReviewCell>{review.restaurantId}</ReviewCell>
                <ReviewCell>{review.userId}</ReviewCell>
                <ReviewCell>
                  {editableReview.reviewId === review.reviewId ? (
                    <>
                      <Star>⭐</Star>
                      <input
                        type="number"
                        value={editedRating}
                        onChange={(e) => setEditedRating(e.target.value)}
                      />
                    </>
                  ) : (
                    <Star>⭐ {review.rating}</Star>
                  )}
                </ReviewCell>
                <ReviewCell>
                  {editableReview.reviewId === review.reviewId ? (
                    <textarea
                      value={editedComment}
                      onChange={(e) => setEditedComment(e.target.value)}
                    />
                  ) : (
                    review.comment
                  )}
                </ReviewCell>
                <ReviewCell>
                  {new Date(review.datePosted).toLocaleString()}
                </ReviewCell>
                <ReviewCell>
                  {editableReview.reviewId === review.reviewId ? (
                    <ReviewButtonsContainer>
                      <ReviewUpdateButton onClick={() => handleSaveReviewUpdate()}>
                        Save
                      </ReviewUpdateButton>
                      <ReviewCancelButton onClick={() => handleCancelUpdate()}>
                        Cancel
                      </ReviewCancelButton>
                    </ReviewButtonsContainer>
                  ) : (
                    <ReviewButtonsContainer>
                      <ReviewUpdateButton onClick={() => handleUpdateReview(review)}>
                        Edit
                      </ReviewUpdateButton>
                      <ReviewDeleteButton onClick={() => handleDeleteReview(review.reviewId)}>
                        Delete
                      </ReviewDeleteButton>
                    </ReviewButtonsContainer>
                  )}
                </ReviewCell>
              </ReviewRow>
            ))}
          </tbody>
        </UserReviewsTable>
        </UserProfileInfo>
      </UserProfileContainer>

      <Footer />
    </div>
  );
};

export default UserProfile;
