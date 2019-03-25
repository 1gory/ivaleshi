import React from 'react';
import styled from 'styled-components';

const CardHeader = styled.div`
  margin-top: 40px;
  font-size: 16px;
  color: #191619;
  font-family: 'MuseoSans-Regular', sans-serif;
  text-align: center;
  font-weight: bold;
`;

const CardImage = styled.img`
  margin: auto;
  display: block;
  height: 150px;
`;

export default ({ img, name }) => (
  <div>
    <CardImage src={img} />
    <CardHeader>{name}</CardHeader>
  </div>
);
