import { useEffect } from 'react';

import { DEFAULT_LOCATION } from '../commons/constant';
import { fetchWeather } from '../stores/actions/weatherAction';

const useDetectLocation = (dispatch) => {
  useEffect(() => {
    const detectLocation = new Promise((resolve) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position.coords);
          },
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              console.error('Error detecting location.');
              dispatch(fetchWeather(DEFAULT_LOCATION));
            }
          }
        );
      }
    });

    detectLocation
      .then((location) => {
        dispatch(fetchWeather(location));
      })
      .catch(() => {
        dispatch(fetchWeather(DEFAULT_LOCATION));
      });

    // eslint-disable-next-line
  }, []);
};

export default useDetectLocation;
