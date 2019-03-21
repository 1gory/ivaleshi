import React from 'react';
import styled from 'styled-components';
import icon from './social-vk.svg';

const Wrapper = styled.div`
  padding: 65px 130px 45px 400px;
  background-color: rgba(25, 22, 22, 0.05);
  position: relative;
  @media screen and (max-width: 767px) {
    padding: 20px 30px;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const Author = styled.div`
  font-family: 'MuseoSans-Bold', sans-serif;
  font-size: 16px;
  color: #191619;  
  margin-right: 40px;
  @media screen and (max-width: 767px) {
    margin: 0;
    width: 100%;
    margin-bottom: 15px;
  }
`;

const Text = styled.div`
  margin-bottom: 60px;
  font-family: 'Caveat-Regular', sans-serif;
  font-size: 26px;
  line-height: 1.31;
  color: #191619;  
  position: relative;

  &::before {
    content: "“";
    color: rgba(25, 22, 25, 0.25);
    font-family: 'Caveat-Regular', sans-serif;
    font-size: 48px;
    position: absolute;
    left: -20px;
    top: -20px;
  }
`;

const PostDate = styled.div`
  font-family: 'MuseoSans-Bold', sans-serif;
  font-size: 16px;
  color: #436eab;  
`;

const LinkIcon = styled.img`
  height: 20px;
  margin-right: 15px;
  @media screen and (max-width: 767px) {
    heidth: 17px;
  }
`;

const Thumb = styled.img`
  position: absolute;
  bottom: 40px;
  left: 50px;
  width: 270px;
  height: 330px;
  object-fit: cover;
  @media screen and (max-width: 767px) {
    position: static;
    width: 100%;
    margin-bottom: 35px;
  }
`;


export default ({ name, text, date, link, city, img }) => (
  <Wrapper>
    <Thumb src={img} />
    <Text>{text}</Text>
    <Description>
      <Author>{name}, {city}</Author>
      <a href={link}><LinkIcon src={icon} /></a>
      <PostDate>{date}</PostDate>
    </Description>
  </Wrapper>
);
