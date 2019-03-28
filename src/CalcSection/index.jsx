import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import colorSetMain from './colorSetMain';
import colorSetSecondary from './colorSetSecondary';
import cardsList from './CardsList';
import footSizeList from './FootSizeList';
import Colors from './Colors';
import Card from './Card';
import headerIcon from './arrow.svg';

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
  @media screen and (max-width: 991px) {
    display: block; 
  } 
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SizeSelectWrapper = styled.div`
  background-color: rgb(245, 244, 243);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const SizeSelectLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 991px) {
    width: 100%;
    justify-content: center;
  } 
`;

const SizeSelectHeader = styled.div`
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  color: rgb(25, 22, 25);  
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 30px;
`;

const SizeSelectButton = styled.button`
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

export default class CalcSectionComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      footSize: '40',
      activeMainColor: 0,
      activeSecondaryColor: 0,
    };
  }

  handleSelectFootSizeChange = (e) => {
    const value = e.target.value;
    const { container: {
      changeFootSize,
    } } = this.props;
    changeFootSize(value);
  }

  handleMainColorChange = (index) => {
    const { container: {
      changeMainColor,
    } } = this.props;
    changeMainColor(index);
  }

  render() {

    console.log('Компонент перерендерился');

    const { container: {
      state: {
        mainColor,
        secondaryColor,
        jewel,
        footSize,
        gift,
        name,
        phone,
      },
      changeMainColor,
      changeSecondaryColor,
      changeJewel,
      changeFootSize,
      changeGift,
      changeName,
      changePhone,
    } } = this.props;

    console.log(`Размер ноги в стейте, после использования метода: ${footSize}`);

    return (
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
                <Colors set={colorSetMain} main />
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
                <SizeSelectWrapper>
                  <SizeSelectLeft>
                    <SizeSelectHeader>Размер:</SizeSelectHeader>
                    <Select onChange={this.handleSelectFootSizeChange}>
                      {footSizeList.map(item => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </Select>
                  </SizeSelectLeft>
                  <SizeSelectButton>Готово</SizeSelectButton>
                </SizeSelectWrapper>
                <SizeLink>Узнать свой размер</SizeLink>
              </CalcSection>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
};
