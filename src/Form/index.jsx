import React, { Component } from 'react';
import styled from 'styled-components';
import Main from './Main';
import Success from './Success';
import Fail from './Fail';

const Wrapper = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')}; 
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      display,
      formState,
    } = this.props;

    return (
      <Wrapper display={display}>
        <Main active={formState === 'main'} {...this.props} />
        <Success active={formState === 'success'} {...this.props} />
        <Fail active={formState === 'fail'} {...this.props} />
      </Wrapper>
    );
  }
}
