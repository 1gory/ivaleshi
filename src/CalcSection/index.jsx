import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import colorSetMain from './colorSetMain';
import Colors from './Colors';
import colorSetSecondary from './colorSetSecondary';

const Wrapper = styled.div`
  padding-top: 110px;   
`;

const LeftSection = styled.div`
  margin-bottom: 45px;    
`;

const LeftHeader = styled.div`
  margin-bottom: 35px;   
  font-size: 14px;
  font-weight: 600; 
  color: rgb(25, 22, 25);
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col lg={6} xs={12}></Col>
        <Col lg={6} xs={12}>
          <LeftSection>
            <LeftHeader>Цвет валешей</LeftHeader>
            <Colors set={colorSetMain} />
          </LeftSection>
          <LeftSection>
            <LeftHeader>Цвет помпона</LeftHeader>
            <Colors set={colorSetSecondary} />
          </LeftSection>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
