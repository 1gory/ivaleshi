import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  fill: white;
  transform: ${({ right }) => (right ? 'rotate(180deg)' : 'none')}; 
`;

const Button = styled.button`
  cursor: pointer;
  transition: 0.2s;
  background: none;
  border: none;
  svg {
    fill: rgb(25, 22, 25);
  }
  &:hover {
    svg {
      fill: #FF3300;
      cursor: pointer;
    }
  }
`;

export default ({ right, handler }) => (
  <Button onClick={() => handler(right ? -1 : 1)}>
    <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" right={right}>
      <polygon fill-rule="evenodd" points="17.586 13 3 13 3 11 17.586 11 11.293 4.707 12.707 3.293 21.414 12 12.707 20.707 11.293 19.293" />
    </SVG>
  </Button>
);
