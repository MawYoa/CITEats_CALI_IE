import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
width: 100%;
height: 100px;
background-color: white;
color: Black;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 2px 4px rgba(0.5, 0.5, 0.5, 0.5);
`;

const Logo = styled.img`
  width: 300px;
  height: 50px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 20px; /* Adjust the margin to your preference */
`;


const NavLink = styled.a`
  margin-right: 20px;
  text-decoration: none;
  color: #000;
  font-weight: bold;

`;

const CITEatsLogo = styled.img`
  width: 50px; /* Adjust the width as needed */
  height: 50px; /* Adjust the height as needed */
  margin-left: 100px; 
`;

const Header = () => {
    return (
      <HeaderContainer>
        <div>
          <Logo src="/logo.png" alt="Cebu Institute of Technology University" />
          <CITEatsLogo src="/citeats_logo.png" alt="CITEats Logo" />
        </div>
        
        <Navigation>
          <NavLink href="/Home">Home</NavLink>
          <NavLink href="/BrowseRestaurants">Browse Restaurants</NavLink>
          <NavLink href="/Favorites">Favorites</NavLink>
          <NavLink href="/JoinUs">Join Us</NavLink>
          <NavLink href="/UserProfile">User</NavLink>
        </Navigation>
      </HeaderContainer>
    );
  };
  

export default Header;
