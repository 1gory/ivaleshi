import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Item from './Item';
import ItemsList from './ItemsList';
import Arrow from './Arrow';

const Wrapper = styled.div`
  padding: 180px 0px;
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const SliderButtonWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 100px;
  z-index: 10;
`;

const Header = styled.h2`
  font-size: 48px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  text-transform: uppercase;
  text-align: center;
`;

export default () => (
  <Wrapper>
    <Grid>
      <SliderWrapper>
        <Header>Отзывы</Header>
        <Row>
          {ItemsList.map(item => (
            <Col smOffset={1} sm={10} key={item.name + item.city}>
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
