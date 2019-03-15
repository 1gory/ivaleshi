import React, { Component } from 'react';
import styled from 'styled-components';


const CardHeader = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 40px;
  font-size: 20px;
  color: #191619;
  font-family: 'Museo-Regular', sans-serif;
  text-align: center;
`;

const CardText = styled.div`
  padding: 0 140px;
  margin-bottom: 160px;
  font-size: 14px; 
  color: #191619;
  line-height: 1.86;
  font-family: 'MuseoSans-Regular', sans-serif;
  text-align: center;
`;

const CardIcon = styled.img`
  margin: auto;
  display: block;
`;

export default class extends Component {
  render() {
    const { icon, name, text } = this.props;
    return (
      <div>
        <CardIcon src={icon} />
        <CardHeader>{name}</CardHeader>
        <CardText>{text}</CardText>
      </div>
    );
  }
}
