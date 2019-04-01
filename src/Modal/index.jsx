import React, { Component } from 'react';
import styled from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import close from './close.svg';
import ModalSize from '../ModalSize';
import ModalOrder from '../ModalOrder';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${({ display }) => (display ? 'flex' : 'none')}; 
  align-items: center;
  z-index: 100;
  overflow: scroll;
  padding: 20px;
  @media screen and (max-width: 991px) {
    display: ${({ display }) => (display ? 'block' : 'none')}; 
  }
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
`;

const ContentWrapper = styled.div`
  background-color: white;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 120;
  @media screen and (max-width: 991px) {
    padding: 15px;  
  }
`;

const CloseButton = styled.img`
  top: 30px;
  right: 30px;
  width: 30px;
  position: absolute;
  opacity: 0.25;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    top: 15px;
    right: 15px;
    width: 15px;
  }
`;

export default class Modal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      container: {
        state: {
          modalOpen,
          type,
          size,
        },
        closeModal,
      },
    } = this.props;

    return (
      <Wrapper display={modalOpen}>
        <Grid>
          <Row>
            <Col mdOffset={(12 - size) / 2} md={size} xs={12}>
              <ContentWrapper>
                <ModalSize visible={type === 'size'} />
                <ModalOrder visible={type === 'order'} />
                <CloseButton src={close} onClick={closeModal} />
              </ContentWrapper>
            </Col>
          </Row>
        </Grid>
        <Background onClick={closeModal} />
      </Wrapper>
    )
  }
};