import React from 'react';
import styled from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import Card from './Card';
import CardList from './CardList';

const Wrapper = styled.section`
  padding-top: 160px;
  @media screen and (max-width: 991px) {
    padding-top: 50px;
  }
`;

export default ({ modalContainer: { openModal } }) => (
  <Wrapper>
    <Grid>
      <Row>
        {CardList.map(card => (
          <Col md={6} sm={12} key={card.name}>
            <Card name={card.name} icon={card.icon} text={card.text} openModal={openModal} />
          </Col>
        ))}
      </Row>
    </Grid>
  </Wrapper>
);
