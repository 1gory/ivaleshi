import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

export default ({width, height}) => (
  <YMaps>
    <div>
      <Map 
        defaultState={{ center: [55.75, 37.57], zoom: 9 }} 
        width={width}
        height={height}
      />
    </div>
  </YMaps>
);
