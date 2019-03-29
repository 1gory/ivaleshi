import React from 'react';
import styled from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import { Header, CloseButton, MobileBr, Content, Background, Wrapper } from '../modal';
import img from './img.png';
import close from './close.svg';
import SizesList from './SizesList';

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
  font-family: 'MuseoSans-Regular', sans-serif;
`;

const Image = styled.img`
  margin-left: 15px;
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
  font-family: 'MuseoSans-Regular', sans-serif;
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
  font-family: 'MuseoSans-Regular', sans-serif;
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

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col mdOffset={2} md={8} xs={12}>
          <Content>
            <Header>Как узнать свой <MobileBr />размер</Header>
            <ListWrapper>
              <List>
                <ListItem>Измерьте длину ступни<br />как показано на рисунке</ListItem>
                <ListItem>Определите свой размер<br />по таблице</ListItem>
              </List>
              <Image src={img} />
            </ListWrapper>
            <Sizes>
              <SizesHeaders>
                <SizesHeaderLeft>Длина ступни, <MobileBr />см</SizesHeaderLeft>
                Размер
              </SizesHeaders>
              {SizesList.map(size => (
                <Size>
                  <SizeLeft>{size[0]}</SizeLeft>
                  {size[1]}
                </Size>
              ))}
            </Sizes>
            <CloseButton src={close} />
          </Content>
        </Col>
      </Row>
    </Grid>
    <Background />
  </Wrapper>
);
