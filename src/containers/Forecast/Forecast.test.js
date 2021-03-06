import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Forecast from './Forecast';
import mockData from '../../../forecast.json';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('Forecast', () => {
  it('should render five forecast tiles', () => {
    const wrapper = render(
      <Provider store={mockStore({ weather: { data: { ...mockData } } })}>
        <Forecast />
      </Provider>
    );

    expect(wrapper.find('.row').children().length).toBe(5);
  });

  it('should show forcast location error when call fetchweather failed', () => {
    const wrapper = render(
      <Provider store={mockStore({ weather: { data: {} } })}>
        <Forecast />
      </Provider>
    );

    expect(wrapper.find('.row').children().length).toBe(0);
  });

  it('should render empty title forcast when fetchweather failed', () => {
    const wrapper = render(
      <Provider store={mockStore({ weather: { data: {} } })}>
        <Forecast />
      </Provider>
    );

    expect(wrapper.find('.Forecast-location-error').length).toBe(1);
  });
});
