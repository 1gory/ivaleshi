import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import Item from './Item';
import ItemsList from './ItemsList';
import Arrow from './Arrow';

const Wrapper = styled.section`
  padding: 180px 0px;
  @media screen and (max-width: 767px) {
    padding: 30px 0px;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const SliderButtonWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 100px;
  z-index: 10; 
  @media screen and (max-width: 767px) {
    top: 5px;
    right: 0;
  }
`;

const Header = styled.h2`
  font-size: 48px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: 767px) {
    text-align: left;
    font-size: 36px;
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
    const temp = this.state.index;
    if (temp + dif >= 0 && temp + dif < ItemsList.length) this.setState({ index: temp + dif });
  }

  render() {
    return (
      <Wrapper>
        <Element name="feedback" />
        <Grid>
          <SliderWrapper>
            <Header>Отзывы</Header>
            <Row>
              <Col mdOffset={1} md={10} xs={12} key={ItemsList[this.state.index].name + ItemsList[this.state.index].city}>
                <Item
                  name={ItemsList[this.state.index].name}
                  city={ItemsList[this.state.index].city}
                  date={ItemsList[this.state.index].date}
                  text={ItemsList[this.state.index].text}
                  link={ItemsList[this.state.index].link}
                  img={ItemsList[this.state.index].img}
                />
              </Col>
            </Row>
            <SliderButtonWrapper>
              <Arrow right handler={this.changeActiveItem} />
              <Arrow handler={this.changeActiveItem} />
            </SliderButtonWrapper>
          </SliderWrapper>
        </Grid>
      </Wrapper>
    )

  }
};
