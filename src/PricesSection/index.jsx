import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import arrow from './arrow-right.png';
import img from './gal-img.png';

const Wrapper = styled.div`
  padding-top: 160px;
  padding-bottom: 230px;
`;

const ItemWrapper = styled.div`
  border: solid 5px #ff3300;  
  padding-top: 110px;
  padding-left: 280px;
  padding-right: 160px;
`;

const SliderWrapper = styled.div`
  position: relative;
`;

const ItemHeader = styled.div`
  margin-bottom: 50px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 36px;
  line-height: 0.83;
  color: #191619;  
`;

const ItemText = styled.div`
  margin-bottom: 45px;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 16px;
  line-height: 1.88;
  font-weight: 600;
  color: #191619;  
`;

const ItemButton = styled.button`
  margin-bottom: 140px;
  background-color: #ff3300;
  border: none;
  padding: 20px 30px;
  color: white;
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #ff3300;  
  }
`;

const SliderButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${({ right }) => (right ? 'auto' : '-55px')};
  right: ${({ right }) => (right ? '-55px' : 'auto')};
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const SliderButton = styled.button`
  padding: 20px;
  background-color: #ff3300;
  border: 30px solid white;
  cursor: pointer;
  transform: ${({ right }) => (right ? 'rotate(180deg)' : 'none')}; 
  transition: 0.2s;
  &:hover {
    background-color: white;
  }
`;

const GalleryWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
`;

const GalleryContent = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  border: 30px solid white;
  background: white;
`;

const ActiveImage = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Thumbnails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    height: 75px;
    width: 130px;
    object-fit: cover;
  }
`;

const Thumbnail = styled.img`
  height: 75px;
  width: 130px;
  object-fit: cover;
  opacity: ${({ active }) => (active ? '1' : '0.5')}; 
`;

export default () => (
  <Wrapper>
    <Grid>
      <SliderWrapper>
        <Row>
          <Col xsOffset={3} xs={9}>
            <ItemWrapper>
              <ItemHeader>Валеши с помпоном</ItemHeader>
              <ItemText>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                blanditiis praesentium voluptatum deleniti atque corrupti 
                quos dolores et quas molestias excepturi sint occaecati cupiditate non providen
              </ItemText>
              <ItemButton>Купить 990 Р.</ItemButton>
            </ItemWrapper>
          </Col>
        </Row>
        <SliderButtonWrapper>
          <SliderButton><img src={arrow} alt="" /></SliderButton>
        </SliderButtonWrapper>
        <SliderButtonWrapper right>
          <SliderButton right><img src={arrow} alt="" /></SliderButton>
        </SliderButtonWrapper>
        <GalleryWrapper>
          <GalleryContent>
            <ActiveImage>
              <img src={img} alt="" />
            </ActiveImage>
            <Thumbnails>
              <Thumbnail src={img} />
              <Thumbnail src={img} active />
              <Thumbnail src={img} />
            </Thumbnails>
          </GalleryContent>
        </GalleryWrapper>
      </SliderWrapper>
    </Grid>
  </Wrapper>
);
