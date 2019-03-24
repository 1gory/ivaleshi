import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import colorSetMain from './colorSetMain';
import colorSetSecondary from './colorSetSecondary';
import cardsList from './CardsList';
import footSizeList from './FootSizeList';
import Colors from './Colors';
import Card from './Card';

const Wrapper = styled.div`
  padding-top: 110px;   
  padding-bottom: 90px;
`;

const RightSection = styled.div`
  margin-bottom: 45px;    
`;

const RightHeader = styled.div`
  margin-bottom: 35px;   
  font-size: 14px;
  font-weight: 600; 
  color: rgb(25, 22, 25);
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
`;

const RightCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RightForm = styled.div`
  background-color: rgb(245, 244, 243);
  display: flex;
  justify-content: flex-start;
`;

const RightFormHeader = styled.div`
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  color: rgb(25, 22, 25);  
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 30px;
`;

const RightFormButton = styled.div`
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  color: white; 
  text-transform: uppercase;
  padding: 35px 65px;
  background-color: rgb(255, 51, 0);
  margin-left: auto;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #ff3300;  
  }
`;

const RightSelect = styled.select`
  background: none;
  border: none;
  border-bottom: 1px solid rgba(25, 22, 25, 0.1);
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgb(25, 22, 25);
  padding: 10px;
`;

const RightLink = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: rgb(255, 51, 0);
  font-family: 'MuseoSans-Regular', sans-serif;
  margin-top: 20px;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col lg={7} xs={12}></Col>
        <Col lg={5} xs={12}>
          <RightSection>
            <RightHeader>Цвет валешей</RightHeader>
            <Colors set={colorSetMain} />
          </RightSection>
          <RightSection>
            <RightHeader>Цвет помпона</RightHeader>
            <Colors set={colorSetSecondary} />
          </RightSection>
          <RightSection>
            <RightHeader>Дизайн украшения</RightHeader>
            <RightCards>
              {cardsList.map((card, index) => (
                <Card
                  key={card.name}
                  name={card.name}
                  img={card.img}
                  active={index === 1}
                />
              ))} 
            </RightCards>
          </RightSection>
          <RightSection>
            <RightForm>
              <RightFormHeader>Размер:</RightFormHeader>
              <RightSelect>
                {footSizeList.map(item => (
                  <option key={item} value={item}>{item}</option>
                ))} 
              </RightSelect>
              <RightFormButton>Готово</RightFormButton>
            </RightForm>
            <RightLink>Узнать свой размер</RightLink>
          </RightSection>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
