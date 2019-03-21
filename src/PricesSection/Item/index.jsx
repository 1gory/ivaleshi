import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: solid 5px #ff3300;  
  padding-top: 110px;
  padding-left: 280px;
  padding-right: 160px;
  @media screen and (max-width: 1300px) {
    margin-right: 50px;
  }
  @media screen and (max-width: 1200px) {
    padding-top: 80px;
  }
  @media screen and (max-width: 991px) {
    margin-right: 0px;
    padding-left: 160px;
    padding-right: 160px;
    padding-top: 350px;
  } 
  @media screen and (max-width: 600px) {
    padding: 0px 30px;
    padding-top: 230px;
  }
`;

const Header = styled.div`
  margin-bottom: 50px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 36px;
  line-height: 0.83;
  color: #191619;  
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  } 
  @media screen and (max-width: 600px) {
    text-align: center;
    font-size: 24px;
  }
`;

const Text = styled.div`
  margin-bottom: 45px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 16px;
  line-height: 1.88;
  font-weight: 600;
  color: #191619;  
  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  display: block;
  margin-bottom: 140px;
  background-color: #ff3300;
  border: none;
  padding: 20px 30px;
  color: white;
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #ff3300;  
  }
  @media screen and (max-width: 1200px) {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
const ButtonPrice = styled.span`
  opacity: 0.5;
`;

export default ({ name, price, text }) => (
  <Wrapper>
    <Header>{name}</Header>
    <Text>{text}</Text>
    <Button>
      Купить <ButtonPrice>{price} Р.</ButtonPrice>
    </Button>
  </Wrapper>
);
