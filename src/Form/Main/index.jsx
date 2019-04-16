import React, { Component } from 'react';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

const Wrapper = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')}; 
`;

const FormHeader = styled.div`
  margin-bottom: 40px;
  font-size: 16px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: bold;
  line-height: 1.75;
  text-align: center;
  color: #1e2229;  
  @media screen and (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FormItem = styled.div`
  margin-bottom: 20px;
  border: ${({ valid }) => (valid ? '1px solid rgba(30, 35, 42, 0.15)' : '1px solid rgb(255,51,0)')}; 
  position: relative;
  overflow: hidden;
`;

const Label = styled.label`
  position: absolute;
  top: 15px;
  display: block;
  padding-left: 20px;
  font-size: 14px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: bold;
  color: #1e2229;
  z-index: 3;
`;

const Input = styled.input`
  color: rgb(30, 34, 41);
  border: none;
  background: white;
  width: 100%;
  box-sizing: border-box;
  height: 70px;
  padding-top: 20px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 16px;
  padding-left: 20px;
  padding-right: 20px;
  resize: none;
  border-radius: 0;
  &::placeholder {
    color: rgba(30, 34, 41, 0.3);
  }
  @media screen and (max-width: 991px) {
    height: 50px;
  }
`;

const Button = styled.button`
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  color: white; 
  text-transform: uppercase;
  padding: 27px 0px;
  background-color: rgb(255, 51, 0);
  cursor: pointer;
  transition: 0.2s;
  border: none;
  width: 100%;
  &:hover {
    background-color: white;
    color: #ff3300;  
  }
`;

export default class Main extends Component {
  handlePhoneChange = (e) => {
    const {
      phoneHandler,
    } = this.props;
    if (!e.target.value) {
      phoneHandler('');
      return;
    }
    const number = e.target.value;
    phoneHandler(number);
  };

  render() {
    const {
      active,
      nameHandler,
      validateHandler,
      nameValid,
      phoneValid,
    } = this.props;

    return (
      <Wrapper display={active}>
        <FormHeader>
          Оставьте свой номер и мы свяжемся с вами для
          <br />
          оформления заказа
        </FormHeader>
        <FormItem valid={nameValid}>
          <Label>Имя</Label>
          <Input onInput={nameHandler} />
        </FormItem>
        <FormItem valid={phoneValid}>
          <Label>Телефон</Label>
          <MaskedInput
            mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            guide
            onChange={this.handlePhoneChange}
            keepCharPositions
            value={this.inputPhone}
            render={(ref, props) => (
              <Input ref={ref} {...props} />
            )}
          />
        </FormItem>
        <Button onClick={() => validateHandler()}>Отправить заказ</Button>
      </Wrapper>
    );
  }
}
