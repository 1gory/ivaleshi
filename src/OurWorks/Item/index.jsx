import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  min-height: 360px;
  padding: 0;
  background-color: rgba(25, 22, 22, 0.05);
  position: relative;
  @media screen and (max-width: 991px) {
    padding: 2px 4px;
    width: 50%;
    min-height: 200px;
  }
`;

const Thumb = styled.img`
  width: 270px;
  height: 330px;
  object-fit: cover;
  @media screen and (max-width: 991px) {
    width: 100%;
    height: 200px;
  }
`;

export default ({ img }) => (
  <Wrapper>
    <Thumb src={img} />
  </Wrapper>
);
