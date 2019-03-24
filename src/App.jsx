import React, { Component } from 'react';
import styled from 'styled-components';
import InfoBlock from './InfoBlock';
import CalcSection from './CalcSection';
import CardsSection from './CardsSection';
import PricesSection from './PricesSection';
import Header from './Header';
import Navbar from './Navbar';
import OrderSection from './OrderSection';
import BookletSection from './BookletSection';
import FeedbackSection from './FeedbackSection';
import Footer from './Footer';

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
        <Navbar />
        <Header />
        <CalcSection />
        <InfoBlock />
        <CardsSection />
        <PricesSection />
        <OrderSection />
        <FeedbackSection />
        <BookletSection />
        <Footer />
      </Wrapper>
    );
  }
}
