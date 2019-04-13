import React, { Component } from 'react';
import styled from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import { Media, withBreakpoints } from 'react-breakpoints';
import cardsList from '../giftList';
import Card from './Card';
import icon from './roll-bottom.svg';

const Wrapper = styled.div`   
  padding-bottom: 100px;
  @media screen and (max-width: 992px) {
    padding-bottom: 40px;
    overflow: hidden;
  }
`;

const BorderWrapper = styled.div`   
  border: solid 6px rgba(255, 51, 0, 0.25);
  padding-bottom: 40px;
  @media screen and (max-width: 992px) {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Header = styled.h3`   
  font-size: 24px;
  font-family: 'Museo-Regular', sans-serif;
  text-align: center;
  margin-bottom: 80px;
  margin-top: 60px;
  font-weight: normal;
  @media screen and (max-width: 991px) {
    margin-bottom: 50px;
    margin-top: 30px;
  } 
`;

const Button = styled.button`   
  border: none;
  background: none;
  font-size: 18px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(255, 51, 0);
  display: block;
  margin: auto;
  margin-top: 70px;
`;

const ButtonIcon = styled.img`
  display: block;
  width: 30px;
  margin: auto;
  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'none')}; 
  opacity: 0.25;
`;

const ButtonText = styled.div`
  margin: 15px auto;
  cursor: pointer;
`;

const CardWrapper = styled.div`
  @media screen and (max-width: 991px) {
    overflow-x: visible;
    overflow-y: visible;
    flex-wrap: nowrap
  } 
`;

const MobileBr = styled.br`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  } 
`;

const MobileCardsContainerWrap = styled.div`
  @media screen and (max-width: 992px) {
    position: relative;
    min-height: 178px;
  }
`;

/* Колесо при инициализации сдвигаем влево на 4.5 элемента */
const MobileCardsContainerInner = styled(Row)`
  @media screen and (max-width: 992px) {
    position: absolute;
    width: 40000px;
    margin-left: 0px;
    margin-right: 0px;
    left: ${props => (props.leftShift)}px;
${
  (props) => {
    if (props.isAnimationActive) {
      return (
        `
        transition: transform ${props.duration}s ease-out;
        transform: translateX(-${props.shift}px);
        `
      );
    }
  }
}
`;

class Roulette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnimationActive: false,
      chosenPresent: false,
      duration: 3000,
      chosenPresentName: null,
      chosenPresentForMobileVersion: null,
      speedOfRoulette: 4,
      left: -627.5,
      leftShift: 0,
    };
  }

  componentDidMount = () => {
    this.setAnimationDuration();
    window.addEventListener('resize', this.setAnimationDuration);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setAnimationDuration);
  };

  setAnimationDuration = () => {
    const { currentBreakpoint } = this.props;
    const { duration } = this.state;
    console.log(currentBreakpoint);
    console.log(typeof currentBreakpoint);
    switch (currentBreakpoint) {
      case 'mobile':
        this.setState({ duration: 3000 });
        break;
      case 'desktop':
        this.setState({ duration: 10000 });
        break;
      default:
        break;
    }
  };

  getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

  startRoulette = () => {
    const { isAnimationActive, duration } = this.state;
    const {
      constructorContainer: {
        changeGift,
      },
    } = this.props;

    const chosenPresent = this.getRandomInt(0, 2);
    let chosenPresentName = '';
    let leftShift = 0;
    console.log(chosenPresent);
    switch (chosenPresent) {
      case 0:
        chosenPresentName = 'Средство по уходу';
        break;
      case 1:
        chosenPresentName = 'Шерстяные носки';
        leftShift = 350;
        break;
      default:
        break;
    }

    if (!isAnimationActive) {
      console.log("++++++++++++++ chosen present for mobile: ++++++++++++++++++++++++++++++++++++++");
      console.log("++++++++++++++" + chosenPresentName + "++++++++++++++++++++++++++++++++++++++");
      this.setState({
        isAnimationActive: true,
        chosenPresent: false,
        chosenPresentForMobileVersion: chosenPresentName,
      });

      setTimeout(() => {
        console.log("++++++++++++++ chosen present in roulette: " + chosenPresentName);
        changeGift(chosenPresent);
        this.setState({
          isAnimationActive: false,
          /* Сдвиг для колеса на последующие раскручивания рулетки */
          leftShift: leftShift,
          chosenPresentName,
        });
      }, duration);
    }
  };

  render() {
    const {
      isAnimationActive,
      duration,
      chosenPresentName,
      speedOfRoulette,
      chosenPresentForMobileVersion,
      left,
      leftShift,
    } = this.state;
    const presentsTemplate = [];
    const mobileWheelDuration = duration * 0.001;
    let shift = 700;
    let newLeftShift = left - leftShift;

    switch (chosenPresentForMobileVersion) {
      case 'Средство по уходу':
        shift = (shift * speedOfRoulette) - leftShift;
        break;
      case 'Шерстяные носки':
        shift = (shift * speedOfRoulette) + 350 - leftShift;
        break;
      default:
        break;
    }

    console.log(chosenPresentForMobileVersion);
    console.log("speed of roulette: " + speedOfRoulette);
    console.log("shift of roulette: " + shift);
    console.log("leftShift: " + leftShift);
    console.log(shift * speedOfRoulette);
    console.log("new leftshift: " + newLeftShift);

    for (let i = 0; i < 50; i += 1) {
      presentsTemplate.push(
        cardsList.map((card, index) => {
          // console.log('=========== index: ' + index);
          // console.log('=========== chosenPresent: ' + chosenPresentName);
          // console.log(index === chosenPresentName);
          return (
            <Card
              name={card.name}
              img={card.img}
            />
          );
        })
      )
    }

    return (
      <Wrapper>
        <Grid>
          <BorderWrapper>
            <Header>Узнай какой подарок <MobileBr /> ты получишь к заказу</Header>
            <CardWrapper>
              <MobileCardsContainerWrap>
                <MobileCardsContainerInner
                  isAnimationActive={isAnimationActive}
                  duration={mobileWheelDuration}
                  shift={shift}
                  leftShift={newLeftShift}
                >
                  <Media>
                    {
                      ({ breakpoints, currentBreakpoint }) => {
                        console.log(breakpoints[currentBreakpoint]);
                        console.log(breakpoints.mobile);
                        return (
                          breakpoints[currentBreakpoint] > breakpoints.mobile ? (
                            cardsList.map((card, index) => {
                              console.log('=========== index: ' + index);
                              console.log('=========== chosenPresent: ' + chosenPresentName);
                              console.log(index === chosenPresentName);
                              return (
                                <Col xsOffset={index === 0 ? 3 : 0} xs={6} md={3} key={card.name} mdOffset={0}>
                                  <Card
                                    name={card.name}
                                    img={card.img}
                                    animationActive={isAnimationActive}
                                    shift={index === 0 ? 200 : ((index * 200) + 200)}
                                    duration={duration}
                                    number={index + 1}
                                    chosen={chosenPresentName === card.name}
                                  />
                                </Col>
                              );
                            })
                          ) : (presentsTemplate)
                        )
                      }
                    }
                  </Media>
                </MobileCardsContainerInner>
              </MobileCardsContainerWrap>
            </CardWrapper>
            <Button onClick={this.startRoulette}>
              <ButtonIcon src={icon} rotate/>
              <ButtonText>Крутануть</ButtonText>
              <ButtonIcon src={icon} />
            </Button>
          </BorderWrapper>
        </Grid>
      </Wrapper>
    )
  }
};

export default withBreakpoints(Roulette);
