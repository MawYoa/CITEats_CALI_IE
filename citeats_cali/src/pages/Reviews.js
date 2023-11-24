import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const Star = styled.span`
  font-size: 20px;
  color: yellow;
`;

const ReviewsContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: #fff;
  font-family: 'Kumbh Sans';
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewsHeader = styled.div`
  height: 80px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReviewsTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ReviewsContent = styled.div`
  padding: 20px;
`;

const ReviewCard = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
`;

const ReviewInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

const ReviewText = styled.p`
  margin-bottom: 10px;
`;

const StarRating = styled.div`
  color: gold;
`;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:8080/reviews/getAllReviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <Header />
      <br />
      <ReviewsContainer>
        <ReviewsHeader>
          <br />
          <ReviewsTitle>Restaurant Reviews</ReviewsTitle>
        </ReviewsHeader>
        <br />
        <ReviewsContent>
          {reviews.map((review) => (
            <ReviewCard key={review.reviewId}>
              <ReviewInfo>
                <p>Restaurant ID: {review.restaurantId}</p>
                <p>User ID: {review.userId}</p>
                <p>Date Posted: {new Date(review.datePosted).toLocaleDateString()}</p>
              </ReviewInfo>
              <div style={{ flex: 2 }}>
                <ReviewText>{review.comment}</ReviewText>
                <StarRating>{Array(review.rating).fill(<Star>★</Star>)}</StarRating>
              </div>
            </ReviewCard>
          ))}
        </ReviewsContent>
      </ReviewsContainer>
      <br />
      <Footer />
    </div>
  );
};

export default Reviews;
