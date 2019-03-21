import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import img from './img.png';

const Wrapper = styled.div`
  background: #ff3300;
  position: relative;
  height: 730px;
  @media screen and (max-width: 991px) {
    height: auto;
    padding-bottom: 40px;
  } 
`;

const TextWrapper = styled.div`
  padding-top: 170px;
  padding-bottom: 70px;
  @media screen and (max-width: 1200px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 991px) {
    padding-bottom: 20px;
  }
`;

const Header = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  color: white;
  margin-top: 0;
  margin-bottom: 60px;
  font-family: 'Museo-Regular', sans-serif;
  font-weight: normal;
  line-height: 1.47;
  padding-right: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 22px;
  }
  @media screen and (max-width: 991px) {
    text-align: center;
    padding-right: 0px;
  } 
`;

const Text = styled.h4`
  font-size: 18px; 
  color: white;
  line-height: 2;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: normal;
  padding-right: 160px;
  @media screen and (max-width: 991px) {
    text-align: center;
    padding-right: 0;
  } 
`;

const SideImg = styled.img`
  height: 730px;
  width: 630px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: 1300px) {
    width: 500px;
  } 
  @media screen and (max-width: 1200px) {
    width: 470px;
  } 
  @media screen and (max-width: 991px) {
    position: static;
    width: 100%;
    height: 880px;
  } 
  @media screen and (max-width: 700px) {
    height: 730px;
  } 
  @media screen and (max-width: 550px) {
    height: 360px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;

const ButtonWhite = styled.button`
  background: white;
  border: none;
  padding: 11px 15px;
  color: #ff3300;
  text-transform: uppercase;
  margin-right: 30px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ff3300;
    color: white;  
  }
  @media screen and (max-width: 1200px) {
    display: block;
    margin: auto;
    margin-bottom: 20px;
  } 
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 11px 15px;
  color: white;
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #ff3300;  
  }
  @media screen and (max-width: 1200px) {
    display: block;
    margin: auto;
  } 
`;


export default () => (
  <Wrapper>
    <SideImg src={img} />
    <Grid>
      <Row>
        <Col lg={7} xs={12}>
          <TextWrapper>
            <Header>
              Валеши — это современный взгляд на традиционную обувь
            </Header>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor .
            </Text>
          </TextWrapper>
          <ButtonWrapper>
            <ButtonWhite>Подобрать дизайн</ButtonWhite>
            <Button>буклет по уходу за валешами</Button>
          </ButtonWrapper>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
