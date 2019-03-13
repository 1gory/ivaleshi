import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import phone from './phone.png';

const Wrapper = styled.nav`
  background: white;
  margin: auto;
  max-width: 1200px;
`;

const TopSection = styled.div`
  height: 190px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;  
`;

const Logo = styled.img`
  height: 128px;
  object-fit: cover;
`;

const Social = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SocialIcon = styled.img`
  height: 17px;
  width: 17px;
`;

const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  border: solid 1px #ff3300;
  background: none;
  text-transform: uppercase;
  color: #ff3300;
  padding: 20px 30px;
`;

const BottomSection = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

const BottomMenu = styled.ul`
  width: 340px;
  padding: 0;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const BottomMenuItem = styled.li`
  font-size: 12px;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: black;
  }
  
`;

export default () => (
  <Wrapper>
    <TopSection>
      <Social>
        <SocialIcon src={phone} />
        +8 8888 123-45-67
        <SocialIcon src={phone} />
        <SocialIcon src={phone} />
      </Social>
      <LogoWrapper href="/"><Logo src={logo} /></LogoWrapper>
      <NavButtonWrapper>
        <NavButton>Подобрать дизайн</NavButton>
      </NavButtonWrapper>
    </TopSection>
    <BottomSection>
      <BottomMenu>
        <BottomMenuItem><a href="/">Преимущества</a></BottomMenuItem>
        <BottomMenuItem><a href="/">Каталог</a></BottomMenuItem>
        <BottomMenuItem><a href="/">Отзывы</a></BottomMenuItem>
        <BottomMenuItem><a href="/">Контакты</a></BottomMenuItem>
      </BottomMenu>
    </BottomSection>
  </Wrapper>
);
