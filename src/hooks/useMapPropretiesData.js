import { shallowEqual, useSelector } from 'react-redux';
import { ICON_URL, DATE_FORMAT, DATE_OPTIONS } from '../commons/constant';

const groupForecastByDate = (forecasts = []) => {
  return forecasts.reduce((acc, item) => {
    //key is the date
    const key = item.dt_txt.substr(0, 10);
    if (acc[key]) {
      acc[key].push(item);
      return acc;
    }

    acc[key] = [item];
    return acc;
  }, {});
};

const reduceDataForecasts = (list) => {
  let forecasts = groupForecastByDate(list);
  const daysOfForeCasts = Object.values(forecasts);

  // reduce data forecast to only 5 days
  if (daysOfForeCasts.length > 5) {
    forecasts = daysOfForeCasts.slice(0, 5);
  }

  return forecasts;
};

const getTemperature = (forecast = []) => {
  const min = [];
  const max = [];
  forecast.forEach((item) => {
    const { main = {} } = item;
    const { temp_min, temp_max } = main;
    min.push(temp_min);
    max.push(temp_max);
  });

  return {
    min: Math.round(Math.min(...min)),
    max: Math.round(Math.max(...max)),
  };
};

const getIconWeather = (data) => `${ICON_URL}/${data[0].weather[0].icon}.png`;

const formatDate = (time, options = DATE_OPTIONS) => {
  if (!time) return;

  return new Date(time).toLocaleDateString(DATE_FORMAT, options);
};

const handleInfoData = (forecasts) => {
  return forecasts.map((item) => {
    const { max, min } = getTemperature(item);
    const icon = getIconWeather(item);
    const date = formatDate(item[0].dt_txt, { weekday: 'long' });
    const id = item[0].dt;

    return {
      max,
      min,
      icon,
      date,
      id,
    };
  });
};

const useMapPropretiesData = () => {
  const { data = {}, status = '' } = useSelector(
    ({ weather: { data, status } }) => ({ data, status }),
    shallowEqual
  );
  if (!Object.keys(data).length) return data;

  const { city = {}, list = [] } = data;

  // get data forecasts
  const forecasts = reduceDataForecasts(list);

  // get info data forecasts
  const infoForecasts = handleInfoData(forecasts);

  return {
    cityName: city.name,
    country: city.country,
    infoForecasts,
    status,
  };
};

export default useMapPropretiesData;
