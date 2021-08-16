import reducer from './index';

import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  LOADING_APPLY,
} from '../actions/const.js';

import mockData from '../../../forecast.json';

describe('data reducers', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      weather: { data: {}, status: null, error: null, loading: false },
    });
  });

  it('should handle fetch forcasts success', () => {
    const fetcher = {
      type: FETCH_DATA_SUCCESS,
      payload: mockData,
    };

    expect(reducer({}, fetcher)).toEqual({
      weather: {
        data: { ...mockData },
        status: 'success',
        error: null,
        loading: false,
      },
    });
  });

  it('should handle fetch forcasts failed', () => {
    const fetcher = {
      type: FETCH_DATA_FAIL,
      payload: {},
    };

    expect(reducer({}, fetcher)).toEqual({
      weather: { data: {}, status: 'failed', error: {}, loading: false },
    });
  });

  it('handle loading show', () => {
    const fetcher = {
      type: LOADING_APPLY,
      payload: { loading: true, status: 'fetching' },
    };

    expect(reducer({}, fetcher)).toEqual({
      weather: { data: {}, status: 'fetching', loading: true, error: null },
    });
  });

  it('handle loading hidden', () => {
    const fetcher = {
      type: LOADING_APPLY,
      payload: { loading: false },
    };

    expect(reducer({}, fetcher)).toEqual({
      weather: { data: {}, status: null, loading: false, error: null },
    });
  });
});
