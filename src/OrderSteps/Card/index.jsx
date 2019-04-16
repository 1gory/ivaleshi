import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
  padding: 140px 0px;
  @media screen and (max-width: 991px) {
    padding: 40px 0px;
  }
`;

const Header = styled.div`
  margin-top: 70px;
  margin-bottom: 40px;
  font-size: 20px;
  color: #191619;
  font-family: 'Museo-Regular', sans-serif;
  text-align: center;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

const Text = styled.div`
  padding: 0 35px;
  margin-bottom: 50px;
  font-size: 14px;
  color: #191619;
  line-height: 1.86;
  font-family: 'Museo-Regular', sans-serif;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.div`
  margin: auto;
  display: block;
  height: 60px;
  position: relative;
  z-index: 30;
`;

const Icon = styled.img`
  margin: auto;
  display: block;
  height: 60px;
  background-color: #f3f3f3;
  border-left: 30px solid #f3f3f3;
  border-right: 30px solid #f3f3f3;
`;

const Button = styled.button`
  display: ${({ buttonVisible }) => (buttonVisible ? 'block' : 'none')};
  margin: auto;
  background: none;
  border: none;
  color: #ff2300;
  text-transform: uppercase;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  a {
    display: block;
    padding: 11px 15px;
  }
  &:hover {
    background-color: #ff3300;
    color: white;
  }
`;

export default ({
  icon, name, text, buttonVisible,
}) => (
  <Wrapper>
    <IconWrapper>
      <Icon src={icon} />
    </IconWrapper>
    <Header>{name}</Header>
    <Text>{text}</Text>
    <Button buttonVisible={buttonVisible}>
      <Link
        to="constructor"
        spy={false}
        smooth
        hashSpy={false}
        offset={-100}
        duration={500}
        delay={50}
        isDynamic
        ignoreCancelEvents={false}
      >
        Подобрать дизайн
      </Link>
    </Button>
  </Wrapper>
);
