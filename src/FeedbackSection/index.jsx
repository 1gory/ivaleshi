import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
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

export default () => (
  <Wrapper>
    <Grid>
      <SliderWrapper>
        <Header>Отзывы</Header>
        <Row>
          {ItemsList.map(item => (
            <Col mdOffset={1} md={10} xs={12} key={item.name + item.city}>
              <Item
                name={item.name}  
                city={item.city}  
                date={item.date}
                text={item.text}
                link={item.link}
                img={item.img}
              />
            </Col>
          ))}
        </Row>
        <SliderButtonWrapper>
          <Arrow right />
          <Arrow />
        </SliderButtonWrapper>
      </SliderWrapper>
    </Grid>
  </Wrapper>
);
