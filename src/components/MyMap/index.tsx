'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import s from './styles.module.scss';

export const MyMap = () => (
  <div className={s.map}>
    <YMaps>
      <Map
        defaultState={{ center: [52.358312, 30.418709], zoom: 15 }}
        width="100%"
        height="100%"
      >
        <Placemark
          geometry={[52.358312, 30.418709]}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/img/mapIcon.png',
            iconImageSize: [54, 61],
            iconImageOffset: [-27, -58],
          }}
        />
      </Map>
    </YMaps>
  </div>
);
