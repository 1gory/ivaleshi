import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import cardsList from './CardsList';
import Card from './Card';
import icon from './roll-bottom.svg';

const Wrapper = styled.div`   
  padding-bottom: 100px;
`;

const BorderWrapper = styled.div`   
  border: solid 6px rgba(255, 51, 0, 0.25);
  padding-bottom: 40px;
`;

const Header = styled.h3`   
  font-size: 24px;
  font-family: 'Museo-Regular', sans-serif;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 60px;
  font-weight: normal;
`;

const Button = styled.button`   
  border: none;
  background: none;
  font-size: 18px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(255, 51, 0);
  display: block;
  margin: auto;
  margin-top: 70px;
`;

const ButtonIcon = styled.img`
  display: block;
  width: 30px;
  margin: auto;
  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'none')}; 
  opacity: 0.25;
`;

const ButtonText = styled.div`
  margin: 15px auto;
`;

export default () => (
  <Wrapper>
    <Grid>
      <BorderWrapper>
        <Header>Узнай какой подарок ты получишь к заказу</Header>
        <Row>
          {cardsList.map(card => (
            <Col md={3} xs={12} key={card.name}>
              <Card
                name={card.name}
                img={card.img}
              />
            </Col>
          ))}
        </Row>
        <Button>
          <ButtonIcon src={icon} rotate />
          <ButtonText>Крутануть</ButtonText>
          <ButtonIcon src={icon} />
        </Button>
      </BorderWrapper>
    </Grid>
  </Wrapper>
);
