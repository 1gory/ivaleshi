import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card';
import CardList from './CardList';

const Wrapper = styled.div`
  padding-top: 160px;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        {CardList.map(card => (
          <Col xs={6} key={card.name}>
            <Card
              name={card.name}
              icon={card.icon}
              text={card.text}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  </Wrapper>
);
