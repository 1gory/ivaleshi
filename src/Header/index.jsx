import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import bg from './bg.png';

const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 200px;
  background-color: rgb(227, 156, 186);
  background-image: url(${bg});
  background-position: center right;
  background-size: contain;
  background-repeat: no-repeat;
  color: black;
  @media screen and (max-width: 767px) {
    background-position: center top;
    padding-top: 240px;
    padding-bottom: 40px;
  } 
`;

const Header = styled.h1`
  font-size: 60px;
  margin-top: 120px;
  margin-bottom: 40px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  color: #191616;
  @media screen and (max-width: 1199px) {
    font-size: 36px;
    margin-bottom: 25px;
  } 
`;

const Text = styled.h2`
  font-size: 36px;  
  font-family: 'Museo-Regular', sans-serif;
  color: rgba(25, 22, 22, 0.75);
  line-height: 1.56;
  @media screen and (max-width: 1199px) {
    font-size: 24px;
  } 
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col sm={7}>
          <Header>
            Дизайнерские валеши ручной работы
          </Header>
          <Text>
            из натуральной овечей шерсти
          </Text>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
