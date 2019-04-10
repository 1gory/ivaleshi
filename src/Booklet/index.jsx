import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Link, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import img from './booklet.png';
import success from './success.svg';
import error from './error.svg';

const Wrapper = styled.section`
  padding-top: 110px;
  background-color: rgb(255, 51, 0);
  overflow: hidden;
  @media screen and (max-width: 991px) {
    padding-top: 50px;
  } 
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 110px;
  @media screen and (max-width: 991px) {
    text-align: center;
    padding-bottom: 0px;
  } 
`;

const Header = styled.div`
  margin-bottom: 40px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 36px;
  color: white;   
  @media screen and (max-width: 991px) {
    font-size: 30px;
  } 
`;

const Text = styled.div`
  margin-bottom: 45px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.7;
  color: white;  
`;

const EmailWrapper = styled.div`
  justify-content: flex-start;
  display: ${({ active }) => (active ? 'flex' : 'none')};
  @media screen and (max-width: 991px) {
    justify-content: center; 
  } 
`;

const FormStateWrapper = styled.div`
  background: #ff481a;
  padding: 30px;
  color: white;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 16px;
  width: 380px;
  position: relative;
  display: ${({ active }) => (active ? 'block' : 'none')}; 
`;

const FormStateHeader = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormStateIconWrapper = styled.div`
  height: 100%;
  right: 30px;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
`;

const FormStateIcon = styled.img`
  height: 35px;
  opacity: 0.25;
`;

const EmailInput = styled.input`
  font-family: 'MuseoSans-Regular', sans-serif;
  color: ${({ valid }) => (valid ? 'rgba(25, 22, 25, 0.5)' : 'rgb(255,51,0)')};  
  padding: 30px;
  width: 240px;
  font-weight: bold;
  border: none;
  @media screen and (max-width: 991px) {
    width: auto;
  } 
  @media screen and (max-width: 600px) {
    padding: 20px;
    min-width: 0;
  } 
`;

const EmailButton = styled.button`
  background: white;
  border: none;
  padding: 30px;
  color: #ff6633;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: rgb(255, 51, 0);
    color: white;  
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
  } 
`;

const SideImg = styled.img`
  width: 400px;
  height: 420px;
  object-fit: cover;
  position: absolute;
  bottom: 0px;
  left: -40px;
  box-shadow: 0px 30px 30px 0 rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1300px) {
    left: 0px;  
  } 
  @media screen and (max-width: 1199px) {
    width: 350px;  
  } 
  @media screen and (max-width: 991px) {
    position: static;
    width: 100%;
    height: 320px;
    display: block;
    margin: auto;
    margin-top: 50px;
  } 
`;

const DesktopBr = styled.br`
  @media screen and (max-width: 991px) {
    display: none;
  } 
`;

export default class Booklet extends Component {
  handleEmailChange = (e) => {
    const {
      container: {
        changeEmail,
      },
    } = this.props;

    if (!e.target.value) {
      changeEmail('');
      return;
    }
    changeEmail(e.target.value);
  };

  render() {
    const {
      container: {
        state: {
          formState,
          emailValid,
        },
        validateEmail,
      },
    } = this.props;

    return (
      <Wrapper>
        <Element name="booklet" />
        <Grid>
          <ImageWrapper>
            <Row>
              <Col lgOffset={5} lg={7} xs={12}>
                <Header>Бесплатный буклет по уходу <DesktopBr />за валешами</Header>
                <Text>Введи свой Email чтобы получить бесплатный <DesktopBr />буклет на почту. Никакого спама.</Text>
                <EmailWrapper active={formState === 'main'}>
                  <EmailInput placeholder="Email" onChange={this.handleEmailChange} valid={emailValid} />
                  <EmailButton onClick={() => validateEmail()}>Отправить</EmailButton>
                </EmailWrapper>
                <FormStateWrapper active={formState === 'success'}>
                  <FormStateHeader>Готово!</FormStateHeader>
                  Буклет отправлен на ваш Email
                  <FormStateIconWrapper>
                    <FormStateIcon src={success} />
                  </FormStateIconWrapper>
                </FormStateWrapper>
                <FormStateWrapper active={formState === 'fail'}>
                  <FormStateHeader>Ошибка!</FormStateHeader>
                  Напишите на адрес mail@ivaleshi.ru,
                  <br />
                  чтобы получить буклет
                  <FormStateIconWrapper>
                    <FormStateIcon src={error} />
                  </FormStateIconWrapper>
                </FormStateWrapper>
              </Col>
            </Row>
            <SideImg src={img} />
          </ImageWrapper>
        </Grid>
      </Wrapper>
    );
  }
}
