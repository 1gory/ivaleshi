import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  margin-bottom: 10px;  
  display: flex;
  justify-content: flex-start; 
  flex-wrap: wrap; 
  @media screen and (max-width: 991px) {
    justify-content: center;   
  } 
`;

const ColorWrapper = styled.div`  
  outline: ${({ active, color }) => (active ? `1px solid ${color}` : 'none')};
  /* padding: ${({ active }) => (active ? '1px' : '2px')}; */
  padding: 2px;
  margin-right: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    margin-right: 10px; 
  }
  @media screen and (max-width: 991px) {
    margin-right: 2px; 
  } 
`;

const Color = styled.div`
  background-color: ${({ color }) => color};
  width: 35px;
  height: 35px;
  @media screen and (max-width: 600px) {
    width: 32px;
    height: 32px;  
  } 
`;

export default class Colors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeColor: 0,
      colorSet: props.set,
      main: props.main,
    };
  }

  handleColorChange = (index, main) => {
    const {
      container: {
        changeMainColor,
        changeSecondaryColor,
      },
    } = this.props;
    main ? changeMainColor(index) : changeSecondaryColor(index);
  }

  render() {
    const {
      container: {
        state: {
          mainColor,
          secondaryColor,
          jewel,
          footSize,
          gift,
          name,
          phone,
        },
        changeMainColor,
        changeSecondaryColor,
        changeJewel,
        changeFootSize,
        changeGift,
        changeName,
        changePhone,
      },
    } = this.props;

    return (
      <div>
        <Row>
          {this.state.colorSet.map((color, index) => (
            <ColorWrapper active={index === this.state.activeColor} color={color} onClick={this.handleColorChange(index, this.state.main)}>
              <Color color={color} />
            </ColorWrapper>
          ))}
        </Row>
      </div>
    );
  }
}
