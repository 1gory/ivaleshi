import { Container } from 'unstated';

class ModalContainer extends Container {
  state = {
    modalOpen: false,
    type: 'order',
    size: 8,
    modalVideo: false,
    mobileMenu: false,
  };

  openModal = (newTypeVal, newSizeVal) => {
    document.body.classList.add('modal-open');
    this.setState({ type: newTypeVal });
    this.setState({ size: newSizeVal });
    this.setState({ modalOpen: true });
  };

  openModalVideo = () => {
    document.body.classList.add('modal-open');
    this.setState({ modalVideo: true });
  };

  closeModalVideo = () => {
    document.body.classList.remove('modal-open');
    this.setState({ modalVideo: false });
  };

  closeModal = () => {
    document.body.classList.remove('modal-open');
    this.setState({ modalOpen: false });
  };

  openMobileMenu = () => {
    document.body.classList.add('modal-open');
    this.setState({ mobileMenu: true });
  };

  closeMobileMenu = () => {
    document.body.classList.remove('modal-open');
    this.setState({ mobileMenu: false });
  };
}
export default ModalContainer;
