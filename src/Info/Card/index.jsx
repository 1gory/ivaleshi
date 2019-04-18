import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
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

const Text = styled.div`
  padding: 0 140px;
  margin-bottom: 160px;
  font-size: 14px;
  color: #191619;
  line-height: 1.86;
  font-family: 'Museo-Regular', sans-serif;
  text-align: center;
  @media screen and (max-width: 991px) {
    padding: 0 30px;
    margin-bottom: 50px;
  }
`;

const Icon = styled.img`
  margin: auto;
  display: block;
  height: 80px;
`;

export default ({
  openModal,
  icon,
  name,
  text,
}) => (
  <div>
    <Icon src={icon} />
    <Header>{name}</Header>
    <Text>{React.cloneElement(text, { openModal })}</Text>
  </div>
);
