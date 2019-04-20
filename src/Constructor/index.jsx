import React, { Component } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import Constructor from './Constructor';
import Gift from '../Gift';
import Form from '../Form';
import giftList from '../giftList';
import {
  mainImages, pompons, beads, rhinestones,
} from './imageSets';
import arrow from './arrow2.svg';

const Wrapper = styled.section`
  padding-top: 110px;
  padding-bottom: 90px;
  position: relative;
  @media screen and (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 520px;
  @media screen and (max-width: 991px) {
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Header = styled.h2`
  font-size: 48px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  text-transform: uppercase;
  margin: 0;
  @media screen and (max-width: 991px) {
    font-size: 36px;
  }
`;

const Back = styled.div`
  display: ${({ display }) => (!display ? 'block' : 'none')};
  font-size: 14px;
  color: #ff3300;
  font-family: 'Museo-Regular', sans-serif;
  text-transform: uppercase;
  position: absolute;
  top: 240px;
  z-index: 20;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  @media screen and (max-width: 991px) {
    top: 140px;
  }
`;

const BackIcon = styled.img`
  height: 20px;
  transform: rotate(-90deg);
  vertical-align: bottom;
  margin-right: 10px;
`;

const MainImage = styled.img`
  width: 520px;
  margin-top: 100px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 50px;
  }
`;

const Pompon = styled.img`
  position: absolute;
  width: 520px;
  left: 0;
  top: 80px;
  z-index: 10;
  @media screen and (max-width: 600px) {
    width: 100%;
    top: 40px;
  }
`;

const Jewel = styled.img`
  position: absolute;
  width: 520px;
  left: 0;
  top: ${({ isBead }) => (isBead ? '120px' : '100px')};
  z-index: 9;
  @media screen and (max-width: 600px) {
    width: 100%;
    top: ${({ isBead }) => (isBead ? '60px' : '50px')};
  }
`;

const GiftWrapper = styled.div`
  margin-bottom: 50px;
  display: ${({ display }) => (!display ? 'block' : 'none')};
  @media screen and (max-width: 991px) {
    margin-top: 20px;
  }
`;

export default class CalcSectionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage1: true,
    };
  }

  toggleStage = () => {
    const { stage1 } = this.state;
    this.setState({ stage1: !stage1 });
    const {
      constructorContainer: { setDefaultFormState },
    } = this.props;
    setDefaultFormState();
  };

  render() {
    const {
      constructorContainer: {
        changeName,
        changePhone,
        validateConstructor,
        changeFormState,
        state: {
          nameValid,
          phoneValid,
          formState,
          mainColorIndex,
          secondaryColorIndex,
          jewel,
          gift,
          isGiftChosen,
        },
      },
      modalContainer: { closeModal },
    } = this.props;
    const { stage1 } = this.state;

    return (
      <Wrapper>
        <Element name="constructor" />
        <Grid>
          <Row>
            <Col lg={7} xs={12}>
              <Header>
                Подбери
                <br />
                свой дизайн
              </Header>
              <Back display={stage1} onClick={() => this.toggleStage()}>
                <BackIcon src={arrow} />
                Назад в конструктор
              </Back>
              <ImageWrapper>
                <MainImage src={mainImages[mainColorIndex][1]} />
                <Pompon src={pompons[secondaryColorIndex][1]} />
                <Jewel
                  src={jewel === 0 ? beads[mainColorIndex] : rhinestones[mainColorIndex]}
                  isBead={jewel === 0}
                />
              </ImageWrapper>
            </Col>
            <Col lg={5} xs={12}>
              <Constructor {...this.props} display={stage1} toggleStage={this.toggleStage} />
              <GiftWrapper display={stage1}>
                <Gift
                  name={giftList[gift].name}
                  img={giftList[gift].img}
                  isGiftChosen={isGiftChosen}
                  closeModal={closeModal}
                />
              </GiftWrapper>
              <Form
                nameHandler={changeName}
                phoneHandler={changePhone}
                validateHandler={validateConstructor}
                display={!stage1}
                nameValid={nameValid}
                phoneValid={phoneValid}
                formState={formState}
                formStateHandler={changeFormState}
                setDefaultFormState={this.toggleStage}
              />
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    );
  }
}
