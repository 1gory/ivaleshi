import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    height: 0;
  }
  99% {
    height: 0;
  }
  100% {
    height: 48px;
  }
`;

const Wrapper = styled.div`
  @media screen and (max-width: 991px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 48px;
    position: fixed;
    bottom: 0px;
    background-color: #6aaf0c;
    line-height: 48px;
    z-index: 99;
    animation: ${fadeIn} 3s forwards;
  }
`;

const Phone = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: 'MuseoSans-Regular', sans-serif;
`;

export default () => (
  <Wrapper>
    <Phone href="tel:+8 8888 123-45-67">+8 8888 123-45-67</Phone>
  </Wrapper>
);
