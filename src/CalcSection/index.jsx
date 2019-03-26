import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import colorSetMain from './colorSetMain';
import colorSetSecondary from './colorSetSecondary';
import cardsList from './CardsList';
import footSizeList from './FootSizeList';
import Colors from './Colors';
import Card from './Card';
import headerIcon from './arrow.png';

const Wrapper = styled.section`
  padding-top: 110px;   
  padding-bottom: 90px;
  @media screen and (max-width: 991px) {
    padding-top: 30px;   
    padding-bottom: 30px;
  } 
`;

const CalcSection = styled.div`
  margin-bottom: 45px;    
`;

const Header = styled.div`
  margin-bottom: 35px;   
  font-size: 14px;
  font-weight: 600; 
  color: rgb(25, 22, 25);
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderIcon = styled.img`
  display: none;
  width: 10px;
  height: 6px;
  @media screen and (max-width: 991px) {
    display: block; 
  } 
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Form = styled.div`
  background-color: rgb(245, 244, 243);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const FormLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 991px) {
    width: 100%;
    justify-content: center;
  } 
`;

const FormHeader = styled.div`
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  color: rgb(25, 22, 25);  
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 30px;
`;

const FormButton = styled.button`
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  color: white; 
  text-transform: uppercase;
  padding: 35px 65px;
  background-color: rgb(255, 51, 0);
  margin-left: auto;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  &:hover {
    background-color: white;
    color: #ff3300;  
  }
  @media screen and (max-width: 991px) {
    width: 100%;
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
  padding: 10px;
  height: 40px;
`;

const SizeLink = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: rgb(255, 51, 0);
  font-family: 'MuseoSans-Regular', sans-serif;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    text-align: center;
  } 
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col lg={7} xs={12}></Col>
        <Col lg={5} xs={12}>
          <CalcSection>
            <Header>
              Цвет валешей
              <HeaderIcon src={headerIcon} />
            </Header>
            <Colors set={colorSetMain} />
          </CalcSection>
          <CalcSection>
            <Header>
              Цвет помпона
              <HeaderIcon src={headerIcon} />
            </Header>
            <Colors set={colorSetSecondary} />
          </CalcSection>
          <CalcSection>
            <Header>
              Дизайн украшения
              <HeaderIcon src={headerIcon} />
            </Header>
            <Cards>
              {cardsList.map((card, index) => (
                <Card
                  key={card.name}
                  name={card.name}
                  img={card.img}
                  active={index === 1}
                />
              ))}
            </Cards>
          </CalcSection>
          <CalcSection>
            <Form>
              <FormLeft>
                <FormHeader>Размер:</FormHeader>
                <Select>
                  {footSizeList.map(item => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </Select>
              </FormLeft>
              <FormButton>Готово</FormButton>
            </Form>
            <SizeLink>Узнать свой размер</SizeLink>
          </CalcSection>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
