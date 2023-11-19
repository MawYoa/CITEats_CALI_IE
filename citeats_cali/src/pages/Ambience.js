import React from "react";
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

const AmbienceContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AmbienceHeader = styled.div`
  height: 100px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AmbienceTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const AmbienceContent = styled.div`
  padding: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

const AmbienceImage = styled.img`
  width: 48%; /* Adjust as needed */
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Ambience = () => {
  return (
    <div>
      <Header />
      <br></br>
      <AmbienceContainer>
        <AmbienceHeader>
          <AmbienceTitle>McDonald's Ambience</AmbienceTitle>
        </AmbienceHeader>
        <AmbienceContent>
          <ImageContainer>
            <AmbienceImage src="/ambience1.jpg" alt="McDonald's Ambience 1" style={{width:'500px', height:'300px'}}/>
            <AmbienceImage src="/ambience2.jpg" alt="McDonald's Ambience 2" style={{width:'500px', height:'300px'}}/>
            <AmbienceImage src="/ambience3.jpg" alt="McDonald's Ambience 3" style={{width:'500px', height:'300px'}}/>
            <AmbienceImage src="/ambience4.jpg" alt="McDonald's Ambience 4" style={{width:'500px', height:'300px'}}/>
            <AmbienceImage src="/ambience5.jpg" alt="McDonald's Ambience 5" style={{width:'500px', height:'300px'}}/>
          </ImageContainer>
        </AmbienceContent>
      </AmbienceContainer>
      <br></br>
      <Footer />
    </div>
  );
};

export default Ambience;
