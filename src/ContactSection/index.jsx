import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import img from './gal-img.png';

const Wrapper = styled.div`
  padding-top: 110px;
  background-color: rgb(255, 51, 0);
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 110px;
`;

const Header = styled.div`
  margin-bottom: 40px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 36px;
  color: white;   
  padding-right: 140px;
`;

const Text = styled.div`
  margin-bottom: 45px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.7;
  color: white;  
  padding-right: 300px;
`;

const EmailInput = styled.input`
  font-family: 'MuseoSans-Regular', sans-serif;
  color: rgba(25, 22, 25, 0.5);
  padding: 30px;
  width: 440px;
  font-weight: bold;
`;

const SideImg = styled.img`
  width: 400px;
  height: 420px;
  object-fit: cover;
  position: absolute;
  bottom: 0px;
  left: 0px;
  box-shadow: 0px 30px 30px 0 rgba(0, 0, 0, 0.25);
`;

export default () => (
  <Wrapper>
    <Grid>
      <ImageWrapper>
        <Row>
          <Col xsOffset={5} xs={7}>
            <Header>Бесплатный буклет по уходу за валешами</Header>
            <Text>Введи свой Email чтобы получить бесплатный буклет на почту. Никакого спама.</Text>
            <EmailInput type="text" placeholder="Email" />
          </Col>
        </Row>
        <SideImg src={img} />
      </ImageWrapper>
    </Grid>
  </Wrapper>
);
