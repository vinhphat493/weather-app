import configureStore from 'redux-mock-store';

import { FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, LOADING_APPLY } from './const';

import thunk from 'redux-thunk';

import { DEFAULT_LOCATION } from '../../commons/constant';
import { fetchWeather } from './weatherAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('should execute fetchWeather and return the required action type', () => {
  const store = mockStore({});
  return store.dispatch(fetchWeather(DEFAULT_LOCATION)).then(() => {
    const actions = store.getActions();

    // Expected action type from the action creator
    expect(actions[0].type).toEqual(LOADING_APPLY);
    expect(actions[1].type).toEqual(FETCH_DATA_SUCCESS);
    expect(actions[2].type).toEqual(LOADING_APPLY);
  });
});

it('should reject the request if no city is being passed', () => {
  const store = mockStore({});
  return store.dispatch(fetchWeather({})).then(() => {
    const actions = store.getActions();

    // Expected action type from the action creator
    expect(actions[1].type).toEqual(FETCH_DATA_FAIL);
  });
});
