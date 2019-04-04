import { Container } from 'unstated';

class ConstructorContainer extends Container {
  state = {
    mainColor: 0,
    secondaryColor: 0,
    jewel: 0,
    footSize: 0,
    gift: 0,
    name: '',
    phone: '',
    price: '',
    title: '',
    constructorState: 'constructor',
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

  changePrice = (newVal) => {
    this.setState({ price: newVal });
  }

  changeTitle = (newVal) => {
    this.setState({ title: newVal });
  }

  changeConstructorState = (newVal) => {
    this.setState({ constructorState: newVal });
  }
}

export default ConstructorContainer;
