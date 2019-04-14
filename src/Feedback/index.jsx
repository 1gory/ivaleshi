import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Link, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';
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
  @media screen and (max-width: 1200px) {
    font-size: 36px;
  }
  @media screen and (max-width: 767px) {
    text-align: left;
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

  render() {
    const {
      index,
    } = this.state;

    return (
      <Wrapper>
        <Element name="feedback" />
        <Grid>
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
        </Grid>
      </Wrapper>
    );
  }
}
