import React, { Component } from 'react';
import { Provider, Subscribe, Container } from 'unstated';
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

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider>
        <div>
          <Navbar />
          <Header />
          <Subscribe to={[ConstructorContainer]}>
            {container => (
              <Constructor container={container}/>
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
      </Provider>
    );
  }
}
