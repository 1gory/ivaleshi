import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import logo from './logo.png';
import phone from './phone.png';

const TopSection = styled.div`
  padding-top: 30px;
  margin-bottom: 70px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center; 
  width: 100%;
  height: 100%; 
  justify-content: center;
`;

const Logo = styled.img`
  height: 128px;
  object-fit: cover;
`;

const Social = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  & a:first-child img {
    margin-right: 15px;
  }
`;

const SocialLink = styled.a`
  margin-right: 40px;
  text-decoration: none;
  color: black;
`;

const SocialIcon = styled.img`
  height: 17px;
  width: 17px;
  vertical-align: top;
`;

const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const NavButton = styled.button`
  border: solid 1px #ff3300;
  background: none;
  text-transform: uppercase;
  color: #ff3300;
  padding: 20px 30px;
`;

const BottomSection = styled.div`
  padding-bottom: 50px;
`;

const BottomMenu = styled.ul`
  width: 340px;
  padding: 0;
  margin: 0 auto;
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
  <Grid>
    <TopSection>
      <Row>
        <Col xs={4}>
          <Social>
            <SocialLink href="tel:+8 8888 123-45-67">
              <SocialIcon src={phone} />
              +8 8888 123-45-67
            </SocialLink>
            <SocialLink href="/"><SocialIcon src={phone} /></SocialLink>
            <SocialLink href="/"><SocialIcon src={phone} /></SocialLink>
          </Social>
        </Col>
        <Col xs={4}>
          <LogoWrapper>
            <a href="/">
              <Logo src={logo} />
            </a>
          </LogoWrapper>
        </Col>
        <Col xs={4}>
          <NavButtonWrapper>
            <NavButton>Подобрать дизайн</NavButton>
          </NavButtonWrapper>
        </Col>
      </Row>
    </TopSection>
    <BottomSection>
      <Row>
        <Col xs={12}>
          <BottomMenu>
            <BottomMenuItem><a href="/">Преимущества</a></BottomMenuItem>
            <BottomMenuItem><a href="/">Каталог</a></BottomMenuItem>
            <BottomMenuItem><a href="/">Отзывы</a></BottomMenuItem>
            <BottomMenuItem><a href="/">Контакты</a></BottomMenuItem>
          </BottomMenu>
        </Col>
      </Row>
    </BottomSection>
  </Grid>
);
