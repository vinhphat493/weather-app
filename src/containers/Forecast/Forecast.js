import React, { useCallback } from 'react';
import useMapPropretiesData from '../../hooks/useMapPropretiesData';

import './Forecast.css';

const Forecast = () => {
  const {
    cityName = '',
    country = '',
    infoForecasts = [],
    status = '',
  } = useMapPropretiesData();

  const renderItem = useCallback(() => {
    if (!infoForecasts.length) return null;

    return infoForecasts.map((f) => (
      <div className="Forecast-item" key={f.id}>
        <div className="Forecast-item-container">
          <p className="Forecast-item-date">{f.date}</p>
          <p className="Forecast-item-icon">
            <img src={f.icon} alt="weather-icon" />
          </p>
          <ul className="Forecast-item-temperature">
            <li>Min: {f.min}&deg;C</li>
            <li>Max: {f.max}&deg;C</li>
          </ul>
        </div>
      </div>
    ));
  }, [infoForecasts]);

  const renderTitle = useCallback(() => {
    if (status === 'success') {
      return <h1>{`${cityName}, ${country}`}</h1>;
    }
    return null;
  }, [cityName, country, status]);

  return (
    <div className="Forecast">
      <div className="Forecast-location">{renderTitle()}</div>
      <div className="row">{renderItem()}</div>
    </div>
  );
};

export default Forecast;
