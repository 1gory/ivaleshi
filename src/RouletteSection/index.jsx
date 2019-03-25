import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import cardsList from './CardsList';
import Card from './Card';

const Wrapper = styled.div`   
  padding-bottom: 100px;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={12}>

        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
