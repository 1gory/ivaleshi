import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Item from './Item';
import Gallery from './Gallery';
import ItemsList from './ItemsList';
import Arrow from './Arrow';

const Wrapper = styled.div`
  padding-top: 160px;
  padding-bottom: 230px;
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
  } 
  @media screen and (max-width: 991px) {
    right: 100px;  
    bottom: -35px;
    top: auto;
    height: auto;
  } 
  @media screen and (max-width: 600px) {
    right: 50px;   
  } 
`;
const SliderButtonWrapperRight = styled(SliderButtonWrapper)`
  left: -60px;
  right: auto;
  @media screen and (max-width: 1300px) {
    left: 10px;
  } 
  @media screen and (max-width: 991px) {
    left: 100px;
  } 
  @media screen and (max-width: 600px) {
    left: 50px; 
  } 
`;

export default () => (
  <Wrapper>
    <Grid>
      <SliderWrapper>
        <Row>
          {ItemsList.map(item => (
            <Col lgOffset={3} lg={9} xs={12} key={item.name}>
              <Item
                name={item.name}  
                price={item.price}
                text={item.text}
              />
              <Gallery
                images={item.img}
              />
            </Col>
          ))}
        </Row>
        <SliderButtonWrapper>
          <Arrow />
        </SliderButtonWrapper>
        <SliderButtonWrapperRight>
          <Arrow right />
        </SliderButtonWrapperRight>
      </SliderWrapper>
    </Grid>
  </Wrapper>
);
