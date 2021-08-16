import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('App', () => {
  it('renders an `Loading component`', () => {
    const wrapper = render(
      <Provider store={mockStore({ weather: { loading: true, error: null } })}>
        <App />
      </Provider>
    );
    expect(wrapper.find('.App-loader').length).toEqual(1);
  });

  it('renders an error message', () => {
    const wrapper = render(
      <Provider
        store={mockStore({
          weather: { loading: false, error: 'Server error' },
        })}
      >
        <App />
      </Provider>
    );

    expect(wrapper.find('.App-error-message').length).toEqual(1);
  });

  it('renders an forecast component', () => {
    const wrapper = render(
      <Provider
        store={mockStore({
          weather: { loading: false, error: null },
        })}
      >
        <App />
      </Provider>
    );

    expect(wrapper.find('.Forecast').length).toEqual(1);
  });
});
