import React from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  @media screen and (max-width: 1300px) {
    left: 100px;
  }
  @media screen and (max-width: 991px) {
    height: auto;
    width: 100%;
    left: 0;
    top: 10px;
  }
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
  @media screen and (max-width: 1200px) {
    width: 350px;
  }
  @media screen and (max-width: 991px) {
    border: none;
    width: 400px;
  }
  @media screen and (max-width: 600px) {
    width: 280px;
  }
  @media screen and (max-width: 359px) {
    width: 250px;
  }
`;

const ActiveImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Thumbnails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  height: 75px;
  width: 130px;
  object-fit: cover;
  opacity: ${({ active }) => (active ? '1' : '0.5')}; 
  @media screen and (max-width: 1200px) {
    width: 110px;
  }
  @media screen and (max-width: 991px) {
    width: 130px;
  }
  @media screen and (max-width: 600px) {
    width: 90px;
    height: 50px;
  }
  @media screen and (max-width: 359px) {
    width: 80px;
  }
`;

export default ({ images }) => (
  <GalleryWrapper>
    <GalleryContent>
      <ActiveImage src={images[1]} alt="" />
      <Thumbnails>
        {images.map((image, i) => (
          <Thumbnail src={image} active={i === 1} key={i} />
        ))}
      </Thumbnails>
    </GalleryContent>
  </GalleryWrapper>
);
