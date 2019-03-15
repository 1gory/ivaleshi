import React, { Component } from 'react';
import styled from 'styled-components';
import InfoBlock1 from './InfoBlock1';
import SectionCards from './SectionCards';
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
        <InfoBlock1></InfoBlock1>
        <SectionCards></SectionCards>
      </Wrapper>
    );
  }
}
