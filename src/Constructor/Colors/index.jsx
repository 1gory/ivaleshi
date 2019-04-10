import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  line-height: 0;
`;

const Row = styled.div`
  margin-bottom: 10px;  
  display: flex;
  justify-content: flex-start; 
  flex-wrap: wrap; 
`;

const ColorWrapper = styled.div`  
  outline: ${({ isActive, color }) => (isActive ? `1px solid ${color}` : 'none')};
  padding: 2px;
  margin-right: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    margin-right: 10px; 
  }
  @media screen and (max-width: 991px) {
    margin-right: 2px; 
  }
`;

const Color = styled.img`
  background-color: ${({ color }) => color};
  width: 35px;
  height: 35px;
  @media screen and (max-width: 600px) {
    width: 32px;
    height: 32px;  
  } 
`;

export default ({ activeColor, set, handler }) => (
  <Wrapper>
    <Row>
      {set.map((color, index) => (
        <ColorWrapper
          key={color[0]}
          color={color[0]}
          isActive={index === activeColor}
          onClick={() => { if (index !== activeColor) handler(index); }}
        >
          <Color src={color[1]} color={color[0]} />
        </ColorWrapper>
      ))}
    </Row>
  </Wrapper>
);
