import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink as Link, useLocation, useParams } from "react-router-dom";
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

const Header = ({userId}) => {
  const location = useLocation();

  useEffect(() => {
    console.log(userId)
  });
  return (
    
    <HeaderContainer>
      <div>
        <Logo src="/logo.png" alt="Cebu Institute of Technology University" />
        <CITEatsLogo src="/citeats_logo.png" alt="CITEats Logo" />
      </div>

      <Navigation>
        <NavLink to={`/Home`} state={{ userId:userId  }}> Home </NavLink>
        <NavLink to={`/BrowseRestaurants/`} state={{ userId:userId  }}>Browse Restaurants</NavLink>
        <NavLink to={`/Favorites`} state={{ userId:userId  }}>Favorites</NavLink>
        <NavLink to={`/JoinUs`} state={{ userId:userId  }}>Join Us</NavLink>
        <NavLink to={`/AboutUs`} state={{ userId:userId  }}>About Us</NavLink>
        <NavLink to={`/UserProfile/${userId}`} state={{ userId:userId  }}> Profile </NavLink>

      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
