import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Link, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';
import ReactSwipe from 'react-swipe';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import Item from './Item';
import Gallery from './Gallery';
import ItemsList from './ItemsList';
import Arrow from './Arrow';

const Wrapper = styled.section`
  margin-top: 160px;
  margin-bottom: 230px;
  @media screen and (max-width: 991px) {
    margin-bottom: 80px;
  }
`;

const NoPaddingGrid = styled(Grid)`
  padding: 0!important;
  position: relative;
`;

const SliderButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: auto;
  right: -40px;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: 1300px) {
    right: 30px;
    left: auto;
  } 
  @media screen and (max-width: 991px) {
    right: 100px;  
    bottom: -5px;
    top: auto;
    height: auto;
    left: auto;
  } 
  @media screen and (max-width: 767px) {
    position: static;
    button {
      border-left: 5px solid white;
    }
  } 
`;

const SliderButtonWrapperRight = styled(SliderButtonWrapper)`
  left: -40px;
  right: auto;
  @media screen and (max-width: 1300px) {
    left: 30px;
    right: auto;
  } 
  @media screen and (max-width: 991px) {
    left: 100px;
    right: auto;
  } 
  @media screen and (max-width: 767px) {
    position: static;
    button {
      border: 15px solid white;
      border-right: 5px solid white;
    }
  } 
`;

const SliderControlsWrapper = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    bottom: -35px;
    left: 0;
    position: absolute;
    display: flex; 
    justify-content: center; 
  }   
`;

export default class Catalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  handleOpenModal = (index) => {
    const {
      constructorContainer: {
        getCatalogItemData,
      },
      modalContainer: {
        openModal,
      },
    } = this.props;

    getCatalogItemData(
      ItemsList[index].mainColor,
      ItemsList[index].secondaryColor,
      ItemsList[index].jewel,
      ItemsList[index].price,
      ItemsList[index].name,
    );
    openModal('order', 10);
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
    return (
      <Wrapper>
        <Element name="catalog" />
        <NoPaddingGrid>
          <ReactSwipe
            swipeOptions={{ continuous: false }}
            ref={el => (this.reactSwipe = el)}
          >
            {ItemsList.map((item, index) => (
              <Grid key={ItemsList[index].name}>
                <Row>
                  <Col lgOffset={3} lg={9} xs={12}>
                    <Item
                      name={item.name}
                      price={item.price}
                      text={item.text}
                      handler={this.handleOpenModal}
                      index={index}
                    />
                    <Gallery
                      images={item.img}
                    />
                  </Col>
                </Row>
              </Grid>
            ))}
          </ReactSwipe>
          <SliderControlsWrapper>
            <SliderButtonWrapperRight>
              <Arrow right handler={this.prevPage} />
            </SliderButtonWrapperRight>
            <SliderButtonWrapper>
              <Arrow handler={this.nextPage} />
            </SliderButtonWrapper>
          </SliderControlsWrapper>
        </NoPaddingGrid>
      </Wrapper>
    );
  }
}
