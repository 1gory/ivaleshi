import React, { Component } from 'react';
import styled from 'styled-components';
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
      </Wrapper>
    );
  }
}
