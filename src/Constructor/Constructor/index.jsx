import React, { Component } from 'react';
import styled from 'styled-components';
import colorSetMain from '../colorSetMain';
import colorSetSecondary from '../colorSetSecondary';
import cardsList from '../CardsList';
import footSizeList from '../../data/FootSizeList';
import Colors from '../Colors';
import Cards from '../Cards';
import headerIcon from '../arrow.svg';

const Wrapper = styled.section`
  display: ${({ display }) => (display ? 'block' : 'none')};
`;

const CalcSection = styled.div`
  margin-bottom: 45px;
  @media screen and (max-width: 991px) {
    margin-bottom: 0px;
  }
`;

const Dropdown = styled.div`
  @media screen and (max-width: 991px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const Header = styled.div`
  padding: 10px 0px;
  margin-bottom: 25px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(25, 22, 25);
  text-transform: uppercase;
  font-family: 'Museo-Regular', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderIcon = styled.img`
  display: none;
  transition: 0.1s;
  transform: ${({ isRotated }) => (isRotated ? 'rotate(180deg)' : 'none')};
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const SizeSelectWrapper = styled.div`
  background-color: rgb(245, 244, 243);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const SizeSelectLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 991px) {
    width: 100%;
    justify-content: center;
  }
`;

const SizeSelectHeader = styled.div`
  font-family: 'Museo-Regular', sans-serif;
  font-size: 14px;
  color: rgb(25, 22, 25);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 30px;
`;

const SizeSelectButton = styled.button`
  font-family: 'Museo-Regular', sans-serif;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  padding: 35px 65px;
  background-color: rgb(255, 51, 0);
  margin-left: auto;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  &:hover {
    background-color: white;
    color: #ff3300;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const Select = styled.select`
  background: none;
  border: none;
  border-bottom: 1px solid rgba(25, 22, 25, 0.1);
  font-family: 'Museo-Regular', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgb(25, 22, 25);
  padding: 10px;
  height: 40px;
`;

const SizeLink = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: rgb(255, 51, 0);
  font-family: 'Museo-Regular', sans-serif;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export default class Constructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: [true, false, false],
    };
  }

  handleSelectFootSizeChange = (e) => {
    const {
      target: { value },
    } = e;
    const {
      constructorContainer: { changeFootSize },
    } = this.props;
    changeFootSize(value);
  };

  toggleDropdown = (index) => {
    const { dropdownOpen } = this.state;
    const temp = dropdownOpen;
    temp[index] = !dropdownOpen[index];
    this.setState({ dropdownOpen: temp });
  };

  render() {
    const {
      constructorContainer: {
        state: { mainColorIndex, secondaryColor, jewel },
        changeMainColor,
        changeSecondaryColor,
        changeJewel,
      },
      modalContainer: { openModal },
      display,
      toggleStage,
    } = this.props;

    const { dropdownOpen } = this.state;
    return (
      <Wrapper display={display}>
        <CalcSection>
          <Header onClick={() => this.toggleDropdown(0)}>
            Цвет валешей
            <HeaderIcon src={headerIcon} isRotated={dropdownOpen[0]} />
          </Header>
          <Dropdown isOpen={dropdownOpen[0]}>
            <Colors
              set={colorSetMain}
              activeColor={mainColorIndex}
              main
              handler={changeMainColor}
            />
          </Dropdown>
        </CalcSection>
        <CalcSection>
          <Header onClick={() => this.toggleDropdown(1)}>
            Цвет помпона
            <HeaderIcon src={headerIcon} isRotated={dropdownOpen[1]} />
          </Header>
          <Dropdown isOpen={dropdownOpen[1]}>
            <Colors
              set={colorSetSecondary}
              activeColor={secondaryColor}
              main
              handler={changeSecondaryColor}
            />
          </Dropdown>
        </CalcSection>
        <CalcSection>
          <Header onClick={() => this.toggleDropdown(2)}>
            Дизайн украшения
            <HeaderIcon src={headerIcon} isRotated={dropdownOpen[2]} />
          </Header>
          <Dropdown isOpen={dropdownOpen[2]}>
            <Cards list={cardsList} active={jewel} handler={changeJewel} />
          </Dropdown>
        </CalcSection>
        <CalcSection>
          <SizeSelectWrapper>
            <SizeSelectLeft>
              <SizeSelectHeader>Размер:</SizeSelectHeader>
              <Select onChange={this.handleSelectFootSizeChange}>
                {footSizeList.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </SizeSelectLeft>
            <SizeSelectButton onClick={() => toggleStage()}>Готово</SizeSelectButton>
          </SizeSelectWrapper>
          <SizeLink onClick={() => openModal('size', 8)}>Узнать свой размер</SizeLink>
        </CalcSection>
      </Wrapper>
    );
  }
}
