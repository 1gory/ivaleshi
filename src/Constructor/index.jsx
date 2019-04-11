import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Link, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import Constructor from './Constructor';
import Form from '../Form';
import { mainImages, pompons } from './imageSets';

const Wrapper = styled.section`
  padding-top: 110px;   
  padding-bottom: 90px;
  @media screen and (max-width: 991px) {
    padding-top: 30px;   
    padding-bottom: 30px;
  } 
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Header = styled.h2`
  font-size: 48px;
  color: rgb(25, 22, 25);
  font-family: 'Museo-Regular', sans-serif;
  text-transform: uppercase;
  margin: 0;
`;

const MainImage = styled.img`
  width: 520px;
  margin-top: 100px;
`;

const Pompon = styled.img`
  position: absolute;
  width: 520px;
  left: 0;
  top: 80px;
`;


export default class CalcSectionComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage1: true,
    };
  }

  toggleStage = () => {
    const {
      stage1,
    } = this.state;
    this.setState({ stage1: !stage1 });
    const {
      constructorContainer: {
        setDefaultFormState,
      },
    } = this.props;
    setDefaultFormState();
  }

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
          mainColor,
          secondaryColor,
        },
      },
    } = this.props;
    const {
      stage1,
    } = this.state;

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
              <ImageWrapper>
                <MainImage src={mainImages[mainColor][1]} />
                <Pompon src={pompons[secondaryColor][1]} />
              </ImageWrapper>
            </Col>
            <Col lg={5} xs={12}>
              <Constructor {...this.props} display={stage1} toggleStage={this.toggleStage} />
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
