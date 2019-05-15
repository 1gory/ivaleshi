import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { PaddingGrid as Grid } from '../grid';
import Carousel from './QualitiesMobileBlock';
import mainImage from './mainImg.png';
import bg from './bg.svg';
import line1 from './line-1.svg';
import line2 from './line-2.svg';
import line3 from './line-3.svg';
import line4 from './line-4.svg';
import line5 from './line-5.svg';
import line6 from './line-6.svg';

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
  font-family: 'Museo-Regular', sans-serif;
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
  @media screen and (max-width: 360px) {
    width: 310px;
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

const LinkToBooklet = styled(Link)`
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
`;

export default () => (
  <Wrapper>
    <Grid>
      <QualityWrapper>
        <MainImage src={mainImage} />
        <QualityItem1>
          <QualityHeader>Улучшают здоровье</QualityHeader>
          <QualityDescription>
            {'Целебные свойства овечьей шерсти ускоряют заживление ран и препятствуют воспалительным процессам. Обутые на босую ногу валешки оказывают массажный эффект.'}
          </QualityDescription>
        </QualityItem1>
        <QualityItem2>
          <QualityHeader>Цветовая палитра</QualityHeader>
          <QualityDescription>
            {'В наличии 24 цвета! Вы всегда сможете подобрать валеши под свой вкус. Декоративный стразы и меховые помпоны придадут уникальность вашей зимней обуви.'}
          </QualityDescription>
        </QualityItem2>
        <QualityItem3>
          <QualityHeader>Меховые помпоны</QualityHeader>
          <QualityDescription>
            {'Меховые помпоны из натурального меха мы крепим на кнопки, чтобы Вам было удобно сушить и чистить Ваши тёплые валеши.'}
          </QualityDescription>
        </QualityItem3>
        <QualityItem4>
          <QualityHeader>Долговечные</QualityHeader>
          <QualityDescription>
            {'При правильном использовании и уходе валеши прослужат несколько сезонов, не теряя привлекательный вид. Для этого достаточно соблюдать '}
            <LinkToBooklet smooth offset={-100} to="booklet">
              несложные правила
            </LinkToBooklet>
          </QualityDescription>
        </QualityItem4>
        <QualityItem5>
          <QualityHeader>Ноги дышат, а не потеют</QualityHeader>
          <QualityDescription>
            {'В отличие от синтеческих материалов войлок позволяет ногам дышать и не дает потеть, а переплетение шерстяных волокон хорошо сберегает тепло.'}
          </QualityDescription>
        </QualityItem5>
        <QualityItem6>
          <QualityHeader>Подошва EVA</QualityHeader>
          <QualityDescription>
            {'Подошва наших валешей прошита и выполнена из материала EVA (этиленвинилацетат - ЭВА). Это высокоэффективный вспененный каучук - композиционный полимерный материал, отличающийся высоким уровнем экологической безопасности.'}
          </QualityDescription>
        </QualityItem6>
        <CarouselWrapper>
          <Carousel />
        </CarouselWrapper>
      </QualityWrapper>
    </Grid>
  </Wrapper>
);
