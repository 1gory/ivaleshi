import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`  
`;

const Row = styled.div`
  margin-bottom: 10px;  
  display: flex;
  justify-content: flex-start;  
`;

const ColorWrapper = styled.div`  
  border: ${({ active, color }) => (active ? `1px solid ${color}` : 'none')};
  padding: 2px;
  margin-right: 15px;
`;

const Color = styled.div`
  background-color: ${({ color }) => color};
  width: 35px;
  height: 35px;
`;

export default ({ set }) => (
  <Wrapper>
    {set.map(row => (
      <Row key={row[0]}>
        {row.map((color, index) => (
          <ColorWrapper active={index === 2} color={color}>
            <Color color={color} />
          </ColorWrapper>
        ))}
      </Row>
    ))}
  </Wrapper>
);
