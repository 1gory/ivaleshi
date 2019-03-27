import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, Subscribe, Container } from 'unstated';
import styled from 'styled-components';
import InfoBlock from './InfoBlock';
import CalcSectionComponent from './CalcSection';
import CardsSection from './CardsSection';
import PricesSection from './PricesSection';
import Header from './Header';
import Navbar from './Navbar';
import OrderSection from './OrderSection';
import BookletSection from './BookletSection';
import FeedbackSection from './FeedbackSection';
import RouletteSection from './RouletteSection';
import Footer from './Footer';

class ConstructorContainer extends Container {
  state = {
    mainColor: 0,
    secondaryColor: 0,
    jewel: 0,
    footSize: 0,
    gift: 0,
    name: '',
    phone: '',
  };

  changeMainColor = (newVal) => {
    this.setState({ mainColor: newVal });
  }

  changeSecondaryColor = (newVal) => {
    this.setState({ secondaryColor: newVal });
  }

  changeJewel = (newVal) => {
    this.setState({ jewel: newVal });
  }

  changeFootSize = (newVal) => {
    this.setState({ footSize: newVal });
  }

  changeGift = (newVal) => {
    this.setState({ gift: newVal });
  }

  changeName = (newVal) => {
    this.setState({ name: newVal });
  }

  changePhone = (newVal) => {
    this.setState({ phone: newVal });
  }
}

const Wrapper = styled.div`
  color: rgb(25, 22, 25);
`;

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider>
        <Wrapper>
          <Navbar />
          <Header />
          <Subscribe to={[ConstructorContainer]}>
            {container => (
              <CalcSectionComponent container={container}/>
            )}
          </Subscribe>
          <RouletteSection />
          <InfoBlock />
          <CardsSection />
          <PricesSection />
          <OrderSection />
          <FeedbackSection />
          <BookletSection />
          <Footer />
        </Wrapper>
      </Provider>
    );
  }
}
