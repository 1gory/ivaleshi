import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import {
  PaddingGrid as Grid,
  PaddingRow as Row,
  PaddingCol as Col,
} from '../grid';
import logoBlock from './logo-block-white.svg';
import logoInline from './logo-inline-white.svg';
import phone from '../icons/phone-white.svg';
import hamburger from './hamburger.svg';
// import socialVK from '../icons/social-vk.svg';
import socialIG from '../icons/social-ig-white.svg';
import socialWA from '../icons/social-wa-white.svg';

const Wrapper = styled.div`
  background-color: #ff3300;
`;

const TopSection = styled.div`
  padding: 25px 0;
  @media screen and (max-width: 991px) {
    padding-top: 0px;
    padding: 15px 0;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: spcae-between;
  @media screen and (max-width: 991px) {
    align-items: start;
    flex-direction: column;
  }
`;

const LogoBlock = styled.img`
  height: 70px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const LogoInline = styled.img`
  height: 20px;
  object-fit: cover;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Descriptor = styled.p`
  margin 0;
  margin-left: 30px; 
  font-family: 'Museo-Regular', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
  opacity: 0.7;
  @media screen and (max-width: 991px) {
    width: 180px;
    margin-left: 0;
    font-size: 14px;
    padding-top: 5px;
    align-items: start;
    flex-direction: column;
  }
`;

const DesktopBr = styled.br`
  @media (max-width: 991px) {
    display: none;
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

const ContactLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  font-family: 'Museo-Regular', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`;

const ContactPhone = styled(ContactLink)`
  margin-left: 20px;
  white-space: nowrap;
  @media (max-width: 992px) {
    display: none;
  }
`;

const ContactIcon = styled.img`
  height: 20px;
  width: 20px;
  vertical-align: top;
`;

const ContactPhoneIcon = styled(ContactIcon)`
  height: 15px;
  width: 15px;
  margin-right: 10px;
  opacity: 0.5;
`;

const Menu = styled.ul`
  display: flex;
  height: 100%;
  padding: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  font-size: 12px;
  text-transform: uppercase;
  a {
    text-decoration: none;
    letter-spacing: 0.3px;
    font-family: 'Museo-Regular', sans-serif;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
`;

const MobileMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 14px;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const MobileMenuIcon = styled.img`
  height: 25px;
  margin-left: 10px;
  vertical-align: top;
`;

const MenuLinkItem = ({ to, name }) => (
  <MenuItem>
    <Link
      to={to}
      spy={false}
      smooth
      hashSpy={false}
      offset={-100}
      duration={500}
      delay={50}
      isDynamic
      ignoreCancelEvents={false}
    >
      {name}
    </Link>
  </MenuItem>
);

export default ({ modalContainer: { openMobileMenu } }) => (
  <Wrapper>
    <Grid>
      <TopSection>
        <Row>
          <Col lg={3} xs={6}>
            <LogoWrapper>
              <a href="/">
                <LogoBlock src={logoBlock} />
                <LogoInline src={logoInline} />
              </a>
              <Descriptor>
                Дизайнерские
                <DesktopBr />
                валеши ручной
                <DesktopBr />
                работы
              </Descriptor>
            </LogoWrapper>
          </Col>
          <Col lg={5} className="hidden-xs hidden-sm hidden-md">
            <Menu>
              <MenuLinkItem to="description" name="Преимущества" />
              <MenuLinkItem to="catalog" name="Каталог" />
              <MenuLinkItem to="feedback" name="Отзывы" />
              <MenuLinkItem to="footer" name="Контакты" />
            </Menu>
          </Col>
          <Col xs={6} md={6} lgOffset={1} lg={3}>
            <MobileMenuWrapper>
              <ContactsWrapper>
                {/* <ContactLink href="/"><ContactIcon src={socialVK} /></ContactLink> */}
                <ContactLink
                  href="https://www.instagram.com/ivaleshi.ru/"
                  target="_blank"
                >
                  <ContactIcon src={socialIG} />
                </ContactLink>
                <ContactLink
                  href="https://api.whatsapp.com/send?phone=79999995655"
                  target="_blank"
                >
                  <ContactIcon src={socialWA} />
                </ContactLink>
                <ContactPhone href="tel:+7 (999) 999-56-55">
                  <ContactPhoneIcon src={phone} />
                  +7 (999) 999-56-55
                </ContactPhone>
              </ContactsWrapper>
              <MobileMenuButton onClick={openMobileMenu}>
                <MobileMenuIcon src={hamburger} />
              </MobileMenuButton>
            </MobileMenuWrapper>
          </Col>
        </Row>
      </TopSection>
    </Grid>
  </Wrapper>
);
