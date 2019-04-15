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
    giftChosen: false,
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
    this.setGiftChosen();
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

  setGiftChosen = () => {
    this.setState({ giftChosen: true });
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
    fetch('/api/order', {
      method: 'post',
      body: this.composeData(),
    }).then((response) => {
      if (!response.ok) {
        this.setState({ formState: 'fail' });
        throw Error(response.statusText);
      }
      this.setState({ formState: 'success' });
    });
  }

  composeData = () => {
    const data = new FormData();

    const {
      mainColor,
      secondaryColor,
      jewel,
      footSize,
      gift,
      name,
      phone,
      price,
    } = this.state;

    data.append('mainColor', mainColor);
    data.append('secondaryColor', secondaryColor);
    data.append('jewel', jewel);
    data.append('footSize', footSize);
    data.append('gift', gift);
    data.append('name', name);
    data.append('phone', phone);
    if (price) data.append('price', price);

    return data;
  }
}

export default ConstructorContainer;
