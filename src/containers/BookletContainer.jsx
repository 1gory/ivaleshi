import { Container } from 'unstated';

class BookletContainer extends Container {
  state = {
    formState: 'main',
    email: '',
    emailValid: true,
  };

  changeFormState = (newVal) => {
    this.setState({ formState: newVal });
  }

  setDefaultFormState = () => {
    this.setState({ formState: 'main' });
  }

  changeEmail = (newVal) => {
    this.setState({ email: newVal });
    this.setState({ emailValid: true });
  }

  validateEmail = () => {
    this.setState({ emailValid: true });
    let validationStatus = true;
    const regExp = /\S+@\S+\.\S+/;

    if (!regExp.test(this.state.email)) {
      this.setState({ emailValid: false });
      validationStatus = false;
    }

    if (validationStatus) {
      this.sendOrder();
    }
  }

  sendOrder = () => {
    const {
      email,
    } = this.state;
    fetch('/api/order', {
      method: 'post',
      body: JSON.stringify({
        email,
      }),
    }).then((response) => {
      if (!response.ok) {
        this.setState({ formState: 'fail' });
        throw Error(response.statusText);
      }
      this.setState({ formState: 'success' });
    });
  }
}

export default BookletContainer;
