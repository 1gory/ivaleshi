import React, { Component } from 'react';
import styled from 'styled-components';

import Section1 from './Section1';
import Section2 from './Section2';
import Header from './Header';
import Navbar from './Navbar';

const Wrapper = styled.div`
  color: white;
`;

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
        <Header></Header>
        <Section1></Section1>
        <Section2></Section2>
      </Wrapper>
    );
  }
}
