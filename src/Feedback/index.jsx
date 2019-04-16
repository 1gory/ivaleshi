import React, { Component } from 'react';
import styled from 'styled-components';
import { Element, Link } from 'react-scroll';
import ReactSwipe from 'react-swipe';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import Button from '../generic/Button';
import Item from './Item';
import ItemsList from './ItemsList';
import Arrow from './Arrow';

const Wrapper = styled.section`
  padding-bottom: 140px;
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
  padding: 0!important;
  position: relative;
`;

const PaddingRow = styled(Row)`
  padding-top: 110px;
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
  }
`;

const BuyButton = styled(Button)`
  margin: 0 auto;
  margin-top: 60px;
`;

export default class extends Component {
  changeActiveItem = (dif) => {
    const {
      index,
    } = this.state;
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
          <Header>Отзывы</Header>
          <ReactSwipe
            swipeOptions={{ continuous: true }}
            ref={el => this.initReactSwipe(el)}
          >
            {ItemsList.map(item => (
              <Grid key={item.name}>
                <PaddingRow>
                  <Col mdOffset={1} md={10} xs={12}>
                    <Item
                      name={item.name}
                      city={item.city}
                      date={item.date}
                      text={item.text}
                      link={item.link}
                      img={item.img}
                    />
                  </Col>
                </PaddingRow>
              </Grid>
            ))}
          </ReactSwipe>
          <SliderButtonWrapper>
            <Arrow right handler={this.prevPage} />
            <Arrow handler={this.nextPage} />
          </SliderButtonWrapper>
        </NoPaddingGrid>
        <Link
          to="constructor"
          spy={false}
          smooth
          hashSpy={false}
          offset={-100}
          duration={500}
          delay={50}
          isDynamic
          ignoreCancelEvents={false}
        >
          <BuyButton>Оформить заказ</BuyButton>
        </Link>
      </Wrapper>
    );
  }
}
