import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import marker from './marker.svg';

export default ({ width, height }) => (
  <YMaps>
    <div>
      <Map
        defaultState={{ center: [55.836780, 37.525768], zoom: 14 }}
        width={width}
        height={height}
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
);
