import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`  
  width: 150px;
  text-align: center;
  padding: 15px 0px;
  margin-bottom: 20px;
  background: ${({ active }) => (active ? 'rgb(245, 244, 243)' : 'none')};
`;

const Image = styled.img`
  height: 60px; 
  object-fit: cover;
  margin-bottom: 25px;
`;

const Text = styled.div`
  font-size: 14px;
  color: rgb(25, 22, 25);
  font-family: 'MuseoSans-Regular', sans-serif;
  padding: 0px 30px;  
`;

export default ({ name, img, active }) => (
  <Wrapper active={active}>
    <Image src={img} />
    <Text>{name}</Text>
  </Wrapper>
);
