import React, { Component } from 'react';
import styled from 'styled-components';
import selected from '../roll-selected.svg';

const Wrap = styled.div`
  position: relative;
  @media screen and (max-width: 992px) {
    width: 175px;
  }
  @keyframes blink {
    0% {opacity: 0}
    97% {opacity: 0}
    100% {opacity: 1}
  }
${
  (props) => {
    if (props.isAnimationActive) {
      return (
        `
         &:after {
         position: absolute;
         content: '';
         left: 0px;
         right: 0px;
         bottom: 0px;
         margin: auto;
         margin-bottom: -120px;
         width: 50px;
         height: 100px;
         opacity: 0;
         background-image: url(${selected});
         background-repeat: no-repeat;
         background-size: contain;
         animation-name: blink;
         animation-duration: ${props.period}s;
         animation-timing-function: linear;
         animation-iteration-count: infinite;
         animation-delay: ${props.shift}s;
         }
       `);
    }

    return true;
  }
}
${
  (props) => {
    if (props.chosen) {
      return (
        `
        &:after {
        position: absolute;
        content: '';
        left: 0px;
        right: 0px;
        bottom: 0px;        
        margin: auto;
        margin-bottom: -120px;
        width: 50px;
        height: 100px;
        background-image: url(${selected});
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
        }
        `
      );
    }

    return true;
  }
}
`;

const CardHeader = styled.div`
  margin-top: 40px;
  font-size: 16px;
  color: #191619;
  font-family: 'MuseoSans-Regular', sans-serif;
  text-align: center;
  font-weight: bold;
`;

const CardImage = styled.img`
  margin: auto;
  display: block;
  height: 150px;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnimationActive: false,
      period: 0.8,
      stageOfAnimation: 1,
    };
  }

  componentDidUpdate = () => {
    const { duration, animationActive } = this.props;
    const { isAnimationActive } = this.state;
    const halfOfDuration = duration / 2;
    const fourthOfDuration = halfOfDuration + duration / 4;

    if (animationActive && !isAnimationActive) {
      setTimeout(() => {
        this.setState({
          stageOfAnimation: 2,
          isAnimationActive: true,
        });
      }, halfOfDuration);
      setTimeout(() => {
        this.setState({
          stageOfAnimation: 3,
        });
      }, fourthOfDuration);
      setTimeout(() => {
        this.setState({
          stageOfAnimation: 1,
          isAnimationActive: false,
        });
      }, duration);
    }
  };

  render() {
    const {
      name,
      img,
      animationActive,
      shift,
      chosen,
    } = this.props;

    const { period, stageOfAnimation } = this.state;
    const newPeriod = period * stageOfAnimation;
    const newShift = shift * stageOfAnimation * 0.001;

    return (
      <Wrap isAnimationActive={animationActive} shift={newShift} period={newPeriod} chosen={chosen}>
        <CardImage src={img} />
        <CardHeader>{name}</CardHeader>
      </Wrap>
    );
  }
}
