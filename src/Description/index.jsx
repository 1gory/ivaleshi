import React from 'react';
import styled from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import img from './img.png';

const Wrapper = styled.section`
  background: #ff3300;
  position: relative;
  padding-top: 170px;
  padding-bottom: 155px;
  @media screen and (max-width: 1200px) {
    padding-top: 100px;
    padding-bottom: 50px;
  } 
  @media screen and (max-width: 991px) {
    padding-top: 0;
  } 
`;

const TextWrapper = styled.div`
  padding-bottom: 60px;
  @media screen and (max-width: 991px) {
    padding-bottom: 35px;
  }
`;

const Header = styled.h3`
  margin: 0;
  padding-right: 50px;
  padding-bottom: 60px;
  font-size: 30px;
  font-family: 'Museo-Regular', sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  line-height: 1.47;
  color: white;
  @media screen and (max-width: 1200px) {
    font-size: 22px;
  }
  @media screen and (max-width: 991px) {
    padding: 35px 0;
    text-align: center;
    padding-right: 0px;
  } 
`;

const Text = styled.p`
  font-size: 18px;
  margin: 0;
  color: white;
  line-height: 2;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: normal;
  padding-right: 160px;
  @media screen and (max-width: 991px) {
    font-size: 16px;
    line-height: 1.75;
    text-align: center;
    padding-right: 0;
  } 
`;

const SideImg = styled.img`
  height: 100%;
  width: 630px;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: 1300px) {
    width: 550px;
  } 
  @media screen and (max-width: 1200px) {
    width: 470px;
  } 
  @media screen and (max-width: 991px) {
    position: static;
    width: 100%;
    height: 730px;
  } 
  @media screen and (max-width: 700px) {
    height: 500px;
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
              Натуральный 100% войлок согреет даже при температуре -40 градусов.
              Нескользящая подошва EVA придаст спокойствия на замерзших тротуарах.
              Помпоны из натурального меха енота, песца, норки.
              Оригинальные аксессуары, которые отбирают наши дизайнеры.
              Ручная работа дизайнеров не оставит равнодушным окружающих!
              Посмотрите, как выглядят наши работы ниже.
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
