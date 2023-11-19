// Home.js

import React from 'react';
import styled from 'styled-components';
//import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';



import './Home.css';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the color from the parent */
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: cover;
`;

const BrowseButton = styled.button`
  background-color: maroon;
  color: #fff;
  padding: 15px 30px; /* Adjust padding for a bigger button */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 20px;
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
  border:none;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const PopularNearYou = () => (
  <PopularNearYouContainer>
    <RestaurantCard>
      <StyledLink to="/RestaurantDetails">
      <img src="chickfront.jpg" alt="Chicken Frontyard" style={{width:'150px',height:'100px'}}/>
      <h4 style={{color:'maroon',fontWeight:'bold'}}>Chicken Frontyard</h4>
      <p style={{color:'gold'}}>3.4/5 (300+)</p>
      <p>₱₱₱, Asian</p>
      </StyledLink>
    </RestaurantCard>

    <RestaurantCard>
    <StyledLink to="/RestaurantDetails">
      <img src="mcdo.jpg" alt="McDonald's Shopwise" style={{width:'150px',height:'100px'}} />
      <h4 style={{color:'maroon',fontWeight:'bold'}}>McDonald's Shopwise</h4>
      <p style={{color:'gold'}}>4.6/5 (15000+)</p>
      <p>₱₱₱, Fast Food</p>
      </StyledLink>
    </RestaurantCard>

    <RestaurantCard>
    <StyledLink to="/RestaurantDetails">
      <img src="lockdown.jpeg" alt="Lockdown Burgers" style={{width:'150px',height:'100px'}} />
      <h4 style={{color:'maroon',fontWeight:'bold'}}>Lockdown Burgers</h4>
      <p style={{color:'gold'}}>4.7/5 (1000+)</p>
      <p>₱₱₱, Burgers</p>
      </StyledLink>
    </RestaurantCard>

    <RestaurantCard>
    <StyledLink to="/RestaurantDetails">
      <img src="elsa.jpg" alt="Elsa Silogan" style={{width:'150px',height:'100px'}} />
      <h4 style={{color:'maroon',fontWeight:'bold'}}>Elsa Silogan</h4>
      <p style={{color:'gold'}}>4.5/5 (1000+)</p>
      <p>₱₱₱, Filipino</p>
      </StyledLink>
    </RestaurantCard>
  </PopularNearYouContainer>
);

export const Home = () => {
  //const history = useHistory();

  const handleBrowseClick = () => {
    
    //history.push('/BrowseRestaurants');
  };

  const handleSquareButtonClick = (category) => {
    // TODO: Handle click for each category
    console.log(`Clicked on ${category}`);
  };

  const ReviewCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  width:900px;
  height:150px
`;

const SeeAllReviewsButton = styled.button`
background-color: maroon;
color: #fff;
font-size: 12px;
padding: 10px 10px; /* Adjust padding for a bigger button */
border: none;
border-radius: 4px;
cursor: pointer;

`;

  const categories = [
    { name: 'Milk Tea', imageSrc: '/milktea.png' },
    { name: 'Asian', imageSrc: '/asian.png' },
    { name: 'Coffee', imageSrc: '/coffee.png' },
    { name: 'BBQ', imageSrc: '/bbq.png' },
    { name: 'Japanese', imageSrc: '/japanese.png' },
    { name: 'Fast Food', imageSrc: '/fastfood.png' },
    { name: 'Chinese', imageSrc: '/chinese.png' },
    { name: 'Desert', imageSrc: '/desert.png' },
  ];

  const StyledText = styled.h2`
  display: inline;
  margin: 0;
  text-shadow: 1px 2px 2px rgba(0.2, 0.2, 0.2, 0.2);
  font-size:30px
`;
  return (
    <div>
      <Header />
      <HomeContainer>
        <HeroImage src="/heropic.jpg" alt="hero pic" />
        <br></br>
        <br></br>
        <br></br>
        <BrowseButton onClick={handleBrowseClick}><StyledLink to="/BrowseRestaurants">BROWSE NOW </StyledLink></BrowseButton>
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

        <p>
          Explore Local Campus Flavors, Experience The Pinoy Tastes - Where Every Meal is a Memorable Adventure!
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>Your Favorite Delicacies</h2>
        <ButtonsContainer>
          {categories.map(({ name, imageSrc }) => (
            <StyledLink to="/BrowseRestaurants">
            <FoodCategory
              key={name}
              category={name}
              imageSrc={imageSrc}
              onClick={() => handleSquareButtonClick(name)}
              
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
        <PopularNearYou />
        <br></br>
        <div style={{ alignItems: 'left', marginTop: 0, marginBottom: 0 }}>
          <h3> Latest Reviews</h3>
          <h4 style={{color:'gold'}}> 4.4 overall rating</h4>
        </div>
      
      <SeeAllReviewsButton><StyledLink to="/Reviews">See All Reviews</StyledLink></SeeAllReviewsButton>
      <br></br>
        <br></br>
 
      <ReviewCard>
        <p style={{color:'maroon',fontWeight:'bold'}}>YEZETH</p>
        <p style={{color:'gold'}}>5.0</p>
        <p>1 minute ago, reviewed on LockDown BU ...</p>
        <p>Great food! Great food!</p>
      </ReviewCard>
      <ReviewCard>
        <p style={{color:'maroon',fontWeight:'bold'}}>Kristhyn</p>
        <p style={{color:'gold'}}>5.0</p>
        <p>2 minutes ago, reviewed on Mcdonalds So-...</p>
        <p>Awesome as always!</p>
      </ReviewCard>
      <ReviewCard>
        <p style={{color:'maroon',fontWeight:'bold'}}>Nikka</p>
        <p style={{color:'gold'}}>5.0</p>
        <p>3 minutes ago, reviewed on Elsa Silogan-...</p>
        <p>Gamay ra kaayo ang creamy scallops</p>
      </ReviewCard>
      <br></br>
        <br></br>
        <br></br>
        <br></br>


      </HomeContainer>
      <div style={{ textAlign: 'right',padding: '0 280px'  }}>
          <h2 style={{ textAlign: 'left' }}>Frequently Asked Questions</h2>
          <br></br>
          <p style={{ textAlign: 'left' ,fontWeight:'bold'}}>
            Can I review the food I ate from the restaurant shown on the site?
          </p>
          <p style={{ textAlign: 'left' }}>
            Yes, you can review the food you ate, but you must stay honest.
          </p>

          <p style={{ textAlign: 'left' ,fontWeight:'bold'}}>How to find the location of the Restaurant:</p>
          <ul style={{ textAlign: 'left' }}>
            <li>Browse for Restaurants</li>
            <li>Click desired cuisine type</li>
            <li>Click your favored restaurant</li>
            <li>Click the restaurant details</li>
            <li>Click the location of the Restaurant</li>
            <li>Locate the restaurant's location on Google Maps</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <Footer/>
    </div>
  );
};

export default Home;
