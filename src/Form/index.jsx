import React from 'react';
import styled from 'styled-components';
import Main from './Main';
import Success from './Success';
import Fail from './Fail';

const Wrapper = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')};
`;

export default ({ display, formState, ...props }) => (
  <Wrapper display={display}>
    <Main active={formState === 'main'} {...props} />
    <Success active={formState === 'success'} {...props} />
    <Fail active={formState === 'fail'} {...props} />
  </Wrapper>
);
