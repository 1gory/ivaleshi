import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import arrow from './arrow.svg';
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
  left: ${({ right }) => (right ? '-60px' : 'auto')};
  right: ${({ right }) => (right ? 'auto' : '-60px')};
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
`;

export default () => (
  <Wrapper>
    <Grid>
      <SliderWrapper>
        <Row>
          {ItemsList.map(item => (
            <Col smOffset={3} sm={9} key={item.name}>
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
        <SliderButtonWrapper right>
          <Arrow right />
        </SliderButtonWrapper>
      </SliderWrapper>
    </Grid>
  </Wrapper>
);
