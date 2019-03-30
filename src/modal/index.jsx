import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 100;
  @media screen and (max-width: 991px) {
    display: block;
    padding-top: 20px;
  }
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  background-color: white;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 120;
  @media screen and (max-width: 991px) {
    padding: 15px;  
  }
`;

const Header = styled.h2`
  font-size: 30px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  text-transform: uppercase;
  margin-bottom: 70px;
  width: 100%;
  @media screen and (max-width: 991px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const CloseButton = styled.img`
  top: 30px;
  right: 30px;
  width: 30px;
  position: absolute;
  opacity: 0.25;
  @media screen and (max-width: 991px) {
    top: 15px;
    right: 15px;
    width: 15px;
  }
`;

const MobileBr = styled.br`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export {
  Header, CloseButton, MobileBr, Content, Background, Wrapper,
};
