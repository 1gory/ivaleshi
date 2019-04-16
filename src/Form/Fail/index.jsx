import React, { Component } from 'react';
import styled from 'styled-components';
import icon from './thumbs-down.svg';

const Wrapper = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')};
  background: #f9f8f8;
  padding-top: 50px;
  padding-bottom: 25px;
`;

const Text = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #1e2229;
  text-align: center;
  @media screen and (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  margin: auto;
`;

const Button = styled.div`
  font-family: 'Museo-Regular', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #ff3300;
  text-transform: uppercase;
  cursor: pointer;
  display: block;
  text-align: center;
`;

export default class Fail extends Component {
  handlePhoneChange = (e) => {
    const { phoneHandler } = this.props;
    if (!e.target.value) {
      phoneHandler('');
      return;
    }
    const number = e.target.value;
    phoneHandler(number);
  };

  render() {
    const { active, setDefaultFormState } = this.props;

    return (
      <Wrapper display={active}>
        <Icon src={icon} />
        <Text>
          Ошибка! Заказ не отправлен.
          <br />
          Оформите заказ по телефону
          <br />
          +7 (999) 999-56-55
        </Text>
        <Button onClick={() => setDefaultFormState()}>Назад</Button>
      </Wrapper>
    );
  }
}
