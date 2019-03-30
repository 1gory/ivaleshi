import React from 'react';
import styled from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import { Header, CloseButton, MobileBr, Content, Background, Wrapper } from '../modal';
import img from './img.png';
import close from './close.svg';
import SizesList from './SizesList';

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
  @media screen and (max-width: 991px) {
    text-align: center;
  } 
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
`;

const ProductImage = styled.img`
  height: 190px;
  width: 190px;
  object-fit: cover;
  margin-right: 40px;
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
`;

const Price = styled.div`
  background: #ff3300;
  color: white;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 16px;
  padding: 10px 15px;
  margin-left: 30px;
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
`;

const Form = styled.div`
  width: 50%;
`;

const FormHeader = styled.div`
  font-size: 16px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: bold;
  color: #1e2229;  
  text-align: center;
  margin-bottom: 40px;
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
`;

const Button = styled.button`
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  color: white; 
  text-transform: uppercase;
  padding: 35px 65px;
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


export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col mdOffset={1} md={10} xs={12}>
          <Content>
            <Header>Оформить заказ</Header>
            <Product>
              <ProductImage src={img} />
              <div>
                <DescriptionHeader>
                  Валеши с помпоном
                  <Price>
                    990 Р.
                  </Price>
                </DescriptionHeader>
                <Size>
                  <SizeSelectHeader>Размер:</SizeSelectHeader>
                  <Select>
                    {SizesList.map(item => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </Select>
                  <SizeLink>Узнать свой размер</SizeLink>
                </Size>
              </div>
            </Product>
            <Line />
            <Form>
              <FormHeader>
                Оставьте свой номер и мы свяжемся с вами для оформления заказа
              </FormHeader>
              <FormItem>
                <Label>Имя</Label>
                <Input />
              </FormItem>
              <FormItem>
                <Label>Телефон</Label>
                <Input />
              </FormItem>
              <Button>Отправить заказ</Button>
            </Form>
            <Gift>
              <GiftHeader>Аромат для обуви</GiftHeader>
              <GiftImg src={img} />
              <GiftText>Подарок будет добавлен<br />к вашему заказу</GiftText>        
            </Gift>
            <CloseButton src={close} />
          </Content>
        </Col>
      </Row>
    </Grid>
    <Background />
  </Wrapper>
);
