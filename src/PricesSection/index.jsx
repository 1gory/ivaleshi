import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import arrow from './arrow-right.png';
import Item from './Item';
import Gallery from './Gallery';
import ItemsList from './ItemsList';

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
  left: ${({ right }) => (right ? 'auto' : '-55px')};
  right: ${({ right }) => (right ? '-55px' : 'auto')};
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const SliderButton = styled.button`
  padding: 20px;
  background-color: #ff3300;
  border: 30px solid white;
  cursor: pointer;
  transform: ${({ right }) => (right ? 'rotate(180deg)' : 'none')}; 
  transition: 0.2s;
  &:hover {
    background-color: white;
  }
`;

export default () => (
  <Wrapper>
    <Grid>
      <SliderWrapper>
        <Row>
          {ItemsList.map(item => (
            <Col xsOffset={3} xs={9} key={item.name}>
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
          <SliderButton><img src={arrow} alt="" /></SliderButton>
        </SliderButtonWrapper>
        <SliderButtonWrapper right>
          <SliderButton right><img src={arrow} alt="" /></SliderButton>
        </SliderButtonWrapper>
      </SliderWrapper>
    </Grid>
  </Wrapper>
);
