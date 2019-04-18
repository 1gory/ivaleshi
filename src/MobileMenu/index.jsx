import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
// import { enableBodyScroll } from 'body-scroll-lock';
// import NavButton from '../generic/NavButton';
import close from './close.svg';
import phone from '../icons/phone-white.svg';
import socialIg from '../icons/social-ig-white.svg';
import socialWa from '../icons/social-wa-white.svg';
// import socialVk from '../icons/social-vk-black.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ display }) => (display ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  font-family: 'Museo-Regular', sans-serif;
  background: #ff3300;
`;

const CloseButton = styled.img`
  margin: 40px 0 60px 0;
  width: 24px;
  cursor: pointer;
`;

const ContactPhone = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const ContactPhoneIcon = styled.img`
  height: 15px;
  width: 15px;
  margin-right: 10px;
  vertical-align: top;
`;

const SocialBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 20px 0;
`;

const SocialLink = styled.a`
  width: 34px;
  height: 33px;
  margin: 5px;
  text-decoration: none;
`;

const SocialIcon = styled.img`
  display: block;
  height: 17px;
  width: 17px;
  margin: 8px auto;
`;

const Menu = styled.ul`
  display: flex;
  height: 100%;
  padding: 0;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 30px 0 30px 0;
  font-size: 12px;
  text-transform: uppercase;
  a {
    text-decoration: none;
    letter-spacing: 0.3px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
`;

const MenuLinkItem = ({ to, name, closeMenu }) => (
  <MenuItem>
    <Link
      to={to}
      spy={false}
      smooth
      hashSpy={false}
      offset={-20}
      duration={500}
      delay={50}
      isDynamic
      ignoreCancelEvents={false}
      onClick={closeMenu}
    >
      {name}
    </Link>
  </MenuItem>
);

export default ({
  modalContainer: {
    state: { mobileMenu },
    closeMobileMenu,
  },
}) => (
  <Wrapper display={mobileMenu}>
    <CloseButton src={close} onClick={closeMobileMenu} />
    <ContactPhone href="tel:+7 (999) 999-56-55">
      <ContactPhoneIcon src={phone} />
      +7 (999) 999-56-55
    </ContactPhone>
    <SocialBlock>
      {/* <SocialLink href="https://www.vk.com/ivaleshi.ru/" target="_blank">
        <SocialIcon src={socialVk} />
      </SocialLink> */}
      <SocialLink href="https://www.instagram.com/ivaleshi.ru/" target="_blank">
        <SocialIcon src={socialIg} />
      </SocialLink>
      <SocialLink href="https://api.whatsapp.com/send?phone=79999995655" target="_blank">
        <SocialIcon src={socialWa} />
      </SocialLink>
    </SocialBlock>
    <Menu>
      <MenuLinkItem to="description" name="Преимущества" closeMenu={closeMobileMenu} />
      <MenuLinkItem to="catalog" name="Каталог" closeMenu={closeMobileMenu} />
      <MenuLinkItem to="feedback" name="Отзывы" closeMenu={closeMobileMenu} />
      <MenuLinkItem to="footer" name="Контакты" closeMenu={closeMobileMenu} />
    </Menu>
  </Wrapper>
);
