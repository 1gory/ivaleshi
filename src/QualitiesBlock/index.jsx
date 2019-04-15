import React from 'react';
import styled from 'styled-components';
import ReactSwipe from 'react-swipe';
import mainImage from './mainImg.png';
import bg from './bg.svg';
import line1 from './line-1.svg';
import line2 from './line-2.svg';
import line3 from './line-3.svg';
import line4 from './line-4.svg';
import line5 from './line-5.svg';
import line6 from './line-6.svg';
import {
  PaddingGrid as Grid,
  PaddingRow as Row,
  PaddingCol as Col,
} from '../grid';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';

const Wrapper = styled.div`
  background: url(${bg}) center center no-repeat;
  background-size: 120% 100%;
`;

const QualityWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
  font-family: 'MuseoSans-Regular', sans-serif;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    height: 500px;
  }
`;

const MainImage = styled.img`
  width: 450px;
  height: 400px;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    width: 350px;
  }
`;

const QualityItem = styled.div`
  position: absolute;
  width: 360px;
  height: 268px;
  text-align: center;
  @media screen and (max-width: 991px) {
    display: none;
  }
  @media screen and (min-width: 991px) {
    display: inline-block;
    width: 30%;
  }
  & span {
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: rgba(25, 22, 25, 0.7);
  }
`;
const QualityItem1 = styled(QualityItem)`
  top: 41px;
  left: 25.34%;
  background: url(${line1}) no-repeat;
  background-position: 66% 92%;
  background-size: 100px 117px;
`;
const QualityItem2 = styled(QualityItem)`
  top: 132px;
  left: 57.73%;
  background: url(${line2}) no-repeat;
  background-position: 38% 92%;
  background-size: 100px 100px;
`;
const QualityItem3 = styled(QualityItem)`
  top: 236px;
  left: 8.28%;
  background: url(${line3}) no-repeat;
  background-position: 66% 92%;
  background-size: 100px 100px;
`;
const QualityItem4 = styled(QualityItem)`
  top: 371px;
  right: 0.59%;
  background: url(${line4}) no-repeat;
  background-position: 25% 83%;
  background-size: 125px 100px;
`;
const QualityItem5 = styled(QualityItem)`
  height: 154px;
  bottom: 68px;
  left: 10.22%;
  background: url(${line5}) no-repeat;
  background-position: 66% 4%;
  background-size: 125px 100px;
  padding-top: 100px;
`;
const QualityItem6 = styled(QualityItem)`
  height: 154px;
  bottom: 61px;
  right: 12.67%;
  background: url(${line6}) no-repeat;
  background-position: 24% 8%;
  background-size: 125px 100px;
  padding-top: 100px;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #191619;
`;

const CarouselWrapper = styled.div`
  display: none;
  width: 100%;

  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const Item = styled.div`
  text-align: center;
  & span {
    display: inline-block;
    width: 84%;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: rgba(25, 22, 25, 0.7);
  }
`;

const ArrowRight = styled.div`
  width: 8px;
  height: 14px;
  position: absolute;
  bottom: 50px;
  right: 0;
  background: url(${arrowRight}) no-repeat;
  background-size: cover;
`;

const ArrowLeft = styled(ArrowRight)`
  background: url(${arrowLeft}) no-repeat;
  left: 0;
`;

const Carousel = () => {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <Item>
          <H2>Улучшают здоровье</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </Item>
        <Item>
          <H2>Цветовая палитра</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </Item>
        <Item>
          <H2>Меховые помпоны</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </Item>
        <Item>
          <H2>Долговечные</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </Item>
        <Item>
          <H2>Ноги дышат, а не потеют</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </Item>
        <Item>
          <H2>Подошва EVA</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </Item>
      </ReactSwipe>
      <ArrowRight onClick={() => reactSwipeEl.next()} />
      <ArrowLeft onClick={() => reactSwipeEl.prev()} />
    </div>
  );
};

export default () => (
  <Wrapper>
    <Grid>
      <QualityWrapper>
        <MainImage src={mainImage} />
        <QualityItem1>
          <H2>Улучшают здоровье</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </QualityItem1>
        <QualityItem2>
          <H2>Цветовая палитра</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </QualityItem2>
        <QualityItem3>
          <H2>Меховые помпоны</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </QualityItem3>
        <QualityItem4>
          <H2>Долговечные</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </QualityItem4>
        <QualityItem5>
          <H2>Ноги дышат, а не потеют</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </QualityItem5>
        <QualityItem6>
          <H2>Подошва EVA</H2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </span>
        </QualityItem6>
        <CarouselWrapper>
          <Carousel />
        </CarouselWrapper>
      </QualityWrapper>
    </Grid>
  </Wrapper>
);
