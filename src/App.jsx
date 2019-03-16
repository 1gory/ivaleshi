import React, { Component } from 'react';
import styled from 'styled-components';
import InfoBlock from './InfoBlock';
import CardsSection from './CardsSection';
import PricesSection from './PricesSection';
import Header from './Header';
import Navbar from './Navbar';
import OrderSection from './OrderSection';

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
        <InfoBlock></InfoBlock>
        <CardsSection></CardsSection>
        <PricesSection></PricesSection>
        <OrderSection></OrderSection>
      </Wrapper>
    );
  }
}
