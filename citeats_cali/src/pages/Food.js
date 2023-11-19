import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

const FoodContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const FoodContent = styled.div`
  padding: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const FoodImage = styled.img`
  width: 48%; /* Adjust as needed */
  border-radius: 8px;
`;

const Food = () => {
  return (
    <div>
      <Header />
      <br></br>
      <FoodContainer>

        <FoodContent>
          <ImageContainer>
            <FoodImage src="/mcdofood.jpg" alt="McDonald's Food 1" style={{width:'900px',height:'300px',marginLeft:'80px',marginRight:'80px'}}/>
          </ImageContainer>
          <ImageContainer>
            <FoodImage src="/mcdofood2.jpg" alt="McDonald's Food 2" style={{width:'700px',height:'500px',marginLeft:'200px',marginRight:'200px'}}/>
          </ImageContainer>
        </FoodContent>
      </FoodContainer>
      <br></br>
      <Footer />
    </div>
  );
};

export default Food;
