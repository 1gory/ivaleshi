import React from 'react';
import styled from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import bg from './bg.jpg';
import videoPreview from './bg.png';
import playIcon from './icon.svg';

const Background = styled.header`
  padding-bottom: 560px;
  background-color: #ff3300;
  background-image: url(${bg});
  background-position: center top;
  background-position-y: -80px;
  background-size: cover;
  background-repeat: no-repeat;
  color: black;
  @media screen and (max-width: 1299px) {
    background-position-y: 0;
  } 
  @media screen and (max-width: 767px) {
    padding-bottom: 350px;
  } 
`;

const Offer = styled.div`
  background-color: #ff3300;
  @media (max-width: 992px) {
   margin-bottom: 190px;
  }
`;

const Header = styled.h1`
  font-size: 30px;
  margin-top: 120px;
  margin-bottom: 40px;
  color: #fff;
  font-family: 'Museo-Regular',sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.4;
  @media (max-width: 1199px) {
    font-size: 36px;
    margin-bottom: 25px;
  }
  @media (max-width: 992px) {
    margin-top: 55px;
    font-size: 20px;
    text-align: center;
  }
`;

const Text = styled.h2`
  font-size: 16px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 500;
  color: #fff;
  line-height: 1.5;
  @media (max-width: 992px) {
    text-align: center;
    padding-bottom: 100px;
  }
`;

const PositionWrapper = styled.div` 
  @media (max-width: 992px) {
    position: relative;
  }
`;

const VideoWrapper = styled.div`
  padding: 40px 0;
  text-align: center;
  @media screen and (max-width: 992px) {
    position: absolute;
    top: -90px;
    left: 0;
    right: 0;
    padding: 0;
    margin: auto
  }
`;

const Preview = styled.img`
  width: 260px;
  border-radius: 50%;
  border: 2px solid #fff;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    width: 180px;
  }
`;

const PreviewWrapper = styled.div`
  position: relative;
`;

const PlayIcon = styled.img`
  width: 25px;
  position: absolute;
  margin: auto;
  top: 0; left: 0; bottom: 0; right: 0;
`;

const Description = styled.div`
  margin-top: 20px;
  text-align: center;
  font-family: 'MuseoSans-Regular', sans-serif;
  color: #fff;
  font-size: 14px;
  opacity: 0.6;
  @media screen and (max-width: 992px) {
    color: #000;
  }
`;

export default () => (
  <>
    <Background />
    <Offer>
      <Grid>
        <Row>
          <Col lg={7}>
            <Header>
              Выберите теплые валенки
              <br />
              из 24-х цветов за 4 клика
            </Header>
            <Text>
              Выдерживают до -30,
              <br />
              если замерзнут ноги, вернем деньги
            </Text>
          </Col>
          <Col lg={3}>
            <PositionWrapper>
              <VideoWrapper>
                <PreviewWrapper>
                  <PlayIcon src={playIcon} />
                  <Preview src={videoPreview} />
                </PreviewWrapper>
                <Description>
                  Посмотрите, как валенки заботяться
                  <br />
                  о вашем здоровье
                </Description>
              </VideoWrapper>
            </PositionWrapper>
          </Col>
        </Row>
      </Grid>
    </Offer>
  </>
);
