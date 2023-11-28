import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { useNavigate, Link } from 'react-router-dom';
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

const RestaurantCard = styled.div`
  border: none;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const restaurantIdImages = {
  1: 'mcdo.jpg',
  2: 'tataysisig.png',
  // Add more mappings as needed
};

const PopularNearYou = ({ restaurants }) => (
  <PopularNearYouContainer>
    {restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.restaurantId}>
        <StyledLink to={`/RestaurantDetails/${restaurant.restaurantId}`}>
        <img
            src={process.env.PUBLIC_URL + '/' + (restaurantIdImages[restaurant.restaurantId])}
            alt={restaurant.name}
            style={{ width: '250px', height: '150px' }}
          />
          <h4 style={{ color: 'maroon', fontWeight: 'bold' }}>{restaurant.name}</h4>
          <p style={{ color: 'gold' }}>{restaurant.rating}/5 ({restaurant.reviewsCount || 0}+)</p>
          <p>₱₱₱, {restaurant.cuisineType}</p>
        </StyledLink>
      </RestaurantCard>
    ))}
  </PopularNearYouContainer>
);


export const Home = () => {
  const [cuisineCategories, setCuisineCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cuisine categories from the API
    const fetchCuisineCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cuisinetypes/getAllCuisineTypes');

        // Filter cuisine types based on cuisineTypeId 1-10
        const filteredCategories = response.data.filter((category) => category.cuisineTypeId >= 1 && category.cuisineTypeId <= 10);

        // Define a mapping of cuisine types to image sources
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

        // Map cuisine types to include image sources
        const categoriesWithImages = filteredCategories.map((category) => ({
          ...category,
          imageSrc: cuisineTypeImages[category.cuisineTypeId] || '/default.png', // Use a default image if not found
        }));

        // Set the state with the mapped categories
        setCuisineCategories(categoriesWithImages);
      } catch (error) {
        alert('Error fetching cuisine categories:', error);
        // Handle error (show error message, etc.)
      }
    };

    // Fetch restaurant data from the API
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:8080/restaurants/getAllRestaurants');
        setRestaurants(response.data);
      } catch (error) {
        alert('Error fetching restaurants:', error);
        // Handle error (show error message, etc.)
      }
    };

    // Call the functions to fetch data
    fetchCuisineCategories();
    fetchRestaurants();
  }, []);

  const handleBrowseClick = () => {
    // Handle browse click
  };

  const handleSquareButtonClick = (category) => {
    console.log(`Clicked on ${category}`);
  };

  const ReviewCard = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    width: 900px;
    height: 150px;
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

  return (
    <div>
      <Header />

      <HomeContainer>
        <HeroImage src="/heropic.jpg" alt="hero pic" />
        <br></br>
        <br></br>
        <br></br>
        <BrowseButton onClick={handleBrowseClick}>
          <StyledLink to="/BrowseRestaurants">BROWSE NOW </StyledLink>
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
        <PopularNearYou restaurants={restaurants} />
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

          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>YEZETH</p>
            <p style={{ color: 'gold' }}>5.0</p>
            <p>1 minute ago, reviewed on LockDown BU ...</p>
            <p>Great food! Great food!</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Kristhyn</p>
            <p style={{ color: 'gold' }}>5.0</p>
            <p>2 minutes ago, reviewed on Mcdonalds So-...</p>
            <p>Awesome as always!</p>
          </ReviewCard>
          <ReviewCard>
            <p style={{ color: 'maroon', fontWeight: 'bold' }}>Nikka</p>
            <p style={{ color: 'gold' }}>5.0</p>
            <p>3 minutes ago, reviewed on Elsa Silogan-...</p>
            <p>Gamay ra kaayo ang creamy scallops</p>
          </ReviewCard>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </HomeContainer>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
