import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import ReactBreakpoints from 'react-breakpoints';
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
import Modal from './Modal';
import ConstructorContainer from './containers/ConstructorContainer';
import ModalContainer from './containers/ModalContainer';

const breakpoints = {
  mobile: 992,
  desktop: 993,
};

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
        <Subscribe to={[ConstructorContainer]}>
          {(constructorContainer) => (
            <ReactBreakpoints breakpoints={breakpoints}>
              <Roulette constructorContainer={constructorContainer} />
            </ReactBreakpoints>
          )}
        </Subscribe>
        <Description />
        <Info />
        <Subscribe to={[ConstructorContainer, ModalContainer]}>
          {(constructorContainer, modalContainer) => (
            <Catalog constructorContainer={constructorContainer} modalContainer={modalContainer} />
          )}
        </Subscribe>
        <OrderSteps />
        <Feedback />
        <Booklet />
        <Footer />
        <Subscribe to={[ConstructorContainer, ModalContainer]}>
        {(constructorContainer, modalContainer) => (
            <Modal
              constructorContainer={constructorContainer} modalContainer={modalContainer}
            />
          )}
        </Subscribe>
      </div>
    );
  }
}
