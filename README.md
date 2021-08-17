# Weather Forecast for 5 days

A simple application to display 5-day weather forecast using the OpenWeatherMap API.

![Home page](https://github.com/vinhphat493/weather-app/blob/main/public/Screenshot.png)

## Getting started

- Sign up over at [openweathermap.org](https://openweathermap.org/appid) to get an API key.
- Fork the project and clone it locally.
- Create a file at the root of the project called `.env.local` with the following contents:

```sh
REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = The API key you obtained from openweathermap.org, you also can use my API key "2707b1362294a33ba9860205af1befa5"
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

```

## Run

```
cd weather-app
yarn or npm i
```

## Start the server

```
npm run start or yarn start
```

## Build

```
npm run build or yarn build
```

#### Notes:

- Running the build bundles all your updates to `bundle.js` and `bundle.css` in dist folder.

## Test

```
npm run test or yarn test
```

#### Notes:

- Unit testing can be done manually by executing the above command.

### TODOs

- [x] Provide an option for user to choose location of their choice by Name,
- [x] Unit testing
- [x] Use a proper loading spinner icon on page load
- [x] Detect location automatically
- [x] Display 5-day weather forecast.

### Tech Stack

- React.js
- Redux, Redux thunk
- JavaScript (ES6)
- HTML5
- CSS
- Jest + Enzyme
