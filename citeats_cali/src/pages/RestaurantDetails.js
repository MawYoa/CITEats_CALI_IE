import React, { useState } from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the color from the parent */
`;
const RestaurantDetailsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Kumbh Sans';

`;

// const RestaurantDetailsHeader = styled.div`
//   height: 300px;
//   background-size: cover;
//   background-position: center;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// `;

const RestaurantDetailsName = styled.h1`
  font-size: 24px;
  margin: 10px 0 0;
`;

const RestaurantDetailsInfo = styled.div`
  padding: 20px;
`;

const RestaurantDetailsInfoItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const RestaurantDetailsInfoLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  display: inline-block;
  width: 200px;
`;

const RestaurantDetailsInfoValue = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const GoogleLocationImage = styled.img`
  width: 340px;
  height: 150px;
  margin-top: 20px; /* Add margin to separate from other info */
  
`;

const RestaurantDetailsButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-right: 700px; /* Adjust the negative margin for closer spacing */
  margin-left: 100px;
`;


const RestaurantDetailsButton = styled.div`
  width: 250px;
  height: 220px;
  
  margin: 0 10px; /* Add margin to create space between pictures */
  border-radius: 10px;
  background-image: ${(props) => `url('${props.image}')`};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
  }
`;


const ReviewContainer = styled.div`
  justify-content: center;
  margin-top: -50px;
  width: 82%; /* Adjust the width as needed */
  margin: 0 auto;
`;


const SeeAllReviewsButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #fff;
  color: gold;
  border: 2px solid gold;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Add color transition */

  &:hover {
    background-color: gold;
    color: #fff; /* Change text color to white on hover */
  }
`;

const ReviewCard = styled.div`
  padding: 10px;
  margin: 10px;
  width: 800px;
  align-items: center;
`;

const ReviewFormContainer = styled.div`
  margin-top: 30px;
  text-align: left; // Align the content to the left
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  align-items: flex-start; /* Align items to the start (left) */
`;

const OverallRatingLabel = styled.label`
font-size: 18px;
margin-bottom: 10px;
display: flex;
margin-left:10px;
margin-right:10px;
align-items: center; /* Align items vertically in the flex container */
`;

const StarRatingContainer = styled.div`
  display: flex;
  align-items: center; /* Align items vertically in the center */
  margin-left: 20px; /* Adjust the margin as needed */
  margin-right: 20px;
`;

const StarIcon = styled.span`
  font-size: 30px;
  color: ${(props) => (props.selected ? "gold" : "#ddd")};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: gold;
  }
`;

const ReviewTextarea = styled.textarea`
  margin-bottom: 10px;
  border-radius: 15px;
  height: 190px;
  width: 550px; /* Adjust the width as needed */
  margin-left: 150px; /* Set margin-left to 0 to align with the left */
  background-color: #f0f0f0; /* Set the background color to grey */
`;

const WriteReviewButton = styled.button`
  width: 40%;
  height: 50px;
  margin-left: 300px;
  background-color: #e21b70;c
  color: white;
  
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #e21b70;
  }
`;

const Star = styled.span`
  font-size: 20px;
  color: gold;
`;

const FeedbackTitle = styled.h2`
  background-color: gold;
  padding: 10px; /* Adjust the padding as needed for spacing */
  border-radius: 10px; /* Optional: Add rounded corners */
  color: white; /* Set the text color to ensure readability */
  display: flex; /* Use flex display */
  align-items: center; /* Vertically align items */
  width: 850px; /* Adjust the width as needed */
  height: 100px; 
  text-align: left; /* Align text to the left */
  margin-left: 180px; /* Set margin-left to 0 to align with the left */
`;

const FoodIcon = styled.img`
  width: 80px; // Adjust the width as needed
  height: 80px; // Adjust the height as needed
  margin-right: 10px; // Adjust the margin as needed
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 760px; /* Adjust the negative top value to move it up */
  margin-top: 20px;
  width: 18.5%;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 1200px; /* Align to the right */
`;

const RatingContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  margin-top: 0px;
  margin-left: 300px;
  height: 55%;
  width: 40%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const IconImage = styled.img`
  width: 340px; // Adjust the width and height as needed
  height: 100px;
  margin-right: 10px; // Adjust the margin as needed
`;

const SecondIconImage = styled.img`
  width: 20px; // Adjust the width as needed
  height: 20px; // Adjust the height as needed
  margin-right: 10px; // Adjust the margin as needed
`;

const RatingAndReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 780px;
`;

const imageMapping = {
  1: 'teahouse.jpg',
  2: 'samuel.jpg',
  3: 'sisignitatay.jpg',
  4: 'hazel.jpg',
  5: 'jason.jpg',
  6: 'db.png',
  7: 'noodles.png',
  8: 'mediterraneancover.jpg',
  9: 'sushihavencover.jpg',
  10: 'tandoorcover.jpg',
  11: 'seafoodcover.jpg',
  12: 'veggies.jpg',
  13: 'bbqjunc.jpg',
  14: 'frenchcover.jpg',
  15: 'burgercover.jpg',
  16: 'green.jpg',
  17: 'mex.jpg',
  18: 'cozycover.jpg',
  19: 'thaicover.png',
  20: 'mongolcover.jpg',
  // Add more mappings as needed
};

const menuImageMapping = {
  1: 'menuteahouse.jpg',
  2: 'menu2.jpg',
  3: 'menusisignitatay.jpg',
  4: 'menuhazel.jpg',
  5: 'jasonmenu.jpg',
  6: 'menudb.jpg',
  7: 'menunoodles.jpg',
  8: 'mediterraneanmenu.jpg',
  9: 'sushihavenmenu.jpg',
  10: 'tandoormenu.jpg',
  11: 'seafoodmenu.jpg',
  12: 'veggiesmenu.jpg',
  13: 'bbqjuncmenu.jpg',
  14: 'frenchmenu.jpg',
  15: 'burgermenu.jpg',
  16: 'greenmenu.jpg',
  17: 'texmenu.jpg',
  18: 'cozymenu.jpg',
  19: 'thaimenu.gif',
  20: 'mongolmenu.jpg',
};

const ambienceImageMapping = {
  1: 'ambienceteahouse.jpg',
  2: 'ambiencesameul.png',
  3: 'ambiencesisignitatay.jpg',
  4: 'ambiencehazel.jpg',
  5: 'jasonambience.jpg',
  6: 'ambiencedb.jpg',
  7: 'ambiencenoodles.jpg',
  8: 'mediterraneanambience.jpg',
  9: 'ambiencesushi.png',
  10: 'tandoorambience.jpg',
  11: 'seafoodambience.jpg',
  12: 'veggiesambience.jpeg',
  13: 'bbqjuncamb.jpg',
  14: 'frenchamb.jpg',
  15: 'burgeramb.jpg',
  16: 'greenamb.jpg',
  17: 'texamb.jpg',
  18: 'cozyamb.jpg',
  19: 'thaiamb.jpg',
  20: 'mongolamb.jpg',
};

const foodImageMapping = {
  1: 'foodteahouse.jpg',
  2: 'foodsameul.jpg',
  3: 'foodsisignitatay.jpg',
  4: 'foodhazel.jpg',
  5: 'foodjason.jpg',
  6: 'dbfood.jpg',
  7: 'noodlesfood.jpg',
  8: 'mediterraneanfood.jpg',
  9: 'sushifood.jpg',
  10: 'tandoorfood.jpg',
  11: 'seafoodfood.jpg',
  12: 'veggiesfood.jpg',
  13: 'bbqfood.jpg',
  14: 'frenchfood.jpg',
  15: 'burgerfood.jpeg',
  16: 'greenfood.jpg',
  17: 'texfood.jpg',
  18: 'cozyfood.png',
  19: 'thaifood.jpg',
  20: 'mongolfood.jpg',
};

const OverallRatingInput = ({ onChange }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (star) => {
    setSelectedStars(star);
    onChange && onChange(star);
  };

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' ,marginLeft:'-10px',fontFamily:'Kumbh Sans'}}>
        <OverallRatingLabel htmlFor="overallRating">Overall Rating</OverallRatingLabel>
            <StarRatingContainer>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                selected={star <= selectedStars}
                onClick={() => handleStarClick(star)}
              >
                ★
              </StarIcon>
            ))}
          </StarRatingContainer>
        </div>
        );
    };

const RestaurantDetails = () => {

  const [restaurant, setRestaurant] = useState({}); 
  const { restaurantId } = useParams();

  const [comment, setComment] = useState("");
  const [star,setStar] =useState(0);
  const starHandler = (value) => {
    setStar(value)
  }

  const onCommentChange = (e) => {
    setComment(e.target.value)
    console.log(comment)
    console.log("para maiba "+star)
  }

  const onWriteReview = async () => {
    try {
      // TODO: CHANGE THIS INTO VARIABLES NA MAKUHA GIKAN SA LAST PAGE USING <LINK> PARAMETER PASSING
      const userId = "4"; // Replace with your actual userId
      const restaurantId = "4"; // Replace with your actual restaurantId
  
      // Get the current date in ISO format
      const currentDate = new Date().toISOString();
  
      // Create the review data object
      const reviewData = {
        comment: comment,
        rating: star,
        userId: userId,
        restaurantId: restaurantId,
        // TODO: MAKE FUNCTION THAT GETS CURRENT DATE AND TIME AND CONVERT DATA TYPE SA API TO STRING
        date: "10/11/2023"
      };
  
      // Make the POST request using Axios
      const response = await axios.post('http://localhost:8080/reviews/createReview', reviewData);
  
      console.log('Review submitted:', response.data);
      // Handle success (you can perform further actions here)
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle error
    }
  };
  
  useEffect(() => {
    // Fetch restaurant details from the backend
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/restaurants/${restaurantId}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
        // Handle error (show error message, etc.)
      }
    };

    fetchRestaurantDetails();
  }, [restaurantId]);


  return (
    <div style={{fontFamily:'Kumbh Sans'}}>
      <Header />
      <br />
      <RestaurantDetailsContainer>
      {[restaurant].map((restaurant, index) => (
      // Your code here
      <img
        src={process.env.PUBLIC_URL + '/' + imageMapping[restaurant.restaurantId]}
        alt={`Restaurant ${index + 1}`}
        style={{ width: '1470px', height: '500px' }}
      />

      ))}


      
        <RestaurantDetailsName>{restaurant.name}</RestaurantDetailsName>
        <>
        <Star>★</Star> {restaurant.rating}
        <span style={{ color: 'grey' }}>(3015)</span></>
      </RestaurantDetailsContainer>

      <RestaurantDetailsInfo>
        <RestaurantDetailsButtonContainer>
        <RestaurantDetailsButton
            image={process.env.PUBLIC_URL + '/' + menuImageMapping[restaurant.restaurantId]}
            style={{ textDecoration: 'none' }}>
            <StyledLink to="/Menu">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{ color: 'black' ,textDecoration:'none'}}>Menu</h3>
            </StyledLink> 
          </RestaurantDetailsButton>
          <RestaurantDetailsButton
            image={process.env.PUBLIC_URL + '/' + ambienceImageMapping[restaurant.restaurantId]}
            style={{ textDecoration: 'none' }}
          >
          <StyledLink to="/Ambience">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{ color: 'black',textDecoration:'none' }}>Ambience</h3>
            </StyledLink>
          </RestaurantDetailsButton>
          <RestaurantDetailsButton
            image={process.env.PUBLIC_URL + '/' + foodImageMapping[restaurant.restaurantId]}
            to="/Food"
            style={{ textDecoration: 'none' }}
          >
          <StyledLink to="/Food">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{ color: 'black',textDecoration:'none' }}>Food</h3>
            </StyledLink>
          </RestaurantDetailsButton>
        </RestaurantDetailsButtonContainer>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <RestaurantDetailsInfoItem>
</RestaurantDetailsInfoItem>

<InfoContainer>
  <RestaurantDetailsInfoItem>
    <IconImage src="/locationicon.png" alt="Icon" />
    <RestaurantDetailsName>Restaurant Information</RestaurantDetailsName>
    <br></br>
    <br></br>
    <RestaurantDetailsInfoLabel><SecondIconImage src="/houricon.png" alt="Second Icon" />Opening Hours:</RestaurantDetailsInfoLabel>
    <RestaurantDetailsInfoValue>{restaurant.restaurantOpeningHours}</RestaurantDetailsInfoValue>
  </RestaurantDetailsInfoItem>

  <RestaurantDetailsInfoItem>
    <RestaurantDetailsInfoLabel><SecondIconImage src="/addressicon.png" alt="Second Icon" />Address:</RestaurantDetailsInfoLabel>
    <RestaurantDetailsInfoValue>{restaurant.address}</RestaurantDetailsInfoValue>
  </RestaurantDetailsInfoItem>

  <RestaurantDetailsInfoItem>
    <GoogleLocationImage src="/googlelocation.jpg" alt="Google Location" />
  </RestaurantDetailsInfoItem>
  </InfoContainer>
      </RestaurantDetailsInfo>

      <ReviewContainer>
        <ReviewCard>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <RestaurantDetailsName>Review Highlights</RestaurantDetailsName>
        <p style={{ color: 'black', fontWeight: 'bold', fontSize: '20px'}}><Star>★</Star>4.4</p></div>
        <SeeAllReviewsButton><StyledLink to="/Reviews">
          See All Reviews
          </StyledLink>
          </SeeAllReviewsButton>
        <br></br>
        <br></br>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'black', fontWeight: 'bold' }}>YEZETH</p>
          <p style={{ color: 'black' }}><Star>★</Star>5.0</p></div>
          <p style={{ color: 'grey' }}>1 month ago</p>
          <p style={{ color: 'grey', borderBottom: '1px solid grey', paddingBottom: '5px' }}>Great service! Great food!</p>

        
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'black', fontWeight: 'bold' }}>Kristhyn</p>
          <p style={{ color: 'black' }}><Star>★</Star>5.0</p></div>
          <p style={{ color: 'grey' }}>2 months ago</p>
          <p style={{ color: 'grey', borderBottom: '1px solid grey', paddingBottom: '5px' }}>Awesome as always!</p>
        
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'black', fontWeight: 'bold' }}>Nikka</p>
          <p style={{ color: 'black' }}><Star>★</Star>5.0</p></div>
          <p style={{ color: 'grey' }}>2 months ago</p>
          <p style={{ color: 'grey', borderBottom: '1px solid grey', paddingBottom: '5px' }}>Gamay ra kaayo ang chicken</p>
        
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'black', fontWeight: 'bold' }}>Therese</p>
          <p style={{ color: 'black' }}><Star>★</Star>5.0</p></div>
          <p style={{ color: 'grey' }}>3 months ago</p>
          <p style={{ color: 'grey', borderBottom: '1px solid grey', paddingBottom: '5px' }}>Excellent Food</p>
        
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'black', fontWeight: 'bold' }}>Melanie</p>
          <p style={{ color: 'black' }}><Star>★</Star>3.0</p></div>
          <p style={{ color: 'grey' }}>3 months ago</p>
          <p style={{ color: 'grey' }}>Dry ra gamay ang chicken</p>
        </ReviewCard>
      </ReviewContainer>

      <ReviewFormContainer>
        <FeedbackTitle><FoodIcon src="/pinkstar.png" alt="Food Icon" />Tell us about our food</FeedbackTitle>
        <ReviewForm>
        </ReviewForm>
      </ReviewFormContainer>
      
      <Container>
      <RatingAndReviewContainer>
      <ReviewForm>
        <ReviewTextarea 
        value = {comment}
        onChange={onCommentChange}
        placeholder="Write here your review..." />
      </ReviewForm>
      <Container>
        <RatingContainer>
          <OverallRatingInput 
          starHandler={starHandler}
          onChange={(rating) => console.log("Selected Rating:", rating)} />
        </RatingContainer>
        <br></br>
        <WriteReviewButton onClick={onWriteReview}>Write Review</WriteReviewButton>
      </Container>
         </RatingAndReviewContainer>
      </Container>
        <br></br>
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
