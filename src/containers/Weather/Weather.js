import React from 'react';

import './Weather.css';

const Weather = ({ weather = {} }) => {
  const {
    location,
    country,
    description,
    humidity,
    iconCode,
    date,
    feels_like,
    temperature,
    wind_speed,
  } = weather;

  return (
    <div className="Weather">
      <h1 className="Weather-location">
        {location}, {country}
      </h1>
      <p className="Weather-date">
        {date}, {description}
      </p>

      <div className="row">
        <div className="Weather-detail">
          <div className="Weather-temperature">{temperature}&deg;C</div>

          <div className="Weather-temperature-infor row">
            <p>Feels like {feels_like}&deg;C</p>
            <p>{wind_speed}km/h winds</p>
            <p>{humidity}% Humidity</p>
          </div>
        </div>

        <img className="Weather-icon" src={iconCode} alt="weather-icon" />
      </div>
    </div>
  );
};

export default Weather;
