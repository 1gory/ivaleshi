import React from 'react';
import styled from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import img from './img.png';
import close from './close.svg';
import SizesList from './SizesList';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
`;

const Content = styled.section`
  background-color: white;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 120;
`;

const Header = styled.h2`
  font-size: 30px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  text-transform: uppercase;
  margin-bottom: 70px;
  width: 100%;
`;

const ListWrapper = styled.div`
  width: 50%;
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
`;

const SizesHeaders = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 70px;
  font-size: 16px;
  color: rgb(25, 22, 25);
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: bold;
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
`;

const SizeLeft = styled.div`
  width: 60%;
`;

const CloseButton = styled.img`
  top: 30px;
  right: 30px;
  width: 30px;
  position: absolute;
  opacity: 0.25;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col mdOffset={2} md={8} xs={12}>
          <Content>
            <Header>Как узнать свой размер</Header>
            <ListWrapper>
              <List>
                <ListItem>Измерьте длину ступни<br />как показано на рисунке</ListItem>
                <ListItem>Определите свой размер<br />по таблице</ListItem>
              </List>
              <Image src={img} />
            </ListWrapper>
            <Sizes>
              <SizesHeaders>
                <SizesHeaderLeft>Длина ступни, см</SizesHeaderLeft>
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
