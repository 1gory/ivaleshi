import React from 'react';
import { Subscribe } from 'unstated';
import { YMInitializer } from 'react-yandex-metrika';
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
import ModalVideo from './ModalVideo';
import ConstructorContainer from './containers/ConstructorContainer';
import ModalContainer from './containers/ModalContainer';
import BookletContainer from './containers/BookletContainer';
import BottomPhone from './BottomPhone';
import QualitiesBlock from './QualitiesBlock';
import MobileMenu from './MobileMenu';

const breakpoints = {
  mobile: 992,
  desktop: 993,
};

export default () => (
  <div>
    <YMInitializer accounts={[53009329]} options={{ webvisor: true }} />
    <Subscribe to={[ModalContainer]}>
      {modalContainer => <Navbar modalContainer={modalContainer} />}
    </Subscribe>
    <Subscribe to={[ModalContainer]}>
      {modalContainer => <Header modalContainer={modalContainer} />}
    </Subscribe>
    <Subscribe to={[ConstructorContainer, ModalContainer]}>
      {(constructorContainer, modalContainer) => (
        <Constructor
          constructorContainer={constructorContainer}
          modalContainer={modalContainer}
        />
      )}
    </Subscribe>
    <Subscribe to={[ConstructorContainer]}>
      {constructorContainer => (
        <ReactBreakpoints breakpoints={breakpoints}>
          <Roulette constructorContainer={constructorContainer} />
        </ReactBreakpoints>
      )}
    </Subscribe>
    <Description />
    <Subscribe to={[ModalContainer]}>
      {modalContainer => (
        <Info modalContainer={modalContainer} />
      )}
    </Subscribe>
    <QualitiesBlock />
    <Subscribe to={[ConstructorContainer, ModalContainer]}>
      {(constructorContainer, modalContainer) => (
        <Catalog
          constructorContainer={constructorContainer}
          modalContainer={modalContainer}
        />
      )}
    </Subscribe>
    <OrderSteps />
    <Feedback />
    <Subscribe to={[BookletContainer]}>
      {bookletContainer => <Booklet container={bookletContainer} />}
    </Subscribe>
    <Footer />
    <Subscribe to={[ConstructorContainer, ModalContainer]}>
      {(constructorContainer, modalContainer) => (
        <Modal
          constructorContainer={constructorContainer}
          modalContainer={modalContainer}
        />
      )}
    </Subscribe>
    <Subscribe to={[ModalContainer]}>
      {modalContainer => <ModalVideo modalContainer={modalContainer} />}
    </Subscribe>
    <Subscribe to={[ModalContainer]}>
      {modalContainer => <MobileMenu modalContainer={modalContainer} />}
    </Subscribe>
    <BottomPhone />
  </div>
);
