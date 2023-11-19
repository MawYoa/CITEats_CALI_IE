import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define the Star styled component
const Star = styled.span`
  font-size: 20px;
  color: yellow; /* Set the color to gold or any other color you prefer */
`;

const ReviewsContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewsHeader = styled.div`
  height: 80px;
  background-color: #333;
  color: #fff;
  align-items: center;
  text-align: center;
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
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 1000px;
  margin-left: 5px;
  margin-right: 10px;
  align-items: center;
`;

const Reviews = () => {
  return (
    <div>
      <Header />
      <br></br>
      <ReviewsContainer>
        <ReviewsHeader>
          <br></br>
          <ReviewsTitle>McDonald's - Cebu Southroad </ReviewsTitle>
        </ReviewsHeader>
        <br></br>
        <h2 style={{textAlign:'center'}}>All Reviews </h2>
        <h3 style={{textAlign:'right'}}>
          Overall Rating 4.4 <Star>★</Star>
        </h3>
        <ReviewsContent>
          {/* Inserting the provided ReviewCard components */}
          <ReviewCard>
            <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>YEZETH</p>
              <p>1 month ago, reviewed on</p>
              <p>Great service! Great food!</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>5.0</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Kristhyn</p>
              <p>2 months ago, reviewed on</p>
              <p>Awesome as always!</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>5.0</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Nikka</p>
              <p>2 months ago, reviewed on</p>
              <p>Gamay ra kaayo ang chicken</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>4.0</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Earl</p>
              <p>3 months ago, reviewed on</p>
              <p>Okay raman sya</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>4.0</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Therese</p>
              <p>3 months ago, reviewed on</p>
              <p>Excellent food</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>4.0</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Melanie</p>
              <p>3 months ago, reviewed on</p>
              <p>Dry ra gamay ang chicken</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>3.0</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Bianca</p>
              <p>4 months ago, reviewed on</p>
              <p>Great experince and very friendly riders</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>5.0</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Meggie</p>
              <p>5 months ago, reviewed on</p>
              <p>Medyo dugay ang preparation sa food</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>3.5</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Kimberly</p>
              <p>6 months ago, reviewed on</p>
              <p>Great food and services</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>4.5</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Beth</p>
              <p>6 months ago, reviewed on</p>
              <p>Not sure if mo order pako balik dinhi..</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>2.5</p>
            </div>
          </ReviewCard>
          <ReviewCard>
          <div>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>Miguel</p>
              <p>8 months ago, reviewed on</p>
              <p>Very good experience</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star>★</Star>
              <p style={{ color: 'gold', marginLeft: '5px' }}>4.0</p>
            </div>
          </ReviewCard>
        </ReviewsContent>
      </ReviewsContainer>
      <br></br>
      <Footer />
    </div>
  );
};

export default Reviews;
