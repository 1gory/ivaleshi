import React, { Component } from 'react';
import styled from 'styled-components';
import selected from '../roll-selected.svg';

const Wrap = styled.div`
  position: relative;
  @keyframes blink {
  0% {opacity: 0}
	85% {opacity: 0}
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
      shift: null,
      period: 0.4,
      stageOfAnimation: 1,
    };
  }

  componentDidUpdate = () => {
    const { duration, animationActive, shift } = this.props;
    const { isAnimationActive } = this.state;
    const halfOfDuration = duration / 2;
    const fourthOfDuration = halfOfDuration + duration / 4;
    console.log("---------- component updated ----------");
    console.log("animation time: " + duration);
    console.log("animation time half: " + halfOfDuration);
    console.log("animation time last fourth: " + fourthOfDuration);


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
  }

  render() {
    const { name, img, animationActive, shift, chosen } = this.props;
    const { period, stageOfAnimation } = this.state;
    const newPeriod = period * stageOfAnimation;
    const newShift = shift * stageOfAnimation * 0.001;
    console.log("------------------------");
    console.log("stage " + stageOfAnimation);
    console.log("shift: " + newShift);
    console.log("period: " + newPeriod);
    console.log("chosen present: " + chosen);
    return (
      <Wrap isAnimationActive={animationActive} shift={newShift} period={newPeriod} chosen={chosen}>
        <CardImage src={img} />
        <CardHeader>{name}</CardHeader>
      </Wrap>
    );
  }
}
