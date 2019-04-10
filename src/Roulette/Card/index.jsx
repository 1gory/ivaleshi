import React from 'react';
import styled from 'styled-components';
import selected from '../roll-selected.svg';

const Wrap = styled.div`
  position: relative;
  @keyframes arrow {
    from {
      display: none;
    }
    to {
      display: block;
    }
  }
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
    display: none;
    }
${
  (props) => {
    if (props.active) {
      return (
        `
        &:after {
          transition: arrow 3s ease-in-out infinite;
        }
        `
      );
    }
  }
}
`;
// ${
//   (props) => {
//     if (props.active) {
//       return (
//         `
//         &:after {
//           position: absolute;
//           content: '';
//           left: 0px;
//           right: 0px;
//           bottom: 0px;
//           margin: auto;
//           margin-bottom: -120px;
//           width: 50px;
//           height: 100px;
//           background-image: url(${selected});
// background-repeat: no-repeat;
// background-size: contain;
// }
// `
//       )
//     }
//   }
// }
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

export default ({ img, name, active, shift }) => (
  <Wrap active={active}>
    <CardImage src={img} />
    <CardHeader>{name}</CardHeader>
  </Wrap>
);
