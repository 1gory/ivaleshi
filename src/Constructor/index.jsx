import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import Constructor from './Constructor';
import Form from '../Form';

const Wrapper = styled.section`
  padding-top: 110px;   
  padding-bottom: 90px;
  @media screen and (max-width: 991px) {
    padding-top: 30px;   
    padding-bottom: 30px;
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
    const temp = this.state.stage1;
    this.setState({ stage1: !temp });
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
        },
      },
    } = this.props;

    return (
      <Wrapper>
        <Element name="constructor" />
        <Grid>
          <Row>
            <Col lg={7} xs={12}></Col>
            <Col lg={5} xs={12}>
              <Constructor {...this.props} display={this.state.stage1} toggleStage={this.toggleStage} />
              <Form
                nameHandler={changeName}
                phoneHandler={changePhone}
                validateHandler={validateConstructor}
                display={!this.state.stage1}
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
    )
  }
};
