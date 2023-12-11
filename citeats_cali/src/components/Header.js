import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink as Link, useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0.5, 0.5, 0.5, 0.5);
  font-family: Kumbh Sans;
`;


const Logo = styled.img`
  width: 300px;
  height: 50px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 20px;

  &:hover {
    font-color: #e21b70;
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: #000;
  font-weight: bold;

  &:hover,
  &:focus{
    color: #e21b70;
    cursor: pointer;
  }
`;

const CITEatsLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 100px;
`;

const LogoutButton = styled.button`
  margin-right: 20px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  font-family: Kumbh Sans;
  font-size: 17px;

  &:hover,
  &:focus {
    color: #e21b70;
  }
`;

const Header = ({ userId, restaurantId, restaurantName}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const [localUserId, setLocalUserId] = useState(null);
  const [localUserType, setLocalUserType] = useState(null);
  const [localRestaurantId, setLocalRestaurantId] = useState(null);

    
  const handleLogout = () => {
    // Display a confirmation dialog
    const confirmLogout = window.confirm("Are you sure you want to log out?");
  
    if (confirmLogout) {
      
      setLocalUserId(null);
      setLocalUserType(null);
      setLocalRestaurantId(null);
  
      // After logout, you can redirect to the home page or login page
      navigate("/");
    }
  };
  

  return (
    
    <HeaderContainer>
      <div>
        <Logo src="/logo.png" alt="Cebu Institute of Technology University" />
        <CITEatsLogo src="/citeats_logo.png" alt="CITEats Logo" />
      </div>
      <Navigation>
        <NavLink to={`/Home`} state={{ userId:userId, restaurantId:restaurantId, restaurantName:restaurantName }}> Home </NavLink>
        <NavLink to={`/BrowseRestaurants`} state={{ userId:userId, restaurantId:restaurantId, restaurantName:restaurantName  }}>Browse Restaurants</NavLink>
        <NavLink to={`/Favorites`} state={{ userId:userId, restaurantId:restaurantId, restaurantName:restaurantName  }}>Favorites</NavLink>
        <NavLink to={`/AboutUs`} state={{ userId:userId, restaurantId:restaurantId, restaurantName:restaurantName  }}>About Us</NavLink>
        
        {userId  && (
          <NavLink to={`/UserProfile/${userId}`} state={{ userId: userId }}>Profile</NavLink>
        )}
        {userId  && (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        )}
        {!location.state?.userId && restaurantName && restaurantId && (
          <NavLink to={`/EditRestaurant/${restaurantId}`} state={{ restaurantId, restaurantName }}>
            Restaurant
          </NavLink>
        )}
       {!location.state?.userId && restaurantName && restaurantId && (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        )}
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
