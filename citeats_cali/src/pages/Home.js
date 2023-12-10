import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import './Home.css';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Kumbh Sans';
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: cover;
`;

const BrowseButton = styled.button`
  background-color: maroon;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 20px;
  font-family: 'Kumbh Sans';
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gold;
    color: white;
  }
`;

const Tagline = styled.h3`
  text-align: center;
  margin-top: 20px;
`;

const Description = styled.p`
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5); /* Transparent white on hover */
  }
`;

const FoodCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const SquareButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FoodImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const FoodCategory = ({ category, imageSrc, onClick }) => (
  <FoodCategoryContainer onClick={onClick}>
    <FoodImage src={imageSrc} alt={category} />
    <SquareButton>{category}</SquareButton>
  </FoodCategoryContainer>
);

const PopularNearYouContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const RestaurantCardContainer = styled.div`
text-decoration: none;
color: inherit;
border: 1px solid #ddd;
padding: 15px;
margin: 10px;
width: 200px;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease-in-out;

&:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

link {
  text-decoration: none;
}

img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

div {
  padding: 15px;
}

h4 {
  color: #333;
  font-size: 1.2rem;
  margin: 10px 0;
}

p {
  color: #777;
  margin: 5px 0;
}
`;

const RestaurantImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const RestaurantInfo = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0 0 8px 8px;
`;

const restaurantIdImages = {
  1: 'milkteahouse.jpg',
  2: 'samueleatery.png',
  3: 'tataysisig.png',
  4: 'hazelbakery.jpg',
  5: 'jasonlounge.jfif',
};



const ReviewCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  width: 900px;
  height: 180px;
`;

const SeeAllReviewsButton = styled.button`
  background-color: maroon;
  color: #fff;
  font-size: 12px;
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: gold;
    color: white;
  }
`;

const StyledText = styled.h2`
  display: inline;
  margin: 0;
  text-shadow: 1px 2px 2px rgba(0.2, 0.2, 0.2, 0.2);
  font-size: 30px;
`;

const Home = () => {
  const [cuisineCategories, setCuisineCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [latestReviews, setLatestReviews] = useState([]);
  const location = useLocation();
  const userId = location.state && location.state.userId;
  const userType = location.state && location.state.userType;
  

  useEffect(() => {
    // Log userType from the location state
    console.log('UserType:', location.state && location.state.userType);

    // ... rest of the useEffect logic
  }, [location.state]);

  useEffect(() => {

    
    const fetchCuisineCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cuisinetypes/getAllCuisineTypes');
        const filteredCategories = response.data.filter(
          (category) => category.cuisineTypeId >= 1 && category.cuisineTypeId <= 10
        );

        const cuisineTypeImages = {
          1: '/american.png',
          2: '/asian.png',
          3: '/bbq.png',
          4: '/beverages.png',
          5: '/bread.png',
          6: '/burgers.png',
          7: '/cakes.png',
          8: '/chicken.png',
          9: '/coffee.png',
          10: '/desserts.png',
        };

        const categoriesWithImages = filteredCategories.map((category) => ({
          ...category,
          imageSrc: cuisineTypeImages[category.cuisineTypeId] || '/default.png',
        }));

        setCuisineCategories(categoriesWithImages);
      } catch (error) {
        alert('Error fetching cuisine categories:', error);
      }
    };

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:8080/restaurants/getAllRestaurants');
        setRestaurants(response.data);
      } catch (error) {
        alert('Error fetching restaurants:', error);
      }
    };

    const fetchLatestReviews = async () => {
      try {
        const response = await axios.get('http://localhost:8080/reviews/getAllReviews');
        const sortedReviews = response.data.sort((a, b) => new Date(a.postedDate) - new Date(b.postedDate));
        const latestReviewsData = sortedReviews.slice(0, 3);
        setLatestReviews(latestReviewsData);
      } catch (error) {
        alert('Error fetching latest reviews:', error);
      }
    };
    

    fetchCuisineCategories();
    fetchRestaurants();
    fetchLatestReviews();
  }, [location.state]);

  const handleBrowseClick = () => {
    // Handle browse click
  };

  const handleSquareButtonClick = (category) => {
    console.log(`Clicked on ${category}`);
  };

  const PopularNearYouCard = ({ restaurant }) => (
    <RestaurantCardContainer>
      <StyledLink to={`/RestaurantDetails/${restaurant.restaurantId}`} 
              state={{
                userId:location.state.userId,
                restaurantId:restaurant.restaurantId,
                userType:location.state.userType
                }}style={{ textDecoration: "none" }}>
        <RestaurantImage
          src={process.env.PUBLIC_URL + '/' + (restaurantIdImages[restaurant.restaurantId])}
          alt={restaurant.restaurantName}
        />
        <RestaurantInfo>
          <h4 style={{ color: 'maroon', fontWeight: 'bold' }}>{restaurant.restaurantName}</h4>
          <p style={{ color: 'gold' }}>{restaurant.rating}/5 ({restaurant.reviewsCount || 0}+)</p>
          <p>₱₱₱, {restaurant.cuisineType}</p>
        </RestaurantInfo>
      </StyledLink>
    </RestaurantCardContainer>
  );
  
  const PopularNearYou = ({ restaurants }) => {
    // Filter restaurants to include only those with restaurantId in the range 1-5
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.restaurantId >= 1 && restaurant.restaurantId <= 5);
  
    return (
      <PopularNearYouContainer>
        {filteredRestaurants.map((restaurant) => (
          <PopularNearYouCard key={restaurant.restaurantId} restaurant={restaurant} />
        ))}
      </PopularNearYouContainer>
    );
  };

  const formatDate = (dateString) => {
    try {
      // Try to parse the date string
      const date = new Date(dateString);
  
      // Check if the date is valid
      if (isNaN(date)) {
        throw new Error('Invalid date');
      }
  
      // Format the date
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    } catch (error) {
      // Handle the error (e.g., log it) and return a fallback value
      console.error('Error formatting date:', error);
      return 'N/A';
    }
  };
  

  return (
    <div>
      <Header userId={location.state.userId} userType={location.state.userType} restaurantId={location.state.restaurantId} restaurantName={location.state.restaurantName}/>

      <HomeContainer>
        <HeroImage src="/heropic.jpg" alt="hero pic" />
        <br></br>
        <br></br>
        <br></br>
        <BrowseButton >
          <StyledLink to="/BrowseRestaurants" state={{ userId:userId, userType:userType  }}>BROWSE NOW </StyledLink>
        </BrowseButton>
        <br></br>
        <br></br>
        <div style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          <StyledText style={{ color: 'gold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Discover,</StyledText>
          <StyledText style={{ color: 'maroon', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}> Dine,</StyledText>
          <StyledText style={{ color: 'orange', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}> Delight:</StyledText>
          <StyledText style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}> Your Culinary</StyledText>
          <StyledText style={{ fontFamily: 'cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}> JOURNEY</StyledText>
          <StyledText style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}> Begins Here at CIT Eats!</StyledText>
        </div>

        <p>Explore Local Campus Flavors, Experience The Pinoy Tastes - Where Every Meal is a Memorable Adventure!</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Your Favorite Delicacies</h2>
        <ButtonsContainer>
          {cuisineCategories.map(({ typeName, imageSrc }) => (
            <StyledLink to="/BrowseRestaurants" key={typeName}>
              <FoodCategory
                category={typeName}
                imageSrc={imageSrc}
                onClick={() => handleSquareButtonClick(typeName)}
              />
            </StyledLink>
          ))}
        </ButtonsContainer>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Popular near you</h2>
        <PopularNearYou  restaurants={restaurants} />
        <br></br>
        <div>
          <div style={{ alignItems: 'left', marginTop: 0, marginBottom: 0 }}>
            <h3> Latest Reviews</h3>
            <h4 style={{ color: 'gold' }}> 4.4 overall rating</h4>
          </div>

          <SeeAllReviewsButton>
            <StyledLink to="/Reviews">See All Reviews</StyledLink>
          </SeeAllReviewsButton>
          <br></br>
          <br></br>

          {latestReviews.map((review) => (
            <ReviewCard key={review.reviewId}>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>UserId:{review.userId}</p>
              <p style={{ color: 'maroon', fontWeight: 'bold' }}>RestaurantId:{review.restaurantId}</p>
              <p style={{ color: 'gold' }}>{review.rating}/5</p>
              <p>{formatDate(review.datePosted)}</p>
              <p>{review.comment}</p>
            </ReviewCard>
          ))}
        </div>
      </HomeContainer>
      <FAQ />
      <Footer />
    </div>
  );
};


export default Home;
