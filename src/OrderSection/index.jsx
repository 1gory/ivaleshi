import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card';
import CardList from './CardList';

const Wrapper = styled.section`
  background-color: rgba(25, 22, 22, 0.05);
  position: relative;
`;

const RedLineWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 170px;
  left: 0;
  @media screen and (max-width: 991px) {
    top: 70px;
  }
`;
const RedLine = styled.div`
  border: 1px solid rgba(255, 0, 0, 0.05);
  width: 67%;
  margin: auto;
  @media screen and (max-width: 767px) {
    display: none;
  } 
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        {CardList.map(card => (
          <Col md={3} sm={12} key={card.name}>
            <Card
              name={card.name}
              icon={card.icon}
              text={card.text}
              buttonVisible={card.buttonVisible}
            />
          </Col>
        ))}
      </Row>
    </Grid>
    <RedLineWrapper>
      <RedLine />
    </RedLineWrapper>
  </Wrapper>
);
