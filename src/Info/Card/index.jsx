import React from 'react';
import styled from 'styled-components';

const CardHeader = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  font-size: 20px;
  color: #191619;
  font-family: 'Museo-Regular', sans-serif;
  text-align: center;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
    margin-top: 20px;
  } 
`;

const CardText = styled.div`
  padding: 0 140px;
  margin-bottom: 160px;
  font-size: 14px; 
  color: #191619;
  line-height: 1.86;
  font-family: 'MuseoSans-Regular', sans-serif;
  text-align: center;
  @media screen and (max-width: 991px) {
    padding: 0 30px;
    margin-bottom: 50px;
  } 
`;

const CardIcon = styled.img`
  margin: auto;
  display: block;
  height: 80px;
`;

export default ({ icon, name, text }) => (
  <div>
    <CardIcon src={icon} />
    <CardHeader>{name}</CardHeader>
    <CardText>{text}</CardText>
  </div>
);
