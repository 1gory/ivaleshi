import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import icon1 from './icon.png';

const Wrapper = styled.div`
  background: white;
  padding-top: 160px;
`;

const CardHeader = styled.h3`
  font-size: 20px;
  color: #191619;
  margin-top: 60px;
  margin-bottom: 40px;
  font-family: 'Museo-Regular', sans-serif;
  font-weight: normal;
  text-align: center;
  width: 100%;
`;

const CardText = styled.h2`
  font-size: 14px; 
  color: #191619;
  line-height: 1.86;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: normal;
  padding: 0 140px;
  text-align: center;
  margin-bottom: 160px;
`;

const CardIcon = styled.img`
  margin: auto;
  display: block;
`;


export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={6}>
          <CardIcon src={icon1} />
          <CardHeader>Наличие</CardHeader>
          <CardText>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,</CardText>
        </Col>
        <Col xs={6}>
          <CardIcon src={icon1} />
          <CardHeader>Наличие</CardHeader>
          <CardText>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,</CardText>
        </Col>
        <Col xs={6}>
          <CardIcon src={icon1} />
          <CardHeader>Наличие</CardHeader>
          <CardText>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,</CardText>
        </Col>
        <Col xs={6}>
          <CardIcon src={icon1} />
          <CardHeader>Наличие</CardHeader>
          <CardText>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,</CardText>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
