import React from 'react';
import styled from 'styled-components';
import ReactSwipe from 'react-swipe';
import MobileQualityItem from './MobileQualityItem';
import mainImage from './mainImg.png';
import bg from './bg.svg';
import line1 from './line-1.svg';
import line2 from './line-2.svg';
import line3 from './line-3.svg';
import line4 from './line-4.svg';
import line5 from './line-5.svg';
import line6 from './line-6.svg';
import { PaddingGrid as Grid } from '../grid';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';

const Wrapper = styled.div`
  padding: 100px 0 100px 0;
  background: url(${bg}) center center no-repeat;
  background-size: 120% 100%;
  @media screen and (max-width: 991px) {
    padding: 0;
    background-size: 150% 71%;
  }
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
    height: 661px;
    justify-content: flex-start;
  }
`;

const MainImage = styled.img`
  width: 450px;
  @media screen and (max-width: 991px) {
    width: 350px;
  }
`;

const QualityItem = styled.div`
  position: absolute;
  display: inline-block;
  width: 360px;
  height: 268px;
  text-align: center;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const QualityDescription = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: rgba(25, 22, 25, 0.7);
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
  bottom: 68px;
  left: 10.22%;
  height: 154px;
  padding-top: 100px;
  background: url(${line5}) no-repeat;
  background-position: 66% 4%;
  background-size: 125px 100px;
`;

const QualityItem6 = styled(QualityItem)`
  bottom: 61px;
  right: 12.67%;
  height: 154px;
  padding-top: 100px;
  background: url(${line6}) no-repeat;
  background-position: 24% 8%;
  background-size: 125px 100px;
`;

const QualityHeader = styled.h3`
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

const ArrowRight = styled.div`
  position: absolute;
  bottom: 200px;
  right: 0;
  width: 8px;
  height: 14px;
  background: url(${arrowRight}) no-repeat;
  background-size: cover;
`;

const ArrowLeft = styled(ArrowRight)`
  left: 0;
  background: url(${arrowLeft}) no-repeat;
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
        <div>
          <MobileQualityItem
            header="Улучшают здоровье"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat."
          />
        </div>
        <div>
          <MobileQualityItem
            header="Цветовая палитра"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat."
          />
        </div>
        <div>
          <MobileQualityItem
            header="Меховые помпоны"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat."
          />
        </div>
        <div>
          <MobileQualityItem
            header="Долговечные"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat."
          />
        </div>
        <div>
          <MobileQualityItem
            header="Ноги дышат, а не потеют"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat."
          />
        </div>
        <div>
          <MobileQualityItem
            header="Подошва EVA"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat."
          />
        </div>
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
          <QualityHeader>Улучшают здоровье</QualityHeader>
          <QualityDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </QualityDescription>
        </QualityItem1>
        <QualityItem2>
          <QualityHeader>Цветовая палитра</QualityHeader>
          <QualityDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </QualityDescription>
        </QualityItem2>
        <QualityItem3>
          <QualityHeader>Меховые помпоны</QualityHeader>
          <QualityDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </QualityDescription>
        </QualityItem3>
        <QualityItem4>
          <QualityHeader>Долговечные</QualityHeader>
          <QualityDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </QualityDescription>
        </QualityItem4>
        <QualityItem5>
          <QualityHeader>Ноги дышат, а не потеют</QualityHeader>
          <QualityDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </QualityDescription>
        </QualityItem5>
        <QualityItem6>
          <QualityHeader>Подошва EVA</QualityHeader>
          <QualityDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </QualityDescription>
        </QualityItem6>
        <CarouselWrapper>
          <Carousel />
        </CarouselWrapper>
      </QualityWrapper>
    </Grid>
  </Wrapper>
);
