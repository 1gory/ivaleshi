import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.h3`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #191619;
`;

const Description = styled.span`
  display: inline-block;
  width: 84%;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: rgba(25, 22, 25, 0.7);
`;

export default ({ header, text }) => (
  <Wrapper>
    <Header>{header}</Header>
    <Description>{text}</Description>
  </Wrapper>
);
