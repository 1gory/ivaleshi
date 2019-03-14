import React, { Component } from 'react';
import styled from 'styled-components';

import Section1 from './Section1';
import Header from './Header';
import Navbar from './Navbar';
// import Fonts from './Fonts';


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
        {/* <Fonts /> */}
        <Navbar></Navbar>
        <Header></Header>
        <Section1></Section1>
      </Wrapper>
    );
  }
}
