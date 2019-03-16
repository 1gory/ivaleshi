import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card';
import CardList from './CardList';

const Wrapper = styled.div`
  background-color: rgba(25, 22, 22, 0.05);
  position: relative;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        {CardList.map(card => (
          <Col xs={3} key={card.name}>
            <Card
              name={card.name}
              icon={card.icon}
              text={card.text}
              button={card.button}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  </Wrapper>
);
