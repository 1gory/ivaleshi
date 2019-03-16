import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  border: solid 5px #ff3300;  
  padding-top: 110px;
  padding-left: 280px;
  padding-right: 160px;
`;

const ItemHeader = styled.div`
  margin-bottom: 50px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 36px;
  line-height: 0.83;
  color: #191619;  
`;

const ItemText = styled.div`
  margin-bottom: 45px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 16px;
  line-height: 1.88;
  font-weight: 600;
  color: #191619;  
`;

const ItemButton = styled.button`
  margin-bottom: 140px;
  background-color: #ff3300;
  border: none;
  padding: 20px 30px;
  color: white;
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #ff3300;  
  }
`;
const ItemButtonPrice = styled.span`
  opacity: 0.5;
`;

export default ({ name, price, text }) => (
  <ItemWrapper>
    <ItemHeader>{name}</ItemHeader>
    <ItemText>{text}</ItemText>
    <ItemButton>
      Купить <ItemButtonPrice>{price} Р.</ItemButtonPrice>
    </ItemButton>
  </ItemWrapper>
);
