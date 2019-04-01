import { Container } from 'unstated';

class ModalContainer extends Container {
  state = {
    modalOpen: false,
    type: 'order',
    size: 8,
  };

  openModal = (newTypeVal, newSizeVal) => {
    document.body.classList.add('modal-open');
    this.setState({ type: newTypeVal });
    this.setState({ size: newSizeVal });
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    document.body.classList.remove('modal-open');
    this.setState({ modalOpen: false });
  }
}

export default ModalContainer;
