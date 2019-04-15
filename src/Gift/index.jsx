import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
  width: 100%;
  border: solid 6px #ff3300;
  text-align: center;
  @media screen and (max-width: 991px) {
    border: none;
    outline: solid 6px #ff3300;
  }
`;

const Section = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')}; 
`;

const Header = styled.div`
  color: rgb(30, 34, 41);
  font-family: 'Museo-Regular', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 40px 0px;
`;

const Text = styled.div`
  color: rgb(30, 34, 41);
  font-family: 'Museo-Regular', sans-serif;
  font-size: 16px;
  padding: 40px 0px;
`;

const Img = styled.img`
  max-width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Button = styled.div`
  font-size: 18px;
  color: #ff3300;
  font-family: 'MuseoSans-Regular', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  padding: 80px 0px;
  transition: 0.3s;
  &:hover{
    opacity: 0.5;
    cursor: pointer;
  }
`;

export default ({ 
  name, img, giftChosen, closeModal, closeModalNeeded
}) => (
  <Wrapper>
    <Section display={giftChosen}>
      <Header>{name}</Header>
      <Img src={img} />
      <Text>Подарок будет добавлен<br />к вашему заказу</Text>
    </Section>
    <Section display={!giftChosen}>
      <Text>
        Вы можете получить один из четырех<br />
        гарантированных подарков к своему заказу.<br />
        Крутаните рулетку и узнайте что вам<br />
        выпадет!
      </Text>
      <Button>
        <Link
          to={'roulette'}
          spy={false}
          smooth
          hashSpy={false}
          offset={-100}
          duration={500}
          delay={50}
          isDynamic
          ignoreCancelEvents={false}
          onClick={() => (closeModalNeeded ? closeModal() : 0)}
        >
          Крутануть
        </Link>
      </Button>
    </Section>
  </Wrapper>
);
