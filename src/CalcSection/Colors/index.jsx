import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  margin-bottom: 10px;  
  display: flex;
  justify-content: flex-start;  
  @media screen and (max-width: 991px) {
    justify-content: center;   
  } 
`;

const ColorWrapper = styled.div`  
  border: ${({ active, color }) => (active ? `1px solid ${color}` : 'none')};
  padding: 2px;
  margin-right: 15px;
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

export default ({ set }) => (
  <div>
    {set.map(row => (
      <Row key={row[0]}>
        {row.map((color, index) => (
          <ColorWrapper active={index === 2} color={color}>
            <Color color={color} />
          </ColorWrapper>
        ))}
      </Row>
    ))}
  </div>
);
