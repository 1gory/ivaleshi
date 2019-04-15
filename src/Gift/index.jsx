import React from 'react';
import styled from 'styled-components';

const Gift = styled.div`
  width: 100%;
  border: solid 6px #ff3300;
  text-align: center;
  @media screen and (max-width: 991px) {
    border: none;
    outline: solid 6px #ff3300;
  }
`;

const GiftHeader = styled.div`
  color: rgb(30, 34, 41);
  font-family: 'Museo-Regular', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 40px 0px;
`;

const GiftText = styled.div`
  color: rgb(30, 34, 41);
  font-family: 'Museo-Regular', sans-serif;
  font-size: 16px;
  padding: 40px 0px;
`;

const GiftImg = styled.img`
  max-width: 200px;
  height: 200px;
  object-fit: cover;
`;

export default ({ name, img }) => (
  <Gift>
    <GiftHeader>{name}</GiftHeader>
    <GiftImg src={img} />
    <GiftText>Подарок будет добавлен<br />к вашему заказу</GiftText>
  </Gift>
);
