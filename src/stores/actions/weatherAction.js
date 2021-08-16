import axios from 'axios';

import { FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, LOADING_APPLY } from './const';
import { API_KEY, API_URL } from '../../commons/constant';
import { handleError } from './func';

export const fetchWeather = (location) => (dispatch) => {
  dispatch({
    type: LOADING_APPLY,
    payload: { loading: true, status: 'fetching' },
  });

  let url = `${API_URL}/forecast?q=${location}&units=metric&appid=${API_KEY}`;

  if (typeof location === 'object') {
    url = `${API_URL}/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${API_KEY}`;
  }

  return axios
    .get(url)
    .then((response) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      let message = 'Server Error';
      if (err.response) {
        const { status } = err.response;
        message = handleError(status);
      }

      dispatch({ type: FETCH_DATA_FAIL, payload: message }); // Error handling
    })
    .finally(() => {
      dispatch({ type: LOADING_APPLY, payload: false });
    });
};
