import React, { Component } from 'react';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import img from './img.png';
import SizesList from './SizesList';
import giftList from '../giftList';

const Wrapper = styled.div`
  width: 100%;
  display: ${({ display }) => (display ? 'flex' : 'none')}; 
  flex-wrap: wrap;
`;

const Header = styled.h2`
  font-size: 30px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  text-transform: uppercase;
  margin-bottom: 70px;
  width: 100%;
  @media screen and (max-width: 991px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const Select = styled.select`
  background: none;
  border: none;
  border-bottom: 1px solid rgba(25, 22, 25, 0.1);
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgb(25, 22, 25);
  padding: 5px;
  margin-left: 20px;
`;

const SizeLink = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: rgb(255, 51, 0);
  font-family: 'MuseoSans-Regular', sans-serif;
  margin-top: 20px;
  width: 100%;
`;

const SizeSelectHeader = styled.div`
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  color: rgb(25, 22, 25);  
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

const Product = styled.div`
  display: flex;
  flex-wrap: wrap;  
  @media screen and (max-width: 991px) {
    flex-wrap: nowrap;
  }
`;

const ProductImage = styled.img`
  height: 190px;
  width: 190px;
  object-fit: cover;
  margin-right: 40px;
  @media screen and (max-width: 991px) {
    height: 90px;
    width: 90px;
    margin-right: 20px;
  }
`;

const DescriptionHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: rgb(25, 22, 25);
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: bold;
  margin-bottom: 40px;
  width: 100%;
  @media screen and (max-width: 991px) {
    width: auto;
    flex-wrap: wrap;
    font-size: 18px;
  }
`;

const Price = styled.div`
  background: #ff3300;
  color: white;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 16px;
  padding: 10px 15px;
  margin-left: 30px;
  @media screen and (max-width: 991px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`;

const Size = styled.div`
  display: flex;
  flex-wrap: wrap;  
`;

const Line = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-top: 40px;
  margin-bottom: 60px;
  @media screen and (max-width: 991px) {
    margin-bottom: 30px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

const Form = styled.div`
  width: 50%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const FormHeader = styled.div`
  font-size: 16px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: bold;
  color: #1e2229;  
  text-align: center;
  margin-bottom: 40px;
  @media screen and (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FormItem = styled.div`
  border: 1px solid rgba(30, 35, 42, 0.15);
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: bold;
  color: #1e2229;
  position: absolute;
  padding-left: 20px;
  top: 15px;
  z-index: 3;
`;

const Input = styled.input`
  color: rgb(30, 34, 41);
  border: none;
  background: white;
  width: 100%;
  height: 70px;
  padding-top: 15px;
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
  padding: 35px 0px;
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

const Gift = styled.div`
  width: 40%;
  border: solid 6px rgba(255,51,0,0.25);
  text-align: center;
  @media screen and (max-width: 991px) {
    width: 100%;
    border: none;
    outline: solid 6px rgba(255,51,0,0.25);
  }
`;

const GiftHeader = styled.div`
  color: rgb(30, 34, 41);
  font-family: 'Museo-Regular', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 40px 0px;
`;

const GiftText = styled.div`
  color: rgb(30, 34, 41);
  font-family: 'Museo-Regular', sans-serif;
  font-size: 16px;
  margin: 40px 0px;
`;

const GiftImg = styled.img`
  max-width: 200px;
  height: 200px;
  object-fit: cover;
`;

export default class ModalOrder extends Component {
  constructor(props) {
    super(props);
  }

  handlePhoneChange = (e) => {
    if (!e.target.value) {
      this.props.phoneHandler('');
      return;
    }

    const number = e.target.value;
    // const regExpr = /\d+/g;
    // const editedNumber = number.match(regExpr).join('');

    // if (editedNumber.length === 11) {

    // } else {
      
    // }
    this.props.phoneHandler(number);
  };

  render() {
    const {
      visible,
      gift,
      title,
      price,
      footSizeHandler,
      nameHandler,
    } = this.props;

    return (
      <Wrapper display={visible}>
        <Header>Оформить заказ</Header>
        <Product>
          <ProductImage src={img} />
          <div>
            <DescriptionHeader>
              {title}
              <Price>
                {price} Р.
              </Price>
            </DescriptionHeader>
            <Size>
              <SizeSelectHeader>Размер:</SizeSelectHeader>
              <Select onSelect={() => footSizeHandler}>
                {SizesList.map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </Select>
              <SizeLink>Узнать свой размер</SizeLink>
            </Size>
          </div>
        </Product>
        <Line />
        <BottomWrapper>
          <Form>
            <FormHeader>
              Оставьте свой номер и мы свяжемся с вами для оформления заказа
            </FormHeader>
            <FormItem>
              <Label>Имя</Label>
              <Input onInput={nameHandler} />
            </FormItem>
            <FormItem>
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
            <Button>Отправить заказ</Button>
          </Form>
          <Gift>
            <GiftHeader>{giftList[gift].name}</GiftHeader>
            <GiftImg src={giftList[gift].img} />
            <GiftText>Подарок будет добавлен<br />к вашему заказу</GiftText>        
          </Gift>
        </BottomWrapper>
      </Wrapper>
    )
  }
};

