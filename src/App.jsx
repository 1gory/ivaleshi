import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Description from './Description';
import Constructor from './Constructor';
import Info from './Info';
import Catalog from './Catalog';
import Header from './Header';
import Navbar from './Navbar';
import OrderSteps from './OrderSteps';
import Booklet from './Booklet';
import Feedback from './Feedback';
import Roulette from './Roulette';
import Footer from './Footer';
import ConstructorContainer from './containers/ConstructorContainer';
import ModalContainer from './containers/ModalContainer';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Subscribe to={[ConstructorContainer, ModalContainer]}>
          {(constructorContainer, modalContainer) => (
            <Constructor constructorContainer={constructorContainer} modalContainer={modalContainer} />
          )}
        </Subscribe>
        <Roulette />
        <Description />
        <Info />
        <Catalog />
        <OrderSteps />
        <Feedback />
        <Booklet />
        <Footer />
      </div>
    );
  }
}
