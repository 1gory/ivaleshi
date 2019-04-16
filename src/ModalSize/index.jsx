import React from 'react';
import styled from 'styled-components';
import img from './measure.svg';
import SizesList from './SizesList';

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

const Wrapper = styled.div`
  width: 100%;
  display: ${({ display }) => (display ? 'flex' : 'none')};
  flex-wrap: wrap;
`;

const ListWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const List = styled.ol`
  margin-bottom: 50px;
  padding-left: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 30px;
  font-size: 16px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
`;

const Image = styled.img`
  margin-left: 15px;
  height: 310px;
`;

const Sizes = styled.div`
  width: 50%;
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 50px;
  }
`;

const SizesHeaders = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 70px;
  font-size: 16px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  font-weight: bold;
  @media screen and (max-width: 991px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`;

const SizesHeaderLeft = styled.div`
  width: 60%;
`;

const Size = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  font-weight: bold;
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const SizeLeft = styled.div`
  width: 60%;
`;

const MobileBr = styled.br`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export default ({ visible }) => (
  <Wrapper display={visible}>
    <Header>
      {'Как узнать свой '}
      <MobileBr />
      размер
    </Header>
    <ListWrapper>
      <List>
        <ListItem>
          Измерьте длину ступни
          <br />
          как показано на рисунке
        </ListItem>
        <ListItem>
          Определите свой размер
          <br />
          по таблице
        </ListItem>
      </List>
      <Image src={img} />
    </ListWrapper>
    <Sizes>
      <SizesHeaders>
        <SizesHeaderLeft>
          Длина ступни,
          <MobileBr />
          см
        </SizesHeaderLeft>
        Размер
      </SizesHeaders>
      {SizesList.map(size => (
        <Size>
          <SizeLeft>{size[0]}</SizeLeft>
          {size[1]}
        </Size>
      ))}
    </Sizes>
  </Wrapper>
);
