import React from 'react';
import styled from 'styled-components';
import Form from '../Form';
import img from './img.png';
import SizesList from '../data/FootSizeList';
import giftList from '../giftList';
import Gift from '../Gift';

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
  font-family: 'Museo-Regular', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgb(25, 22, 25);
  padding: 5px;
  margin-left: 20px;
`;

const SizeSelectHeader = styled.div`
  font-family: 'Museo-Regular', sans-serif;
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
  font-family: 'Museo-Regular', sans-serif;
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
  font-family: 'Museo-Regular', sans-serif;
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

const FormWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const GiftWrapper = styled.div`
  width: 40%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export default ({
  visible,
  gift,
  title,
  price,
  footSizeHandler,
  nameHandler,
  validateHandler,
  nameValid,
  phoneValid,
  formState,
  formStateHandler,
  setDefaultFormState,
  phoneHandler,
  giftChosen,
  closeModal,
}) => (
  <Wrapper display={visible}>
    <Header>Оформить заказ</Header>
    <Product>
      <ProductImage src={img} />
      <div>
        <DescriptionHeader>
          {title}
          <Price>
            {price}
            {' '}
            Р.
          </Price>
        </DescriptionHeader>
        <Size>
          <SizeSelectHeader>Размер:</SizeSelectHeader>
          <Select onSelect={() => footSizeHandler}>
            {SizesList.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Size>
      </div>
    </Product>
    <Line />
    <BottomWrapper>
      <FormWrapper>
        <Form
          nameHandler={nameHandler}
          phoneHandler={phoneHandler}
          validateHandler={validateHandler}
          display
          nameValid={nameValid}
          phoneValid={phoneValid}
          formState={formState}
          formStateHandler={formStateHandler}
          setDefaultFormState={setDefaultFormState}
        />
      </FormWrapper>
      <GiftWrapper>
        <Gift
          name={giftList[gift].name}
          img={giftList[gift].img}
          giftChosen={giftChosen}
          closeModal={closeModal}
          closeModalNeeded
        />
      </GiftWrapper>
    </BottomWrapper>
  </Wrapper>
);
