import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import { Link, useLocation } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the color from the parent */
`;

const FavoriteContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  font-Family: Kumbh Sans;
`;



const FindFav = styled.button`
  background-color: white;
  color: gold;
  padding: 10px 20px; 
  border-color:gold;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 15px;
`;

const Favorites = () => {

  const location = useLocation();
  return (
    <div>
      <Header userId={location.state.userId}/>
      <FavoriteContainer>
        
        <h1 style={{color:'gold',textAlign:'left',padding:'0 300px'}}>My Favorites</h1>

        <br></br>
        <br></br>
        <br></br>
        <h2>No Favorites Saved</h2>
        <p>You will see all your favorites here</p>

        <FindFav><StyledLink to="/BrowseRestaurants">Let's find some favorites</StyledLink></FindFav>
    
      </FavoriteContainer>
    </div>
  );
};

export default Favorites;
