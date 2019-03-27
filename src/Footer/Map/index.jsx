import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import marker from './marker.svg';

export default ({ width, height }) => (
  <YMaps>
    <div>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        width={width}
        height={height}
      >
        <Placemark
          defaultGeometry={[55.75, 37.57]}
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
