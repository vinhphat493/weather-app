import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';

import Search from './Search';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('Search', () => {
  let wrapper;
  let useEffect;
  let store;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };
  beforeEach(() => {
    store = configureStore([thunk])({
      data: {},
      loading: false,
      error: null,
      status: null,
    });

    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();

    jest.spyOn(redux, 'useSelector').mockImplementation(() => store.getState());
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => store.dispatch);

    wrapper = render(<Search store={store} />);
  });

  it('should render search component', () => {
    expect(wrapper.hasClass('Search')).toBe(true);
  });

  it('should contain a input field', () => {
    expect(wrapper.find('.Search-bar')).toHaveLength(1);
  });
});
