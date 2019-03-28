import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  margin-bottom: 10px;  
  display: flex;
  justify-content: flex-start; 
  flex-wrap: wrap; 
  @media screen and (max-width: 991px) {
    justify-content: center;   
  } 
`;

const ColorWrapper = styled.div`  
  outline: ${({ active, color }) => (active ? `1px solid ${color}` : 'none')};
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

const Color = styled.div`
  background-color: ${({ color }) => color};
  width: 35px;
  height: 35px;
  @media screen and (max-width: 600px) {
    width: 32px;
    height: 32px;  
  } 
`;

export default ({ activeColor, set, handler }) => (
  <div>
    <Row>
      {set.map((color, index) => (
        <ColorWrapper
          key={color}
          active={index === activeColor}
          color={color}
          onClick={() => { if (index !== activeColor) handler(index); }}
        >
          <Color color={color} />
        </ColorWrapper>
      ))}
    </Row>
  </div>
);
