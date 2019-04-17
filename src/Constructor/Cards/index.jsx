import React from 'react';
import styled from 'styled-components';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 150px;
  text-align: center;
  padding: 15px 0px;
  margin-bottom: 20px;
  background: ${({ active }) => (active ? 'rgb(245, 244, 243)' : 'none')};
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 130px;
  }
`;

const Image = styled.img`
  height: 60px;
  object-fit: cover;
  margin-bottom: 25px;
`;

const Text = styled.div`
  font-size: 14px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  padding: 0px 30px;
`;

export default ({ list, active, handler }) => (
  <Cards>
    {list.map((card, index) => (
      <Card
        active={index === active}
        key={card.name}
        onClick={() => {
          if (index !== active) handler(index, card.name);
        }}
      >
        <Image src={card.img} />
        <Text>{card.name}</Text>
      </Card>
    ))}
  </Cards>
);
