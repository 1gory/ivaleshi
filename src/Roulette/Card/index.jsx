import React, { Component } from 'react';
import styled from 'styled-components';
import selected from '../roll-selected.svg';

const Wrap = styled.div`
  position: relative;
  @keyframes blink {
  0% {opacity: 0}
	49% {opacity: 0}
	50% {opacity: 1}
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
    const {duration} = this.props;
    const { shift, isAnimationActive } = this.state;
    const halfOfDuration = duration / 2;
    const fourthOfDuration = halfOfDuration + duration / 4;

    if (isAnimationActive) {
      setTimeout(() => {
        this.setState({
          stageOfAnimation: 2,
          isAnimationActive: false,
        });
      }, halfOfDuration);
      setTimeout(() => {
        this.setState({
          stageOfAnimation: 3,
        });
      }, fourthOfDuration);
    }
  }

  componentDidMount = () => {
    const { shift, number } = this.props;
    const newShift = shift * 0.001;

    this.setState({
      shift: newShift,
      isAnimationActive: true,
    });
  }

  render() {
    const { name, img, animationActive } = this.props;
    const { shift, period, stageOfAnimation } = this.state;
    const newPeriod = period * stageOfAnimation;
    const newShift = shift + stageOfAnimation;
    // console.log(shift);
    // console.log(newShift);
    return (
      <Wrap isAnimationActive={animationActive} shift={newShift} period={newPeriod}>
        <CardImage src={img} />
        <CardHeader>{name}</CardHeader>
      </Wrap>
    );
  }
}
