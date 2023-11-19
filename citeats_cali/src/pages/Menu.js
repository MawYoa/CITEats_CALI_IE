import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

const MenuContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MenuHeader = styled.div`
  height: 100px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const MenuContent = styled.div`
  padding: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const MenuImage = styled.img`
  width: 48%; /* Adjust as needed */
  border-radius: 8px;
`;

const Menu = () => {
  return (
    <div>
      <Header />
      <br></br>
      <MenuContainer>
        <MenuHeader>
          <MenuTitle>McDonald's Menu</MenuTitle>
        </MenuHeader>
        <MenuContent>
          <ImageContainer>
            <MenuImage src="/mcdomenu1.jpg" alt="McDonald's Menu 1" style={{width:'900px',height:'300px',marginLeft:'80px',marginRight:'80px'}}/>
          </ImageContainer>
          <ImageContainer>
          <MenuImage src="/mcdomenu2.jpg" alt="McDonald's Menu 2" style={{width:'800px',height:'2000px',marginLeft:'100px',marginRight:'100px'}}/>
          </ImageContainer>
        </MenuContent>
      </MenuContainer>
      <br></br>
      <Footer />
    </div>
  );
};

export default Menu;
