import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Link, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';
import ReactSwipe from 'react-swipe';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
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

export default class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  changeActiveItem = (dif) => {
    const {
      index,
    } = this.state;
    if (index + dif >= 0 && index + dif < ItemsList.length) this.setState({ index: index + dif });
  }

  prevPage = () => {
    this.reactSwipe.prev();
  }

  nextPage = () => {
    this.reactSwipe.next();
  }

  render() {
    const {
      index,
    } = this.state;

    return (
      <Wrapper>
        <Element name="feedback" />
        {/* <Grid>
          <SliderWrapper>
            <Header>Отзывы</Header>
            <Row>
              <Col mdOffset={1} md={10} xs={12} key={ItemsList[index].name + ItemsList[index].city}>
                <Item
                  name={ItemsList[index].name}
                  city={ItemsList[index].city}
                  date={ItemsList[index].date}
                  text={ItemsList[index].text}
                  link={ItemsList[index].link}
                  img={ItemsList[index].img}
                />
              </Col>
            </Row>
            <SliderButtonWrapper>
              <Arrow right handler={this.changeActiveItem} />
              <Arrow handler={this.changeActiveItem} />
            </SliderButtonWrapper>
          </SliderWrapper>
        </Grid> */}
        <NoPaddingGrid>
          <Header>Отзывы</Header>
          <ReactSwipe
            swipeOptions={{ continuous: false }}
            ref={el => (this.reactSwipe = el)}
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
      </Wrapper>
    );
  }
}
