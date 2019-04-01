import { Container } from 'unstated';

class ModalContainer extends Container {
  state = {
    modalOpen: false,
  };

  toggleModal = () => {
    const temp = this.state.modalOpen;
    this.setState({ modalOpen: !temp });
  }
}

export default ModalContainer;
