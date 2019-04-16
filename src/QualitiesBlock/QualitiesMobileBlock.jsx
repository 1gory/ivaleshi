import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-scroll';
import MobileQualityItem from './MobileQualityItem';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';

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

const LinkToBooklet = styled(Link)`
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
`;

export default class extends Component {
  initReactSwipe = (el) => {
    this.reactSwipe = el;
  };

  prevPage = () => {
    this.reactSwipe.prev();
  };

  nextPage = () => {
    this.reactSwipe.next();
  };

  render() {
    return (
      <div>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => this.initReactSwipe(el)}
        >
          <div>
            <MobileQualityItem
              header="Улучшают здоровье"
              text="Целебные свойства овечьей шерсти ускоряют заживление ран и препятствуют воспалительным процессам. Обутые на босую ногу валешки оказывают массажный эффект"
            />
          </div>
          <div>
            <MobileQualityItem
              header="Цветовая палитра"
              text="В наличии 24 цвета! Вы всегда сможете подобрать валеши под свой вкус. Декоративный стразы и меховые помпоны придадут уникальность вашей зимней обуви"
            />
          </div>
          <div>
            <MobileQualityItem
              header="Меховые помпоны"
              text="Меховые помпоны из натурального меха мы крепим на кнопки, чтобы Вам было удобно сушить и чистить Ваши тёплые валеши"
            />
          </div>
          <div>
            <MobileQualityItem
              header="Долговечные"
              text={(
                <span>
                  {'При правильном использовании и уходе валеши прослужат несколько сезонов, не теряя привлекательный вид. Для этого достаточно соблюдать '}
                  <LinkToBooklet smooth offset={-100} to="booklet">несложные правила</LinkToBooklet>
                </span>
              )}
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
        <ArrowRight onClick={() => this.nextPage()} />
        <ArrowLeft onClick={() => this.prevPage()} />
      </div>
    );
  }
}
