import React from 'react';
import styled from 'styled-components';
import Button from '../../generic/Button';

const Wrapper = styled.div`
  border: solid 5px #ff3300;
  padding-top: 110px;
  padding-left: 280px;
  padding-right: 160px;
  @media screen and (max-width: 1300px) {
    margin-right: 50px;
  }
  @media screen and (max-width: 1200px) {
    padding-top: 80px;
  }
  @media screen and (max-width: 991px) {
    margin-right: 0px;
    padding-left: 160px;
    padding-right: 160px;
    padding-top: 350px;
  }
  @media screen and (max-width: 600px) {
    padding: 0px 30px;
    padding-top: 230px;
  }
`;

const Header = styled.div`
  margin-bottom: 50px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 36px;
  line-height: 0.83;
  color: #191619;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    text-align: center;
    font-size: 24px;
  }
`;

const Text = styled.div`
  margin-bottom: 45px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 16px;
  line-height: 1.88;
  font-weight: 600;
  color: #191619;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const BuyButton = styled(Button)`
  margin-bottom: 140px;
  @media screen and (max-width: 1200px) {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const ButtonPrice = styled.span`
  opacity: 0.5;
`;

export default ({
  name, price, text, handler, index,
}) => (
  <Wrapper>
    <Header>{name}</Header>
    <Text>{text}</Text>
    <BuyButton onClick={() => handler(index)}>
      Купить
      <ButtonPrice>
        {price}
        {' '}
        Р.
      </ButtonPrice>
    </BuyButton>
  </Wrapper>
);
