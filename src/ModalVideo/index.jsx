import React, { Component } from 'react';
import styled from 'styled-components';
import close from './close.svg';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${({ display }) => (display ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 991px) {
    display: ${({ display }) => (display ? 'flex' : 'none')};
  }
`;

const IframeWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 30vw;
  & iframe {
    width: 100%;
    height: 100%;
    background: black;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    height: 250px;
  }
`;
const CloseButton = styled.img`
  top: -25px;
  right: 0px;
  width: 15px;
  position: absolute;
  cursor: pointer;
`;

export default class ModalVideo extends Component {
  render() {
    const {
      modalContainer: {
        state: { modalVideo },
        closeModalVideo,
      },
    } = this.props;

    return (
      <Wrapper display={modalVideo}>
        <IframeWrapper>
          <iframe
            src={modalVideo ? 'https://www.youtube.com/embed/E7wJTI-1dvQ' : ''}
            frameBorder="0"
            allowFullScreen
            title="video"
          />
          <CloseButton src={close} onClick={closeModalVideo} />
        </IframeWrapper>
      </Wrapper>
    );
  }
}
