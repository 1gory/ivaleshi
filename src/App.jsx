import React, { Component } from 'react';
import styled from 'styled-components';

import Section_1 from './Section_1';
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
        <Section_1></Section_1>
      </Wrapper>

    );
  }
}
