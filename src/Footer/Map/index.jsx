import React from 'react';
import styled from 'styled-components';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import marker from './marker.svg';

const Wrapper = styled.div`
  position: relative;
  height: 500px;
`;

const MapOverlayWrapper = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 400px;
  left: 0;
  z-index: 20;
  width: 100%;
  @media screen and (max-width: 991px) {
    bottom: 440px;
  }
`;

const MapOverlay = styled.div`
  padding: 30px;
  background-color: white;
  color: #191619;
  font-family: 'Museo-Regular', sans-serif;
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  margin-left: 40px;
  @media screen and (max-width: 991px) {
    display: block;
    margin: 0px 20px;
    text-align: center;
  }
`;

export default () => (
  <Wrapper>
    <MapOverlayWrapper>
      <MapOverlay>Москва, 3-й Михалковский пер. д.20 к.1</MapOverlay>
    </MapOverlayWrapper>
    <YMaps>
      <div>
        <Map
          instanceRef={(ref) => { if (ref) ref.behaviors.disable('scrollZoom'); }}
          defaultState={{ center: [55.836780, 37.525768], zoom: 14 }}
          width="100%"
          height="500px"
        >
          <Placemark
            defaultGeometry={[55.836780, 37.525768]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: marker,
              iconImageSize: [33, 45],
              iconImageOffset: [0, -45],
            }}
          />
        </Map>
      </div>
    </YMaps>
  </Wrapper>
);
