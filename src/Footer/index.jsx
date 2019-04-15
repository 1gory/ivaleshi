import React from 'react';
import styled from 'styled-components';
import { Link, Element } from 'react-scroll';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import Map from './Map';
// import socialVK from '../icons/social-vk.svg';
import socialIG from '../icons/social-ig.svg';
import socialWA from '../icons/social-wa.svg';

const Wrapper = styled.footer`
  padding-top: 120px;
  position: relative;
  @media screen and (max-width: 991px) {
    padding-top: 60px;
  }
`;

const NavButton = styled.button`
  border: solid 1px #ff3300;
  background: none;
  text-transform: uppercase;
  color: #ff3300;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  a {
    display: block;
    padding: 20px 30px;
  }
  &:hover {
    background-color: #ff3300;
    color: white;  
  }
  @media screen and (max-width: 991px) {
    display: block;
    margin: auto;
    width: 100%;
    margin-bottom: 60px;
  }
`;

const Menu = styled.ul`
  width: 340px;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 80px;
  @media screen and (max-width: 991px) {
    margin-bottom: 40px;
    width: auto;
  }
`;

const MenuItem = styled.li`
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 24px;
  list-style: none;
  a {
    text-decoration: none;
    letter-spacing: 0.3px;
    font-family: 'MuseoSans-Regular', sans-serif;
    font-weight: 600;
    color: #191619;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: #ff3300;  
    }
  }
  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  @media screen and (max-width: 991px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
`;

const ContactLink = styled.a`
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

const ContactPhone = styled(ContactLink)`
  margin-left: 30px;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
    margin-top: 45px;
    margin-bottom: 45px;
  }
`;

const ContactIcon = styled.img`
  height: 17px;
  width: 17px;
  vertical-align: text-top;
  background-color: rgb(245, 244, 243);
  border: 8px solid rgb(245, 244, 243);
`;

const MapOverlayWrapper = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 400px;
  left: 0;
  z-index: 20;
  width: 100%;
  @media screen and (max-width: 991px) {
    bottom: 440px;
  }
`;
const MapOverlay = styled.div`
  padding: 30px;
  background-color: white;
  color: #191619;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  margin-left: 40px;
  @media screen and (max-width: 991px) {
    display: block;
    margin: 0px 20px;
    text-align: center;
  }
`;

export default () => (
  <Wrapper>
    <Element name="footer" />
    <Grid>
      <Row>
        <Col lg={3} xs={12}>
          <NavButton>
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
          </NavButton>
        </Col>
        <Col lg={2} xs={12}>
          <Menu>
            <MenuItem>
              <Link
                to="description"
                spy={false}
                smooth
                hashSpy={false}
                offset={-100}
                duration={500}
                delay={50}
                isDynamic
                ignoreCancelEvents={false}
              >
                Преимущества
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="catalog"
                spy={false}
                smooth
                hashSpy={false}
                offset={-100}
                duration={500}
                delay={50}
                isDynamic
                ignoreCancelEvents={false}
              >
                Каталог
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="feedback"
                spy={false}
                smooth
                hashSpy={false}
                offset={-100}
                duration={500}
                delay={50}
                isDynamic
                ignoreCancelEvents={false}
              >
                Отзывы
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="footer"
                spy={false}
                smooth
                hashSpy={false}
                offset={-100}
                duration={500}
                delay={50}
                isDynamic
                ignoreCancelEvents={false}
              >
                Контакты
              </Link>
            </MenuItem>
          </Menu>
        </Col>
        <Col lg={7} xs={12}>
          <ContactsWrapper>
            {/* <ContactLink href="/"><ContactIcon src={socialVK} /></ContactLink> */}
            <ContactLink href="https://www.instagram.com/ivaleshi.ru/" target="_blank">
              <ContactIcon src={socialIG} />
            </ContactLink>
            <ContactLink href="https://api.whatsapp.com/send?phone=79999995655" target="_blank">
              <ContactIcon src={socialWA} />
            </ContactLink>
            <ContactPhone href="tel:+7 (999) 999-56-55">
              +7 (999) 999-56-55
            </ContactPhone>
          </ContactsWrapper>
        </Col>
      </Row>
    </Grid>
    <MapOverlayWrapper>
      <MapOverlay>
        Москва, 3-й Михалковский пер. д.20 к.1
      </MapOverlay>
    </MapOverlayWrapper>
    <Map
      width="100%"
      height="500px"
    />
  </Wrapper>
);
