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
`;

export default ({images}) => (
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
