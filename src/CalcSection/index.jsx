import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import colorSetMain from './colorSetMain';
import colorSetSecondary from './colorSetSecondary';
import cardsList from './CardsList';
import Colors from './Colors';
import Card from './Card';

const Wrapper = styled.div`
  padding-top: 110px;   
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
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
