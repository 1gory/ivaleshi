/* eslint-disable max-len */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Media, withBreakpoints } from 'react-breakpoints';
import { Element, Link } from 'react-scroll';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';
import cardsList from '../giftList';
import Card from './Card';
import DefaultBuyButton from '../generic/Button';
import icon from './roll-bottom.svg';

const Wrapper = styled.div`
  padding-bottom: 100px;
  @media screen and (max-width: 992px) {
    padding-bottom: 40px;
    overflow: hidden;
  }
`;

const BorderWrapper = styled.div`
  border: solid 6px #ff3300;
  padding-bottom: 40px;
  @media screen and (max-width: 992px) {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const BlockWrapper = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')};
`;

const GiftBlock = styled.div`
  display: ${({ display }) => (display ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 131px 0;
  @media screen and (max-width: 991px) {
    margin: 86px auto;
  }
`;

const GiftHeader = styled.div`
  color: rgb(30, 34, 41);
  font-family: 'Museo-Regular', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
`;

const GiftText = styled.div`
  padding-top: 20px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 16px;
  line-height: 1.75;
  text-align: center;
  color: rgb(30, 34, 41);

  @media screen and (max-width: 991px) {
    margin: 0 50px 0 50px;
  }
`;

const GiftImg = styled.img`
  max-width: 200px;
  height: 180px;
  padding-top: 20px;
  object-fit: cover;
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
  font-family: 'Museo-Regular', sans-serif;
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
    flex-wrap: nowrap;
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
    left: ${props => props.leftShift}px;
${(props) => {
    if (props.isAnimationActive) {
      return `
        transition: transform ${props.duration}s ease-out;
        transform: translateX(-${props.shift}px);
        `;
    }
    return true;
  }}
`;

const Text = styled.span`
  display: inline-block;
  width: 100%;
  margin: 100px 0 39px 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  font-family: 'Museo-Regular', sans-serif;
  font-weight: bold;
  color: #cecdcc;
`;

const BuyButton = styled(DefaultBuyButton)`
  margin: 0 auto;
  margin-top: 60px;
`;

class Roulette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnimationActive: false,
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

  getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  startRoulette = () => {
    const { isAnimationActive, duration } = this.state;
    const {
      constructorContainer: { changeGift },
    } = this.props;

    const chosenPresent = this.getRandomInt(0, 2);
    let chosenPresentName = '';
    let leftShift = 0;

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
      this.setState({
        isAnimationActive: true,
        chosenPresentForMobileVersion: chosenPresentName,
      });

      setTimeout(() => {
        changeGift(chosenPresent, chosenPresentName);

        this.setState({
          isAnimationActive: false,
          /* Сдвиг для колеса на последующие раскручивания рулетки */
          leftShift,
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
    const {
      constructorContainer: {
        state: { gift, giftChosen },
      },
    } = this.props;
    const presentsTemplate = [];
    const mobileWheelDuration = duration * 0.001;
    const newLeftShift = left - leftShift;
    let shift = 700;

    switch (chosenPresentForMobileVersion) {
      case 'Средство по уходу':
        shift = shift * speedOfRoulette - leftShift;
        break;
      case 'Шерстяные носки':
        shift = shift * speedOfRoulette + 350 - leftShift;
        break;
      default:
        break;
    }

    for (let i = 0; i < 50; i += 1) {
      presentsTemplate.push(cardsList.map(card => <Card name={card.name} img={card.img} />));
    }

    return (
      <Wrapper>
        <Element name="roulette" />
        <Grid>
          <BorderWrapper>
            <BlockWrapper display={!giftChosen}>
              <Header>
                {'Узнай, какой подарок '}
                <MobileBr />
                ты получишь к заказу
              </Header>
              <CardWrapper>
                <MobileCardsContainerWrap>
                  <MobileCardsContainerInner
                    isAnimationActive={isAnimationActive}
                    duration={mobileWheelDuration}
                    shift={shift}
                    leftShift={newLeftShift}
                  >
                    <Media>
                      {({ breakpoints, currentBreakpoint }) => (breakpoints[currentBreakpoint] > breakpoints.mobile
                        ? cardsList.map((card, index) => (
                          <Col
                            xsOffset={index === 0 ? 3 : 0}
                            xs={6}
                            md={3}
                            key={card.name}
                            mdOffset={0}
                          >
                            <Card
                              name={card.name}
                              img={card.img}
                              animationActive={isAnimationActive}
                              shift={index === 0 ? 200 : index * 200 + 200}
                              duration={duration}
                              number={index + 1}
                              chosen={chosenPresentName === card.name}
                            />
                          </Col>
                        ))
                        : presentsTemplate)
                      }
                    </Media>
                  </MobileCardsContainerInner>
                </MobileCardsContainerWrap>
              </CardWrapper>
              {isAnimationActive ? (
                <Text>Секунду</Text>
              ) : (
                <Button onClick={this.startRoulette}>
                  <ButtonIcon src={icon} rotate />
                  <ButtonText>Крутануть</ButtonText>
                  <ButtonIcon src={icon} />
                </Button>
              )}
            </BlockWrapper>
            <GiftBlock display={giftChosen}>
              <GiftImg src={cardsList[gift].img} />
              <GiftHeader>{cardsList[gift].name}</GiftHeader>
              <GiftText>Подарок будет добавлен к вашему заказу</GiftText>
            </GiftBlock>
          </BorderWrapper>
        </Grid>
        <Link
          to="constructor"
          spy={false}
          smooth
          hashSpy={false}
          offset={-100}
          duration={500}
          delay={50}
          isDynamic
          ignoreCancelEvents={false}
        >
          <BuyButton>Оформить заказ</BuyButton>
        </Link>
      </Wrapper>
    );
  }
}

export default withBreakpoints(Roulette);
