import React, { useCallback } from 'react';

import Forecast from '../Forecast';
import Search from '../Search/Search';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import './App.css';
import { CircularProgress } from '@material-ui/core';
import useDetectLocation from '../../hooks/useDetectLocation';

const App = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(
    ({ weather: { error, loading } }) => ({
      error,
      loading,
    }),
    shallowEqual
  );
  useDetectLocation(dispatch);

  const renderLayout = useCallback(() => {
    if (loading) {
      return (
        <div className="App-loader">
          <CircularProgress size={35} />
        </div>
      );
    }

    if (error) {
      return <h3 className="App-error-message">{error}</h3>;
    }

    return <Forecast />;
  }, [error, loading]);

  return (
    <div className="App">
      <header>
        <div className="App-header-thumnail" />
        <h1 className="App-header-title">Weather App</h1>
      </header>

      <div className="App-container">
        <Search />
        {renderLayout()}
      </div>
    </div>
  );
};

export default App;
