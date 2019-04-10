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
    nameValid: true,
    phoneValid: true,
    formState: 'main',
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

  changeName = (e) => {
    const val = e.target.value;
    this.setState({ name: val });
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

  getCatalogItemData = (mainColor, secondaryColor, jewel, price, title) => {
    this.setState(
      {
        mainColor,
        secondaryColor,
        jewel,
        price,
        title,
      },
    );
  }

  changeConstructorState = (newVal) => {
    this.setState({ constructorState: newVal });
  }

  changeFormState = (newVal) => {
    this.setState({ formState: newVal });
  }

  setDefaultFormState = () => {
    this.setState({ formState: 'main' });
  }

  validateConstructor = () => {
    this.setState({ nameValid: true });
    this.setState({ phoneValid: true });
    let validationStatus = true;

    if (this.state.name.length <= 0) {
      this.setState({ nameValid: false });
      validationStatus = false;
    }
    if (this.state.phone.length <= 0) {
      this.setState({ phoneValid: false });
      validationStatus = false;
    } else {
      const regExpr = /\d+/g;
      const editedNumber = this.state.phone.match(regExpr).join('');
      if (editedNumber.length !== 11) {
        this.setState({ phoneValid: false });
        validationStatus = false;
      }
    }
    if (validationStatus) {
      this.sendOrder();
    }
  }

  sendOrder = () => {
    // this.setState({ formState: 'success' });
    this.setState({ formState: 'fail' });
  }
}

export default ConstructorContainer;
