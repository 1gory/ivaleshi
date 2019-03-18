import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import logo from './logo.png';
import phone from './phone.png';
import socialVK from './social-vk.svg';
import socialIG from './social-ig.svg';
import socialWA from './social-wa.svg';

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
    background: none;
    border: none;
  }
`;

const SocialLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  color: #191619;
  transition: 0.2s;
  &:hover {
    color: #ff3300;  
  }
`;

const SocialIcon = styled.img`
  height: 17px;
  width: 17px;
  vertical-align: top;
  background-color: rgb(245, 244, 243);
  border: 8px solid rgb(245, 244, 243);
`;

const SocialPhone = styled.span`
  margin-right: 30px;
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
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 20px 30px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #ff3300;
    color: white;  
  }
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
    letter-spacing: 0.3px;
    font-family: 'MuseoSans-Regular', sans-serif;
    font-weight: 600;
    color: #191619;
    transition: 0.2s;

    &:hover {
      color: #ff3300;  
    }
  }
`;


export default () => (
  <Grid>
    <TopSection>
      <Row>
        <Col xs={5}>
          <Social>
            <SocialLink href="tel:+8 8888 123-45-67">
              <SocialIcon src={phone} />
              <SocialPhone>+8 8888 123-45-67</SocialPhone>
            </SocialLink>
            <SocialLink href="/"><SocialIcon src={socialVK} /></SocialLink>
            <SocialLink href="/"><SocialIcon src={socialIG} /></SocialLink>
            <SocialLink href="/"><SocialIcon src={socialWA} /></SocialLink>
          </Social>
        </Col>
        <Col xs={2}>
          <LogoWrapper>
            <a href="/">
              <Logo src={logo} />
            </a>
          </LogoWrapper>
        </Col>
        <Col xs={5}>
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
