import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import icon1 from './icon-1.png';

const Wrapper = styled.div`
  background-color: rgba(25, 22, 22, 0.05);
  position: relative;
`;

const Card = styled.div`
  padding-top: 140px;
  padding-bottom: 140px;
`;

const CardHeader = styled.div`
  margin-top: 70px;
  margin-bottom: 40px;
  font-size: 20px;
  color: #191619;
  font-family: 'Museo-Regular', sans-serif;
  text-align: center;
`;

const CardText = styled.div`
  padding: 0 35px;
  margin-bottom: 50px;
  font-size: 14px; 
  color: #191619;
  line-height: 1.86;
  font-family: 'MuseoSans-Regular', sans-serif;
  text-align: center;
`;

const CardIcon = styled.img`
  margin: auto;
  display: block;
`;

const CardButton = styled.button`
  display: block;
  margin: auto;
  background: none;
  border: none;
  padding: 11px 15px;
  color: #ff2300;
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ff3300;
    color: white;  
  }
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={3}>
          <Card>
            <CardIcon src={icon1} />
            <CardHeader>Заказ</CardHeader>
            <CardText>Подбери свой дизайн или выбери понравившиеся валеши из каталога и оставь заявку</CardText>
            <CardButton>Подобрать дизайн</CardButton>
          </Card>
        </Col>
        <Col xs={3}>
          <Card>
            <CardIcon src={icon1} />
            <CardHeader>Заказ</CardHeader>
            <CardText>Подбери свой дизайн или выбери понравившиеся валеши из каталога и оставь заявку</CardText>
          </Card>
        </Col>
        <Col xs={3}>
          <Card>
            <CardIcon src={icon1} />
            <CardHeader>Заказ</CardHeader>
            <CardText>Подбери свой дизайн или выбери понравившиеся валеши из каталога и оставь заявку</CardText>
          </Card>
        </Col>
        <Col xs={3}>
          <Card>
            <CardIcon src={icon1} />
            <CardHeader>Заказ</CardHeader>
            <CardText>Подбери свой дизайн или выбери понравившиеся валеши из каталога и оставь заявку</CardText>
          </Card>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
