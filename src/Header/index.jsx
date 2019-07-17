import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import bg from './bg.jpg';
import videoPreview from './videoPreview.jpg';
import playIcon from './play-icon.svg';
import colors from './animationColors';

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
  font-family: 'Museo-Regular', sans-serif;
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
  font-family: 'Museo-Regular', sans-serif;
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
    margin: auto;
  }
`;

const Preview = styled.img`
  width: 260px;
  border-radius: 50%;
  cursor: pointer;
  @media screen and (max-width: 992px) {
    width: 180px;
  }
`;

const PreviewWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const PlayIcon = styled.img`
  width: 25px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Description = styled.div`
  margin-top: 20px;
  text-align: center;
  font-family: 'Museo-Regular', sans-serif;
  color: #fff;
  font-size: 14px;
  opacity: 0.6;
  @media screen and (max-width: 992px) {
    color: #000;
  }
`;

const scale = keyframes`
   0% {
    transform: scale(1, 1);
  }
  18% {
    transform: scale(0.01, 0.01);
  }
  33% {
    transform: scale(0.01, 0.01);
  }
  51% {
    transform: scale(1, 1);
  }
`;

const rotate = keyframes`
   0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotateAnimation = () => css`
  ${rotate} 5.5s infinite linear;
`;

const scaleAnimation = () => css`
  ${scale} 2.5s infinite linear;
`;

const Animation = styled.div`
  position: relative;
  display: inline-block;
  width: 270px;
  height: 265px;
  text-align: center;
  @media screen and (max-width: 992px) {
    width: 180px;
    height: 180px;
  }
`;

const AnimationBorder = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  padding: 0px;
  animation: ${rotateAnimation};
`;

const SegmentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform-origin: 50% 50%;
  transform: rotate(${props => props.degree}deg);
`;

const Segment = styled.svg`
  position: absolute;
  top: -10px;
  left: -10px;
  transform-origin: 270px 50%;
  animation: ${scaleAnimation};
  animation-delay: ${props => props.delay}s;
  @media screen and (max-width: 992px) {
    transform-origin: 180px 50%;
  }
`;

const calcDegree = (index, isMobile) => {
  let segmentSize;
  let size;
  if (isMobile) {
    segmentSize = 15;
  } else {
    segmentSize = 30;
  }
  if (isMobile) {
    size = 180;
  } else {
    size = 270;
  }
  const radius = size / 2;
  const circumference = radius * 3.1415926 * 2;
  const segments = circumference / segmentSize;
  const angleStep = 360 / segments;
  return index * angleStep;
};

const calcDelay = (index, isMobile) => {
  let segmentSize;
  let size;
  if (isMobile) {
    segmentSize = 15;
  } else {
    segmentSize = 30;
  }
  if (isMobile) {
    size = 180;
  } else {
    size = 270;
  }
  const radius = size / 2;
  const circumference = radius * 3.1415926 * 2;
  const segments = circumference / segmentSize;
  return (0.4 / segments) * index;
};

const DesktopAnimation = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const MobileAnimation = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: inline-block;
  }
`;
export default ({ modalContainer: { openModalVideo } }) => (
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
                <PreviewWrapper onClick={() => openModalVideo()}>
                  <Animation>
                    <AnimationBorder>
                      {colors.map((color, index) => (
                        <SegmentContainer degree={() => calcDegree(index)}>
                          <DesktopAnimation>
                            <Segment delay={() => calcDelay(index, false)} width="350" height="350">
                              <circle
                                cx="135"
                                cy="145"
                                r="135"
                                fill="transparent"
                                stroke={color}
                                strokeDasharray="25, 5000"
                                strokeWidth="8"
                                strokeLinecap="round"
                                transform="rotate(-5,95,95)"
                              />
                            </Segment>
                          </DesktopAnimation>
                          <MobileAnimation>
                            <Segment delay={() => calcDelay(index, true)} width="300" height="300">
                              <circle
                                cx="95"
                                cy="100"
                                r="95"
                                fill="transparent"
                                stroke={color}
                                strokeDasharray="18, 5000"
                                strokeWidth="6"
                                strokeLinecap="round"
                                transform="rotate(-5,95,95)"
                              />
                            </Segment>
                          </MobileAnimation>
                        </SegmentContainer>
                      ))}
                    </AnimationBorder>
                    <PlayIcon src={playIcon} />
                    <Preview src={videoPreview} />
                  </Animation>
                </PreviewWrapper>
                <Description>
                  Посмотрите, как валенки заботятся
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
