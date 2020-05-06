import { City } from './City';

export interface SearchCitiesResponse {
  list: City[];
}

interface Weather {
  main: string;
  description: string;
}

export interface CityWeatherDetailsResponse {
  weather: Weather[];
  main: {
    temp: Number;
    pressure: Number;
    humidity: Number;
  };
  wind: {
    speed: Number;
    deg: Number;
  };
  clouds: {
    alt: Number;
  };
  name: string;
  id: Number;
}

export interface ApiForecast {
  dt_txt: string;
  main: {
    temp: Number;
    pressure: Number;
    humidity: Number;
  };
  weather: Weather[];
  clouds: {
    alt: Number;
  };
  wind: {
    speed: Number;
    deg: Number;
  };
}

export interface ApiForecastResponse {
  list: ApiForecast[];
}
