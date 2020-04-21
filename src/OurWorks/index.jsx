import React, { Component } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import ReactSwipe from 'react-swipe';
import { PaddingGrid as Grid } from '../grid';
import Item from './Item';
import ItemsList from './ItemsList';
import Arrow from './Arrow';

const Wrapper = styled.section`
  padding-bottom: 40px;
  padding-top: 80px;
  @media screen and (max-width: 991px) {
    padding-bottom: 80px;
    padding-top: 30px;
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 30px;
    padding-top: 0px;
    margin-top: -30px;
  }
`;

const NoPaddingGrid = styled(Grid)`
  padding: 0 !important;
  position: relative;
`;

const SliderButtonWrapper = styled.div`
  position: absolute;
  top: 65px;
  right: 100px;
  z-index: 10;
  @media screen and (max-width: 1200px) {
    top: 100px;
  }
  @media screen and (max-width: 767px) {
    right: 20px;
  }
`;

const Header = styled.h2`
  font-size: 48px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  margin: 0;
  top: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 36px;
    top: 90px;
  }
  @media screen and (max-width: 767px) {
    text-align: left;
    padding-left: 20px;
    width: 50%;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export default class extends Component {
  changeActiveItem = (dif) => {
    const { index } = this.state;
    if (index + dif >= 0 && index + dif < ItemsList.length) this.setState({ index: index + dif });
  };

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
      <Wrapper>
        <Element name="feedback" />
        <NoPaddingGrid>
          <Header>Наши работы</Header>
          <ReactSwipe swipeOptions={{ continuous: true }} ref={el => this.initReactSwipe(el)}>
            {ItemsList.map(item => (
              <Grid key={item.id}>
                <ImagesWrapper>
                  {item.map(img => (
                    <Item img={img} />
                  ))}
                </ImagesWrapper>
              </Grid>
            ))}
          </ReactSwipe>
          <SliderButtonWrapper>
            <Arrow right handler={this.prevPage} />
            <Arrow handler={this.nextPage} />
          </SliderButtonWrapper>
        </NoPaddingGrid>
      </Wrapper>
    );
  }
}