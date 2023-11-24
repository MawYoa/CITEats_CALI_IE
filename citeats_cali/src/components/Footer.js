import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 1460px;
  height: 120px;
  margin-right:10px;
  margin-left:10px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0.5, 0.5, 0.5, 0.5);
`;

const FooterImage = styled.img`
  height: 80px;
  width: 400px;
  margin-left: 40px;
  margin-right: 0px;
  
  
`;

const FooterText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
  white-space: pre-line;
  
  
`;

const FooterAdditionalText = styled.p`
  font-size: 14px;
  color: grey;
  margin-bottom: 0;
  white-space: pre-line;
`;

const AnotherText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.img`
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
`;

const SearchBar = styled.input`
  width: 200px;
  height: 30px;
  margin-left: 0px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage src="logo.png" alt="CIT Logo" />
      <div>
        <FooterText> Contact Us</FooterText>
        <FooterAdditionalText>
        <img src="addressicon2.png" alt="Phone Icon" style={{ marginRight: '10px' }} />N. Bacalso Avenue, Cebu City, Philippines 6000<br/>
        <img src="phoneicon.png" alt="Phone Icon" style={{ marginRight: '10px' }} /> +63 32 411 2000 (trunkline)<br/>
        <img src="msgicon.png" alt="Phone Icon" style={{ marginRight: '10px' }} />  info@cit.edu
        </FooterAdditionalText>
      </div>
      <div>
        <AnotherText>Get in Touch</AnotherText>
        <SocialIconsContainer>
          <SocialIcon src="fbicon.png" alt="Facebook Icon" />
          <SocialIcon src="igicon.png" alt="Instagram Icon" />
          <SocialIcon src="tiktokicon.png" alt="Twitter Icon" />
          <SocialIcon src="yticon.png" alt="YouTube Icon" />
        </SocialIconsContainer>
        <SearchBar type="text" placeholder="Search..." />
      </div>
    </FooterContainer>
  );
};

export default Footer;
