import React, { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

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

  // INIG NAA NA ANG LOGIN FEATURE. PLEASE NALANG KOG PASA SA USERID AS PARAMETERS KADTONG EXTRA2 SA LINK LIKE params:{userId:userId}
  // PS: WA KOY SURE SA SYNTAX KAY PAREHA RATA GA CHATGPT
  // PLS LANG UG CHANGE SA USE STATE DEFAULT LIKE ERASE THE NUMBER 2

  const [userId, setUserId] = useState(1);

  const [favoritesList, setFavoritesList] = useState([])


   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/favorites/${userId}`);
        console.log(response.data);
        setFavoritesList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);

  const location = useLocation();
  
  return (
    <div>
      <Header userId={location.state.userId} userType={location.state.userType} restaurantId={location.state.restaurantId}/>
      <FavoriteContainer>
        
        <h1 style={{color:'gold',textAlign:'left',padding:'0 300px'}}>My Favorites</h1>

        <br></br>
        <br></br>
        <br></br>

        {/* I EDIT RANI PARA SA INYONG KINAHANGLAN NA MGA OBJECT OR COMPONENT NA NAAS INYONG DESIGN */}
        {favoritesList.length === 0 ? (
          <>
            <h2>No Favorites Saved</h2>
            <p>You will see all your favorites here</p>
            <FindFav><StyledLink to="/BrowseRestaurants">Let's find some favorites</StyledLink></FindFav>
          </>
        ) : (
          <div>
            {/* Render your mapping sample for favorites here */}
            {favoritesList.map((favorite) => (
              // Your mapping JSX goes here
              <div key={favorite.id}>
                {/* Render individual favorite item */}
                <p>{favorite.name}</p>
                {/* Add other details as needed */}
              </div>
            ))}
             </div>
        )}

        
    
      </FavoriteContainer>
    </div>
  );
};

export default Favorites;