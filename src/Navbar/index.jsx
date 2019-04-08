import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import logo from './logo.png';
import phone from '../icons/phone.png';
import hamburger from './hamburger.png';
import socialVK from '../icons/social-vk.svg';
import socialIG from '../icons/social-ig.svg';
import socialWA from '../icons/social-wa.svg';

const TopSection = styled.div`
  padding-top: 30px;
  margin-bottom: 70px;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
    padding-top: 0px;
  } 
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
  @media screen and (max-width: 991px) {
    padding-bottom: 30px;
  } 
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  & a:first-child img {
    margin-right: 15px;
    background: none;
    border: none;
  } 
  @media screen and (max-width: 991px) {
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgb(249, 248, 248);
    margin-bottom: 20px;
  } 
`;

const ContactLink = styled.a`
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

const ContactPhone = styled(ContactLink)`
  margin-right: 30px;
  @media screen and (max-width: 600px) {
    margin-right: 10px;
  } 
`;

const ContactIcon = styled.img`
  height: 17px;
  width: 17px;
  vertical-align: top;
  background-color: rgb(245, 244, 243);
  border: 8px solid rgb(245, 244, 243);
`;

const NavButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 991px) {
    justify-content: center;
  }  
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
    width: auto;
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
  @media screen and (max-width: 600px) {
    width: 100%;
  } 
`;

const BottomSection = styled.div`
  padding-bottom: 50px;
  @media screen and (max-width: 991px) {
    display: none
  } 
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
    cursor: pointer;
    &:hover {
      color: #ff3300;  
    }
  }
`;

const ColMobileHide = styled(Col)`
  @media screen and (max-width: 991px) {
    display: none
  }   
`;

const MobileContacts = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }   
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 14px;
  font-family: 'MuseoSans-Regular', sans-serif;
  text-transform: uppercase;
  position: absolute;
  right: 50px;
  top: 100px;
  color: #191616;
  font-weight: 600;
  @media screen and (max-width: 991px) {
    display: block; 
  }   
  @media screen and (max-width: 600px) {
    right: 20px;
  }  
`;

const MobileMenuIcon = styled.img`
  height: 14px; 
  margin-left: 10px;
  vertical-align: top;
`;

// export default () => (
//   <nav>
//     <MobileMenuButton>
//       Меню
//       <MobileMenuIcon src={hamburger} />
//     </MobileMenuButton>
//     <MobileContacts>
//       <ContactsWrapper>
//         <ContactPhone href="tel:+8 8888 123-45-67">
//           <ContactIcon src={phone} />
//           +8 8888 123-45-67
//         </ContactPhone>
//         <ContactLink href="/"><ContactIcon src={socialVK} /></ContactLink>
//         <ContactLink href="/"><ContactIcon src={socialIG} /></ContactLink>
//         <ContactLink href="/"><ContactIcon src={socialWA} /></ContactLink>
//       </ContactsWrapper>
//     </MobileContacts>
//     <Grid>
//       <TopSection>
//         <Row>
//           <ColMobileHide lg={5} xs={12}>
//             <ContactsWrapper>
//               <ContactPhone href="tel:+8 8888 123-45-67">
//                 <ContactIcon src={phone} />
//                 +8 8888 123-45-67
//               </ContactPhone>
//               <ContactLink href="/"><ContactIcon src={socialVK} /></ContactLink>
//               <ContactLink href="/"><ContactIcon src={socialIG} /></ContactLink>
//               <ContactLink href="/"><ContactIcon src={socialWA} /></ContactLink>
//             </ContactsWrapper>
//           </ColMobileHide>
//           <Col lg={2} xs={12}>
//             <LogoWrapper>
//               <a href="/">
//                 <Logo src={logo} />
//               </a>
//             </LogoWrapper>
//           </Col>
//           <Col lg={5} xs={12}>
//             <NavButtonWrapper>
//               <NavButton>Подобрать дизайн</NavButton>
//             </NavButtonWrapper>
//           </Col>
//         </Row>
//       </TopSection>
//       <BottomSection>
//         <Row>
//           <Col sm={12}>
//             <BottomMenu>
//               <BottomMenuItem><a href="/">Преимущества</a></BottomMenuItem>
//               <BottomMenuItem><a href="/">Каталог</a></BottomMenuItem>
//               <BottomMenuItem><a href="/">Отзывы</a></BottomMenuItem>
//               <BottomMenuItem><a href="/">Контакты</a></BottomMenuItem>
//             </BottomMenu>
//           </Col>
//         </Row>
//       </BottomSection>
//     </Grid>
//   </nav>
// );

export default class Navbar extends Component {
  // constructor(props) {
  //   super(props);

  // }

  // handleSelectFootSizeChange = () => {
  //   const value = e.target.value;
  //   const {
  //     container: {
  //       changeFootSize,
  //     },
  //   } = this.props;
  //   changeFootSize(value);
  // }

//   <Link activeClass="active"
//       to="target"
//       spy={true}
//       smooth={true}
//       hashSpy={true}
//       offset={50}
//       duration={500}
//       delay={1000}
//       isDynamic={true}
//       onSetActive={this.handleSetActive}
//       onSetInactive={this.handleSetInactive}
//       ignoreCancelEvents={false}
// >
//   Your name
// </Link>

  render() {
    return (
      <nav>
        <MobileMenuButton>
          Меню
          <MobileMenuIcon src={hamburger} />
        </MobileMenuButton>
        <MobileContacts>
          <ContactsWrapper>
            <ContactPhone href="tel:+8 8888 123-45-67">
              <ContactIcon src={phone} />
              +8 8888 123-45-67
            </ContactPhone>
            <ContactLink href="/"><ContactIcon src={socialVK} /></ContactLink>
            <ContactLink href="/"><ContactIcon src={socialIG} /></ContactLink>
            <ContactLink href="/"><ContactIcon src={socialWA} /></ContactLink>
          </ContactsWrapper>
        </MobileContacts>
        <Grid>
          <TopSection>
            <Row>
              <ColMobileHide lg={5} xs={12}>
                <ContactsWrapper>
                  <ContactPhone href="tel:+8 8888 123-45-67">
                    <ContactIcon src={phone} />
                    +8 8888 123-45-67
                  </ContactPhone>
                  <ContactLink href="/"><ContactIcon src={socialVK} /></ContactLink>
                  <ContactLink href="/"><ContactIcon src={socialIG} /></ContactLink>
                  <ContactLink href="/"><ContactIcon src={socialWA} /></ContactLink>
                </ContactsWrapper>
              </ColMobileHide>
              <Col lg={2} xs={12}>
                <LogoWrapper>
                  <a href="/">
                    <Logo src={logo} />
                  </a>
                </LogoWrapper>
              </Col>
              <Col lg={5} xs={12}>
                <NavButtonWrapper>
                  {/* <NavButton>Подобрать дизайн</NavButton> */}
                  <NavButton>
                    <Link
                      to="constructor"
                      spy={false}
                      smooth={true}
                      hashSpy={false}
                      offset={-100}
                      duration={500}
                      delay={50}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                    >
                      Подобрать дизайн
                    </Link>
                  </NavButton>
                </NavButtonWrapper>
              </Col>
            </Row>
          </TopSection>
          <BottomSection>
            <Row>
              <Col sm={12}>
                <BottomMenu>
                  <BottomMenuItem>
                    <Link
                      to="description"
                      spy={false}
                      smooth={true}
                      hashSpy={false}
                      offset={-100}
                      duration={500}
                      delay={50}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                    >
                      Преимущества
                    </Link>
                    </BottomMenuItem>
                  <BottomMenuItem>
                    <Link
                      to="catalog"
                      spy={false}
                      smooth={true}
                      hashSpy={false}
                      offset={-100}
                      duration={500}
                      delay={50}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                    >
                      Каталог
                    </Link>
                  </BottomMenuItem>
                  <BottomMenuItem>
                    <Link
                      to="feedback"
                      spy={false}
                      smooth={true}
                      hashSpy={false}
                      offset={-100}
                      duration={500}
                      delay={50}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                    >
                      Отзывы
                    </Link>
                  </BottomMenuItem>
                  <BottomMenuItem>
                    <Link
                      to="footer"
                      spy={false}
                      smooth={true}
                      hashSpy={false}
                      offset={-100}
                      duration={500}
                      delay={50}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                    >
                      Контакты
                    </Link>
                  </BottomMenuItem>
                </BottomMenu>
              </Col>
            </Row>
          </BottomSection>
        </Grid>
      </nav>
    )
  }
};

