import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import img from './img.png';

const Wrapper = styled.div`
  background: #ff3300;
  position: relative;
  height: 730px;
`;

const TextWrapper = styled.div`
  padding-top: 170px;
  padding-bottom: 70px;
`;

const Header = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  color: white;
  margin-top: 0;
  margin-bottom: 60px;
`;

const Text = styled.h2`
  font-size: 18px; 
  color: white;
`;

const SideImg = styled.img`
  height: 730px;
  width: 630px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
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
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 11px 15px;
  color: white;
  text-transform: uppercase;
`;


export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={6}>
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
    <SideImg src={img} />
  </Wrapper>
);
