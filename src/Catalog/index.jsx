import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import Item from './Item';
import Gallery from './Gallery';
import ItemsList from './ItemsList';
import Arrow from './Arrow';

const Wrapper = styled.section`
  padding-top: 160px;
  padding-bottom: 230px;
  @media screen and (max-width: 991px) {
    padding-bottom: 80px;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const SliderButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: auto;
  right: -60px;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: 1300px) {
    right: 10px;
    left: auto;
  } 
  @media screen and (max-width: 991px) {
    right: 100px;  
    bottom: -35px;
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
  left: -60px;
  right: auto;
  @media screen and (max-width: 1300px) {
    left: 10px;
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

  render() {
    return (
      <Wrapper>
        <Grid>
          <SliderWrapper>
            <Row>
              {ItemsList.map((item, index) => (
                <Col lgOffset={3} lg={9} xs={12} key={item.name}>
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
              ))}
            </Row>
            <SliderControlsWrapper>
              <SliderButtonWrapperRight>
                <Arrow right />
              </SliderButtonWrapperRight>
              <SliderButtonWrapper>
                <Arrow />
              </SliderButtonWrapper>
            </SliderControlsWrapper>
          </SliderWrapper>
        </Grid>
      </Wrapper>
    );
  }
};
