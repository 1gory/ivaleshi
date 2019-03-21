import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 140px 0px;
  @media screen and (max-width: 991px) {
    padding: 40px 0px;
  } 
`;

const Header = styled.div`
  margin-top: 70px;
  margin-bottom: 40px;
  font-size: 20px;
  color: #191619;
  font-family: 'Museo-Regular', sans-serif;
  text-align: center;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
    margin-top: 20px;
  } 
`;

const Text = styled.div`
  padding: 0 35px;
  margin-bottom: 50px;
  font-size: 14px; 
  color: #191619;
  line-height: 1.86;
  font-family: 'MuseoSans-Regular', sans-serif;
  text-align: center;
`;

const Icon = styled.img`
  margin: auto;
  display: block;
  height: 60px;
`;

const Button = styled.button`
  display: ${({ buttonVisible }) => (buttonVisible ? 'block' : 'none')}; 
  margin: auto;
  background: none;
  border: none;
  padding: 11px 15px;
  color: #ff2300;
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ff3300;
    color: white;  
  }
`;

export default ({ icon, name, text, buttonVisible }) => (
  <Wrapper>
    <Icon src={icon} />
    <Header>{name}</Header>
    <Text>{text}</Text>
    <Button buttonVisible={buttonVisible}>Подобрать дизайн</Button>
  </Wrapper>
);
