import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import bg from './bg.png';

const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 200px;
  background-image: url(${bg});
  background-position: center right;
  background-size: cover;
  color: black;
`;

const Header = styled.h1`
  font-size: 60px;
  margin-top: 120px;
  margin-bottom: 40px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  color: #191616;
`;

const Text = styled.h2`
  font-size: 36px;  
  font-family: 'Museo-Regular', sans-serif;
  color: rgba(25, 22, 22, 0.75);
  line-height: 1.56;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={7}>
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
