import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import bg from './bg.png';

const Wrapper = styled.div`
  height: 572px;
  background-image: url(${bg});
  background-position: center right;
`;

const Header = styled.h1`
  font-size: 60px;
  margin-top: 120px;
`;

const Text = styled.h2`
  opacity: 0.75;
  font-size: 36px;  
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={6}>
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
