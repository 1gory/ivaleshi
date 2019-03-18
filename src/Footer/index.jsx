import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Map from './Map';
import socialVK from './social-vk.svg';
import socialIG from './social-ig.svg';
import socialWA from './social-wa.svg';

const Wrapper = styled.div`
  padding-top: 120px;
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

const Menu = styled.ul`
  width: 340px;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 80px;
`;

const MenuItem = styled.li`
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 24px;
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

const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #191619;
  margin-left: 10px;
  transition: 0.2s;
  &:hover {
    color: #ff3300;  
  }
`;

const SocialIcon = styled.img`
  height: 17px;
  width: 17px;
  vertical-align: text-top;
  background-color: rgb(245, 244, 243);
  border: 8px solid rgb(245, 244, 243);
`;

const SocialPhone = styled.span`
  margin-left: 30px;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col xs={3}>
          <NavButton>Подобрать дизайн</NavButton>
        </Col>
        <Col xs={2}>
          <Menu>
            <MenuItem><a href="/">Преимущества</a></MenuItem>
            <MenuItem><a href="/">Каталог</a></MenuItem>
            <MenuItem><a href="/">Отзывы</a></MenuItem>
            <MenuItem><a href="/">Контакты</a></MenuItem>
          </Menu>
        </Col>
        <Col xs={7}>
          <Social>
            <SocialLink href="/"><SocialIcon src={socialVK} /></SocialLink>
            <SocialLink href="/"><SocialIcon src={socialIG} /></SocialLink>
            <SocialLink href="/"><SocialIcon src={socialWA} /></SocialLink>
            <SocialLink href="tel:+8 8888 123-45-67">
              <SocialPhone>+8 8888 123-45-67</SocialPhone>
            </SocialLink>
          </Social>
        </Col>
      </Row>
    </Grid>
    <Map
      width={'100%'}
      height={'500px'}
    />
  </Wrapper>
);
