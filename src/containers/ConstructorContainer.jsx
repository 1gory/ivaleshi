import { Container } from 'unstated';

class ConstructorContainer extends Container {
  state = {
    mainColorIndex: 15,
    mainColor: 'darkgreen',
    secondaryColor: 'black',
    secondaryColorIndex: 0,
    jewel: 0,
    jewelType: 'Бусины',
    footSize: 35,
    gift: 0,
    giftName: '',
    name: '',
    phone: '',
    price: '',
    title: '',
    image: '',
    constructorState: 'constructor',
    nameValid: true,
    phoneValid: true,
    formState: 'main',
    giftChosen: false,
  };

  changeMainColor = (newVal, color) => {
    this.setState({ mainColorIndex: newVal, mainColor: color });
  };

  changeSecondaryColor = (newVal, color) => {
    this.setState({ secondaryColorIndex: newVal, secondaryColor: color });
  };

  changeJewel = (newVal, type) => {
    this.setState({ jewel: newVal, jewelType: type });
  };

  changeFootSize = (newVal) => {
    this.setState({ footSize: newVal });
  };

  changeGift = (newVal, giftName) => {
    this.setGiftChosen();
    this.setState({ gift: newVal, giftName });
  };

  changeName = (e) => {
    const val = e.target.value;
    this.setState({ name: val });
  };

  changePhone = (newVal) => {
    this.setState({ phone: newVal });
  };

  changePrice = (newVal) => {
    this.setState({ price: newVal });
  };

  changeTitle = (newVal) => {
    this.setState({ title: newVal });
  };

  changeImage = (newVal) => {
    this.setState({ image: newVal });
  };

  setGiftChosen = () => {
    this.setState({ giftChosen: true });
  };

  getCatalogItemData = (mainColor, secondaryColor, jewel, price, title, image) => {
    this.setState({
      mainColor,
      secondaryColor,
      jewel,
      price,
      title,
      image,
    });
  };

  changeConstructorState = (newVal) => {
    this.setState({ constructorState: newVal });
  };

  changeFormState = (newVal) => {
    this.setState({ formState: newVal });
  };

  setDefaultFormState = () => {
    this.setState({ formState: 'main' });
  };

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
  };

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
  };

  composeData = () => {
    const data = new FormData();

    const {
      mainColor,
      secondaryColor,
      jewelType,
      footSize,
      giftName,
      name,
      phone,
      price,
    } = this.state;

    data.append('mainColor', mainColor);
    data.append('secondaryColor', secondaryColor);
    data.append('jewel', jewelType);
    data.append('footSize', footSize);
    data.append('gift', giftName);
    data.append('name', name);
    data.append('phone', phone);
    if (price) data.append('price', price);
  };
}

export default ConstructorContainer;
