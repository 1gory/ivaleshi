import { Container } from 'unstated';
import ym from 'react-yandex-metrika';

export default class BookletContainer extends Container {
  state = {
    formState: 'main',
    email: '',
    emailValid: true,
  };

  changeFormState = (newVal) => {
    this.setState({ formState: newVal });
  };

  setDefaultFormState = () => {
    this.setState({ formState: 'main' });
  };

  changeEmail = (newVal) => {
    this.setState({ email: newVal });
    this.setState({ emailValid: true });
  };

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
  };

  sendOrder = () => {
    fetch('/api/send.php', {
      method: 'post',
      body: this.composeData(),
    }).then((response) => {
      if (!response.ok) {
        this.setState({ formState: 'fail' });
        throw Error(response.statusText);
      }
      ym('reachGoal', 'booklet');
      this.setState({ formState: 'success' });
    });
  };

  composeData = () => {
    const data = new FormData();
    const { email } = this.state;
    data.append('email', email);

    return data;
  };
}
