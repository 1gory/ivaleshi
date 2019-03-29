import React, { Component } from 'react';
import Description from './Description';
import CalcSection from './CalcSection';
import Info from './Info';
import Catalog from './Catalog';
import Header from './Header';
import Navbar from './Navbar';
import OrderSteps from './OrderSteps';
import Booklet from './Booklet';
import Feedback from './Feedback';
import RouletteSection from './RouletteSection';
import Footer from './Footer';
import ModalSize from './ModalSize';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <CalcSection />
        <RouletteSection />
        <Description />
        <Info />
        <Catalog />
        <OrderSteps />
        <Feedback />
        <Booklet />
        <Footer />
        <ModalSize />
      </div>
    );
  }
}
