import React from 'react';
import styled from 'styled-components';

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
  height: 60px;
`;

const CardButton = styled.button`
  display: ${({ button }) => (button ? 'block' : 'none')}; 
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

export default ({ icon, name, text, button }) => (
  <Card>
    <CardIcon src={icon} />
    <CardHeader>{name}</CardHeader>
    <CardText>{text}</CardText>
    <CardButton button={button}>Подобрать дизайн</CardButton>
  </Card>
);
